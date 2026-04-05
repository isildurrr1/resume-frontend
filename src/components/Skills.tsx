import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const categories = [
  {
    label: "Core",
    color: "#6366F1",
    skills: ["React 18", "TypeScript", "JavaScript (ES2024)", "Redux Toolkit", "RTK Query", "React Hook Form", "Zustand"],
  },
  {
    label: "Стилизация",
    color: "#0EA5E9",
    skills: ["Styled Components", "Tailwind CSS", "SCSS/Sass", "Material-UI", "CSS Modules", "CSS-in-JS"],
  },
  {
    label: "Тестирование",
    color: "#A78BFA",
    skills: ["Jest", "React Testing Library", "Playwright", "Vitest"],
  },
  {
    label: "Инструменты",
    color: "#38BDF8",
    skills: ["Vite", "Webpack", "Git / Bitbucket", "REST API", "React Native", "HTML5 / CSS3"],
  },
];

function SkillTag({ skill, color, delay }: { skill: string; color: string; delay: number }) {
  return (
    <motion.span
      className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium cursor-default transition-all duration-300"
      style={{
        background: `${color}10`,
        color: color,
        border: `1px solid ${color}25`,
      }}
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration: 0.4, type: "spring", stiffness: 120 }}
      whileHover={{
        scale: 1.06,
        background: `${color}20`,
        boxShadow: `0 4px 16px ${color}25`,
      }}
    >
      {skill}
    </motion.span>
  );
}

function CategoryBlock({ cat, blockIndex }: { cat: typeof categories[0]; blockIndex: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: blockIndex * 0.12, duration: 0.6 }}
    >
      <div
        className="rounded-3xl p-7"
        style={{
          background: "rgba(255,255,255,0.65)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.5)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
        }}
      >
        <div className="flex items-center gap-2 mb-5">
          <div className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
          <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: cat.color }}>
            {cat.label}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {cat.skills.map((skill, i) => (
            <SkillTag
              key={skill}
              skill={skill}
              color={cat.color}
              delay={blockIndex * 0.08 + i * 0.05}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F9FAFB 0%, #EFF6FF 100%)" }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-20 right-10 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />
      <div
        className="absolute bottom-20 left-10 w-56 h-56 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
          >
            <div className="h-px w-8" style={{ background: "var(--accent)" }} />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "var(--accent)" }}>
              Навыки
            </span>
            <div className="h-px w-8" style={{ background: "var(--accent)" }} />
          </motion.div>
          <motion.h2
            className="font-bold"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--text-primary)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
          >
            Технический стек
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <CategoryBlock key={cat.label} cat={cat} blockIndex={i} />
          ))}
        </div>

        {/* Soft skills strip */}
        <motion.div
          className="mt-10 rounded-3xl p-7"
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.06), rgba(14,165,233,0.06))",
            border: "1px solid rgba(99,102,241,0.12)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--accent)" }}>
            Soft Skills
          </p>
          <div className="flex flex-wrap gap-2">
            {["Team Leadership", "Mentoring", "Code Review", "Task Estimation", "Documentation", "Cross-team Communication"].map((s) => (
              <span
                key={s}
                className="text-sm font-medium px-4 py-1.5 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  color: "var(--text-secondary)",
                  border: "1px solid rgba(255,255,255,0.6)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
