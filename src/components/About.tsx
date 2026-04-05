import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "5+", label: "лет опыта" },
  { value: "4", label: "компании" },
  { value: "20+", label: "проектов" },
  { value: "∞", label: "строк кода" },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F9FAFB 0%, #F0F4FF 100%)" }}
    >
      {/* Background accent blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-8" style={{ background: "var(--accent)" }} />
          <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "var(--accent)" }}>
            О себе
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <motion.h2
              className="font-bold leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--text-primary)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Пишу код, который
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #6366F1, #0EA5E9)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                делает продукт лучше
              </span>
            </motion.h2>

            <motion.p
              className="text-lg leading-relaxed mb-8"
              style={{ color: "var(--text-secondary)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Ответственный и замотивированный разработчик — всегда стремлюсь к совершенству.
              За 5+ лет прошёл путь от вёрстки лендингов до архитектуры enterprise SaaS-платформ.
              Внедряю AI-assisted development в команды и сокращаю рутину на{" "}
              <span style={{ color: "var(--accent)", fontWeight: 600 }}>40%</span>.
            </motion.p>

            <motion.p
              className="text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Ищу команду, в которой ценят взаимопомощь и хорошую атмосферу.
              В свободное время — шахматы и баскетбол.
            </motion.p>
          </div>

          {/* Right: glass card with stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 80 }}
          >
            <div
              className="rounded-3xl p-8"
              style={{
                background: "rgba(255,255,255,0.65)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.5)",
                boxShadow: "0 8px 40px rgba(99,102,241,0.08), 0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <div className="grid grid-cols-2 gap-6">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    className="flex flex-col items-center text-center p-4 rounded-2xl"
                    style={{ background: "rgba(99,102,241,0.04)" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  >
                    <span
                      className="font-black leading-none mb-1"
                      style={{
                        fontSize: "clamp(2rem, 4vw, 3rem)",
                        background: "linear-gradient(135deg, #6366F1, #0EA5E9)",
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

              {/* Tech badges */}
              <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(99,102,241,0.1)" }}>
                <p className="text-xs tracking-wider uppercase mb-3" style={{ color: "var(--text-secondary)" }}>
                  Основной стек
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React 18", "TypeScript", "Redux Toolkit", "Vite", "Styled Components"].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(99,102,241,0.08)",
                        color: "var(--accent)",
                        border: "1px solid rgba(99,102,241,0.15)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
