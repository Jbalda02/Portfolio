/**function SmallGallery(data: { names: string, image: string }[], titleSG: string) {
    const { names:string, icons:string } = data;

    return( 
    <div>
        <h1>
            {titleSG}
        </h1>
        <div className="grid grid-cols-3 gap-4">
     
                {icons.map(index => (
               
                        <img key={index} src={icons[index]} alt="icon" className='object-scale-down h-6 w-6' />
              
                ))}
       
        </div>
       
     </div>
   
    );
}
**/
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
      <div>
        <h2>{title}</h2>
        <div className="grid grid-cols-3 gap-4">
        {technologies.map((tech) => (
        <div>
            <img key={tech.id} src={tech.image} alt={tech.name} className='object-scale-down h-6 w-6' />
            <span>{tech.name}</span>
        </div>
        ))}
      </div>
      </div>
    );
  };
export default SmallGallery;