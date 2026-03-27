import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 2000 }) {
  const mesh = useRef<THREE.Points>(null);
  const light = useRef<THREE.PointLight>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate random positions and colors
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      // Mix purple and pink
      color.setHSL(Math.random() * 0.15 + 0.75, 0.8, 0.5);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return [positions, colors];
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      const time = state.clock.getElapsedTime();
      
      // Target rotation based on mouse pointer
      const targetX = mouse.current.y * 0.5;
      const targetY = mouse.current.x * 0.5;

      // Smoothly interpolate current rotation
      mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, targetX + time * 0.02, 0.05);
      mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, targetY + time * 0.05, 0.05);
    }
    if (light.current) {
      light.current.position.x = Math.sin(state.clock.getElapsedTime()) * 5;
      light.current.position.y = Math.cos(state.clock.getElapsedTime()) * 5;
    }
  });

  return (
    <>
      <pointLight ref={light} distance={10} intensity={2} color="#ff107a" />
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          vertexColors
          transparent
          opacity={0.6}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
}

export function ParticleBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-50 dark:opacity-100">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <Particles count={1500} />
      </Canvas>
    </div>
  );
}
