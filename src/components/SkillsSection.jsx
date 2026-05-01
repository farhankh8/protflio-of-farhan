import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaPython, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaAws, FaDocker, FaGitAlt, FaLinux, FaMicrosoft } from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiPostgresql, SiFirebase, SiTailwindcss, SiVercel, SiVite, SiNextdotjs, SiExpress, SiPostman, SiGooglecloud } from 'react-icons/si'

const skills = {
  'Languages': [
    { name: 'Python', icon: FaPython, color: '#3776AB' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  ],
  'Frontend': [
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  ],
  'Backend': [
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'Express', icon: SiExpress, color: '#000000' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  ],
  'Cloud & DevOps': [
    { name: 'AWS', icon: FaAws, color: '#FF9900' },
    { name: 'GCP', icon: SiGooglecloud, color: '#4285F4' },
    { name: 'Azure', icon: FaMicrosoft, color: '#0078D4' },
    { name: 'Docker', icon: FaDocker, color: '#2496ED' },
    { name: 'Vercel', icon: SiVercel, color: '#000000' },
  ],
  'Tools': [
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'Linux', icon: FaLinux, color: '#FCC624' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    { name: 'Vite', icon: SiVite, color: '#646CFF' },
  ],
}

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        padding: '120px 40px',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      <div style={{ position: 'absolute', top: '30%', right: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)', filter: 'blur(100px)', pointerEvents: 'none' }} />

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
        My expertise
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
          background: 'linear-gradient(135deg, #ffffff, #6366f1)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Skills & Technologies
      </motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
        {Object.entries(skills).map(([category, items], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: categoryIndex * 0.15 }}
          >
            <h3 style={{
              fontSize: '20px',
              fontWeight: 700,
              marginBottom: '24px',
              color: '#8b5cf6',
              paddingLeft: '16px',
              borderLeft: '3px solid #a855f7',
            }}>
              {category}
            </h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
            }}>
              {items.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: '16px 24px',
                    background: 'rgba(139,92,246,0.05)',
                    border: '1px solid rgba(139,92,246,0.2)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                >
                  <skill.icon
                    size={28}
                    color={skill.color}
                  />
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#ffffff' }}>
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
