import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface ShapeProps {
  position: [number, number, number];
  color: string;
  speed: number;
  rotationOffset: number;
  scale: number;
  type: "dodecahedron" | "torus" | "icosahedron" | "octahedron";
}

function Shape({ position, color, speed, rotationOffset, scale, type }: ShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(t * speed + rotationOffset) * 0.4;
    meshRef.current.rotation.y = t * speed * 0.6;
    meshRef.current.position.y = position[1] + Math.sin(t * speed * 0.5 + rotationOffset) * 0.3;
  });

  const geometry = useMemo(() => {
    switch (type) {
      case "dodecahedron": return <dodecahedronGeometry args={[1, 0]} />;
      case "torus": return <torusGeometry args={[0.7, 0.3, 16, 50]} />;
      case "icosahedron": return <icosahedronGeometry args={[1, 0]} />;
      case "octahedron": return <octahedronGeometry args={[1, 0]} />;
    }
  }, [type]);

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {geometry}
      <meshPhysicalMaterial
        color={color}
        roughness={0.1}
        metalness={0.1}
        transmission={0.6}
        thickness={0.5}
        transparent
        opacity={0.85}
        envMapIntensity={1.5}
      />
    </mesh>
  );
}

function ParticleField() {
  const count = 180;
  const meshRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#6366F1"),
      new THREE.Color("#0EA5E9"),
      new THREE.Color("#A78BFA"),
      new THREE.Color("#38BDF8"),
    ];
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.025;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.055} vertexColors transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

export function FloatingShapes() {
  const { mouse } = useThree();
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += (mouse.x * 0.12 - groupRef.current.rotation.y) * 0.04;
    groupRef.current.rotation.x += (-mouse.y * 0.08 - groupRef.current.rotation.x) * 0.04;
  });

  const shapes: ShapeProps[] = [
    { position: [-3.5, 1.2, -1], color: "#818CF8", speed: 0.35, rotationOffset: 0, scale: 0.9, type: "dodecahedron" },
    { position: [3.8, -0.8, -2], color: "#38BDF8", speed: 0.28, rotationOffset: 1.2, scale: 1.1, type: "icosahedron" },
    { position: [-4.8, -1.5, -3], color: "#A78BFA", speed: 0.22, rotationOffset: 2.4, scale: 0.75, type: "torus" },
    { position: [4.2, 2, -1.5], color: "#7DD3FC", speed: 0.4, rotationOffset: 0.8, scale: 0.65, type: "octahedron" },
    { position: [0.8, 2.8, -2.5], color: "#C4B5FD", speed: 0.18, rotationOffset: 3, scale: 0.55, type: "dodecahedron" },
    { position: [-2, -2.5, -2], color: "#67E8F9", speed: 0.32, rotationOffset: 1.6, scale: 0.5, type: "icosahedron" },
  ];

  return (
    <group ref={groupRef}>
      <ParticleField />
      {shapes.map((s, i) => (
        <Shape key={i} {...s} />
      ))}
    </group>
  );
}
