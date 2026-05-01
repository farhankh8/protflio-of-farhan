import { motion } from 'framer-motion'
import { FaPython, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaAws, FaDocker, FaGitAlt, FaLinux } from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiPostgresql, SiFirebase, SiTailwindcss, SiVercel, SiVite, SiNextdotjs, SiExpress, SiPostman, SiGooglecloud } from 'react-icons/si'
import { FaMicrosoft } from 'react-icons/fa'

const technologies = [
  { icon: FaReact, label: 'React', color: '#61DAFB' },
  { icon: FaPython, label: 'Python', color: '#3776AB' },
  { icon: FaJs, label: 'JavaScript', color: '#F7DF1E' },
  { icon: SiTypescript, label: 'TypeScript', color: '#3178C6' },
  { icon: FaAws, label: 'AWS', color: '#FF9900' },
  { icon: FaMicrosoft, label: 'Azure', color: '#0078D4' },
  { icon: SiGooglecloud, label: 'GCP', color: '#4285F4' },
  { icon: SiNextdotjs, label: 'Next.js', color: '#000000' },
  { icon: FaNodeJs, label: 'Node.js', color: '#339933' },
  { icon: SiExpress, label: 'Express', color: '#000000' },
  { icon: SiMongodb, label: 'MongoDB', color: '#47A248' },
  { icon: SiPostgresql, label: 'PostgreSQL', color: '#336791' },
  { icon: FaDocker, label: 'Docker', color: '#2496ED' },
  { icon: SiTailwindcss, label: 'Tailwind', color: '#06B6D4' },
  { icon: SiVercel, label: 'Vercel', color: '#000000' },
  { icon: SiVite, label: 'Vite', color: '#646CFF' },
  { icon: SiFirebase, label: 'Firebase', color: '#FFCA28' },
  { icon: FaGitAlt, label: 'Git', color: '#F05032' },
]

export default function TechMarquee() {
  return (
    <div style={{
      padding: '40px 0',
      background: 'rgba(139, 92, 246, 0.02)',
      borderTop: '1px solid rgba(139, 92, 246, 0.1)',
      borderBottom: '1px solid rgba(139, 92, 246, 0.1)',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Gradient edges for seamless fade */}
      <div style={{
        position: 'absolute', top: 0, left: 0, bottom: 0, width: '100px',
        background: 'linear-gradient(90deg, #050510, transparent)', zIndex: 2,
      }} />
      <div style={{
        position: 'absolute', top: 0, right: 0, bottom: 0, width: '100px',
        background: 'linear-gradient(-90deg, #050510, transparent)', zIndex: 2,
      }} />

      <motion.div
        style={{
          display: 'flex',
          gap: '60px',
          width: 'fit-content',
        }}
        animate={{ x: '0' }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
            from: 0,
            to: -1400,
          },
        }}
      >
        {/* Double list for infinite loop */}
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 20px',
              background: 'rgba(139, 92, 246, 0.05)',
              border: '1px solid rgba(139, 92, 246, 0.15)',
              borderRadius: '50px',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${tech.color}15`
              e.currentTarget.style.borderColor = tech.color
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(139, 92, 246, 0.05)'
              e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.15)'
            }}
          >
            <tech.icon size={24} color={tech.color} />
            <span style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>
              {tech.label}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}