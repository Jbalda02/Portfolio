import "./index.css";
import NavigationBar from "./Components/NavigationBar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import PreSection from "./Components/PreSection";
import TextSection from "./Components/TextSection";
import SmallGallery from "./Components/SmallGallery";
import BigGallery from "./Components/BigGallery";
import data from './jsons/Technologies.json' assert { type: 'json' };
import projectData from './jsons/projects.json' assert {type: 'json'};
import contactInfoData from './jsons/contactInfo.json' assert {type: 'json'};
//Images Imports
import section1image from "./assets/Images/Asap_React_140120.jpg";
import section2image from "./assets/Images/ksr-banner-5.jpg";
import aboutmeImg from "./assets/Icons/Portafolio.jpg"

function App() {
  const FrontEndTechnologies = data.FrontEndTechnologies;  
  const BackendTechnologies = data.BackendTechnologies;
  const ManagementTechnologies = data.ManagmentTechnologies;
  const titleSGFront = "FrontEnd";
  const titleSGBack = "BackEnd";
  const titleSG = "Other Technologies";
  
  const aboutmeText = "I am a Computer Science student, with a passion for web development. I have experience in the development of web applications using technologies such as React, Node.js, and Tailwind Css. I am always looking to learn new technologies and improve my skills. I am currently looking for opportunities to work as a web developer.";
  const letsConnnect = " Lets Connect! And Start doing projects together, I am always looking for new opportunities to grow as a person and as a professional. You can contact me through my email or my social networks. I am always open to new challenges and opportunities.";
  const contactImg = "https://cdn-icons-png.flaticon.com/512/493/493808.png";
  return (
    <div className=" flex flex-col">
      <NavigationBar />
      <Hero />
      <div className="bg-purple-600">
        <PreSection ImageToLoad={section1image} />
      </div>
      <div className="flex flex-row justify-around gap-12 flex-wrap bg-gradient-to-b from-purple-600 via-purple-700 to-blue-800 pb-12">
        <SmallGallery technologies={FrontEndTechnologies} title={titleSGFront} />
        <SmallGallery technologies={BackendTechnologies} title={titleSGBack} />
        <SmallGallery technologies={ManagementTechnologies} title={titleSG} />
      </div>
 
      <div className="bg-blue-800">
        <BigGallery projects={projectData.projects} />
        <div className=" min-h-12 min-w-full bg-gradient-to-b from-blue-800 to-purple-700"></div>
      </div>
      <TextSection text={aboutmeText} imgSrc={aboutmeImg} title="About me"/>
      <div className="bg-blue-800 py-0">
        <PreSection ImageToLoad={section2image} />
        <TextSection text={letsConnnect} imgSrc={contactImg} title="Contact Info"/>
      </div>
      <Footer contactInfo={contactInfoData.contactInfo} />
    </div>
  );
}

export default App;
