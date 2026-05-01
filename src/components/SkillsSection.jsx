import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaPython, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaAws, FaDocker, FaGitAlt, FaLinux, FaMicrosoft, FaFileExcel } from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiPostgresql, SiFirebase, SiTailwindcss, SiVercel, SiVite, SiNextdotjs, SiExpress, SiPostman, SiGooglecloud } from 'react-icons/si'

const skills = {
  'Languages': [
    { name: 'Python', icon: FaPython, color: '#3776AB', level: 85 },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', level: 90 },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 80 },
  ],
  'Frontend': [
    { name: 'React', icon: FaReact, color: '#61DAFB', level: 90 },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000', level: 85 },
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26', level: 95 },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', level: 95 },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', level: 90 },
  ],
  'Backend & Cloud': [
    { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: 80 },
    { name: 'Express', icon: SiExpress, color: '#000000', level: 80 },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 75 },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', level: 75 },
    { name: 'AWS', icon: FaAws, color: '#FF9900', level: 70 },
    { name: 'Azure', icon: FaMicrosoft, color: '#0078D4', level: 65 },
  ],
  'Accounting & Finance': [
    { name: 'Tally ERP / Prime', icon: FaFileExcel, color: '#7b1fa2', level: 80 },
    { name: 'GST & Taxation', icon: FaFileExcel, color: '#009688', level: 75 },
    { name: 'Zoho Books', icon: FaFileExcel, color: '#e64a19', level: 80 },
    { name: 'MS Excel', icon: FaFileExcel, color: '#217346', level: 85 },
    { name: 'Billing Software', icon: FaFileExcel, color: '#ff9800', level: 80 },
  ],
}

function SkillCard({ skill, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      style={{
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '16px',
        padding: '20px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: `${skill.color}15`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <skill.icon size={20} color={skill.color} />
          </div>
          <span style={{ fontSize: '15px', fontWeight: 600, color: '#fff' }}>{skill.name}</span>
        </div>
        <span style={{ fontSize: '14px', color: skill.color, fontWeight: 700 }}>{skill.level}%</span>
      </div>
      
      {/* Progress Bar Background */}
      <div style={{ height: '6px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
        {/* Progress Bar Fill */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          style={{
            height: '100%',
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`,
            borderRadius: '10px',
            boxShadow: `0 0 10px ${skill.color}`,
          }}
        />
      </div>
    </motion.div>
  )
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

      <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
        {Object.entries(skills).map(([category, items], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
          >
            <h3 style={{
              fontSize: '24px',
              fontWeight: 700,
              marginBottom: '30px',
              color: '#8b5cf6',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}>
              <span style={{ width: '40px', height: '2px', background: '#8b5cf6' }} />
              {category}
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
            }}>
              {items.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}