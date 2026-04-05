import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export function ResumeSlide() {
  return (
    <div className="flex flex-col justify-center items-center h-full px-6 py-8 w-full">
      {/* Label */}
      <motion.div
        className="flex items-center gap-3 mb-5"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div className="w-8 h-0.5" style={{ background: "var(--accent)" }} />
        <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "var(--accent)" }}>
          Резюме
        </span>
        <div className="w-8 h-0.5" style={{ background: "var(--accent)" }} />
      </motion.div>

      {/* Resume card */}
      <motion.div
        className="w-full max-w-4xl rounded-3xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.94, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7, type: "spring", stiffness: 65 }}
        style={{
          background: "rgba(255,255,255,0.78)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          border: "1px solid rgba(255,255,255,0.6)",
          boxShadow: "0 16px 60px rgba(99,102,241,0.1), 0 4px 16px rgba(0,0,0,0.05)",
        }}
      >
        {/* Resume header stripe */}
        <div
          className="h-1.5 w-full"
          style={{ background: "linear-gradient(90deg, #6366F1, #0EA5E9, #A78BFA)" }}
        />

        <motion.div
          className="p-7 md:p-9"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Top: name + contact */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-7">
            <motion.div variants={fadeUp}>
              <h2
                className="font-black leading-none mb-1.5"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  background: "linear-gradient(135deg, #0F172A, #334155)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Andrey Romashev
              </h2>
              <p className="font-semibold text-sm" style={{ color: "var(--accent)" }}>
                Frontend React Developer · 5+ лет
              </p>
              <p className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>
                Казань · Remote OK · Открыт к офферам
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col gap-1.5 text-xs">
              {[
                { label: "Email", value: "romaschevan@yandex.ru", href: "mailto:romaschevan@yandex.ru" },
                { label: "Telegram", value: "@andreyr0mashev", href: "https://t.me/andreyr0mashev" },
                { label: "GitHub", value: "github.com/isildurrr1", href: "https://github.com/isildurrr1" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-2">
                  <span className="font-semibold w-14 shrink-0" style={{ color: "var(--text-secondary)" }}>
                    {c.label}
                  </span>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:underline"
                    style={{ color: "var(--accent)" }}
                  >
                    {c.value}
                  </a>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px mb-6" style={{ background: "rgba(99,102,241,0.1)" }} />

          <div className="grid md:grid-cols-3 gap-7">
            {/* Experience column */}
            <motion.div variants={fadeUp} className="md:col-span-2">
              <h3 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
                Опыт
              </h3>
              <div className="space-y-4">
                {[
                  {
                    co: "Сбер", role: "Frontend Developer", period: "2025 — сейчас",
                    tech: "React 18, TypeScript, RTK Query, @dnd-kit",
                    note: "Enterprise ЭДО. AI dev −40% рутины. Редактируемые таблицы.",
                  },
                  {
                    co: "Apello", role: "Frontend Developer", period: "2023 — 2025",
                    tech: "React, Redux Toolkit, Styled Components",
                    note: "SaaS для рекрутеров. Kanban DnD, UI Kit, code review.",
                  },
                  {
                    co: "ДЖИРЕЙДЖ", role: "React Developer", period: "2022 — 2023",
                    tech: "React, TypeScript, SCSS, react-hook-form",
                    note: "Криптообменник. UI-библиотека, ↑25% скорость команды.",
                  },
                  {
                    co: "AlphaLabs", role: "Web Developer", period: "2020 — 2022",
                    tech: "JavaScript, HTML/CSS, БЭМ",
                    note: "Коммерческие лендинги по Figma-макетам.",
                  },
                ].map((j) => (
                  <div key={j.co} className="flex gap-3">
                    <div
                      className="w-1 rounded-full shrink-0 mt-1"
                      style={{ background: "rgba(99,102,241,0.2)", minHeight: "40px" }}
                    />
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>{j.co}</span>
                        <span className="text-xs px-2 py-0.5 rounded" style={{ background: "rgba(99,102,241,0.07)", color: "var(--accent)" }}>{j.role}</span>
                        <span className="text-xs" style={{ color: "var(--text-secondary)" }}>{j.period}</span>
                      </div>
                      <p className="text-xs mt-0.5 mb-1" style={{ color: "var(--text-secondary)" }}>{j.note}</p>
                      <p className="text-xs font-medium" style={{ color: "var(--accent)", opacity: 0.7 }}>{j.tech}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right column: skills + AI */}
            <motion.div variants={fadeUp} className="space-y-5">
              <div>
                <h3 className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
                  Стек
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {["React", "TypeScript", "Redux TK", "RTK Query", "Styled-Components", "Vite", "Playwright", "Zustand"].map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2 py-0.5 rounded-md font-medium"
                      style={{ background: "rgba(99,102,241,0.07)", color: "var(--text-secondary)", border: "1px solid rgba(99,102,241,0.1)" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#A78BFA" }}>
                  AI Tools
                </h3>
                <div className="flex flex-col gap-1 text-xs" style={{ color: "var(--text-secondary)" }}>
                  {["Claude Code", "Cursor + Rules", "MCP Servers", "CLAUDE.md / Agent Docs", "Prompt Engineering"].map((t) => (
                    <span key={t} className="flex items-center gap-1.5">
                      <span style={{ color: "#A78BFA" }}>✦</span>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#38BDF8" }}>
                  Языки
                </h3>
                <div className="text-xs space-y-1" style={{ color: "var(--text-secondary)" }}>
                  <div>Русский — Native</div>
                  <div>English — A2 (Reading & Docs)</div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#F472B6" }}>
                  Soft Skills
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {["Mentoring", "Code Review", "Estimation", "Docs"].map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded-md" style={{ background: "rgba(244,114,182,0.08)", color: "#F472B6" }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={fadeUp}
            className="mt-6 pt-6 flex items-center justify-between flex-wrap gap-4"
            style={{ borderTop: "1px solid rgba(99,102,241,0.08)" }}
          >
            <p className="text-xs" style={{ color: "var(--text-secondary)", opacity: 0.6 }}>
              Frontend React Developer · Казань · 2026
            </p>
            <div className="flex gap-3">
              <a
                href="https://t.me/andreyr0mashev"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-full text-xs font-semibold text-white transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #6366F1, #0EA5E9)", boxShadow: "0 4px 16px rgba(99,102,241,0.3)" }}
              >
                Написать в Telegram
              </a>
              <a
                href="mailto:romaschevan@yandex.ru"
                className="px-5 py-2 rounded-full text-xs font-semibold transition-all hover:scale-105"
                style={{ background: "rgba(99,102,241,0.08)", color: "var(--accent)", border: "1px solid rgba(99,102,241,0.2)" }}
              >
                Email
              </a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
