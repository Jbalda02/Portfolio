import Reveal from "./Reveal";

type TextSectionProps = {
  text: string;
  imgSrc: string;
  title: string;
  /** Flips the image to the right on desktop, to alternate down the page. */
  reversed?: boolean;
  /** Circular portrait vs. contained icon on a soft plate. */
  variant?: "portrait" | "icon";
  children?: React.ReactNode;
};

function TextSection({
  text,
  imgSrc,
  title,
  reversed = false,
  variant = "portrait",
  children,
}: TextSectionProps) {
  return (
    <div className="mx-auto max-w-6xl">
      <Reveal>
        <h2 className="mb-10 flex items-center gap-3 font-display text-2xl font-bold tracking-tight text-chalk sm:text-3xl">
          {title}
          <span className="h-px flex-1 bg-gradient-to-r from-edge-bright to-transparent" />
        </h2>
      </Reveal>

      <div
        className={`flex flex-col items-center gap-10 lg:gap-16 ${
          reversed ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <Reveal delay={80} className="shrink-0">
          <div className="group relative">
            {/* Soft violet halo behind the image. */}
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-full bg-brand/20 blur-3xl transition-opacity duration-700 group-hover:opacity-80"
            />
            <img
              src={imgSrc}
              alt={variant === "portrait" ? "Jose Fernando Balda" : ""}
              loading="lazy"
              className={
                variant === "portrait"
                  ? "relative h-56 w-56 animate-float rounded-full border border-edge-bright object-cover shadow-2xl sm:h-64 sm:w-64 lg:h-80 lg:w-80"
                  : "relative h-40 w-40 animate-float object-contain brightness-0 invert sm:h-48 sm:w-48 lg:h-56 lg:w-56"
              }
            />
          </div>
        </Reveal>

        <Reveal delay={160} className="w-full">
          <p className="max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
            {text}
          </p>
          {children}
        </Reveal>
      </div>
    </div>
  );
}

export default TextSection;
