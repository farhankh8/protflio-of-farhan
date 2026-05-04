import { useState, useEffect, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
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
import KeyboardShortcuts from './components/KeyboardShortcuts'

const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'))
const TimelineSection = lazy(() => import('./components/TimelineSection'))
const Footer = lazy(() => import('./components/Footer'))

function SectionLoader() {
  return (
    <div style={{ padding: '60px', display: 'flex', justifyContent: 'center' }}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        style={{
          width: '40px',
          height: '40px',
          border: '3px solid rgba(139, 92, 246, 0.2)',
          borderTop: '3px solid #a855f7',
          borderRadius: '50%',
        }}
      />
    </div>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleVisibilityChange = () => {
      document.title = document.hidden
        ? 'Come back! | KH Mohammad Farhan'
        : 'KH Mohammad Farhan | Full Stack Developer & AI Enthusiast'
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div id="main-content" style={{ background: '#050510', minHeight: '100vh' }}>
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
        <Suspense fallback={<SectionLoader />}>
          <TimelineSection />
        </Suspense>
        <CertificationsSection />
        <Suspense fallback={<SectionLoader />}>
          <TestimonialsSection />
        </Suspense>
        <ContactSection />
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <BackToTop />
      <SideNavDots />
      <KeyboardShortcuts />
    </div>
  )
}

export default App
