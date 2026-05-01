import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'FreelanceFlow',
    description: 'Intelligent freelance management system with client/project tracking, invoice generation with GST, time tracking, financial dashboards, and lead management pipeline.',
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Zustand', 'Recharts', 'JWT'],
    color: '#6366f1',
    github: 'https://github.com/farhankh8/freelanceflow',
    live: 'https://freelanceflow-blue-delta.vercel.app',
    featured: true,
  },
  {
    title: 'Roamind',
    description: 'AI-powered travel planning assistant for Indian travelers — Gemini-powered itinerary planning, flight/hotel search, local guides marketplace, visa guidance, and budget tracking.',
    tech: ['Next.js 16', 'TypeScript', 'Firebase', 'Gemini AI', 'Tailwind CSS', 'Framer Motion'],
    color: '#8b5cf6',
    github: 'https://github.com/farhankh8/roamind',
    live: 'https://roamind.vercel.app',
    featured: true,
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        padding: '120px 40px',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      <div style={{ position: 'absolute', top: '20%', left: '-15%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)', filter: 'blur(100px)', pointerEvents: 'none' }} />

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
        My work
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
        Featured Projects
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            style={{
              position: 'relative',
              padding: '30px',
              background: 'rgba(139,92,246,0.03)',
              border: '1px solid rgba(139,92,246,0.15)',
              borderRadius: '24px',
              overflow: 'hidden',
              transition: 'all 0.4s ease',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: `linear-gradient(90deg, ${project.color}, ${project.color}88)`,
              }}
            />

            {project.featured && (
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  padding: '4px 12px',
                  background: `rgba(${parseInt(project.color.slice(1, 3), 16)}, ${parseInt(project.color.slice(3, 5), 16)}, ${parseInt(project.color.slice(5, 7), 16)}, 0.2)`,
                  border: `1px solid ${project.color}40`,
                  borderRadius: '20px',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: project.color,
                }}
              >
                FEATURED
              </div>
            )}

            <h3 style={{
              fontSize: '22px',
              fontWeight: 700,
              marginBottom: '12px',
              color: '#ffffff',
            }}>
              {project.title}
            </h3>

            <p style={{
              fontSize: '14px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '20px',
              minHeight: '70px',
            }}>
              {project.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
              {project.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    padding: '6px 12px',
                    background: 'rgba(139,92,246,0.1)',
                    border: '1px solid rgba(139,92,246,0.2)',
                    borderRadius: '8px',
                    fontSize: '11px',
                    fontWeight: 500,
                    color: '#a855f7',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'color 0.3s',
                }}
              >
                <FaGithub size={18} />
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'color 0.3s',
                }}
              >
                <FaExternalLinkAlt size={14} />
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
        style={{ textAlign: 'center', marginTop: '60px' }}
      >
        <a
          href="https://github.com/farhankh8"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '16px 32px',
            background: 'rgba(139,92,246,0.1)',
            border: '2px solid rgba(139,92,246,0.3)',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: 600,
            color: '#a855f7',
            transition: 'all 0.3s',
          }}
        >
          <FaGithub size={20} />
          View All Projects on GitHub
        </a>
      </motion.div>
    </section>
  )
}
