'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'

function Duck() {
  const { scene } = useGLTF('/assets/3d/duck.glb')
  return <primitive object={scene} scale={2} position={[0, -1, 0]} />
}

// default export로 변경
export default function ModelViewer() {
  return (
    <div className="h-[400px] w-full">
      <Canvas camera={{ position: [5, 5, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Duck />
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
    </div>
  )
} 