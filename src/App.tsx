import { useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PersistentCrystal } from "./components/three/PersistentCrystal";
import { HeroSlide } from "./components/slides/HeroSlide";
import { AboutSlide } from "./components/slides/AboutSlide";
import { ExperienceSlide } from "./components/slides/ExperienceSlide";
import { SkillsSlide } from "./components/slides/SkillsSlide";
import { AISlide } from "./components/slides/AISlide";
import { ResumeSlide } from "./components/slides/ResumeSlide";

const SLIDES = [
  { id: "hero", label: "Начало", Component: HeroSlide },
  { id: "about", label: "О себе", Component: AboutSlide },
  { id: "experience", label: "Опыт", Component: ExperienceSlide },
  { id: "skills", label: "Стек", Component: SkillsSlide },
  { id: "ai", label: "AI Dev", Component: AISlide },
  { id: "resume", label: "Резюме", Component: ResumeSlide },
];

// Background gradient per slide
const bgMap = [
  "linear-gradient(135deg, #EEF2FF 0%, #F0F9FF 60%, #F5F3FF 100%)",
  "linear-gradient(160deg, #F0F9FF 0%, #EEF2FF 100%)",
  "linear-gradient(135deg, #EEF2FF 0%, #F0F4FF 100%)",
  "linear-gradient(140deg, #F5F3FF 0%, #EFF6FF 100%)",
  "linear-gradient(130deg, #EFF6FF 0%, #F5F3FF 50%, #F0F4FF 100%)",
  "linear-gradient(150deg, #F0F4FF 0%, #EEF2FF 100%)",
];

// Snap with overshoot: enter bounces, exit is instant
const slideVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.97,
  }),
  center: {
    y: "0%",
    opacity: 1,
    scale: 1,
    transition: {
      y: { type: "spring" as const, stiffness: 280, damping: 22, mass: 0.6 },
      opacity: { duration: 0.12 },
      scale: { type: "spring" as const, stiffness: 280, damping: 24 },
    },
  },
  exit: (direction: number) => ({
    y: direction > 0 ? "-55%" : "55%",
    opacity: 0,
    scale: 1.03,
    transition: {
      y: { type: "spring" as const, stiffness: 400, damping: 40 },
      opacity: { duration: 0.09 },
      scale: { duration: 0.12 },
    },
  }),
};

function NavDots({
  current,
  onSelect,
}: {
  current: number;
  onSelect: (i: number) => void;
}) {
  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 items-end">
      {SLIDES.map((s, i) => (
        <button
          key={s.id}
          onClick={() => onSelect(i)}
          title={s.label}
          className="group flex items-center gap-2.5 focus:outline-none"
        >
          <span
            className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap"
            style={{ color: "var(--text-secondary)" }}
          >
            {s.label}
          </span>
          <span
            className="block rounded-full transition-all duration-300"
            style={{
              width: i === current ? "28px" : "8px",
              height: "8px",
              background: i === current
                ? "linear-gradient(90deg, #6366F1, #0EA5E9)"
                : "rgba(99,102,241,0.25)",
              boxShadow: i === current ? "0 0 12px rgba(99,102,241,0.4)" : "none",
            }}
          />
        </button>
      ))}
    </nav>
  );
}

function SlideCounter({ current, total }: { current: number; total: number }) {
  return (
    <div
      className="fixed bottom-6 left-12 z-50 hidden lg:flex items-center gap-2"
      style={{ color: "var(--text-secondary)", opacity: 0.5 }}
    >
      <span className="text-xs font-bold tabular-nums" style={{ color: "var(--accent)", opacity: 1 }}>
        {String(current + 1).padStart(2, "0")}
      </span>
      <div className="h-px w-10" style={{ background: "rgba(99,102,241,0.2)" }} />
      <span className="text-xs tabular-nums">{String(total).padStart(2, "0")}</span>
    </div>
  );
}

export default function App() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const isTransitioning = useRef(false);
  const lockTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Lock duration matches spring settle time (~450ms for stiffness=280, damping=22)
  const LOCK_MS = 480;

  const goTo = useCallback((index: number) => {
    if (index === current || isTransitioning.current) return;
    isTransitioning.current = true;
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
    if (lockTimeout.current) clearTimeout(lockTimeout.current);
    lockTimeout.current = setTimeout(() => {
      isTransitioning.current = false;
    }, LOCK_MS);
  }, [current]);

  const goNext = useCallback(() => goTo(Math.min(current + 1, SLIDES.length - 1)), [current, goTo]);
  const goPrev = useCallback(() => goTo(Math.max(current - 1, 0)), [current, goTo]);

  // Wheel: fires on first meaningful event, then locks until animation settles
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      // Ignore tiny trackpad noise (< 8px)
      if (Math.abs(e.deltaY) < 8) return;
      if (e.deltaY > 0) goNext();
      else goPrev();
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [goNext, goPrev]);

  // Keyboard
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") goNext();
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  // Touch
  useEffect(() => {
    let startY = 0;
    const handleTouchStart = (e: TouchEvent) => { startY = e.touches[0].clientY; };
    const handleTouchEnd = (e: TouchEvent) => {
      const delta = startY - e.changedTouches[0].clientY;
      if (Math.abs(delta) > 50) {
        if (delta > 0) goNext();
        else goPrev();
      }
    };
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [goNext, goPrev]);

  const { Component } = SLIDES[current];

  return (
    <div
      className="fixed inset-0 overflow-hidden"
      style={{ background: bgMap[current], transition: "background 0.8s ease" }}
    >
      {/* Persistent 3D crystal - always in background */}
      <PersistentCrystal slideIndex={current} />

      {/* Background noise texture */}
      <div
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "160px",
        }}
      />

      {/* Slide container */}
      <div className="fixed inset-0 z-[2] overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            className="absolute inset-0 flex items-center justify-center"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <Component />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="relative z-50">
        <NavDots current={current} onSelect={goTo} />
        <SlideCounter current={current} total={SLIDES.length} />
      </div>

      {/* Mobile nav arrows */}
      <div className="fixed bottom-6 right-6 z-50 flex gap-2 lg:hidden">
        <button
          onClick={goPrev}
          disabled={current === 0}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all disabled:opacity-30"
          style={{
            background: "rgba(255,255,255,0.7)",
            border: "1px solid rgba(99,102,241,0.2)",
            backdropFilter: "blur(12px)",
          }}
        >
          <span style={{ color: "var(--accent)" }}>↑</span>
        </button>
        <button
          onClick={goNext}
          disabled={current === SLIDES.length - 1}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all disabled:opacity-30"
          style={{
            background: "linear-gradient(135deg, #6366F1, #0EA5E9)",
          }}
        >
          <span className="text-white">↓</span>
        </button>
      </div>
    </div>
  );
}
