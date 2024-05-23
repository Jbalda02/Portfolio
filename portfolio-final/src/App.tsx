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
//Images Imports
import section1image from "./assets/Images/Asap_React_140120.jpg";
import section2image from "./assets/Images/ksr-banner-5.jpg";

//One Small Gallery is for Technologies Icon that I domain
//And the other Small Gallery is for small Projects
interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  stack?: string;
}
interface Technology {
    id: string;
    name: string;
    description: string;
    image: string;
}
interface TechnologiesData {
    FrontEndTechnologies: Technology[];
    BackEndTechnologies: Technology[];
    ManagementTechnologies: Technology[];
}
interface SmallGalleryProps {
  technologies: Technology[];
  title: string;
}

function App() {
  const FrontEndTechnologies = data.FrontEndTechnologies;  
  const BackEndTechnologies = data.BackendTechnologies;
  const ManagementTechnologies = data.ManagmentTechnologies;
  const titleSGFront = "FrontEnd";
  const titleSGBack = "BackEnd";
  const titleSG = "Management Technologies";

  return (
    <div className="flex-col">
      <NavigationBar />
      <Hero />
      <div className="bg-purple-600">
        <PreSection ImageToLoad={section1image} />
      </div>
      <div className="flex flex-row justify-around mb-3 gap-12 flex-wrap bg-gradient-to-b from-purple-600 via-purple-700 to-blue-800 pb-12">
        <SmallGallery technologies={FrontEndTechnologies} title={titleSGFront} />
        <SmallGallery technologies={BackEndTechnologies} title={titleSGBack} />
        <SmallGallery technologies={ManagementTechnologies} title={titleSG} />
      </div>
      <div className="bg-blue-800">
        <BigGallery projects={projectData.projects} />
      </div>
      <TextSection />
      <TextSection />
      <div className="bg-blue-800">
        <PreSection ImageToLoad={section2image} />
        <TextSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
