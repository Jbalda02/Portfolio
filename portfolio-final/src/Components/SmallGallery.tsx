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
    <div className="max-w-70 text-center text-white ">
      <h2 className=" font-bold py-6 text-xl tracking-wide text-neutral-200">
        {title}
      </h2>
      <div className="grid grid-cols-3 gap-4 justify-center">
        {technologies.map((tech) => (
          <div className="flex flex-wrap flex-col gap-2 justify-center place-items-center py-2">
            <img
              key={tech.id}
              src={tech.image}
              alt={tech.name}
              className="object-scale-down h-8 w-8 justify-center"
            />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SmallGallery;
