import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';


const Earth = () => {
  const earth = useGLTF('./planet/scene.glb');

  return (
    <primitive 
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
      style={{ pointerEvents: "none" }}
      >
      <Suspense fallback={null}>
        <OrbitControls 
        autoRotate enableZoom={false} 
        max-PolarAngle={Math.PI / 2}
        min-PolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default EarthCanvas;