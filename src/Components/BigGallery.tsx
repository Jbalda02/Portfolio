import Reveal from "./Reveal";

interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  stack: string;
  link: string;
}

interface ProjectsProps {
  projects: Project[];
}

const BigGallery: React.FC<ProjectsProps> = ({ projects }) => {
  if (!projects || !Array.isArray(projects)) {
    return <p className="text-center text-mist">No projects available</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <Reveal key={project.id} delay={index * 90} className="h-full">
          <a
            href={project.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-edge bg-ink-600/60 transition-all duration-700 hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-[0_24px_70px_-24px_rgba(139,92,246,.55)]"
          >
            {/*
              Project art is mixed-media clipart on transparent backgrounds, so
              it needs a light plate to stay legible against the dark card.
            */}
            <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-gradient-to-br from-[#F5F3F9] to-[#E4E0EC]">
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Light sweep on hover. */}
              <span className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/3 bg-white/50 opacity-0 blur-md group-hover:animate-sheen group-hover:opacity-100" />
            </div>

            <div className="flex flex-1 flex-col gap-3 p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-semibold leading-snug text-chalk transition-colors duration-500 group-hover:text-brand-soft">
                  {project.name}
                </h3>
                <svg
                  className="mt-1 h-4 w-4 shrink-0 text-dusk transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </div>

              <p className="text-sm leading-relaxed text-mist">
                {project.description}
              </p>

              <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
                {(project.stack ?? "")
                  .split(/[,\s]+/)
                  .filter(Boolean)
                  .map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-edge bg-ink-500/60 px-2.5 py-1 text-[11px] font-medium text-mist transition-colors duration-500 group-hover:border-brand/30 group-hover:text-brand-soft"
                    >
                      {tech}
                    </li>
                  ))}
              </ul>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  );
};

export default BigGallery;
