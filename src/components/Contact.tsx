import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const links = [
  {
    label: "Telegram",
    href: "https://t.me/andreyr0mashev",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.94z" />
      </svg>
    ),
    accent: "#0EA5E9",
    primary: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/isildurrr1",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    accent: "#6366F1",
    primary: false,
  },
  {
    label: "Email",
    href: "mailto:romaschevan@yandex.ru",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    accent: "#A78BFA",
    primary: false,
  },
];

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F0F4FF 0%, #F9FAFB 100%)" }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(99,102,241,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Animated grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          maskImage: "radial-gradient(circle at 50% 50%, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 50%, black 20%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        {/* Section label */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          <div className="h-px w-8" style={{ background: "var(--accent)" }} />
          <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "var(--accent)" }}>
            Контакты
          </span>
          <div className="h-px w-8" style={{ background: "var(--accent)" }} />
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="font-bold mb-4"
          style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "var(--text-primary)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
        >
          Готов к новым{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #6366F1, #0EA5E9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            вызовам
          </span>
        </motion.h2>

        <motion.p
          className="text-lg mb-12 leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
        >
          Открыт к интересным предложениям. Пишите в Telegram — отвечаю быстро.
          <br />
          <span style={{ color: "var(--accent)", fontWeight: 500 }}>Казань</span> · Remote OK
        </motion.p>

        {/* Link cards */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="flex items-center gap-3 px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
              style={
                link.primary
                  ? {
                      background: "linear-gradient(135deg, #6366F1, #0EA5E9)",
                      color: "white",
                      boxShadow: "0 4px 20px rgba(99,102,241,0.3)",
                    }
                  : {
                      background: "rgba(255,255,255,0.75)",
                      color: link.accent,
                      border: `1px solid ${link.accent}25`,
                      backdropFilter: "blur(12px)",
                    }
              }
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.35 + i * 0.1, type: "spring", stiffness: 120 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              {link.icon}
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          className="mt-20 text-xs"
          style={{ color: "var(--text-secondary)", opacity: 0.5 }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.5 } : {}}
          transition={{ delay: 0.8 }}
        >
          Built with React + Three.js + Framer Motion · {new Date().getFullYear()}
        </motion.p>
      </div>
    </section>
  );
}
