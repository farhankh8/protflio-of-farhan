import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#050510',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <motion.div
        style={{
          fontSize: '48px',
          fontWeight: 800,
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7, #ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '40px',
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        KH MOHAMMAD FARHAN
      </motion.div>

      <motion.div
        style={{
          width: '200px',
          height: '4px',
          background: 'rgba(139, 92, 246, 0.2)',
          borderRadius: '2px',
          overflow: 'hidden',
        }}
      >
        <motion.div
          style={{
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #a855f7)',
            borderRadius: '2px',
          }}
        />
      </motion.div>

      <motion.p
        style={{
          marginTop: '20px',
          fontSize: '14px',
          color: 'rgba(255,255,255,0.6)',
          letterSpacing: '2px',
        }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        LOADING EXPERIENCE...
      </motion.p>
    </motion.div>
  )
}
