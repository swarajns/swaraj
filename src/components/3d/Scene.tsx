'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import FloatingObjects from './FloatingObjects'
import ParticleField from './ParticleField'

export default function Scene() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={75} />
          
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />
          <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={1} color="#06b6d4" />
          
          {/* 3D Objects */}
          <FloatingObjects />
          <ParticleField />
          
          {/* Environment */}
          <Environment preset="night" />
          
          {/* Post Processing */}
          <EffectComposer>
            <Bloom luminanceThreshold={0.3} luminanceSmoothing={0.9} intensity={0.5} />
          </EffectComposer>
          
          {/* Controls (disabled for fixed camera) */}
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Suspense>
      </Canvas>
    </div>
  )
}
