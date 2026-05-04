import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const shortcuts = [
  { keys: ['?', 'Shift+/'], description: 'Open shortcuts menu' },
  { keys: ['Home'], description: 'Scroll to top' },
  { keys: ['End'], description: 'Scroll to contact' },
  { keys: ['1-6'], description: 'Navigate to sections' },
  { keys: ['Esc'], description: 'Close this menu' },
]

const sectionNames = {
  '1': 'Home',
  '2': 'About',
  '3': 'Skills',
  '4': 'Projects',
  '5': 'Certifications',
  '6': 'Contact',
}

const sectionIds = {
  '1': 'home',
  '2': 'about',
  '3': 'skills',
  '4': 'projects',
  '5': 'certifications',
  '6': 'contact',
}

export default function KeyboardShortcuts() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '?' || (e.shiftKey && e.key === '/')) {
        e.preventDefault()
        setIsOpen(prev => !prev)
      } else if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      } else if (sectionNames[e.key] && !isOpen) {
        e.preventDefault()
        document.getElementById(sectionIds[e.key])?.scrollIntoView({ behavior: 'smooth' })
      } else if (e.key === 'Home') {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (e.key === 'End') {
        e.preventDefault()
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.8)',
              backdropFilter: 'blur(10px)',
              zIndex: 99999,
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'linear-gradient(135deg, #0a0a1a, #050510)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              borderRadius: '24px',
              padding: '40px',
              zIndex: 100000,
              maxWidth: '500px',
              width: '90%',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(139, 92, 246, 0.2)',
            }}
          >
            <h3 style={{
              fontSize: '24px',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #6366f1, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '30px',
              textAlign: 'center',
            }}>
              ⌨️ Keyboard Shortcuts
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {shortcuts.map(({ keys, description }) => (
                <div key={description} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>{description}</span>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {keys.map(key => (
                      <kbd key={key} style={{
                        padding: '6px 12px',
                        background: 'rgba(139, 92, 246, 0.1)',
                        border: '1px solid rgba(139, 92, 246, 0.3)',
                        borderRadius: '8px',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#a855f7',
                        fontFamily: 'monospace',
                      }}>
                        {key}
                      </kbd>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
              Press <kbd style={{ color: '#a855f7', fontFamily: 'monospace' }}>Esc</kbd> to close
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
