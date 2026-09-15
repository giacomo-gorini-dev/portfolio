import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { LayerMaterial, Depth, Color, Noise } from 'lamina';

function GradientPlane() {
  const materialRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime() * 0.2;

    if (materialRef.current) {
      const depthLayer = materialRef.current.layers[1];
      if (depthLayer) {
        depthLayer.origin.x = Math.sin(time) * 3;
        depthLayer.origin.y = Math.cos(time * 0.8) * 3;
      }
    }
  });

  return (
    <mesh scale={[20, 20, 1]}>
      <planeGeometry args={[1, 1]} />
      <LayerMaterial ref={materialRef}>
        {/* Colore di base: Blu scuro */}
        <Color color="#070a1e" />

        <Depth
          colorA="#052d3a" 
          colorB="#1a1919" 
          alpha={0.85}
          mode="normal"
          near={-2}
          far={6}
          origin={[0, 0, 0]}
        />

        <Noise color="#ffffff" mode="overlay" alpha={0.05} scale={2} />
      </LayerMaterial>
    </mesh>
  );
}

export default function SpiralBackground() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        backgroundColor: '#03050d',
      }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
        <GradientPlane />
      </Canvas>
    </div>
  );
}