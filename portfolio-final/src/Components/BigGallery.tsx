interface Project {
    id: string;
    name: string;
    description: string;
    image: string;
    stack: string;
}

interface ProjectsProps {
    projects: Project[];
}
const BigGallery: React.FC<ProjectsProps> = ({ projects }) => {
    if (!projects || !Array.isArray(projects)) {
        return <div>No projects available</div>;
    }

  return (
    <div>
      <div>
        <h1 className="text-neutral-200 font-bold text-3xl  text-center py-7">
          Projects
        </h1>
      </div>
      {projects.map((project) => (
                    <div key={project.id} className="flex flex-wrap flex-col gap-2 justify-center place-items-center py-2">
                        <img
                            src={project.image}
                            alt={project.name}
                            className="object-scale-down h-64 w-64 justify-center"
                        />
                        <span>{project.description}</span>
                    </div>
                ))}
      </div>
    
  );
};
export default BigGallery;
