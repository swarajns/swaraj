'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import FloatingSphere from './FloatingSphere'

export default function Scene() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none w-screen h-screen">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <FloatingSphere />
        <Environment preset="night" />
        
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  )
}
