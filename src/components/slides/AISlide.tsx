import { motion } from "framer-motion";

const tools = [
  {
    icon: "✦",
    name: "Claude Code",
    desc: "CLI-агент: генерация кода, рефакторинг, тесты прямо в терминале.",
    color: "#6366F1",
  },
  {
    icon: "⬡",
    name: "Cursor + Rules",
    desc: "AI-редактор со знанием архитектуры проекта и кодстайла.",
    color: "#0EA5E9",
  },
  {
    icon: "⬢",
    name: "MCP Servers",
    desc: "Figma, Linear, GitHub в контексте модели — задачи за один запрос.",
    color: "#A78BFA",
  },
  {
    icon: "◈",
    name: "CLAUDE.md / Agent Docs",
    desc: "Архитектурная документация для AI — попадает в кодстайл с первой итерации.",
    color: "#38BDF8",
  },
];

const metrics = [
  { value: "−40%", label: "рутинных задач", color: "#6366F1" },
  { value: "1st", label: "итерация = прод", color: "#0EA5E9" },
  { value: "×3", label: "code review", color: "#A78BFA" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

export function AISlide() {
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
          Уникальный навык
        </span>
      </motion.div>

      <motion.h2
        className="font-black mb-2 leading-tight"
        style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--text-primary)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        AI-Assisted Development
      </motion.h2>

      <motion.p
        className="text-base mb-6 max-w-xl"
        style={{ color: "var(--text-secondary)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Не просто использую ChatGPT. Выстраиваю систематический агентный workflow
        и внедряю его в команду.
      </motion.p>

      {/* Metrics strip */}
      <motion.div
        className="flex gap-6 mb-6 p-5 rounded-2xl flex-wrap"
        style={{
          background: "linear-gradient(135deg, rgba(99,102,241,0.06), rgba(14,165,233,0.06))",
          border: "1px solid rgba(99,102,241,0.12)",
        }}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.25 }}
      >
        {metrics.map((m) => (
          <div key={m.label} className="text-center">
            <div
              className="font-black text-2xl"
              style={{
                background: `linear-gradient(135deg, ${m.color}, ${m.color}99)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {m.value}
            </div>
            <div className="text-xs" style={{ color: "var(--text-secondary)" }}>{m.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Tool cards */}
      <motion.div
        className="grid sm:grid-cols-2 gap-3"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {tools.map((t) => (
          <motion.div
            key={t.name}
            variants={item}
            className="rounded-2xl p-4 flex gap-4 items-start transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "rgba(255,255,255,0.68)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.55)",
            }}
          >
            <span className="text-xl font-bold shrink-0 mt-0.5" style={{ color: t.color }}>{t.icon}</span>
            <div>
              <div className="font-bold text-sm mb-0.5" style={{ color: "var(--text-primary)" }}>{t.name}</div>
              <div className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{t.desc}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
