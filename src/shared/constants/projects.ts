export interface Project {
  title: string;
  period: string;
  company: string;
  role?: string;
  desc: string;
  tech: string[];
  achievements: string[];
}

export const PROJECTS: Project[] = [
  {
    title: "Миграция SAP",
    period: "Май 2025 — настоящее время (1 год)",
    company: "Сбер",
    role: "Frontend-разработчик",
    desc: "Платформа для электронного документооборота: редактируемые аналитические таблицы и адаптивный UI для миграции enterprise-системы.",
    tech: [
      "React 18",
      "TypeScript",
      "RTK Query",
      "react-hook-form",
      "Styled Components",
      "Vite",
      "Playwright",
      "Bitbucket",
    ],
    achievements: [
      "Разработка редактируемых таблиц на React Material Table",
      "Хук для конфигурации таблиц: закрепление, скрытие колонок, drag-and-drop через @dnd-kit",
      "Функционал прослушивания RTK Query запросов для покрытия лоудерами вне компонента",
      "Внедрение тёмной темы, рефакторинг стилизации на токены дизайна",
      "Кастомизация компонентов MUI",
      "Функция breakpoint для адаптивной верстки внутри Styled Components",
      "Внедрил агентную разработку на проекте: настроил Cursor Rules, MCP-серверы и Claude Code (CLAUDE.md) — сократил время на рутинные задачи на ~40%",
      "Написал агентную документацию (specs, контекст, архитектурные правила) — AI точно попадает в кодстайл проекта с первой итерации",
      "Использую Claude Code + MCP для генерации тестов, code review и рефакторинга легаси",
    ],
  },
  {
    title: "RecruitersLife Platform",
    period: "Сентябрь 2023 — Март 2025 (1 год 7 месяцев)",
    company: "Apello",
    role: "Frontend Developer",
    desc: "SaaS платформа для независимых рекрутеров: управление вакансиями, канбан-доска, UI Kit.",
    tech: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Styled Components",
      "React Beautiful DnD",
      "React Modal",
      "Yup",
      "Webpack",
    ],
    achievements: [
      "Drag-and-drop канбан-доска для карточек сотрудников (react-beautiful-dnd)",
      "Слайдер на кастомных Styled Components",
      "Переписал классовые компоненты на хуки — улучшил читаемость кода",
      "Разработал систему авторизации",
      "Онбординг разработчиков, проведение code review",
    ],
  },
  {
    title: "Exchange — обмен криптовалюты",
    period: "Февраль 2022 — Август 2023 (1 год 7 месяцев)",
    company: 'ООО "ДЖИРЕЙДЖ"',
    role: "React Developer",
    desc: "Веб-версия приложения для обмена криптовалюты: профили пользователей, авторизация, формы.",
    tech: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "SCSS",
      "react-hook-form",
      "Jest",
      "react-testing-library",
      "Vite",
    ],
    achievements: [
      "Переписал CSS на SCSS",
      "Переписал легаси JSX на TSX",
      "Выделил компоненты в UI-библиотеку с документацией (↑20–30% скорость разработки)",
      "Менторство junior-разработчиков",
    ],
  },
  {
    title: "Коммерческие веб-сайты и лендинги",
    period: "Сентябрь 2020 — Февраль 2022 (1 год 6 месяцев)",
    company: "AlphaLabs",
    role: "Веб-разработчик",
    desc: "Лендинги для адвокатов, ресторанов, сайты с гороскопами, личные блоги.",
    tech: ["JavaScript", "HTML", "CSS", "БЭМ", "AOS", "Fetch API"],
    achievements: [
      "Внедрил БЭМ методологию",
      "Верстка по макетам в Figma",
      "Интеграция с Backend",
    ],
  },
];
