import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaAws, FaGoogle, FaMicrosoft, FaAward } from 'react-icons/fa'
const certifications = [
  {
    title: 'AWS Solutions Architecture',
    issuer: 'Forage / Amazon Web Services',
    date: 'Dec 2025',
    icon: FaAws,
    color: '#FF9900',
    description: 'Cloud architecture design, deployment, and optimization on AWS infrastructure.',
  },
  {
    title: 'IBM Generative AI Engineering',
    issuer: 'IBM',
    date: 'Dec 2025',
    icon: FaAward,
    color: '#054ADA',
    description: 'Building and deploying generative AI models and applications using IBM Watson.',
  },
  {
    title: 'Microsoft AI & ML Engineering',
    issuer: 'Microsoft',
    date: 'Dec 2025',
    icon: FaMicrosoft,
    color: '#00A4EF',
    description: 'Machine learning model development and AI solution architecture with Azure.',
  },
  {
    title: 'Google Data Analytics',
    issuer: 'Google',
    date: 'Oct 2025',
    icon: FaGoogle,
    color: '#4285F4',
    description: 'Data analysis, visualization, and decision-making using Google Analytics tools.',
  },
  {
    title: 'Google Advanced Data Analytics',
    issuer: 'Google',
    date: 'Dec 2025',
    icon: FaGoogle,
    color: '#34A853',
    description: 'Advanced statistical analysis and machine learning with Google Cloud Platform.',
  },
  {
    title: 'Google IT Automation with Python',
    issuer: 'Google',
    date: 'Oct 2025',
    icon: FaGoogle,
    color: '#EA4335',
    description: 'Automating IT tasks and workflows using Python scripting and best practices.',
  },
  {
    title: 'IBM Front-End Developer',
    issuer: 'IBM',
    date: 'Sep 2025',
    icon: FaAward,
    color: '#054ADA',
    description: 'Modern front-end development with React, HTML, CSS, and JavaScript.',
  },
  {
    title: 'Deloitte Technology Job Simulation',
    issuer: 'Deloitte Australia',
    date: 'Dec 2025',
    icon: FaAward,
    color: '#86BC25',
    description: 'Technology consulting and digital transformation solutions simulation.',
  },
  {
    title: 'NLP Essentials',
    issuer: 'Edureka',
    date: 'Sep 2025',
    icon: FaAward,
    color: '#F26522',
    description: 'Natural Language Processing concepts, text analysis, and language models.',
  },
  {
    title: 'Google Project Management',
    issuer: 'Google',
    date: 'Oct 2025',
    icon: FaGoogle,
    color: '#FBBC05',
    description: 'Agile project management, team leadership, and project delivery frameworks.',
  },
]

export default function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="certifications"
      ref={ref}
      style={{
        padding: '120px 40px',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      <div style={{ position: 'absolute', top: '40%', right: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)', filter: 'blur(100px)', pointerEvents: 'none' }} />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
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
        Achievements
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          fontSize: 'clamp(36px, 5vw, 64px)',
          fontWeight: 800,
          textAlign: 'center',
          marginBottom: '20px',
          background: 'linear-gradient(135deg, #ffffff, #6366f1)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Certifications
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          textAlign: 'center',
          color: 'rgba(255,255,255,0.5)',
          marginBottom: '60px',
          fontSize: '16px',
        }}
      >
        10+ industry-recognized certifications from leading tech companies
      </motion.p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 40, rotateX: 15 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            style={{
              padding: '28px',
              background: 'rgba(139,92,246,0.03)',
              border: '1px solid rgba(139,92,246,0.15)',
              borderRadius: '20px',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '4px',
                height: '100%',
                background: `linear-gradient(180deg, ${cert.color}, ${cert.color}40)`,
              }}
            />

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: `${cert.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <cert.icon size={24} color={cert.color} />
              </div>
              <div>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '4px',
                }}>
                  {cert.title}
                </h4>
                <p style={{
                  fontSize: '13px',
                  color: cert.color,
                  fontWeight: 500,
                }}>
                  {cert.issuer}
                </p>
              </div>
            </div>

            <p style={{
              fontSize: '13px',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.6,
              marginBottom: '12px',
            }}>
              {cert.description}
            </p>

            <div style={{
              fontSize: '12px',
              color: 'rgba(255,255,255,0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}>
              <span style={{ fontSize: '10px' }}>📅</span>
              {cert.date}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
