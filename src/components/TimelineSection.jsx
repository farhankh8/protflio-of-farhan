import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaAward, FaLaptopCode } from 'react-icons/fa'

const timeline = [
  {
    year: '2023 - 2026',
    title: 'Bachelor of Computer Applications',
    org: 'Yenepoya University, Mangaluru',
    description: 'Specializing in AI, Cloud Computing, and Software Development. Maintaining strong academic performance while pursuing industry certifications.',
    icon: FaGraduationCap,
    color: '#6366f1',
  },
  {
    year: '2025',
    title: 'Freelance Full Stack Developer',
    org: 'Self-employed',
    description: 'Built FreelanceFlow - a complete freelance management system with client tracking, invoicing, financial dashboards, and lead management.',
    icon: FaLaptopCode,
    color: '#8b5cf6',
  },
  {
    year: '2025',
    title: 'AWS Solutions Architecture',
    org: 'Forage / Amazon Web Services',
    description: 'Completed hands-on simulation covering cloud architecture design, deployment, and optimization on AWS infrastructure.',
    icon: FaAward,
    color: '#FF9900',
  },
  {
    year: '2025',
    title: 'IBM Generative AI Engineering',
    org: 'IBM',
    description: 'Built and deployed generative AI models using IBM Watson, gaining practical experience in LLM applications.',
    icon: FaAward,
    color: '#054ADA',
  },
  {
    year: '2025',
    title: 'Microsoft AI & ML Engineering',
    org: 'Microsoft',
    description: 'Developed machine learning solutions and AI architectures using Azure ML services.',
    icon: FaAward,
    color: '#00A4EF',
  },
  {
    year: '2025',
    title: 'Google Data Analytics Professional',
    org: 'Google',
    description: 'Completed comprehensive data analytics program covering data analysis, visualization, and decision-making.',
    icon: FaAward,
    color: '#4285F4',
  },
  {
    year: '2025',
    title: 'Roamind - AI Travel Platform',
    org: 'Personal Project',
    description: 'Developed an AI-powered travel planning platform for Indian travelers using Next.js 16, Gemini AI, and Firebase.',
    icon: FaLaptopCode,
    color: '#a855f7',
  },
  {
    year: '2025',
    title: '10+ Industry Certifications',
    org: 'Google, IBM, Microsoft, AWS, Deloitte',
    description: 'Earned certifications spanning cloud computing, AI/ML, data analytics, project management, and front-end development.',
    icon: FaAward,
    color: '#10b981',
  },
]

function TimelineItem({ item, index, isLeft }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      style={{
        display: 'flex',
        justifyContent: isLeft ? 'flex-end' : 'flex-start',
        position: 'relative',
        marginBottom: '60px',
      }}
    >
      <div style={{
        width: 'calc(50% - 40px)',
        padding: '30px',
        background: 'rgba(139, 92, 246, 0.05)',
        border: '1px solid rgba(139, 92, 246, 0.15)',
        borderRadius: '20px',
        position: 'relative',
        transition: 'all 0.3s',
      }}>
        <div style={{
          position: 'absolute',
          top: '30px',
          [isLeft ? 'right' : 'left']: '-8px',
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          background: item.color,
          border: '3px solid #050510',
          boxShadow: `0 0 20px ${item.color}`,
          zIndex: 2,
        }} />

        <span style={{
          display: 'inline-block',
          padding: '4px 12px',
          background: `${item.color}15`,
          borderRadius: '6px',
          fontSize: '12px',
          fontWeight: 600,
          color: item.color,
          marginBottom: '12px',
        }}>
          {item.year}
        </span>

        <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
          {item.title}
        </h3>

        <p style={{ fontSize: '14px', color: item.color, fontWeight: 500, marginBottom: '12px' }}>
          {item.org}
        </p>

        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function TimelineSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      id="experience"
      style={{
        padding: '120px 40px',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      <div style={{ position: 'absolute', top: '40%', right: '-10%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)', filter: 'blur(100px)', pointerEvents: 'none' }} />

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
        My Journey
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          fontSize: 'clamp(36px, 5vw, 64px)',
          fontWeight: 800,
          textAlign: 'center',
          marginBottom: '80px',
          background: 'linear-gradient(135deg, #ffffff, #a855f7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Experience & Education
      </motion.h2>

      <div style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: '2px',
          background: 'linear-gradient(180deg, rgba(99,102,241,0.5), rgba(139,92,246,0.3), rgba(168,85,247,0.5))',
          transform: 'translateX(-50%)',
        }} />

        {timeline.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} isLeft={index % 2 === 0} />
        ))}
      </div>
    </section>
  )
}
