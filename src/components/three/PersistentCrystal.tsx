import { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

// Position on screen for each slide index
// [x, y, z] in Three.js world coords (camera at z=7, fov 50)
const SLIDE_POSITIONS: [number, number, number][] = [
  [3.2,  1.4,  0],   // 0 Hero       — правый верх
  [-3.0, -1.8, 0],   // 1 About      — левый низ
  [3.0, -2.0,  0],   // 2 Experience — правый низ
  [-3.2, 1.6,  0],   // 3 Skills     — левый верх
  [0.0,  2.5,  0],   // 4 AI         — центр верх
  [2.8, -0.4,  0],   // 5 Resume     — правый центр
];

// Rotation speed per slide (slow, meditative)
const ROTATION_SPEEDS = [
  [0.003, 0.005, 0.002],
  [0.005, 0.002, 0.004],
  [0.002, 0.006, 0.003],
  [0.004, 0.003, 0.005],
  [0.006, 0.002, 0.002],
  [0.003, 0.004, 0.006],
];

// Base scale per slide — creates "near/far" illusion
const SLIDE_SCALES = [1.15, 0.70, 1.35, 0.85, 1.55, 0.95];

function Torus({ slideIndex }: { slideIndex: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const rotSpeed = useRef(ROTATION_SPEEDS[0]);
  const targetPos = useRef(new THREE.Vector3(...SLIDE_POSITIONS[0]));
  const targetScale = useRef(SLIDE_SCALES[0]);
  const currentScale = useRef(SLIDE_SCALES[0]);

  useEffect(() => {
    const [x, y, z] = SLIDE_POSITIONS[slideIndex] ?? [3, 1, 0];
    targetPos.current.set(x, y, z);
    rotSpeed.current = ROTATION_SPEEDS[slideIndex % ROTATION_SPEEDS.length];
    targetScale.current = SLIDE_SCALES[slideIndex] ?? 1.0;
  }, [slideIndex]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!meshRef.current || !groupRef.current) return;

    // Position lerp
    groupRef.current.position.x +=
      (targetPos.current.x - groupRef.current.position.x) * 0.09;
    groupRef.current.position.z +=
      (targetPos.current.z - groupRef.current.position.z) * 0.09;
    const targetY = targetPos.current.y + Math.sin(t * 0.35) * 0.18;
    groupRef.current.position.y +=
      (targetY - groupRef.current.position.y) * 0.09;

    // Scale lerp toward target + slow breathing on top
    currentScale.current += (targetScale.current - currentScale.current) * 0.055;
    const breathe = 1 + Math.sin(t * 0.5) * 0.07;
    const s = currentScale.current * breathe;
    groupRef.current.scale.setScalar(s);

    const [rx, ry, rz] = rotSpeed.current;
    meshRef.current.rotation.x += rx;
    meshRef.current.rotation.y += ry;
    meshRef.current.rotation.z += rz;

    if (innerRef.current) {
      innerRef.current.rotation.x -= rx * 0.6;
      innerRef.current.rotation.z += rz * 0.8;
    }
  });

  return (
    <group ref={groupRef} position={SLIDE_POSITIONS[0]}>
      {/* Main torus — iridescent */}
      <mesh ref={meshRef}>
        <torusGeometry args={[1.1, 0.38, 48, 120]} />
        <meshPhysicalMaterial
          color="#c7d2fe"
          roughness={0.04}
          metalness={0.0}
          transmission={0.15}
          iridescence={1.0}
          iridescenceIOR={1.9}
          iridescenceThicknessRange={[80, 900]}
          clearcoat={1.0}
          clearcoatRoughness={0.05}
          envMapIntensity={2.5}
          transparent
          opacity={0.88}
        />
      </mesh>

      {/* Inner torus — complementary, offset rotation */}
      <mesh ref={innerRef} scale={0.68}>
        <torusGeometry args={[1.1, 0.22, 32, 80]} />
        <meshPhysicalMaterial
          color="#a5f3fc"
          roughness={0.08}
          metalness={0.0}
          iridescence={0.8}
          iridescenceIOR={1.5}
          iridescenceThicknessRange={[200, 600]}
          clearcoat={0.6}
          transparent
          opacity={0.55}
          envMapIntensity={2}
        />
      </mesh>

      {/* Outer glow ring — wireframe */}
      <mesh scale={1.22}>
        <torusGeometry args={[1.1, 0.06, 8, 80]} />
        <meshBasicMaterial color="#818cf8" transparent opacity={0.12} />
      </mesh>
    </group>
  );
}

function ParticleHalo({ slideIndex }: { slideIndex: number }) {
  const ref = useRef<THREE.Points>(null);
  const count = 80;
  const haloTarget = useRef(new THREE.Vector3(...SLIDE_POSITIONS[0]));

  const { positions, colors } = (() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#818cf8"),
      new THREE.Color("#67e8f9"),
      new THREE.Color("#c4b5fd"),
      new THREE.Color("#a5f3fc"),
    ];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const r = 1.8 + (Math.random() - 0.5) * 1.0;
      pos[i * 3]     = Math.cos(angle) * r;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 1.0;
      pos[i * 3 + 2] = Math.sin(angle) * r * 0.5;
      const c = palette[i % palette.length];
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
    }
    return { positions: pos, colors: col };
  })();

  useEffect(() => {
    const [x, y, z] = SLIDE_POSITIONS[slideIndex] ?? [3, 1, 0];
    haloTarget.current.set(x, y, z);
  }, [slideIndex]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.y = t * 0.06;
    // Slightly slower follow than torus for parallax feel
    ref.current.position.x += (haloTarget.current.x - ref.current.position.x) * 0.07;
    ref.current.position.z += (haloTarget.current.z - ref.current.position.z) * 0.07;
    const ty = haloTarget.current.y + Math.sin(t * 0.35) * 0.18;
    ref.current.position.y += (ty - ref.current.position.y) * 0.07;
  });

  return (
    <points ref={ref} position={SLIDE_POSITIONS[0]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.042} vertexColors transparent opacity={0.55} sizeAttenuation />
    </points>
  );
}

interface Props {
  slideIndex: number;
}

export function PersistentCrystal({ slideIndex }: Props) {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 7], fov: 50 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 4, 3]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-3, 3, 2]} intensity={1.0} color="#818cf8" />
        <pointLight position={[4, -2, 1]} intensity={0.7} color="#67e8f9" />
        <Suspense fallback={null}>
          <Torus slideIndex={slideIndex} />
          <ParticleHalo slideIndex={slideIndex} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
