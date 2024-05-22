import "./index.css";
import NavigationBar from "./Components/NavigationBar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import PreSection from "./Components/PreSection";
import TextSection from "./Components/TextSection";
import SmallGallery from "./Components/SmallGallery";
import BigGallery from "./Components/BigGallery";
import data from './jsons/Technologies.json' assert { type: 'json' };

//Images Imports
import section1image from "./assets/Images//Asap_React_140120.jpg";
import section2image from "./assets/Images//HobbiesBanner.jpeg";
//One Small Gallery is for Technologies Icon that i domain
//And the other Small Gallery is for small Proyects
interface Technology {
    id: string;
    name: string;
    description: string;
    image: string;
}
interface TechnologiesData {
    FrontEndTechnologies: Technology[];
    BackendTechnologies: Technology[];
    ManagmentTechnologies: Technology[];
}
interface SmallGalleryProps {
  technologies: Technology[];
  title: string;
}

function App() {
  let FrontEndTechnologies = data.FrontEndTechnologies;  
  let BackEndTechnologies = data.BackendTechnologies;
  let ManagmentTechnologies = data.ManagmentTechnologies
  const titleSGFront = "FrontEnd"
  const titleSGBack = "BackEnd"
  const titleSG = "Managment Technologies"

  return (
    <div className="flex-col">
      <NavigationBar />
      <Hero></Hero>
      <PreSection ImageToLoad={section1image}></PreSection>
        <div className="flex flex-row m-4 justify-around   gap-12 flex-wrap">
         <SmallGallery technologies={FrontEndTechnologies} title={titleSGFront}></SmallGallery>
         <SmallGallery technologies={BackEndTechnologies} title={titleSGBack}></SmallGallery>
         <SmallGallery technologies={ManagmentTechnologies} title={titleSG}></SmallGallery>
        </div>
      <BigGallery></BigGallery>
      <PreSection ImageToLoad={section2image}></PreSection>
      <TextSection></TextSection>
      <TextSection></TextSection>
      <Footer></Footer>
    </div>
  );
}

export default App;