import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Dr. Ahmed Khan',
    role: 'Professor & Head of BCA, Yenepoya University',
    text: 'Farhan is one of the most dedicated students I have worked with. His ability to grasp complex AI concepts and apply them practically is remarkable. He consistently goes beyond the curriculum.',
    rating: 5,
  },
  {
    name: 'Rahul Sharma',
    role: 'Senior Developer, Tech Corp',
    text: 'I had the pleasure of mentoring Farhan during his internship. His problem-solving skills and eagerness to learn new technologies like AWS and React made him stand out. Highly recommend him for any development role.',
    rating: 5,
  },
  {
    name: 'Priya Nair',
    role: 'Project Manager, Digital Solutions Inc',
    text: 'Farhan delivered our freelance project ahead of schedule with exceptional quality. His full-stack capabilities and attention to detail are impressive. He communicates well and takes ownership of his work.',
    rating: 5,
  },
  {
    name: 'Mohammed Ali',
    role: 'Peer & Team Lead, College Project',
    text: 'Working with Farhan on our capstone project was an excellent experience. He led the backend development and cloud deployment flawlessly. His leadership and technical skills are top-notch.',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (index) => {
    setActiveIndex(index)
  }

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section
      ref={ref}
      style={{
        padding: '120px 40px',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      <div style={{ position: 'absolute', top: '30%', left: '-15%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)', filter: 'blur(100px)', pointerEvents: 'none' }} />

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
        What People Say
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
        Testimonials
      </motion.h2>

      <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          style={{
            padding: '50px',
            background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.04))',
            border: '1px solid rgba(139, 92, 246, 0.2)',
            borderRadius: '24px',
            position: 'relative',
          }}
        >
          <FaQuoteLeft size={40} color="rgba(139, 92, 246, 0.2)" style={{ marginBottom: '24px' }} />

          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '30px', fontStyle: 'italic' }}>
            {testimonials[activeIndex].text}
          </p>

          <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
            {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
              <FaStar key={i} size={16} color="#a855f7" />
            ))}
          </div>

          <div>
            <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
              {testimonials[activeIndex].name}
            </h4>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>
              {testimonials[activeIndex].role}
            </p>
          </div>
        </motion.div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '40px' }}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              style={{
                width: index === activeIndex ? '32px' : '12px',
                height: '12px',
                borderRadius: '6px',
                background: index === activeIndex ? '#a855f7' : 'rgba(139, 92, 246, 0.3)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>

        <button
          onClick={goToPrev}
          aria-label="Previous testimonial"
          style={{
            position: 'absolute',
            top: '50%',
            left: '-60px',
            transform: 'translateY(-50%)',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'rgba(139, 92, 246, 0.1)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            color: '#a855f7',
            fontSize: '20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s',
          }}
        >
          ←
        </button>

        <button
          onClick={goToNext}
          aria-label="Next testimonial"
          style={{
            position: 'absolute',
            top: '50%',
            right: '-60px',
            transform: 'translateY(-50%)',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'rgba(139, 92, 246, 0.1)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            color: '#a855f7',
            fontSize: '20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s',
          }}
        >
          →
        </button>
      </div>
    </section>
  )
}
