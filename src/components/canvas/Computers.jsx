
import { Suspense, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.glb");
  const { viewport } = useThree();

  // Calculate responsive model size
  const responsiveFactor = Math.min(
    1,
    Math.max(0, (viewport.width - 4.2) / (16 - 4.2))
  );

  const scale = 0.45 + responsiveFactor * 0.3;
  const yPosition = -2.6 - responsiveFactor * 1.01;

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
        scale={scale}
        position={[0, yPosition, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia("(max-width: 600px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
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

        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;