import { useState, useEffect, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'
import * as THREE from 'three'

function RotatingGeometry() {
  const meshRef = useRef()
  const ringRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
      ringRef.current.rotation.z = state.clock.getElapsedTime() * 0.4
    }
  })

  return (
    <group>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.2, 0]} />
          <meshStandardMaterial
            color="#8b5cf6"
            wireframe
            emissive="#6366f1"
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={1} floatIntensity={0.8}>
        <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.8, 0.02, 16, 100]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#a855f7"
            emissiveIntensity={1}
            metalness={1}
            roughness={0}
          />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh rotation={[0, 0, Math.PI / 4]}>
          <torusGeometry args={[2.2, 0.015, 16, 100]} />
          <meshStandardMaterial
            color="#6366f1"
            emissive="#6366f1"
            emissiveIntensity={0.8}
            metalness={1}
            roughness={0}
          />
        </mesh>
      </Float>
    </group>
  )
}

function ParticleExplosion({ trigger }) {
  const count = 500
  const mesh = useRef()

  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.5
      ),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ),
      scale: Math.random() * 0.05 + 0.02,
    }))
  }, [])

  useFrame((state, delta) => {
    if (trigger && mesh.current) {
      const temp = new THREE.Object3D()
      particles.forEach((p, i) => {
        p.position.add(p.velocity.clone().multiplyScalar(delta))
        p.velocity.multiplyScalar(0.98)
        temp.position.copy(p.position)
        temp.scale.setScalar(p.scale)
        temp.updateMatrix()
        mesh.current.setMatrixAt(i, temp.matrix)
      })
      mesh.current.instanceMatrix.needsUpdate = true
    }
  })

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[0.02, 8, 8]} />
      <meshBasicMaterial color="#a855f7" />
    </instancedMesh>
  )
}

const loadingPhases = [
  { text: 'INITIALIZING', range: [0, 25] },
  { text: 'LOADING ASSETS', range: [25, 50] },
  { text: 'BUILDING SCENE', range: [50, 75] },
  { text: 'PREPARING EXPERIENCE', range: [75, 100] },
]

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [triggerExplosion, setTriggerExplosion] = useState(false)

  useEffect(() => {
    const duration = 3500
    const interval = 16
    const increment = 100 / (duration / interval)

    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + increment * (0.5 + Math.random() * 0.5)
        if (next >= 100) {
          clearInterval(timer)
          setIsComplete(true)
          setTriggerExplosion(true)
          return 100
        }
        return next
      })
    }, interval)

    return () => clearInterval(timer)
  }, [])

  const currentPhase = loadingPhases.find(
    phase => progress >= phase.range[0] && progress < phase.range[1]
  ) || loadingPhases[loadingPhases.length - 1]

  return (
    <motion.div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#050510',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        overflow: 'hidden',
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div style={{ position: 'absolute', inset: 0, opacity: 0.4 }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} intensity={1} color="#a855f7" />
          <pointLight position={[-5, -5, 5]} intensity={0.5} color="#6366f1" />
          <RotatingGeometry />
          <ParticleExplosion trigger={triggerExplosion} />
        </Canvas>
      </div>

      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <div style={{ marginBottom: '60px' }}>
          {'KH MOHAMMAD FARHAN'.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03, duration: 0.5 }}
              style={{
                fontSize: 'clamp(24px, 4vw, 40px)',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </div>

        <div style={{ width: 'clamp(200px, 40vw, 400px)', margin: '0 auto' }}>
          <div style={{
            height: '2px',
            background: 'rgba(139, 92, 246, 0.2)',
            borderRadius: '1px',
            overflow: 'hidden',
            marginBottom: '20px',
          }}>
            <motion.div
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #a855f7, #ec4899)',
                borderRadius: '1px',
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.8)',
              }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <motion.p
              key={currentPhase.text}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                fontSize: '11px',
                color: 'rgba(255,255,255,0.5)',
                letterSpacing: '3px',
                fontWeight: 600,
              }}
            >
              {currentPhase.text}
            </motion.p>

            <motion.p
              style={{
                fontSize: '12px',
                color: '#a855f7',
                fontWeight: 700,
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              {Math.floor(progress)}%
            </motion.p>
          </div>
        </div>
      </div>

      <motion.div
        style={{ position: 'absolute', inset: 0, background: '#050510', pointerEvents: 'none' }}
        animate={isComplete ? { opacity: [0, 1] } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
    </motion.div>
  )
}
