import HomeSection from './components/hero'
import AboutSection from './components/about'
import ProjectSection from './components/Project'
import GridOverlay from './components/Background'
import { Navbar } from './components/header'
import ContactSection from './components/contact'

function App() {

  return (
    <>
    <GridOverlay/>
    <div className="fixed left-0 right-0 top-0 z-50 bg-white">
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
