import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.glb");
  return (
    <mesh>
      <hemisphereLight intensity={2.65} groundColor="white" />
      <pointLight intensity={2} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.45 : 0.75}
        position={isMobile ? [0, -2.6, -1.5] : [0, -3.61, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia("(max-width: 500px)").matches
  );
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ pointerEvents: isMobile ? "none" : "auto" }}
    >
      <Suspense fallback={null}>
        {!isMobile && (
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        )}
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
