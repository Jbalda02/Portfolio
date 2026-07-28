import { useEffect, useRef } from "react";

/**
 * A violet halo that trails the pointer. Purely decorative, so it is skipped
 * entirely on touch devices and when the user prefers reduced motion.
 */
function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduced) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 3;
    let x = targetX;
    let y = targetY;
    let frame = 0;
    let hasMoved = false;

    const onMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (!hasMoved) {
        // First move: snap straight to the pointer instead of lerping in from
        // the centre of the screen, which used to read as a fast streak.
        x = targetX;
        y = targetY;
        hasMoved = true;
      }
      node.style.opacity = "1";
    };

    const onLeave = () => {
      node.style.opacity = "0";
    };

    const tick = () => {
      // Lerp towards the pointer so the halo trails a little behind it.
      x += (targetX - x) * 0.14;
      y += (targetY - y) * 0.14;
      node.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-30 hidden h-[420px] w-[420px] rounded-full opacity-0 mix-blend-screen blur-[90px] transition-opacity duration-500 md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(139,92,246,.20) 0%, rgba(139,92,246,.08) 45%, transparent 70%)",
      }}
    />
  );
}

export default CursorGlow;
