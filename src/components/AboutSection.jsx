import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: '120px 40px',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      <div style={{ position: 'absolute', top: '50%', left: '-10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)', filter: 'blur(100px)', pointerEvents: 'none' }} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: '14px',
            color: '#a855f7',
            fontWeight: 600,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          Get to know me
        </motion.p>

        <motion.h2
          variants={itemVariants}
          style={{
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: '60px',
            background: 'linear-gradient(135deg, #ffffff, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          About Me
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <motion.div variants={itemVariants}>
            <div
              style={{
                position: 'relative',
                padding: '40px',
                background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.05))',
                border: '1px solid rgba(139,92,246,0.2)',
                borderRadius: '24px',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-2px',
                  left: '-2px',
                  right: '-2px',
                  bottom: '-2px',
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7, #6366f1)',
                  borderRadius: '26px',
                  zIndex: -1,
                  opacity: 0.5,
                  animation: 'spin 8s linear infinite',
                }}
              />

              <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '20px', color: '#ffffff' }}>
                Who am I?
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)' }}>
                I'm a passionate final-year BCA student at Yenepoya University, specializing in
                Artificial Intelligence, Cloud Computing, and Software Development. With a strong
                foundation in modern technologies and a drive for innovation, I build solutions
                that make a difference.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', marginTop: '15px' }}>
                My journey includes earning 10+ industry-recognized certifications from AWS,
                IBM, Microsoft, and Google. I actively participate in technical events and am
                eager to apply my skills in real-world projects.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { label: 'Education', value: 'BCA - Yenepoya University (2023-2026)' },
              { label: 'Location', value: 'Mangaluru, Karnataka, India' },
              { label: 'Email', value: 'khmohammadfarhan11@gmail.com' },
              { label: 'Certifications', value: '10+ Industry Certifications' },
              { label: 'Focus', value: 'AI, Cloud Computing, Full Stack Dev' },
              { label: 'Status', value: 'Open to Opportunities' },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{
                  padding: '20px',
                  background: 'rgba(139,92,246,0.05)',
                  border: '1px solid rgba(139,92,246,0.15)',
                  borderRadius: '12px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>{label}</span>
                <span style={{ color: '#ffffff', fontWeight: 600, fontSize: '14px' }}>{value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
