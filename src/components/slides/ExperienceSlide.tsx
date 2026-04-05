import { motion, type Variants } from "framer-motion";

const jobs = [
  {
    company: "Сбер",
    role: "Frontend Developer",
    period: "Май 2025 — сейчас",
    color: "#6366F1",
    desc: "Электронный документооборот. Редактируемые таблицы, DnD колонки, тёмная тема, RTK Query.",
    highlights: ["React 18 + TypeScript", "@dnd-kit DnD", "RTK Query", "AI dev −40% рутины"],
  },
  {
    company: "Apello",
    role: "Frontend Developer",
    period: "Сен 2023 — Мар 2025",
    color: "#0EA5E9",
    desc: "SaaS для рекрутеров. Канбан-доска, UI Kit, система авторизации, onboarding разработчиков.",
    highlights: ["Redux Toolkit", "react-beautiful-dnd", "Kanban DnD", "Code Review"],
  },
  {
    company: 'ДЖИРЕЙДЖ',
    role: "React Developer",
    period: "Фев 2022 — Авг 2023",
    color: "#A78BFA",
    desc: "Криптовалютный обмен. UI-библиотека, TSX-миграция, скорость разработки ↑25%.",
    highlights: ["React + TypeScript", "SCSS", "UI библиотека", "Менторство"],
  },
  {
    company: "AlphaLabs",
    role: "Web Developer",
    period: "Сен 2020 — Фев 2022",
    color: "#38BDF8",
    desc: "Коммерческие лендинги. Верстка по Figma, БЭМ, интеграция с backend.",
    highlights: ["JavaScript", "HTML/CSS", "БЭМ", "Figma → Code"],
  },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const card: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, type: "spring" as const, stiffness: 80 } },
};

export function ExperienceSlide() {
  return (
    <div className="flex flex-col justify-center items-center h-full px-6 max-w-5xl w-full">
      {/* Label */}
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div className="w-8 h-0.5" style={{ background: "var(--accent)" }} />
        <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "var(--accent)" }}>
          Опыт работы
        </span>
      </motion.div>

      <motion.h2
        className="font-black mb-8 leading-tight"
        style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--text-primary)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        5 лет коммерческой разработки
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 gap-4"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {jobs.map((job) => (
          <motion.div
            key={job.company}
            variants={card}
            className="rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "rgba(255,255,255,0.68)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.55)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
            }}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div>
                <div
                  className="text-xs font-bold tracking-widest uppercase mb-0.5"
                  style={{ color: job.color }}
                >
                  {job.company}
                </div>
                <div className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                  {job.role}
                </div>
              </div>
              <span
                className="text-xs px-2.5 py-1 rounded-full shrink-0 font-medium"
                style={{ background: `${job.color}12`, color: job.color }}
              >
                {job.period}
              </span>
            </div>

            {/* Description */}
            <p className="text-xs leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>
              {job.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {job.highlights.map((h) => (
                <span
                  key={h}
                  className="text-xs px-2 py-0.5 rounded-md font-medium"
                  style={{
                    background: "rgba(99,102,241,0.06)",
                    color: "var(--text-secondary)",
                    border: "1px solid rgba(99,102,241,0.1)",
                  }}
                >
                  {h}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
