import { useEffect, useRef, type ComponentType } from "react";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiVite,
  SiTailwindcss,
  SiWebpack,
  SiMui,
  SiSass,
  SiJest,
  SiTestinglibrary,
  SiGit,
  SiZod,
  SiReacthookform,
  SiClaude,
  SiVitest,
  SiEslint,
  SiPrettier,
  SiNodedotjs,
} from "react-icons/si";
import { FaReact } from "react-icons/fa"; // React Native fallback

interface Logo {
  name: string;
  color: string;
  bg: string;
  Icon: ComponentType<{ size?: number; color?: string }> | string;
}

const logos: Logo[] = [
  { name: "React",             color: "#61DAFB", bg: "#e0f9fe", Icon: SiReact },
  { name: "TypeScript",        color: "#3178C6", bg: "#dbeafe", Icon: SiTypescript },
  { name: "JavaScript",        color: "#F7DF1E", bg: "#fef9c3", Icon: SiJavascript },
  { name: "Redux Toolkit",     color: "#764ABC", bg: "#f3e8ff", Icon: SiRedux },
  { name: "Vite",              color: "#646CFF", bg: "#ede9fe", Icon: SiVite },
  { name: "Styled Components", color: "#DB7093", bg: "#fce7f3", Icon: "💅" },
  { name: "Tailwind CSS",      color: "#06B6D4", bg: "#cffafe", Icon: SiTailwindcss },
  { name: "Webpack",           color: "#8DD6F9", bg: "#e0f2fe", Icon: SiWebpack },
  { name: "Material UI",       color: "#007FFF", bg: "#dbeafe", Icon: SiMui },
  { name: "SCSS",              color: "#CC6699", bg: "#fce7f3", Icon: SiSass },
  { name: "Jest",              color: "#C21325", bg: "#fee2e2", Icon: SiJest },
  { name: "Testing Library",   color: "#E33332", bg: "#fee2e2", Icon: SiTestinglibrary },
  { name: "Git",               color: "#F05032", bg: "#fee2e2", Icon: SiGit },
  { name: "React Native",      color: "#61DAFB", bg: "#e0f9fe", Icon: FaReact },
  { name: "Zod",               color: "#3E67B1", bg: "#dbeafe", Icon: SiZod },
  { name: "React Hook Form",   color: "#EC5990", bg: "#fce7f3", Icon: SiReacthookform },
  { name: "Claude Code",       color: "#C96442", bg: "#ffedd5", Icon: SiClaude },
  { name: "Vitest",            color: "#6E9F18", bg: "#f7fee7", Icon: SiVitest },
  { name: "ESLint",            color: "#4B32C3", bg: "#ede9fe", Icon: SiEslint },
  { name: "Node.js",           color: "#339933", bg: "#dcfce7", Icon: SiNodedotjs },
  { name: "Prettier",          color: "#F7B93E", bg: "#fef9c3", Icon: SiPrettier },
];

const row1 = [...logos, ...logos];
const row2 = [...logos.slice(11), ...logos.slice(0, 11), ...logos.slice(11), ...logos.slice(0, 11)];

function LogoItem({ logo }: { logo: Logo }) {
  return (
    <div
      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl mx-2 shrink-0 select-none"
      style={{ background: logo.bg, border: `1px solid ${logo.color}28` }}
    >
      {typeof logo.Icon === "string" ? (
        <span style={{ fontSize: 16, lineHeight: 1 }}>{logo.Icon}</span>
      ) : (
        <logo.Icon size={16} color={logo.color} />
      )}
      <span className="text-sm font-semibold whitespace-nowrap" style={{ color: logo.color }}>
        {logo.name}
      </span>
    </div>
  );
}

interface MarqueeRowProps {
  items: Logo[];
  reverse?: boolean;
  speed?: number;
}

function MarqueeRow({ items, reverse = false, speed = 32 }: MarqueeRowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const animRef = useRef<Animation | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const totalWidth = el.scrollWidth / 2;
    const keyframes = reverse
      ? [{ transform: `translateX(-${totalWidth}px)` }, { transform: "translateX(0px)" }]
      : [{ transform: "translateX(0px)" }, { transform: `translateX(-${totalWidth}px)` }];

    animRef.current = el.animate(keyframes, {
      duration: (totalWidth / speed) * 1000,
      iterations: Infinity,
      easing: "linear",
    });

    return () => animRef.current?.cancel();
  }, [reverse, speed]);

  return (
    <div className="overflow-hidden w-full">
      <div ref={ref} className="flex w-max" style={{ willChange: "transform" }}>
        {items.map((logo, i) => (
          <LogoItem key={`${logo.name}-${i}`} logo={logo} />
        ))}
      </div>
    </div>
  );
}

export function LogoLoop() {
  return (
    <div className="w-full space-y-3 py-2">
      {[
        { items: row1, reverse: false, speed: 30 },
        { items: row2, reverse: true,  speed: 27 },
      ].map((row, i) => (
        <div
          key={i}
          className="relative overflow-hidden"
          style={{
            maskImage: "linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)",
          }}
        >
          <MarqueeRow {...row} />
        </div>
      ))}
    </div>
  );
}
