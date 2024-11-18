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
        <h1 className="text-neutral-200 font-bold text-3xl  text-center py-7">
          Projects
        </h1>
      </div>
      <div className="grid grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-wrap flex-col gap-12 justify-center place-items-center py-2"
          >
            <a href={project.link? project.link :"#"}
            >
            <img
              src={loadimg(project)}
              alt={project.name}
              className="object-scale-down h-64 w-64 justify-center max-w-70"
            />
            <span className="text-neutral-200 font-bold">
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
