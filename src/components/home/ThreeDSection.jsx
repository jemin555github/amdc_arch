"use client";
import { useRef, useMemo, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, BakeShadows, Preload, useGLTF, Html, Loader, Center } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

/* ========================================================
   REUSABLE MATERIALS
   ======================================================== */
function useMaterials() {
  const gold = useMemo(() => new THREE.MeshStandardMaterial({ color: "#C9A96E", roughness: 0.3, metalness: 0.6 }), []);
  const white = useMemo(() => new THREE.MeshStandardMaterial({ color: "#F5F0EB", roughness: 0.4, metalness: 0.1 }), []);
  const glass = useMemo(() => new THREE.MeshPhysicalMaterial({ color: "#88CCEE", roughness: 0, metalness: 0.1, transmission: 0.9, thickness: 0.3, transparent: true, opacity: 0.4 }), []);
  const dark = useMemo(() => new THREE.MeshStandardMaterial({ color: "#2C2C2C", roughness: 0.6, metalness: 0.3 }), []);
  const green = useMemo(() => new THREE.MeshStandardMaterial({ color: "#4A7C59", roughness: 0.8 }), []);
  const wood = useMemo(() => new THREE.MeshStandardMaterial({ color: "#8B6914", roughness: 0.7, metalness: 0.05 }), []);
  const concrete = useMemo(() => new THREE.MeshStandardMaterial({ color: "#D4D0CB", roughness: 0.85, metalness: 0 }), []);
  return { gold, white, glass, dark, green, wood, concrete };
}

/* ========================================================
   VILLA MODEL — Residential projects
   ======================================================== */
function VillaModel({ rotY = 0 }) {
  const groupRef = useRef();
  const { gold, white, glass, dark, green } = useMaterials();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += (rotY - groupRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]} scale={1.2}>
      <mesh position={[0, 0.75, 0]} material={white} castShadow receiveShadow><boxGeometry args={[4, 1.5, 2.5]} /></mesh>
      <mesh position={[0.8, 2, 0]} material={white} castShadow receiveShadow><boxGeometry args={[3, 1, 2.8]} /></mesh>
      <mesh position={[2.5, 2, 0]} material={dark} castShadow><boxGeometry args={[0.8, 0.15, 3]} /></mesh>
      <mesh position={[0, 0.75, 1.26]} material={glass}><boxGeometry args={[3.5, 1.2, 0.05]} /></mesh>
      <mesh position={[0.8, 2, 1.41]} material={glass}><boxGeometry args={[2.5, 0.7, 0.05]} /></mesh>
      <mesh position={[0, 1.52, 1.26]} material={gold}><boxGeometry args={[4.1, 0.04, 0.08]} /></mesh>
      <mesh position={[0.8, 2.51, 0]} material={gold}><boxGeometry args={[3.1, 0.04, 2.9]} /></mesh>
      <mesh position={[0, -0.05, 2.5]} rotation={[-Math.PI / 2, 0, 0]} material={glass}><planeGeometry args={[3, 1.5]} /></mesh>
      <mesh position={[0, -0.1, 2.5]} material={gold}><boxGeometry args={[3.1, 0.05, 1.6]} /></mesh>
      <mesh position={[0, -0.05, 0]} material={dark} receiveShadow><boxGeometry args={[5.5, 0.1, 5]} /></mesh>
      <mesh position={[-2, 0.75, 1.1]} material={gold} castShadow><cylinderGeometry args={[0.06, 0.06, 1.5, 8]} /></mesh>
      <mesh position={[-1.3, 0.75, 1.1]} material={gold} castShadow><cylinderGeometry args={[0.06, 0.06, 1.5, 8]} /></mesh>
      <mesh position={[-1.65, 1.55, 1.3]} material={dark} castShadow><boxGeometry args={[1, 0.06, 0.6]} /></mesh>
      <mesh position={[2.5, 0.15, 1.8]} material={green}><sphereGeometry args={[0.25, 8, 8]} /></mesh>
      <mesh position={[-2.5, 0.15, 1.5]} material={green}><sphereGeometry args={[0.2, 8, 8]} /></mesh>
    </group>
  );
}

/* ========================================================
   TOWER MODEL — Commercial projects
   ======================================================== */
function TowerModel({ rotY = 0 }) {
  const groupRef = useRef();
  const { gold, white, glass, dark } = useMaterials();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += (rotY - groupRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1.5, 0]} scale={0.9}>
      {/* Main tower body */}
      <mesh position={[0, 2.5, 0]} material={white} castShadow receiveShadow><boxGeometry args={[2, 5, 1.8]} /></mesh>
      {/* Glass facade panels */}
      <mesh position={[0, 2.5, 0.92]} material={glass}><boxGeometry args={[1.8, 4.6, 0.05]} /></mesh>
      <mesh position={[0, 2.5, -0.92]} material={glass}><boxGeometry args={[1.8, 4.6, 0.05]} /></mesh>
      <mesh position={[1.02, 2.5, 0]} material={glass}><boxGeometry args={[0.05, 4.6, 1.6]} /></mesh>
      <mesh position={[-1.02, 2.5, 0]} material={glass}><boxGeometry args={[0.05, 4.6, 1.6]} /></mesh>
      {/* Gold accent floors */}
      {[1.5, 2.5, 3.5, 4.5].map((y, i) => (
        <mesh key={i} position={[0, y, 0]} material={gold}><boxGeometry args={[2.1, 0.04, 1.9]} /></mesh>
      ))}
      {/* Crown */}
      <mesh position={[0, 5.2, 0]} material={gold} castShadow><boxGeometry args={[2.2, 0.15, 2]} /></mesh>
      <mesh position={[0, 5.5, 0]} material={dark}><boxGeometry args={[0.6, 0.5, 0.6]} /></mesh>
      {/* Lobby entrance */}
      <mesh position={[0, 0.15, 1.2]} material={glass}><boxGeometry args={[1.2, 0.6, 0.4]} /></mesh>
      {/* Base */}
      <mesh position={[0, -0.05, 0]} material={dark} receiveShadow><boxGeometry args={[3.5, 0.1, 3]} /></mesh>
      {/* Side wing */}
      <mesh position={[1.8, 0.75, 0]} material={white} castShadow><boxGeometry args={[1.2, 1.5, 1.5]} /></mesh>
      <mesh position={[1.8, 0.75, 0.77]} material={glass}><boxGeometry args={[1, 1.2, 0.05]} /></mesh>
    </group>
  );
}

/* ========================================================
   INTERIOR MODEL — Interior projects
   ======================================================== */
function InteriorModel({ rotY = 0 }) {
  const groupRef = useRef();
  const { gold, white, glass, dark, wood } = useMaterials();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += (rotY - groupRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.3, 0]} scale={1.1}>
      {/* Room floor */}
      <mesh position={[0, 0, 0]} material={wood} receiveShadow><boxGeometry args={[4, 0.1, 3]} /></mesh>
      {/* Back wall */}
      <mesh position={[0, 1.25, -1.5]} material={white} castShadow><boxGeometry args={[4, 2.5, 0.1]} /></mesh>
      {/* Side wall left */}
      <mesh position={[-2, 1.25, 0]} material={white} castShadow><boxGeometry args={[0.1, 2.5, 3]} /></mesh>
      {/* Window on back wall */}
      <mesh position={[1.2, 1.5, -1.44]} material={glass}><boxGeometry args={[1.2, 1.2, 0.05]} /></mesh>
      {/* Sofa */}
      <mesh position={[-0.5, 0.3, 0.5]} material={dark}><boxGeometry args={[1.8, 0.5, 0.8]} /></mesh>
      <mesh position={[-0.5, 0.6, 0.1]} material={dark}><boxGeometry args={[1.8, 0.3, 0.15]} /></mesh>
      {/* Coffee table */}
      <mesh position={[0.8, 0.2, 0.5]} material={gold}><boxGeometry args={[0.6, 0.3, 0.4]} /></mesh>
      {/* Floor lamp */}
      <mesh position={[-1.5, 0.7, 0.8]} material={dark}><cylinderGeometry args={[0.03, 0.03, 1.3, 8]} /></mesh>
      <mesh position={[-1.5, 1.4, 0.8]} material={gold}><sphereGeometry args={[0.12, 12, 12]} /></mesh>
      {/* Ceiling accent */}
      <mesh position={[0, 2.5, 0]} material={white}><boxGeometry args={[4, 0.05, 3]} /></mesh>
      <mesh position={[0, 2.45, 0]} material={gold}><boxGeometry args={[1, 0.03, 1]} /></mesh>
      {/* Rug */}
      <mesh position={[0, 0.06, 0.5]} rotation={[-Math.PI / 2, 0, 0]} material={gold}><planeGeometry args={[2.5, 1.5]} /></mesh>
    </group>
  );
}

/* ========================================================
   LANDSCAPE / GARDEN MODEL — Landscape projects
   ======================================================== */
function LandscapeModel({ rotY = 0 }) {
  const groupRef = useRef();
  const { gold, white, glass, dark, green, concrete } = useMaterials();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += (rotY - groupRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.3, 0]} scale={1.0}>
      {/* Terrain base */}
      <mesh position={[0, 0, 0]} material={green} receiveShadow><boxGeometry args={[5, 0.15, 4]} /></mesh>
      {/* Stone pathway */}
      {[-1, -0.3, 0.4, 1.1, 1.8].map((x, i) => (
        <mesh key={i} position={[x, 0.1, 0.3]} material={concrete}><boxGeometry args={[0.5, 0.04, 0.7]} /></mesh>
      ))}
      {/* Pool */}
      <mesh position={[-1.2, 0.05, -1]} rotation={[-Math.PI / 2, 0, 0]} material={glass}><planeGeometry args={[2, 1.2]} /></mesh>
      <mesh position={[-1.2, 0, -1]} material={concrete}><boxGeometry args={[2.1, 0.08, 1.3]} /></mesh>
      {/* Trees */}
      {[[1.8, 1.5], [-2, -1], [2, -1.2], [-1.8, 1.2]].map(([x, z], i) => (
        <group key={i} position={[x, 0, z]}>
          <mesh position={[0, 0.4, 0]} material={dark}><cylinderGeometry args={[0.05, 0.07, 0.7, 6]} /></mesh>
          <mesh position={[0, 0.9, 0]} material={green}><sphereGeometry args={[0.35, 8, 8]} /></mesh>
        </group>
      ))}
      {/* Pergola */}
      <mesh position={[1.2, 0.5, -0.8]} material={gold}><cylinderGeometry args={[0.04, 0.04, 1, 6]} /></mesh>
      <mesh position={[2.4, 0.5, -0.8]} material={gold}><cylinderGeometry args={[0.04, 0.04, 1, 6]} /></mesh>
      <mesh position={[1.2, 0.5, -1.6]} material={gold}><cylinderGeometry args={[0.04, 0.04, 1, 6]} /></mesh>
      <mesh position={[2.4, 0.5, -1.6]} material={gold}><cylinderGeometry args={[0.04, 0.04, 1, 6]} /></mesh>
      <mesh position={[1.8, 1.02, -1.2]} material={gold}><boxGeometry args={[1.5, 0.04, 1.1]} /></mesh>
      {/* Bench */}
      <mesh position={[0, 0.2, 1.4]} material={dark}><boxGeometry args={[1, 0.06, 0.35]} /></mesh>
      <mesh position={[-0.45, 0.12, 1.4]} material={dark}><boxGeometry args={[0.06, 0.22, 0.35]} /></mesh>
      <mesh position={[0.45, 0.12, 1.4]} material={dark}><boxGeometry args={[0.06, 0.22, 0.35]} /></mesh>
    </group>
  );
}

/* ========================================================
   DYNAMIC GLB MODEL LOADER
   ======================================================== */
export function DynamicGLBModel({ modelUrl = "/3d_models/building.glb", rotY = 0, scale = 1.0, position = [0, 0, 0] }) {
  const { scene } = useGLTF(modelUrl);
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current && rotY !== undefined && rotY !== 0) {
      groupRef.current.rotation.y += (rotY - groupRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <Center top>
        <primitive object={scene.clone()} />
      </Center>
    </group>
  );
}

/* ========================================================
   SCENE — shared lighting + environment
   ======================================================== */
function Scene({ children }) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow shadow-mapSize={[1024, 1024]} color="#FFF5E6" />
      <pointLight position={[-5, 5, -5]} intensity={0.5} color="#C9A96E" />
      <spotLight position={[0, 10, 0]} intensity={0.8} angle={0.5} penumbra={0.5} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.15, 0]} receiveShadow>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color="#E8E4DF" roughness={0.8} metalness={0.2} />
      </mesh>
      {children}
    </>
  );
}

/* ========================================================
   AMBIENT PARTICLES
   ======================================================== */
function AmbientParticles() {
  const count = 150;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 40;     // x
      arr[i * 3 + 1] = Math.random() * 30;         // y
      arr[i * 3 + 2] = (Math.random() - 0.5) * 40; // z
    }
    return arr;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.06} color="#C9A96E" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

/* ========================================================
   LUXURY TOWER MODEL (Target for Drone Shot)
   ======================================================== */
function LuxuryTowerModel({ modelUrl = "/3d_models/building.glb" }) {
  const { gold } = useMaterials();
  const { scene } = useGLTF(modelUrl);

  return (
    <group position={[0, -1.5, 0]}>
      {/* Realistic Ground Platform */}
      <mesh position={[0, -0.1, 0]} receiveShadow>
        <cylinderGeometry args={[12, 12, 0.2, 64]} />
        <meshStandardMaterial color="#E8E4DF" roughness={0.2} metalness={0.1} />
      </mesh>
      {/* Gold Ring around Platform */}
      <mesh position={[0, -0.05, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[12.1, 0.05, 16, 128]} />
        <primitive object={gold} />
      </mesh>

      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
        <Center top>
          <primitive object={scene.clone()} scale={1.2} position={[0, 0, 0]} />
        </Center>
      </Float>
    </group>
  );
}
useGLTF.preload("/3d_models/building.glb");

/* ========================================================
   CAMERA RIG FOR CINEMATIC SCROLL
   ======================================================== */
function CameraRig({ scrollProgress }) {
  const look = useMemo(() => new THREE.Vector3(), []);

  useFrame((state) => {
    const p = scrollProgress.current;

    let targetPos = new THREE.Vector3();
    let targetLook = new THREE.Vector3();

    if (p < 0.33) {
      // 0.0 to 0.33: Front Low Entrance Shot -> Side Fly-By
      const localP = p / 0.33;
      targetPos.lerpVectors(new THREE.Vector3(0, 0.5, 8), new THREE.Vector3(8, 3, 5), localP);
      targetLook.lerpVectors(new THREE.Vector3(0, 2, 0), new THREE.Vector3(0, 3, 0), localP);
    } else if (p < 0.66) {
      // 0.33 to 0.66: Side Fly-By -> Diagonal Aerial Perspective
      const localP = (p - 0.33) / 0.33;
      targetPos.lerpVectors(new THREE.Vector3(8, 3, 5), new THREE.Vector3(-8, 10, 8), localP);
      targetLook.lerpVectors(new THREE.Vector3(0, 3, 0), new THREE.Vector3(0, 5, 0), localP);
    } else {
      // 0.66 to 1.0: Diagonal Aerial Perspective -> Drone Top-Down
      const localP = (p - 0.66) / 0.34;
      targetPos.lerpVectors(new THREE.Vector3(-8, 10, 8), new THREE.Vector3(0, 16, 0.5), localP);
      targetLook.lerpVectors(new THREE.Vector3(0, 5, 0), new THREE.Vector3(0, 0, 0), localP);
    }

    // Add floating ambient mathematical bob to the camera
    targetPos.y += Math.sin(state.clock.elapsedTime) * 0.2;

    // Smooth damp the camera
    state.camera.position.lerp(targetPos, 0.05);
    look.lerp(targetLook, 0.05);
    state.camera.lookAt(look);
  });
  return null;
}

/* ========================================================
   HOME PAGE — Full-width scroll-driven 3D section
   ======================================================== */
export function HomeThreeDSection({ modelUrl = "/3d_models/building.glb" }) {
  const sectionRef = useRef(null);
  const scrollProgress = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const scrolled = viewportHeight - rect.top;
      const totalScrollable = rect.height - viewportHeight;

      let clamped = (scrolled - viewportHeight) / totalScrollable;
      clamped = Math.max(0, Math.min(1, clamped));

      scrollProgress.current = clamped;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initialize
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ height: "400vh", background: "linear-gradient(180deg, var(--cream) 0%, var(--beige) 50%, var(--cream) 100%)" }}
    >
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        {/* Text overlay — HUD */}
        <div className="absolute top-0 left-0 right-0 z-10 flex flex-col items-center pt-24 md:pt-32 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center px-10 py-8 rounded-3xl"
            style={{ 
              background: "rgba(250, 247, 242, 0.4)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.6)",
              boxShadow: "0 20px 40px rgba(44, 44, 44, 0.05)"
            }}
          >
            <div className="flex justify-center mb-4">
              <span className="text-gold tracking-[0.3em] text-xs font-bold uppercase">Luxury Redefined</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold text-charcoal mb-6 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              The <span className="text-gradient-gold">AMDC</span> Tower
            </h2>
            <p className="text-charcoal/70 max-w-lg mx-auto text-base md:text-lg font-medium leading-relaxed">
              Experience our architectural vision through a cinematic drone journey. Scroll to fly.
            </p>
          </motion.div>
        </div>

        {/* Full-width 3D Canvas */}
        <Canvas
          shadows
          gl={{ antialias: true }}
          style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
          camera={{ position: [0, 0.5, 10], fov: 45 }}
        >
          {/* Cinematic Sunset / Golden Hour Lighting */}
          <ambientLight intensity={0.5} color="#FFF5E6" />
          <directionalLight position={[10, 10, -5]} intensity={1.8} color="#FFDDAA" castShadow />
          <directionalLight position={[-10, 5, 10]} intensity={0.6} color="#AACCFF" />

          <CameraRig scrollProgress={scrollProgress} />

          <Suspense fallback={null}>
            <Scene>
              <LuxuryTowerModel modelUrl={modelUrl} />
              <AmbientParticles />
            </Scene>
          </Suspense>

          {/* Performance optimizations */}
          <BakeShadows />
          <Preload all />
        </Canvas>

        {/* Cinematic bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-cream to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}



/* ========================================================
   PROJECT CARD 3D VIEWER — small inline viewer per project
   ======================================================== */
export function ProjectModel3D({ category, modelUrl = "/3d_models/building.glb", height = "250px" }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-full rounded-2xl overflow-hidden relative"
      style={{
        height,
        background: "linear-gradient(135deg, #F5F0EB 0%, #E8E4DF 100%)",
        border: "1px solid rgba(201, 169, 110, 0.12)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Canvas shadows camera={{ position: [10, 5, 10], fov: 45 }} gl={{ antialias: true }}>
        <Suspense fallback={<Html center><div className="w-6 h-6 border-2 border-gold border-t-transparent rounded-full animate-spin" /></Html>}>
          <Scene>
            <Float speed={0.3} rotationIntensity={0.02} floatIntensity={0.06}>
              <DynamicGLBModel modelUrl={modelUrl} rotY={0} />
            </Float>
            <OrbitControls 
              enableZoom={true} 
              enablePan={false} 
              minPolarAngle={Math.PI / 6} 
              maxPolarAngle={Math.PI / 2.1} 
              autoRotate={true}
              autoRotateSpeed={hovered ? 4 : 1}
              minDistance={5}
              maxDistance={25}
            />
          </Scene>
        </Suspense>
      </Canvas>

      {/* 3D badge */}
      <div
        className="absolute bottom-3 right-3 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider"
        style={{
          background: "rgba(250, 247, 242, 0.85)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(201, 169, 110, 0.2)",
          color: "var(--gold)",
        }}
      >
        3D MODEL
      </div>
    </div>
  );
}

/* Auto-rotate helper reads a mutable ref */
function AutoRotateModel({ modelUrl, rotRef }) {
  return <DynamicGLBModel modelUrl={modelUrl} rotY={rotRef.current} />;
}

// Keep backward compatibility
export default HomeThreeDSection;
