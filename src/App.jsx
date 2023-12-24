import { useState } from 'react'
import Header from './components/navbar'
import HomeSection from './components/hero'
import AboutSection from './components/about'
import ImageGrid from './components/projects'
import Footer from './components/footer'
import ProjectSection from './components/Project'
import ContactSection from './components/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HomeSection/>
    <br />
    <AboutSection/>
    <br />
    </>
  )
}

export default App
