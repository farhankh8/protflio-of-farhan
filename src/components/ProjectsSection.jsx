import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Cheffest - Food Platform',
    description: 'A full-stack food ordering platform built with TypeScript, featuring real-time order management and responsive UI design.',
    tech: ['TypeScript', 'React', 'Node.js', 'MongoDB'],
    color: '#6366f1',
    github: 'https://github.com/farhankh8/cheffest-web',
    live: '#',
    featured: true,
  },
  {
    title: 'Cheffest API',
    description: 'Robust backend API for the Cheffest platform with RESTful endpoints, authentication, and database management.',
    tech: ['TypeScript', 'Express', 'MongoDB', 'JWT'],
    color: '#8b5cf6',
    github: 'https://github.com/farhankh8/cheffest-api',
    live: '#',
    featured: true,
  },
  {
    title: 'Resume Forge',
    description: 'AI-powered resume builder that creates professional resumes with customizable templates and smart content suggestions.',
    tech: ['Python', 'AI/ML', 'React', 'TailwindCSS'],
    color: '#a855f7',
    github: 'https://github.com/farhankh8/resume-forge',
    live: '#',
    featured: true,
  },
  {
    title: 'Travel Agency API',
    description: 'Comprehensive travel management system with booking, itinerary planning, and customer management features.',
    tech: ['TypeScript', 'Express', 'PostgreSQL'],
    color: '#ec4899',
    github: 'https://github.com/farhankh8/travel-agency-management-api',
    live: '#',
    featured: false,
  },
  {
    title: 'Iftar Invitation',
    description: 'Digital invitation platform for Ramadan Iftar events with elegant designs and RSVP functionality.',
    tech: ['TypeScript', 'React', 'Vite'],
    color: '#14b8a6',
    github: 'https://github.com/farhankh8/iftar_invitation',
    live: '#',
    featured: false,
  },
  {
    title: '100 Days of Coding',
    description: 'A platform tracking and showcasing the 100 Days of Coding Challenge progress with community features.',
    tech: ['JavaScript', 'HTML/CSS', 'Node.js'],
    color: '#f59e0b',
    github: 'https://github.com/farhankh8/100DaysOfCodingChallenge',
    live: '#',
    featured: false,
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
