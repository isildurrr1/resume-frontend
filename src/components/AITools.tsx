import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const tools = [
  {
    icon: "✦",
    name: "Claude Code",
    desc: "CLI-агент для полного цикла разработки: генерация кода, рефакторинг, тесты, code review прямо в терминале.",
    tag: "Primary",
    accent: "#6366F1",
  },
  {
    icon: "⬡",
    name: "Cursor IDE",
    desc: "AI-powered редактор с Cursor Rules — AI знает архитектуру проекта и пишет код строго в его стиле.",
    tag: "Daily",
    accent: "#0EA5E9",
  },
  {
    icon: "⬢",
    name: "MCP Servers",
    desc: "Model Context Protocol: подключаю контекст из Figma, Linear, GitHub в модель — задачи решаются в один запрос.",
    tag: "Advanced",
    accent: "#A78BFA",
  },
  {
    icon: "◈",
    name: "CLAUDE.md / Agent Docs",
    desc: "Пишу агентную документацию (specs, архитектурные правила, кодстайл) — AI попадает в проект с первой итерации.",
    tag: "Architecture",
    accent: "#38BDF8",
  },
  {
    icon: "⟐",
    name: "Prompt Engineering",
    desc: "Умею формулировать задачи так, чтобы модель решала их за один шот. Разница в 10x скорости на сложных задачах.",
    tag: "Skill",
    accent: "#F472B6",
  },
  {
    icon: "◎",
    name: "GitHub Copilot",
    desc: "Autocomplete, inline suggestions, тесты. Используется как дополнение к основному агентному workflow.",
    tag: "Tool",
    accent: "#34D399",
  },
];

export function AITools() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section
      className="relative py-32 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #EFF6FF 0%, #F5F3FF 50%, #F0F9FF 100%)",
      }}
    >
      {/* Large background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 65%)",
          filter: "blur(50px)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-6">
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
          >
            <div className="h-px w-8" style={{ background: "var(--accent)" }} />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "var(--accent)" }}>
              Уникальный навык
            </span>
            <div className="h-px w-8" style={{ background: "var(--accent)" }} />
          </motion.div>
          <motion.h2
            className="font-bold mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--text-primary)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
          >
            AI-Assisted Development
          </motion.h2>
          <motion.p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
            initial={{ opacity: 0, y: 15 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25 }}
          >
            Внедряю агентную разработку в команды — это не просто использование ChatGPT,
            это систематический подход, который сокращает рутину на{" "}
            <span style={{ color: "var(--accent)", fontWeight: 700 }}>40%</span>.
          </motion.p>
        </div>

        {/* Impact banner */}
        <motion.div
          className="rounded-2xl px-8 py-5 mb-10 flex flex-wrap items-center justify-center gap-8 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(14,165,233,0.08))",
            border: "1px solid rgba(99,102,241,0.15)",
          }}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: 0.3 }}
        >
          {[
            { value: "−40%", label: "рутинных задач" },
            { value: "1st", label: "итерация = продакшн" },
            { value: "×3", label: "скорость code review" },
          ].map((m) => (
            <div key={m.label}>
              <div
                className="font-black text-3xl"
                style={{
                  background: "linear-gradient(135deg, #6366F1, #0EA5E9)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {m.value}
              </div>
              <div className="text-sm" style={{ color: "var(--text-secondary)" }}>{m.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Tool cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5"
              style={{
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.55)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ boxShadow: `0 12px 40px ${tool.accent}15, 0 4px 12px rgba(0,0,0,0.06)` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span
                  className="text-2xl font-bold"
                  style={{ color: tool.accent }}
                >
                  {tool.icon}
                </span>
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    background: `${tool.accent}15`,
                    color: tool.accent,
                  }}
                >
                  {tool.tag}
                </span>
              </div>
              <h3
                className="font-bold mb-2"
                style={{ fontSize: "1.05rem", color: "var(--text-primary)" }}
              >
                {tool.name}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {tool.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
