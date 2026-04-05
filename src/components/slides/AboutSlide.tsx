import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "лет опыта", color: "#6366F1" },
  { value: "4", label: "компании", color: "#0EA5E9" },
  { value: "20+", label: "проектов", color: "#A78BFA" },
  { value: "∞", label: "кофе", color: "#F472B6" },
];

const traits = [
  "Code Quality First",
  "AI-Assisted Dev",
  "Team Player",
  "Mentoring",
  "Documentation",
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function AboutSlide() {
  return (
    <div className="flex flex-col justify-center items-center h-full px-6 max-w-5xl w-full">
      {/* Label */}
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-8 h-0.5" style={{ background: "var(--accent)" }} />
        <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "var(--accent)" }}>
          О себе
        </span>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left — text */}
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.h2
            variants={item}
            className="font-black mb-5 leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "var(--text-primary)" }}
          >
            Пишу код,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6366F1, #0EA5E9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              который
              <br />делает продукт
              <br />лучше
            </span>
          </motion.h2>

          <motion.p variants={item} className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
            Ответственный и замотивированный разработчик. За 5+ лет прошёл путь
            от вёрстки лендингов до архитектуры enterprise SaaS-платформ.
            Внедряю AI-assisted development в команды и сокращаю рутину на{" "}
            <strong style={{ color: "var(--accent)" }}>40%</strong>.
          </motion.p>

          <motion.p variants={item} className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Ищу команду, где ценят взаимопомощь и хорошую атмосферу.
            В свободное время — шахматы и баскетбол.
          </motion.p>

          {/* Traits */}
          <motion.div variants={item} className="flex flex-wrap gap-2 mt-6">
            {traits.map((t) => (
              <span
                key={t}
                className="text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(99,102,241,0.07)",
                  color: "var(--accent)",
                  border: "1px solid rgba(99,102,241,0.15)",
                }}
              >
                {t}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — stats glass card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7, type: "spring", stiffness: 70 }}
        >
          <div
            className="rounded-3xl p-8"
            style={{
              background: "rgba(255,255,255,0.65)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.55)",
              boxShadow: "0 8px 40px rgba(99,102,241,0.08)",
            }}
          >
            <div className="grid grid-cols-2 gap-5">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="flex flex-col items-center text-center p-5 rounded-2xl"
                  style={{ background: `${s.color}08` }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.45 + i * 0.1, type: "spring", stiffness: 120 }}
                >
                  <span
                    className="font-black mb-1"
                    style={{
                      fontSize: "clamp(2.2rem, 4vw, 3rem)",
                      background: `linear-gradient(135deg, ${s.color}, ${s.color}99)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {s.value}
                  </span>
                  <span className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                    {s.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
