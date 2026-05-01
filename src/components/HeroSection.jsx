import { useRef, useState, useEffect, useLayoutEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import * as THREE from 'three'

const roles = [
  { text: 'Full Stack Developer', color: '#8b5cf6' },
  { text: 'AI Enthusiast', color: '#06b6d4' },
  { text: 'Accounts & Finance Assistant', color: '#10b981' },
]

function FloatingShape({ position, color, speed = 1, type = 'sphere' }) {
  const meshRef = useRef()
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2 * speed
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3 * speed
    }
  })

  return (
    <Float speed={speed} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        {type === 'sphere' ? (
          <sphereGeometry args={[0.6, 32, 32]} />
        ) : type === 'box' ? (
          <boxGeometry args={[0.8, 0.8, 0.8]} />
        ) : type === 'torus' ? (
          <torusGeometry args={[0.5, 0.2, 16, 32]} />
        ) : type === 'octahedron' ? (
          <octahedronGeometry args={[0.6, 0]} />
        ) : (
          <icosahedronGeometry args={[0.5, 0]} />
        )}
        <MeshDistortMaterial
          color={color}
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  )
}

function ParticleField() {
  const count = 2000
  const mesh = useRef()

  const particles = useRef(
    Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
      ],
      scale: Math.random() * 0.1 + 0.05,
    }))
  )

  useLayoutEffect(() => {
    if (!mesh.current) return
    const temp = new THREE.Object3D()
    particles.current.forEach((p, i) => {
      temp.position.set(...p.position)
      temp.scale.setScalar(p.scale)
      temp.updateMatrix()
      mesh.current.setMatrixAt(i, temp.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  }, [])

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.05
    }
  })

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial color="#8b5cf6" />
    </instancedMesh>
  )
}

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2
    const y = (e.clientY / window.innerHeight - 0.5) * 2
    setMousePos({ x, y })
  }

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div style={{ 
        position: 'absolute', inset: 0, zIndex: 1,
        transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`,
        transition: 'transform 0.3s ease-out',
      }}>
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} color="#a855f7" intensity={0.5} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

          <FloatingShape position={[-4, 2, -2]} color="#6366f1" speed={1.2} type="sphere" />
          <FloatingShape position={[4, -2, -1]} color="#8b5cf6" speed={0.8} type="torus" />
          <FloatingShape position={[-3, -3, -3]} color="#a855f7" speed={1} type="octahedron" />
          <FloatingShape position={[3, 3, -2]} color="#ec4899" speed={1.5} type="icosahedron" />
          <FloatingShape position={[0, -4, -4]} color="#6366f1" speed={0.6} type="box" />

          <ParticleField />
        </Canvas>
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '900px',
          padding: '0 20px',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.p
            style={{
              fontSize: '16px',
              color: '#a855f7',
              fontWeight: 600,
              letterSpacing: '4px',
              marginBottom: '20px',
              textTransform: 'uppercase',
            }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Welcome to my universe
          </motion.p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{
            fontSize: 'clamp(48px, 8vw, 96px)',
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #ffffff 0%, #6366f1 50%, #a855f7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          KH Mohammad
          <br />
          Farhan
        </motion.h1>

        {/* Typewriter Role */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '30px',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={roleIndex}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.5 }}
              style={{
                fontSize: 'clamp(18px, 3vw, 28px)',
                color: roles[roleIndex].color,
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: roles[roleIndex].color, boxShadow: `0 0 20px ${roles[roleIndex].color}` }} />
              {roles[roleIndex].text}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.5)',
            maxWidth: '600px',
            margin: '0 auto 40px',
            lineHeight: 1.6,
          }}
        >
          Final-year BCA student at Yenepoya University crafting innovative solutions
          with AI, cloud computing, and modern web technologies.
        </motion.p>

        {/* Open to Work Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '999px',
            marginBottom: '30px',
          }}
        >
          <span className="pulse-dot" style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 10px #10b981', display: 'inline-block' }} />
          <span style={{ color: '#10b981', fontSize: '13px', fontWeight: 600 }}>Open to work in UAE / GCC / India</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '16px 32px',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: 600,
              color: '#fff',
              boxShadow: '0 10px 40px rgba(99, 102, 241, 0.4)',
            }}
          >
            View My Work
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '16px 32px',
              background: 'rgba(139, 92, 246, 0.1)',
              border: '2px solid #8b5cf6',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: 600,
              color: '#a855f7',
            }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{
            display: 'flex',
            gap: '24px',
            justifyContent: 'center',
            marginTop: '50px',
          }}
        >
          {[
            { icon: FaGithub, href: 'https://github.com/farhankh8', label: 'GitHub' },
            { icon: FaLinkedin, href: 'https://www.linkedin.com/in/khmohammadfarhan', label: 'LinkedIn' },
            { icon: FaEnvelope, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=khmohammadfarhan11@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'rgba(139, 92, 246, 0.1)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                color: '#a855f7',
              }}
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#about" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '32px' }}>
          ↓
        </a>
      </motion.div>
    </section>
  )
}