import HomeSection from './components/hero'
import AboutSection from './components/about'
import ProjectSection from './components/Project'
import GridOverlay from './components/Background'
import { Navbar } from './components/header'
import ContactSection from './components/contact'
import Header from './components/navbar'
function App() {

  return (
    <>
    <GridOverlay/>
    <div className="fixed top-0 left-0 right-0 z-50 bg-white">
        <Navbar />
      </div>

    <HomeSection/>
    <br />
    <AboutSection/>
    <br />
    <ProjectSection/>
    <br />
    <ContactSection/>
    </>
  )
}

export default App
