import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function MagneticButton({ children, href, onClick, style, className, ...props }) {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = (clientX - (left + width / 2)) * 0.3
    const y = (clientY - (top + height / 2)) * 0.3
    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      style={{ display: 'inline-block', cursor: 'pointer' }}
    >
      {children}
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} className={className} style={style} {...props}>
        {content}
      </a>
    )
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={className} style={style} {...props}>
        {content}
      </button>
    )
  }

  return content
}
