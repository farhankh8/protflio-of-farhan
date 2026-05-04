import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export default function SideNavDots() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section.id)
        if (el && el.getBoundingClientRect().top <= window.innerHeight / 2) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="side-nav-dots"
      style={{
        position: 'fixed',
        right: '30px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
      }}
    >
      {sections.map(({ id, label }) => {
        const isActive = activeSection === id
        return (
          <div key={id} style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 10 }}
              transition={{ duration: 0.2 }}
              style={{
                fontSize: '12px',
                fontWeight: 600,
                color: '#a855f7',
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
                position: 'absolute',
                right: '20px',
              }}
            >
              {label}
            </motion.span>
            <motion.a
              href={`#${id}`}
              whileHover={{ scale: 1.3 }}
              style={{
                width: isActive ? '12px' : '8px',
                height: isActive ? '12px' : '8px',
                borderRadius: '50%',
                background: isActive ? '#a855f7' : 'rgba(139, 92, 246, 0.3)',
                border: isActive ? '2px solid #a855f7' : '2px solid rgba(139, 92, 246, 0.5)',
                display: 'block',
                boxShadow: isActive ? '0 0 15px rgba(168, 85, 247, 0.6)' : 'none',
                transition: 'all 0.3s ease',
              }}
            />
          </div>
        )
      })}
    </div>
  )
}
