import { useEffect, useRef, useState } from "react";

type PreSectionProps = {
  ImageToLoad: string;
  /** How far the image drifts against the scroll, in px. */
  strength?: number;
};

/**
 * Full-bleed banner with a light parallax drift. The image is dimmed and
 * masked at the edges so the stock art blends into the dark page instead of
 * sitting on it as a bright block.
 */
function PreSection({ ImageToLoad, strength = 60 }: PreSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Tied 1:1 to scroll position, this used to jump in the same discrete
    // steps as the wheel/trackpad. Chasing a target with a lerp instead turns
    // that into a continuous drift, which is what actually reads as smooth.
    let target = 0;
    let current = 0;
    let frame = 0;

    const measure = () => {
      const rect = node.getBoundingClientRect();
      const viewport = window.innerHeight;
      if (rect.bottom < 0 || rect.top > viewport) return;
      // -1 when the banner is entering, +1 when it is leaving.
      const progress = (rect.top + rect.height / 2 - viewport / 2) / viewport;
      target = progress * strength;
    };

    const tick = () => {
      current += (target - current) * 0.045;
      setOffset(current);
      if (Math.abs(target - current) > 0.05) {
        frame = requestAnimationFrame(tick);
      } else {
        frame = 0;
      }
    };

    const onScroll = () => {
      measure();
      if (!frame) frame = requestAnimationFrame(tick);
    };

    measure();
    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [strength]);

  return (
    <div
      ref={ref}
      className="relative h-40 overflow-hidden sm:h-56 lg:h-64"
      aria-hidden="true"
    >
      <img
        src={ImageToLoad}
        alt=""
        loading="lazy"
        style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.18)` }}
        className="mask-fade-y h-full w-full object-cover object-center opacity-25 will-change-transform"
      />
      {/* Violet wash + top/bottom fade into the page background. */}
      <div className="absolute inset-0 bg-brand-dim/20 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-800 via-transparent to-ink-800" />
    </div>
  );
}

export default PreSection;
