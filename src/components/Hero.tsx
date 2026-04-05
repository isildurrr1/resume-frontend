import { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { motion, type Variants, type Transition } from "framer-motion";
import { FloatingShapes } from "./three/FloatingShapes";

function ScrollArrow() {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.2, duration: 0.8 }}
    >
      <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "var(--text-secondary)" }}>
        Scroll
      </span>
      <motion.div
        className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1"
        style={{ borderColor: "rgba(99,102,241,0.4)" }}
      >
        <motion.div
          className="w-1 h-2 rounded-full"
          style={{ background: "var(--accent)" }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}

const titleVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const springTransition: Transition = { type: "spring", stiffness: 120, damping: 14 };

const charVariants: Variants = {
  hidden: { opacity: 0, y: 60, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: springTransition,
  },
};

function AnimatedTitle({ text, className }: { text: string; className?: string }) {
  return (
    <motion.span
      className={className}
      variants={titleVariants}
      initial="hidden"
      animate="visible"
      style={{ display: "inline-flex", flexWrap: "wrap", gap: "0 2px" }}
    >
      {text.split("").map((ch, i) =>
        ch === " " ? (
          <span key={i} style={{ width: "0.35em" }} />
        ) : (
          <motion.span key={i} variants={charVariants} style={{ display: "inline-block" }}>
            {ch}
          </motion.span>
        )
      )}
    </motion.span>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #F0F4FF 0%, #F9FAFB 40%, #EFF6FF 100%)" }}
    >
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={55} />
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
          <pointLight position={[-4, 3, 2]} intensity={0.8} color="#6366F1" />
          <pointLight position={[4, -3, 2]} intensity={0.6} color="#0EA5E9" />
          <Suspense fallback={null}>
            <FloatingShapes />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>

      {/* Noise/grain overlay for texture */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "180px",
          opacity: 0.4,
        }}
      />

      {/* Gradient orbs */}
      <div
        className="absolute top-[-10%] left-[-5%] w-[45vw] h-[45vw] rounded-full pointer-events-none z-[1]"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full pointer-events-none z-[1]"
        style={{ background: "radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-12" style={{ background: "var(--accent)" }} />
          <span
            className="text-sm font-medium tracking-[0.25em] uppercase"
            style={{ color: "var(--accent)" }}
          >
            Frontend Developer
          </span>
          <div className="h-px w-12" style={{ background: "var(--accent)" }} />
        </motion.div>

        {/* Name */}
        <h1
          className="font-black leading-none mb-4 select-none"
          style={{
            fontSize: "clamp(3rem, 9vw, 8rem)",
            color: "var(--text-primary)",
            perspective: "600px",
          }}
        >
          <AnimatedTitle text="Andrey" />
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #6366F1 0%, #0EA5E9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            <AnimatedTitle text="Romashev" />
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          Frontend React Developer — 5+ лет коммерческой разработки.
          <br />
          <span style={{ color: "var(--accent)" }}>Казань, open to remote.</span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex items-center justify-center gap-4 mt-10 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.8 }}
        >
          <a
            href="https://t.me/andreyr0mashev"
            target="_blank"
            rel="noreferrer"
            className="px-7 py-3 rounded-full font-semibold text-white text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #6366F1, #0EA5E9)",
              boxShadow: "0 4px 20px rgba(99,102,241,0.3)",
            }}
          >
            Написать в Telegram
          </a>
          <a
            href="https://github.com/isildurrr1"
            target="_blank"
            rel="noreferrer"
            className="px-7 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(99,102,241,0.3)",
              color: "var(--text-primary)",
              backdropFilter: "blur(12px)",
            }}
          >
            GitHub →
          </a>
        </motion.div>
      </div>

      <ScrollArrow />
    </section>
  );
}
