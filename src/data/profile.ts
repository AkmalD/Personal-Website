import { ProfileBio } from "@/types/portfolio";

export const profileData: ProfileBio = {
  fullName: "Akmal Goniyyu Hartono",
  aliasName: "Akmal",
  roleTitle: "Backend & Fullstack Web Engineer",
  statusBadge: "Open to Full-Time Software Roles",
  location: "Bandung, Indonesia (Remote / Hybrid)",
  gpa: "3.47",
  projectsCompleted: 6,
  avatarUrl: "/assets/profile/avatar.jpg",
  bgImageUrl: "/assets/profile/pimnas-bg.jpeg",
  resumeUrl: "/assets/documents/cv.pdf",
  narrativeParagraphs: [
    "Halo! Saya Akmal Goniyyu Hartono, lulusan Sarjana Terapan (D4) Teknik Informatika Politeknik Negeri Bandung (POLBAN) yang berfokus pada Backend & Fullstack Engineering, khususnya dalam pengembangan aplikasi web modern (modern web development), arsitektur microservices, dan sistem terdistribusi.",
    "Bagi saya, rekayasa perangkat lunak dan pengembangan web bukan sekadar merangkai baris kode agar berfungsi, melainkan memastikan reliabilitas sistem ketika lonjakan transaksi terjadi, menjaga modularitas arsitektur agar kolaborasi tim berjalan mulus, serta menghadirkan antarmuka web yang intuitif, responsif, dan bernilai nyata bagi penggunanya.",
    "Saya memiliki pengalaman memimpin pengembangan sistem web administrasi sekolah (PkM SMKN 1 Cisarua), membangun ulang sistem enterprise E-Visitor di PT Pindad (Persero), hingga mengembangkan aplikasi riset terapan terdaftar HKI (LawanPMO & Dasawisma Sariwangi) dengan perolehan medali perak dan perunggu PIMNAS tingkat nasional."
  ],
  coreAttributes: [
    "Fullstack Web Development",
    "Microservices & Spring Boot",
    "High Concurrency & ACID RDBMS",
    "REST & Event-Driven APIs",
    "Clean Architecture & DTOs",
    "Modern Web Frameworks (Next.js/React)",
    "Reliability Engineering"
  ],
  socialLinks: {
    github: "https://github.com/AkmalD",
    linkedin: "https://linkedin.com/in/akmal-goniyyu-hartono",
    email: "goniyyu@gmail.com",
  },
  ethosPillars: [
    {
      title: "Systems & Architecture",
      description:
        "Merancang backend modular, gateway, dan antrean data terstruktur (Java Spring Boot, Express.js, PostgreSQL) yang siap menghadapi lonjakan transaksi dengan minim latensi.",
      iconName: "Network",
      tags: ["Spring Boot", "PostgreSQL", "Microservices", "Docker"],
    },
    {
      title: "Clean, Tested Code",
      description:
        "Menerapkan prinsip SOLID, DTO pattern, separation of concerns, dan penanganan exception terpusat untuk memastikan kode mudah dirawat, diaudit, dan diskalakan oleh tim.",
      iconName: "Code2",
      tags: ["SOLID", "DTO Pattern", "Type Safety", "Prisma ORM"],
    },
    {
      title: "Human-Centric & Reliable Delivery",
      description:
        "Memadukan ketahanan backend dengan antarmuka web modern (Next.js, React, Tailwind) yang responsif, cepat (Lighthouse 95+), dan menyajikan data kompleks dengan kejelasan tenang.",
      iconName: "Cpu",
      tags: ["Next.js", "React", "Tailwind CSS", "Cloudflare"],
    },
  ],
};
