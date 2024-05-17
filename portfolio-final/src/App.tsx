import './index.css'
import NavigationBar from './Components/NavigationBar'
import BigProyects from './Components/BigProyects'
import Hero from './Components/Hero'
import SmallProyects from './Components/SmallProyects'
import Footer from './Components/Footer'
import PreSection from './Components/PreSection'

//Images Imports 
import section1image from './assets/Images//Asap_React_140120.jpg'
function App() {
  return (
  <>  
  <NavigationBar />
  <Hero></Hero>
  <PreSection ImageToLoad={section1image} ></PreSection>
  <BigProyects></BigProyects>
  <PreSection ImageToLoad={section1image}></PreSection>
  <SmallProyects></SmallProyects>
  <Footer></Footer>
  </>
  )
}

export default App
