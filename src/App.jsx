import HomeSection from './components/hero'
import AboutSection from './components/about'
import ProjectSection from './components/Project'
import GridOverlay from './components/Background'

function App() {

  return (
    <>
    <GridOverlay/>
    <HomeSection/>
    <br />
    <AboutSection/>
    <br />
    <ProjectSection/>
    </>
  )
}

export default App
