import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaSpinner, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle, sending, success, error

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    const serviceId = 'service_jyxeq9h'
    const templateId = 'template_kgzc7o5'
    const publicKey = 'F18OtQtpQpinAJBLX'

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      })
      .catch((error) => {
        console.error('FAILED...', error)
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      })
  }

  const isDisabled = status === 'sending' || status === 'success'

  const contactLinks = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'khmohammadfarhan11@gmail.com',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=khmohammadfarhan11@gmail.com',
      color: '#EA4335',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/khmohammadfarhan',
      color: '#0077B5',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: '@farhankh8',
      href: 'https://github.com/farhankh8',
      color: '#ffffff',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Mangaluru, Karnataka, India',
      href: '#',
      color: '#a855f7',
    },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: '120px 40px',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      <div style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)', filter: 'blur(100px)', pointerEvents: 'none' }} />

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
        Get in touch
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
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
        Let's Work Together
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '30px', color: '#ffffff' }}>
            Contact Information
          </h3>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '40px' }}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {contactLinks.map(({ icon: Icon, label, value, href, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  padding: '20px',
                  background: 'rgba(139,92,246,0.05)',
                  border: '1px solid rgba(139,92,246,0.15)',
                  borderRadius: '16px',
                  transition: 'all 0.3s',
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    background: `${color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={24} color={color} />
                </div>
                <div>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>
                    {label}
                  </p>
                  <p style={{ fontSize: '15px', fontWeight: 600, color: '#ffffff' }}>
                    {value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <form onSubmit={handleSubmit} style={{
            padding: '40px',
            background: 'rgba(139,92,246,0.05)',
            border: '1px solid rgba(139,92,246,0.15)',
            borderRadius: '24px',
          }}>
            <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '30px', color: '#ffffff' }}>
              Send a Message
            </h3>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                style={{
                  width: '100%',
                  padding: '16px',
                  background: 'rgba(139,92,246,0.1)',
                  border: '1px solid rgba(139,92,246,0.2)',
                  borderRadius: '12px',
                  color: '#ffffff',
                  fontSize: '15px',
                  outline: 'none',
                  transition: 'all 0.3s',
                }}
                placeholder="Your name"
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                style={{
                  width: '100%',
                  padding: '16px',
                  background: 'rgba(139,92,246,0.1)',
                  border: '1px solid rgba(139,92,246,0.2)',
                  borderRadius: '12px',
                  color: '#ffffff',
                  fontSize: '15px',
                  outline: 'none',
                  transition: 'all 0.3s',
                }}
                placeholder="your@email.com"
              />
            </div>

            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                style={{
                  width: '100%',
                  padding: '16px',
                  background: 'rgba(139,92,246,0.1)',
                  border: '1px solid rgba(139,92,246,0.2)',
                  borderRadius: '12px',
                  color: '#ffffff',
                  fontSize: '15px',
                  outline: 'none',
                  resize: 'vertical',
                  transition: 'all 0.3s',
                  fontFamily: 'inherit',
                }}
                placeholder="Your message..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isDisabled}
              whileHover={!isDisabled ? { scale: 1.02 } : {}}
              whileTap={!isDisabled ? { scale: 0.98 } : {}}
              style={{
                width: '100%',
                padding: '18px',
                background: status === 'error' 
                  ? 'linear-gradient(135deg, #ef4444, #b91c1c)' 
                  : status === 'success' 
                    ? 'linear-gradient(135deg, #10b981, #059669)'
                    : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                border: 'none',
                borderRadius: '12px',
                color: '#ffffff',
                fontSize: '16px',
                fontWeight: 600,
                cursor: isDisabled ? 'not-allowed' : 'pointer',
                opacity: isDisabled ? 0.8 : 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                boxShadow: status === 'error' 
                  ? '0 10px 40px rgba(239,68,68,0.4)' 
                  : status === 'success' 
                    ? '0 10px 40px rgba(16,185,129,0.4)'
                    : '0 10px 40px rgba(99,102,241,0.4)',
                transition: 'all 0.3s',
              }}
            >
              {status === 'sending' ? (
                <>
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                    <FaSpinner size={16} />
                  </motion.div>
                  Sending...
                </>
              ) : status === 'success' ? (
                <>
                  <FaCheckCircle />
                  Message Sent Successfully!
                </>
              ) : status === 'error' ? (
                <>
                  <FaExclamationCircle />
                  Failed, Try Again
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
