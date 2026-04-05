import { motion, type Variants, type Transition } from "framer-motion";

const springTransition: Transition = { type: "spring", stiffness: 120, damping: 14 };

const charVariants: Variants = {
  hidden: { opacity: 0, y: 50, rotateX: -80 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: springTransition },
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
};

// Plain word — chars animate individually, inherits parent color
function AnimatedWord({ text }: { text: string }) {
  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ display: "inline-flex", perspective: "600px" }}
    >
      {text.split("").map((ch, i) => (
        <motion.span key={i} variants={charVariants} style={{ display: "inline-block" }}>
          {ch}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Gradient word — animates as one block (background-clip needs single element)
function AnimatedGradientWord({ text }: { text: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 40, rotateX: -60 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 16, delay: 0.45 }}
      style={{
        display: "inline-block",
        perspective: "600px",
        background: "linear-gradient(135deg, #6366F1 0%, #0EA5E9 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {text}
    </motion.span>
  );
}

export function HeroSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full px-6 text-center">
      {/* Eyebrow */}
      <motion.div
        className="flex items-center gap-3 mb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <div className="w-8 h-0.5" style={{ background: "var(--accent)" }} />
        <span
          className="text-sm font-semibold tracking-[0.3em] uppercase"
          style={{ color: "var(--accent)" }}
        >
          Frontend Developer
        </span>
        <div className="w-8 h-0.5" style={{ background: "var(--accent)" }} />
      </motion.div>

      {/* Name */}
      <h1
        className="font-black leading-[0.9] mb-6 select-none"
        style={{
          fontSize: "clamp(3.5rem, 9vw, 8.5rem)",
          color: "var(--text-primary)",
          letterSpacing: "-0.03em",
        }}
      >
        <AnimatedWord text="Andrey" />
        <br />
        <AnimatedGradientWord text="Romashev" />
      </h1>

      {/* Subtitle */}
      <motion.p
        className="text-xl md:text-2xl font-light mb-10 max-w-lg"
        style={{ color: "var(--text-secondary)", lineHeight: 1.5 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        5+ лет коммерческой разработки.
        <br />
        React · TypeScript · AI-assisted dev.
        <br />
        <span style={{ color: "var(--accent)", fontWeight: 500 }}>Казань · Remote OK</span>
      </motion.p>

      {/* CTAs */}
      <motion.div
        className="flex gap-4 flex-wrap justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <a
          href="https://t.me/andreyr0mashev"
          target="_blank"
          rel="noreferrer"
          className="px-7 py-3.5 rounded-full font-semibold text-sm text-white tracking-wide transition-all duration-300 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #6366F1, #0EA5E9)",
            boxShadow: "0 4px 24px rgba(99,102,241,0.35)",
          }}
        >
          Написать в Telegram
        </a>
        <a
          href="https://github.com/isildurrr1"
          target="_blank"
          rel="noreferrer"
          className="px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105"
          style={{
            background: "rgba(255,255,255,0.7)",
            border: "1px solid rgba(99,102,241,0.25)",
            color: "var(--text-primary)",
            backdropFilter: "blur(12px)",
          }}
        >
          GitHub →
        </a>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="flex items-center gap-2 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col gap-1"
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <div className="w-5 h-0.5 rounded-full" style={{ background: "rgba(99,102,241,0.4)" }} />
          <div className="w-3 h-0.5 rounded-full ml-1" style={{ background: "rgba(99,102,241,0.25)" }} />
        </motion.div>
        <span className="text-xs tracking-widest uppercase" style={{ color: "var(--text-secondary)", opacity: 0.6 }}>
          Scroll to explore
        </span>
      </motion.div>
    </div>
  );
}
