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
    return <div>No projects available</div>;
  }
  const loadimg = (project:Project) => {
    const imgLink = project.image
    return imgLink
  }

  return (
    <div>
      <div>
        <h1 className="text-neutral-200 font-bold text-2xl sm:text-3xl  text-center py-7">
          Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-wrap flex-col gap-12 justify-center place-items-center py-2"
          >
            <a href={project.link? project.link :"#"}
              className="flex flex-col items-center text-center max-w-full"
            >
            <img
              src={loadimg(project)}
              alt={project.name}
              className="object-scale-down h-40 w-40 sm:h-48 sm:w-48 lg:h-64 lg:w-64 max-w-full justify-center"
            />
            <span className="text-neutral-200 font-bold text-sm sm:text-base">
              {project.description}
            </span>
            </a>

          </div>
        ))}
      </div>
    </div>
  );
};
export default BigGallery;
