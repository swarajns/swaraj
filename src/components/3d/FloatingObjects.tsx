'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Torus, Box, Sphere, Octahedron } from '@react-three/drei'
import * as THREE from 'three'

export default function FloatingObjects() {
  const group = useRef<THREE.Group>(null)
  
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime() * 0.1
    }
  })

  return (
    <group ref={group}>
      {/* Floating Torus */}
      <Torus
        args={[3, 0.5, 16, 100]}
        position={[-4, 2, -5]}
        rotation={[Math.PI / 4, 0, 0]}
      >
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.5}
          wireframe
        />
      </Torus>

      {/* Floating Box */}
      <Box args={[1.5, 1.5, 1.5]} position={[4, -2, -3]}>
        <meshStandardMaterial
          color="#ec4899"
          emissive="#ec4899"
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </Box>

      {/* Floating Sphere */}
      <Sphere args={[1, 32, 32]} position={[0, 3, -6]}>
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={0.4}
          transparent
          opacity={0.8}
        />
      </Sphere>

      {/* Floating Octahedron */}
      <Octahedron args={[1.2]} position={[-3, -3, -4]}>
        <meshStandardMaterial
          color="#f59e0b"
          emissive="#f59e0b"
          emissiveIntensity={0.3}
          wireframe
        />
      </Octahedron>
    </group>
  )
}
