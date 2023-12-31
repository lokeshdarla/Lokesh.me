import { useState } from 'react'
import Header from './components/navbar'
import HomeSection from './components/hero'
import AboutSection from './components/about'
import ProjectSection from './components/Project'
import ContactSection from './components/contact'
import CustomCursor from './components/Cursor'
import GridOverlay from './components/Background'

function App() {
  const [count, setCount] = useState(0)

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
