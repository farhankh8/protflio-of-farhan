import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'contact']
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(section)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/KH_Mohammad_Farhan_Resume.pdf'
    link.download = 'KH_Mohammad_Farhan_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '20px 40px',
        background: scrolled ? 'rgba(5, 5, 16, 0.7)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(139, 92, 246, 0.2)' : 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.3s ease',
      }}
    >
      <motion.a
        href="#home"
        style={{
          fontSize: '24px',
          fontWeight: 800,
          background: 'linear-gradient(135deg, #6366f1, #a855f7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
        whileHover={{ scale: 1.05 }}
      >
        KMF
      </motion.a>

      <div className="nav-links">
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.substring(1)
          return (
            <motion.a
              key={link.name}
              href={link.href}
              style={{
                color: isActive ? '#a855f7' : 'rgba(255,255,255,0.7)',
                fontSize: '14px',
                fontWeight: isActive ? 600 : 500,
                padding: '8px 16px',
                borderRadius: '8px',
                position: 'relative',
                transition: 'all 0.3s',
                background: isActive ? 'rgba(139, 92, 246, 0.1)' : 'transparent',
              }}
              whileHover={{ color: '#a855f7' }}
            >
              {link.name}
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  style={{
                    position: 'absolute',
                    bottom: '4px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: '#a855f7',
                  }}
                />
              )}
            </motion.a>
          )
        })}
      </div>

      <motion.button
        onClick={handleDownloadResume}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="clickable"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 20px',
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          borderRadius: '10px',
          fontSize: '13px',
          fontWeight: 600,
          color: '#fff',
          border: 'none',
          boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)',
          marginRight: '16px',
        }}
      >
        <FaDownload size={12} />
        Resume
      </motion.button>

      <motion.button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          color: '#fff',
          fontSize: '24px',
          cursor: 'pointer',
        }}
        className="mobile-menu-btn"
      >
        {menuOpen ? '✕' : '☰'}
      </motion.button>
    </motion.nav>
  )
}