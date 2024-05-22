interface Technology {
    id: string;
    name: string;
    description: string;
    image: string;
}
interface SmallGalleryProps {
    technologies: Technology[];
    title: string;
  }
  
  const SmallGallery: React.FC<SmallGalleryProps> = ({ technologies, title }) => {
    return (
      <div className="max-w-64 text-center">
        <h2>{title}</h2>
        <div className="grid grid-cols-3 gap-4 justify-center">
        {technologies.map((tech) => (
        <div className="flex flex-wrap flex-col gap-2 justify-center place-items-center">
            <img key={tech.id} src={tech.image} alt={tech.name} className='object-scale-down h-6 w-6 justify-center' />
            <span>{tech.name}</span>
        </div>
        ))}
      </div>
      </div>
    );
  };
export default SmallGallery;