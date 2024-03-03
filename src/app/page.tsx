import HomeSection from '@/components/Hero'
import AboutSection from '@/components/about'
import ProjectSection from '@/components/Project'
import GridOverlay from '@/components/Background'
import { Navbar } from '@/components/Navbar'
import ContactSection from '@/components/contact'
import BlogSection from '@/components/BlogSection'

function Page() {
  return (
    <>
      <GridOverlay />
      <div className="fixed left-0 right-0 top-0 z-50 bg-white">
        <Navbar />
      </div>

      <HomeSection />
      <br />
      <AboutSection />
      <br />
      <ProjectSection />
      <br />
      <BlogSection />
      <br />
      <ContactSection />
    </>
  )
}

export default Page
