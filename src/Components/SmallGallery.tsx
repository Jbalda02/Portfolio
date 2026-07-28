import Reveal from "./Reveal";

interface Technology {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface SmallGalleryProps {
  technologies: Technology[];
  title: string;
  /** Stagger for the card itself, so the three columns cascade. */
  delay?: number;
}

const SmallGallery: React.FC<SmallGalleryProps> = ({
  technologies,
  title,
  delay = 0,
}) => {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="group h-full rounded-2xl border border-edge bg-ink-600/50 p-6 backdrop-blur-sm transition-colors duration-700 hover:border-edge-bright sm:p-7">
        <h3 className="mb-6 flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.18em] text-mist">
          <span className="h-1.5 w-1.5 rounded-full bg-brand transition-transform duration-700 group-hover:scale-150" />
          {title}
        </h3>

        <ul className="grid grid-cols-3 gap-x-3 gap-y-6">
          {technologies.map((tech) => (
            <li
              key={tech.id}
              className="group/item flex flex-col items-center gap-2.5 text-center"
              title={tech.description}
            >
              {/*
                The logos come from a dozen different sources: some are black
                on transparent (GitHub), others are a solid coloured tile with
                white glyphs (JavaScript, TypeScript). No single CSS filter
                suits both, so each one sits on a light plate instead. That
                keeps every logo legible and the grid visually uniform.
              */}
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-chalk/90 ring-1 ring-inset ring-white/10 transition-all duration-500 group-hover/item:-translate-y-1 group-hover/item:bg-white group-hover/item:shadow-[0_12px_26px_-10px_rgba(139,92,246,.9)]">
                <img
                  src={tech.image}
                  alt={tech.name}
                  loading="lazy"
                  className="h-6 w-6 object-contain transition-transform duration-500 group-hover/item:scale-110"
                />
              </span>
              <span className="text-[11px] leading-tight text-dusk transition-colors duration-500 group-hover/item:text-chalk sm:text-xs">
                {tech.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
};

export default SmallGallery;
