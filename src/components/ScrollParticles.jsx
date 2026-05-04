import { useRef, useEffect } from 'react'

export default function ScrollParticles() {
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDelta = Math.abs(currentScrollY - lastScrollY.current)
      
      if (scrollDelta > 10) {
        createParticle(window.innerWidth / 2, currentScrollY + window.innerHeight / 2)
        lastScrollY.current = currentScrollY
      }
    }

    const createParticle = (x, y) => {
      const particle = document.createElement('div')
      particle.className = 'scroll-particle'
      particle.style.left = `${x + (Math.random() - 0.5) * 200}px`
      particle.style.top = `${y + (Math.random() - 0.5) * 100}px`
      particle.style.width = `${Math.random() * 6 + 2}px`
      particle.style.height = particle.style.width
      
      document.body.appendChild(particle)
      
      setTimeout(() => {
        particle.remove()
      }, 1000)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return null
}
