import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TechMarquee from './components/TechMarquee'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import CertificationsSection from './components/CertificationsSection'
import ContactSection from './components/ContactSection'
import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import ScrollParticles from './components/ScrollParticles'
import SideNavDots from './components/SideNavDots'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3800)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div style={{ background: '#050510', minHeight: '100vh' }}>
      <CustomCursor />
      <ScrollProgress />
      <ScrollParticles />
      <Navbar />
      <main>
        <HeroSection />
        <TechMarquee />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <BackToTop />
      <SideNavDots />
    </div>
  )
}

export default App
