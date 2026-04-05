---
name: Portfolio Site Specification
description: Full specification for Andrey Romashev's portfolio/resume landing page with 3D animations
type: project
---

# Portfolio Site — Andrey Romashev

## Goal
WOW-effect resume/portfolio landing page for a Senior Frontend React Developer (5+ years). Target audience: HR specialists. Must be memorable, modern, and provoke immediate interview invitation.

## Profile Data (from legacy)
- **Name:** Andrey Romashev
- **Title:** Senior Frontend React Developer
- **Location:** Казань
- **Email:** romaschevan@yandex.ru
- **GitHub:** https://github.com/isildurrr1
- **Telegram:** https://t.me/andreyr0mashev
- **Bio:** Ответственный и замотивированный разработчик, всегда стремлюсь к совершенству. Ищу команду, в которой ценят взаимопомощь и хорошую атмосферу. Шахматы и баскетбол.

## Tech Stack (site)
- React 19 + TypeScript + Vite
- Tailwind CSS v4
- @react-three/fiber + @react-three/drei + three — 3D scene in Hero
- Framer Motion — scroll-triggered reveals, entrance animations
- Lenis — buttery smooth scrolling

## Design Language
- **Background:** #F9FAFB (near white), not pure white
- **Glassmorphism:** rgba(255,255,255,0.6) + backdrop-blur-xl + border rgba(255,255,255,0.4)
- **Accent:** Indigo #6366F1 primary, Sky #0EA5E9 secondary
- **Text:** #0F172A (near black) primary, #64748B secondary
- **Style:** Modern, clean, light tones with subtle color gradients

## Page Sections (scroll order)
1. **Hero** — Full viewport. Three.js scene: floating abstract geometric shapes (dodecahedron, torus, icosahedron) with soft colors, reacts to mouse. Giant name + title text. Scroll arrow.
2. **About** — Glassmorphism card with bio. Stats: 5+ years, 4 companies, 20+ projects.
3. **Experience Timeline** — Vertical scroll-triggered timeline. Each job card reveals on scroll. 4 entries.
4. **Skills** — Animated tag cloud / grid. Categorized: Core, Styling, Testing, Tools, AI.
5. **AI & Agentic Dev** — Unique section. Highlights AI-driven workflow as differentiator. Cards with Claude Code, Cursor, MCP.
6. **Contact** — Clean CTA with GitHub, Telegram, email links.

## Why: 
User wants to impress HR, stand out from typical resumes. 3D + scroll storytelling = memorable experience.
## How to apply: 
Keep WOW factor as primary constraint. Performance is secondary. Prefer visual impact over minimalism.
