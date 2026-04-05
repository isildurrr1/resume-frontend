import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Job {
  title: string;
  company: string;
  period: string;
  role: string;
  desc: string;
  tech: string[];
  achievements: string[];
  accent: string;
}

const jobs: Job[] = [
  {
    title: "Миграция SAP — Электронный документооборот",
    company: "Сбер",
    period: "Май 2025 — сейчас",
    role: "Frontend-разработчик",
    desc: "Платформа для электронного документооборота: редактируемые аналитические таблицы и адаптивный UI для миграции enterprise-системы.",
    tech: ["React 18", "TypeScript", "RTK Query", "react-hook-form", "Styled Components", "Vite", "Playwright", "@dnd-kit"],
    achievements: [
      "Редактируемые таблицы с drag-and-drop колонок через @dnd-kit",
      "Функционал прослушивания RTK Query для глобальных лоудеров",
      "Тёмная тема, дизайн-токены, кастомизация MUI",
      "AI-assisted dev: Cursor Rules + MCP + Claude Code — рутина ↓40%",
      "Агентная документация: AI попадает в кодстайл с первой итерации",
    ],
    accent: "#6366F1",
  },
  {
    title: "RecruitersLife Platform",
    company: "Apello",
    period: "Сентябрь 2023 — Март 2025",
    role: "Frontend Developer",
    desc: "SaaS-платформа для независимых рекрутеров: управление вакансиями, канбан-доска, дизайн-система.",
    tech: ["React", "TypeScript", "Redux Toolkit", "Styled Components", "react-beautiful-dnd", "Webpack"],
    achievements: [
      "DnD-канбан-доска для карточек кандидатов",
      "Система авторизации с ролевой моделью",
      "Рефакторинг классовых компонентов на хуки",
      "Онбординг разработчиков, code review",
    ],
    accent: "#0EA5E9",
  },
  {
    title: "Exchange — Криптовалютный обмен",
    company: 'ООО "ДЖИРЕЙДЖ"',
    period: "Февраль 2022 — Август 2023",
    role: "React Developer",
    desc: "Веб-приложение для обмена криптовалюты: профили, авторизация, формы, UI-библиотека.",
    tech: ["React", "TypeScript", "Redux Toolkit", "SCSS", "react-hook-form", "Jest", "React Testing Library"],
    achievements: [
      "UI-библиотека с документацией — скорость разработки ↑20-30%",
      "Миграция JSX → TSX, CSS → SCSS",
      "Менторство junior-разработчиков",
    ],
    accent: "#A78BFA",
  },
  {
    title: "Коммерческие сайты и лендинги",
    company: "AlphaLabs",
    period: "Сентябрь 2020 — Февраль 2022",
    role: "Веб-разработчик",
    desc: "Лендинги для адвокатов, ресторанов, сайты с гороскопами, личные блоги. Первые шаги в коммерческой разработке.",
    tech: ["JavaScript", "HTML", "CSS", "БЭМ", "AOS", "Fetch API"],
    achievements: [
      "Верстка по Figma-макетам",
      "Внедрил БЭМ-методологию",
      "Интеграция с Backend через REST API",
    ],
    accent: "#38BDF8",
  },
];

function JobCard({ job, index }: { job: Job; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1, type: "spring", stiffness: 70, damping: 18 }}
    >
      {/* Timeline connector dot */}
      <div
        className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center"
        style={{ top: "28px", zIndex: 10 }}
      >
        <motion.div
          className="w-4 h-4 rounded-full border-2"
          style={{
            background: job.accent,
            borderColor: "white",
            boxShadow: `0 0 0 4px ${job.accent}22`,
          }}
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        />
      </div>

      {/* Card */}
      <div
        className={`md:w-[46%] ${index % 2 === 0 ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0"}`}
      >
        <div
          className="rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1"
          style={{
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.55)",
            boxShadow: `0 4px 32px rgba(0,0,0,0.05), 0 0 0 1px rgba(${
              job.accent === "#6366F1" ? "99,102,241" :
              job.accent === "#0EA5E9" ? "14,165,233" :
              job.accent === "#A78BFA" ? "167,139,250" : "56,189,248"
            },0.06)`,
          }}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <div
                className="text-xs font-bold tracking-[0.2em] uppercase mb-1"
                style={{ color: job.accent }}
              >
                {job.company}
              </div>
              <h3
                className="font-bold leading-tight"
                style={{ fontSize: "1.15rem", color: "var(--text-primary)" }}
              >
                {job.title}
              </h3>
              <p className="text-sm mt-0.5" style={{ color: "var(--text-secondary)" }}>
                {job.role}
              </p>
            </div>
            <span
              className="shrink-0 text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap"
              style={{
                background: `${job.accent}15`,
                color: job.accent,
                border: `1px solid ${job.accent}25`,
              }}
            >
              {job.period}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
            {job.desc}
          </p>

          {/* Achievements */}
          <ul className="space-y-1.5 mb-5">
            {job.achievements.map((a) => (
              <li key={a} className="flex gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <span style={{ color: job.accent, marginTop: "2px", flexShrink: 0 }}>▸</span>
                {a}
              </li>
            ))}
          </ul>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5">
            {job.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-medium px-2.5 py-1 rounded-lg"
                style={{
                  background: "rgba(99,102,241,0.06)",
                  color: "var(--text-secondary)",
                  border: "1px solid rgba(99,102,241,0.1)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F0F4FF 0%, #F9FAFB 100%)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div ref={titleRef} className="text-center mb-20">
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="h-px w-8" style={{ background: "var(--accent)" }} />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "var(--accent)" }}>
              Опыт работы
            </span>
            <div className="h-px w-8" style={{ background: "var(--accent)" }} />
          </motion.div>
          <motion.h2
            className="font-bold"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--text-primary)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
          >
            История карьеры
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line (desktop) */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{ background: "linear-gradient(180deg, transparent, rgba(99,102,241,0.2) 10%, rgba(99,102,241,0.2) 90%, transparent)" }}
          />

          <div className="flex flex-col gap-14">
            {jobs.map((job, i) => (
              <JobCard key={job.title} job={job} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
