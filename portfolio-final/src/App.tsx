import './index.css'
import NavigationBar from './Components/NavigationBar'
import BigProyects from './Components/BigProyects'
import Hero from './Components/Hero'
import SmallProyects from './Components/SmallProyects'
import Footer from './Components/Footer'
function App() {
  return (
  <>  
  <NavigationBar />
  <Hero></Hero>
  <BigProyects></BigProyects>
  <SmallProyects></SmallProyects>
  <Footer></Footer>
  </>
  )
}

export default App
