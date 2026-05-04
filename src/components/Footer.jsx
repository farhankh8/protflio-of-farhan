import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import { SiX } from 'react-icons/si'

const quickLinks = {
  Navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ],
  Projects: [
    { label: 'FreelanceFlow', href: 'https://freelanceflow-blue-delta.vercel.app' },
    { label: 'Roamind', href: 'https://roamind.vercel.app' },
    { label: 'GitHub Profile', href: 'https://github.com/farhankh8' },
  ],
  Resources: [
    { label: 'Download Resume', href: '/mohammadfarhan_resume.pdf', download: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/khmohammadfarhan' },
    { label: 'Contact Me', href: '#contact' },
  ],
}

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/farhankh8', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/khmohammadfarhan', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:khmohammadfarhan11@gmail.com', label: 'Email' },
]

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [year, setYear] = useState(new Date().getFullYear())

  return (
    <footer
      ref={ref}
      style={{
        position: 'relative',
        padding: '80px 40px 40px',
        background: 'linear-gradient(180deg, #050510 0%, #0a0a1a 100%)',
        borderTop: '1px solid rgba(139, 92, 246, 0.15)',
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '200px', height: '1px', background: 'linear-gradient(90deg, transparent, #a855f7, transparent)' }} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '60px', marginBottom: '60px' }}>
          <div>
            <motion.h3
              style={{
                fontSize: '24px',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '20px',
              }}
            >
              KMF
            </motion.h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: 1.7, marginBottom: '24px' }}>
              Final-year BCA student crafting innovative solutions with AI, cloud computing, and modern web technologies.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.2, y: -3 }}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(139, 92, 246, 0.1)',
                    border: '1px solid rgba(139, 92, 246, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#a855f7',
                    fontSize: '18px',
                    transition: 'all 0.2s',
                  }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {Object.entries(quickLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{ color: '#ffffff', fontSize: '14px', fontWeight: 700, marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '2px' }}>
                {title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {links.map((link) => (
                  <li key={link.label} style={{ marginBottom: '12px' }}>
                    <motion.a
                      href={link.href}
                      {...(link.download ? { download: true } : {})}
                      whileHover={{ x: 5, color: '#a855f7' }}
                      style={{
                        color: 'rgba(255,255,255,0.5)',
                        fontSize: '14px',
                        transition: 'all 0.2s',
                        display: 'inline-block',
                      }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          paddingTop: '30px',
          borderTop: '1px solid rgba(139, 92, 246, 0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>
            © {year} KH Mohammad Farhan. All rights reserved.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            Built with <FaHeart size={12} color="#a855f7" /> using React, Three.js & Framer Motion
          </p>
        </div>
      </motion.div>
    </footer>
  )
}
