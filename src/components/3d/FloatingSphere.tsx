'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'

export default function FloatingSphere() {
  const meshRef = useRef<any>(null)
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2
    }
  })

  return (
    <Sphere ref={meshRef} args={[1.5, 32, 32]} position={[0, 0, -5]}>
      <meshStandardMaterial 
        color="#a855f7" 
        metalness={0.8} 
        roughness={0.2}
        emissive="#a855f7"
        emissiveIntensity={0.1}
      />
    </Sphere>
  )
}
