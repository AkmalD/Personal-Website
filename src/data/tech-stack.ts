import { SkillCategory } from "@/types/portfolio";

export const techStackData: SkillCategory[] = [
  {
    id: "backend",
    categoryName: "Backend & Languages",
    subtitle: "Engine & Core Architecture",
    description:
      "Perancangan backend modular, layanan konkurensi tinggi, validasi kontrak tipe ketat, dan penanganan exception terstruktur untuk sistem skala produksi.",
    skills: [
      { name: "Java", focusArea: "Spring Boot & OOP", category: "backend", icon: "Coffee" },
      { name: "Spring Boot", focusArea: "Microservices & Cloud", category: "backend", icon: "Layers" },
      { name: "Spring Cloud Gateway", focusArea: "API Gateway & Routing", category: "backend", icon: "Network" },
      { name: "NestJS", focusArea: "Enterprise TypeScript Backend", category: "backend", icon: "Server" },
      { name: "Node.js", focusArea: "Asynchronous I/O", category: "backend", icon: "Server" },
      { name: "Express.js", focusArea: "REST APIs & Middleware", category: "backend", icon: "Cpu" },
      { name: "TypeScript", focusArea: "Strict Typing & Contracts", category: "backend", icon: "Code2" },
      { name: "Python", focusArea: "Automation & Scripting", category: "backend", icon: "Terminal" },
    ],
  },
  {
    id: "database",
    categoryName: "Databases & Storage",
    subtitle: "Persistence & Data Modeling",
    description:
      "Pemodelan basis data relasional normalisasi 3NF, integritas referensial ketat, optimasi query berindeks, dan abstraksi ORM yang aman.",
    skills: [
      { name: "PostgreSQL", focusArea: "ACID RDBMS & Indexing", category: "database", icon: "Database" },
      { name: "MySQL", focusArea: "Relational Schema 3NF", category: "database", icon: "Database" },
      { name: "Prisma ORM", focusArea: "Type-Safe Client & Migrations", category: "database", icon: "Workflow" },
      { name: "Spring Data JPA", focusArea: "Hibernate & Entity Graph", category: "database", icon: "Boxes" },
      { name: "Redis", focusArea: "In-Memory Caching", category: "database", icon: "Zap" },
      { name: "SQL & Query Optimization", focusArea: "DDL, DML & Schema Indexing", category: "database", icon: "Database" },
    ],
  },
  {
    id: "frontend",
    categoryName: "Frontend & UI Systems",
    subtitle: "Client Craft & Performance",
    description:
      "Pengembangan antarmuka web modern yang responsif, berkecepatan tinggi (Lighthouse 95+), aksesibel, dan menyajikan data interaktif secara optimal.",
    skills: [
      { name: "Next.js 15", focusArea: "App Router & Static Export", category: "frontend", icon: "Globe" },
      { name: "React 19", focusArea: "Component Architecture", category: "frontend", icon: "Layout" },
      { name: "Tailwind CSS", focusArea: "Design Tokens & Utility UI", category: "frontend", icon: "Palette" },
      { name: "JavaScript (ES6+)", focusArea: "Modern Syntax & Web APIs", category: "frontend", icon: "Code2" },
      { name: "Material UI", focusArea: "Enterprise UI Components", category: "frontend", icon: "Component" },
      { name: "Vite", focusArea: "Fast Bundling & HMR", category: "frontend", icon: "FastForward" },
    ],
  },
  {
    id: "devops_tools",
    categoryName: "DevOps & Tooling",
    subtitle: "Infrastructure & Developer Velocity",
    description:
      "Otomasi alur kerja pengujian, kontainerisasi dependensi, integrasi CI/CD, dan deployment statis global tanpa biaya runtime.",
    skills: [
      { name: "Docker", focusArea: "Containerization & Compose", category: "devops_tools", icon: "Container" },
      { name: "Cloudflare Pages", focusArea: "Global Edge CDN & SSL", category: "devops_tools", icon: "Cloud" },
      { name: "Git & GitHub", focusArea: "Version Control & Actions", category: "devops_tools", icon: "GitBranch" },
      { name: "Maven", focusArea: "Java Build & Dependency Lifecycle", category: "devops_tools", icon: "Package" },
      { name: "Postman", focusArea: "API Contract Testing", category: "devops_tools", icon: "Send" },
      { name: "npm / Bun", focusArea: "Package Management", category: "devops_tools", icon: "Boxes" },
    ],
  },
  {
    id: "architecture",
    categoryName: "Architecture & Practices",
    subtitle: "Methodical Engineering Standards",
    description:
      "Prinsip rekayasa perangkat lunak standar industri untuk memastikan kode modular, transparan, aman dari vulnerabilitas, dan mudah diaudit.",
    skills: [
      { name: "RESTful Architecture", focusArea: "RFC Standard HTTP APIs", category: "architecture", icon: "Compass" },
      { name: "Microservices", focusArea: "Decoupled Service Boundaries", category: "architecture", icon: "Share2" },
      { name: "DTO Pattern", focusArea: "Entity Encapsulation", category: "architecture", icon: "Shield" },
      { name: "RBAC", focusArea: "Role-Based Access Control", category: "architecture", icon: "Lock" },
      { name: "SOLID Principles", focusArea: "Clean & Maintainable Code", category: "architecture", icon: "Award" },
      { name: "Clean Architecture", focusArea: "Separation of Concerns", category: "architecture", icon: "Layers" },
    ],
  },
];
