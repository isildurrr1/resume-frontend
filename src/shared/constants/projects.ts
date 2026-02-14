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
    title: "SAP Migration Project (Сбер)",
    period: "Май 2024 — сейчас (1 год и 10 месяцев)",
    company: "Сбер",
    role: "React Developer & QA Lead",
    desc: "Платформа для электронного документооборота: редактируемые аналитические таблицы и adaptive UI для миграции enterprise-системы. Лидировал инициативу по покрытию проекта автотестами.",
    tech: [
      "React 18",
      "TypeScript",
      "RTK Query",
      "Styled Components",
      "Playwright",
      "POM",
      "Vite",
    ],
    achievements: [
      "React Material Table редактирование (80% пользователей отказались от Excel)",
      "Переиспользуемый хук таблиц (сократил время добавления новой таблицы: 2 дня → 4 часа)",
      "Покрытие автотестами на Playwright: 95% (рост стабильности релизов на 30%)",
      "Интеграция с TestIt для отчетности и выгрузки прогонов",
      "Внедрение тёмной темы и токенов дизайна для гибкой кастомизации UI",
      "Менторство: ускорил адаптацию новых сотрудников (↓50% время на вход)",
      "Создание документации по быстрой локальной настройке проекта",
      "Кросс-командное взаимодействие: тесная работа с Backend, QA, Design и BA",
    ],
  },
  {
    title: "RecrutersLife Platform",
    period: "Декабрь 2021 — Апрель 2024 (2 года и 5 месяцев)",
    company: "Apello",
    role: "React Developer",
    desc: "SaaS платформа для рекрутеров с канбан-доской и интегрированным UI Kit",
    tech: ["React", "TypeScript", "Redux Toolkit", "Webpack"],
    achievements: [
      "Канбан-доска с drag-and-drop, улучшившая UX и сократившая время обработки задач на 31%",
      "Разработка UI Kit (ускорил верстку новых экранов на 29%)",
      "Кастомный степпер для регистрации (↑14% конверсия)",
      "Внедрил шифрование данных перед отправкой на backend (bcrypt) для соответствия требованиям безопасности",
    ],
  },
];
