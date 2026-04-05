import { motion } from "framer-motion";
import { LogoLoop } from "../LogoLoop";

const categories = [
  {
    label: "Core",
    color: "#6366F1",
    skills: ["React 18", "TypeScript", "JavaScript", "Redux Toolkit", "RTK Query", "Zustand"],
  },
  {
    label: "Стилизация",
    color: "#0EA5E9",
    skills: ["Styled Components", "Tailwind CSS", "SCSS", "Material-UI"],
  },
  {
    label: "Тесты & Инструменты",
    color: "#A78BFA",
    skills: ["Jest", "RTL", "Playwright", "Vite", "Webpack", "Git"],
  },
];

export function SkillsSlide() {
  return (
    <div className="flex flex-col justify-center items-center h-full px-6 max-w-5xl w-full">
      {/* Label */}
      <motion.div
        className="flex items-center gap-3 mb-5"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div className="w-8 h-0.5" style={{ background: "var(--accent)" }} />
        <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "var(--accent)" }}>
          Технический стек
        </span>
      </motion.div>

      <motion.h2
        className="font-black mb-6 leading-tight"
        style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--text-primary)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Что я умею
      </motion.h2>

      {/* Logo loop */}
      <motion.div
        className="mb-6 -mx-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.8 }}
      >
        <LogoLoop />
      </motion.div>

      {/* Skill categories */}
      <motion.div
        className="grid md:grid-cols-3 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {categories.map((cat, i) => (
          <motion.div
            key={cat.label}
            className="rounded-2xl p-5"
            style={{
              background: "rgba(255,255,255,0.68)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.55)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 + i * 0.1 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: cat.color }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: cat.color }}>
                {cat.label}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className="text-xs font-medium px-2.5 py-1 rounded-lg"
                  style={{
                    background: `${cat.color}0e`,
                    color: cat.color,
                    border: `1px solid ${cat.color}20`,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
