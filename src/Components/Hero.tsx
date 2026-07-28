const NAME = "Jose Fernando Balda";
const TAGLINE = "Quality Web Development";

function Hero() {
  const nameWords = NAME.split(" ");
  const taglineWords = TAGLINE.split(" ");

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 sm:px-6"
    >
      {/* Aurora: violet leads, blue only as a distant highlight. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-dot-grid mask-fade-edges opacity-70" />
        <div className="absolute left-1/2 top-[-15%] h-[560px] w-[560px] -translate-x-1/2 animate-aurora rounded-full bg-brand/25 blur-[130px]" />
        <div className="absolute bottom-[-10%] left-[8%] h-[380px] w-[380px] animate-aurora rounded-full bg-brand-deep/25 blur-[120px] [animation-delay:-9s]" />
        <div className="absolute right-[6%] top-[22%] h-[300px] w-[300px] animate-aurora rounded-full bg-spark/10 blur-[120px] [animation-delay:-16s]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-6 inline-flex animate-fade-up items-center gap-2 rounded-full border border-edge bg-ink-600/60 px-4 py-1.5 text-xs font-medium text-mist backdrop-blur-sm sm:text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
          </span>
          Available for freelance work
        </p>

        <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-chalk sm:text-6xl lg:text-7xl">
          {nameWords.map((word, index) => (
            <span
              key={word}
              className="inline-block animate-fade-up"
              style={{ animationDelay: `${260 + index * 170}ms` }}
            >
              {word}
              {index < nameWords.length - 1 && " "}
            </span>
          ))}
          <span className="mt-2 block text-2xl font-light italic sm:mt-4 sm:text-4xl lg:text-5xl">
            {taglineWords.map((word, index) => (
              <span
                key={word}
                className="inline-block animate-fade-up text-gradient-brand"
                style={{ animationDelay: `${820 + index * 170}ms` }}
              >
                {word}
                {index < taglineWords.length - 1 && " "}
              </span>
            ))}
          </span>
        </h1>

        <p
          className="mx-auto mt-7 max-w-xl animate-fade-up text-balance text-sm leading-relaxed text-mist sm:mt-9 sm:text-base"
          style={{ animationDelay: "1420ms" }}
        >
          Freelance web developer and Computer Science student, building fast and
          accessible interfaces with React, TypeScript and Tailwind CSS.
        </p>

        <div
          className="mt-9 flex animate-fade-up flex-col items-center justify-center gap-3 sm:mt-11 sm:flex-row"
          style={{ animationDelay: "1650ms" }}
        >
          <a
            href="#projects"
            className="group relative w-full overflow-hidden rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_-12px_rgba(139,92,246,.9)] transition-transform duration-500 hover:-translate-y-0.5 sm:w-auto"
          >
            <span className="relative z-10">View my work</span>
            <span className="absolute inset-0 -z-0 bg-gradient-to-r from-brand via-brand-soft to-spark opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
          </a>
          <a
            href="#contact"
            className="w-full rounded-full border border-edge-bright px-7 py-3 text-sm font-semibold text-chalk transition-colors duration-500 hover:border-brand hover:text-brand-soft sm:w-auto"
          >
            Get in touch
          </a>
        </div>
      </div>

      <a
        href="#stack"
        aria-label="Scroll to content"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-dusk transition-colors hover:text-brand-soft"
      >
        <svg
          className="h-6 w-6 animate-scroll-hint"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}

export default Hero;
