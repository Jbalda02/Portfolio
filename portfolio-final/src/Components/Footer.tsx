type parentContactInfo = {
    contactInfo:contactInfoProps[]

}
type contactInfoProps = {
    id:number
    platform:string
    user_name:string
    img_source:string
    link:string

}


function Footer({ contactInfo }:parentContactInfo) {
    const tmpContactInfoData = contactInfo;
    return (
        
            <ul className="flex content-center justify-center min-w-full flex-wrap gap-9 min-h-52 bg-gradient-to-b from-purple-700 to to-blue-950">
                { tmpContactInfoData.map((contact) => (
                        <li key={contact.id}>
                        <a href={contact.link}>                            
                            <img
                            src={contact.img_source} 
                            className="object-scale-down h-8 w-8 justify-center"                               
                            />
                        </a>
                        </li>
                ))}
      
            </ul>
    );
    }
    export default Footer