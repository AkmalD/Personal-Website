import React from "react";
import {
  GraduationCap,
  Award,
  CheckCircle2,
  Binary,
  Database,
  Network,
  Layers,
  FileCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { educationData } from "@/data/experience";

export function EducationSection() {
  const polban = educationData[0];

  const courseworkItems = [
    {
      name: "Algoritma & Struktur Data Terapan",
      icon: <Binary className="w-4 h-4 text-primary" />,
      desc: "Efisiensi kompleksitas waktu (Big O), tree traversal, graph traversal.",
    },
    {
      name: "Basis Data Relasional & Terdistribusi",
      icon: <Database className="w-4 h-4 text-primary" />,
      desc: "PostgreSQL, MySQL, normalisasi skema 3NF, indexing, ACID transactions.",
    },
    {
      name: "Pola Desain & Clean Architecture",
      icon: <Layers className="w-4 h-4 text-primary" />,
      desc: "SOLID principles, DTO pattern, separation of concerns, repository pattern.",
    },
    {
      name: "Jaringan Komputer & Protokol API",
      icon: <Network className="w-4 h-4 text-primary" />,
      desc: "RESTful architecture, HTTP lifecycle, CORS, JWT authentication, WebSocket.",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-surface-container-low/60 border-b border-border-delicate">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase font-semibold">
              Pondasi Formal
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1 tracking-tight">
              Riwayat Pendidikan & Akademik
            </h2>
          </div>
          <p className="font-body-md text-body-md text-secondary max-w-md leading-relaxed">
            Perjalanan terstruktur dalam membangun pemahaman teoritis komputasi, algoritma mendalam, hingga perancangan rekayasa sistem produksi modern.
          </p>
        </div>

        {/* Education Main Showcase Card */}
        <div className="bg-surface-container-lowest rounded-2xl border border-border-delicate shadow-level-1 p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left / Primary Info (Polban Details) */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    {polban.institution}
                  </h3>
                  <Badge variant="primary">
                    IPK {polban.gpa} / 4.00
                  </Badge>
                </div>
                <p className="font-body-md text-body-md text-secondary">
                  {polban.degree} {polban.major} • <span className="font-mono text-body-sm">{polban.period}</span>
                </p>
              </div>
            </div>

            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Menempuh studi teknik informatika selama 4 tahun dengan konsentrasi pada rekayasa perangkat lunak, arsitektur basis data, algoritma performa tinggi, dan perancangan sistem enterprise terdistribusi. Lulus dengan predikat sangat memuaskan.
            </p>

            {/* Capstone / Thesis Highlight Box */}
            <div className="p-5 rounded-xl bg-surface-container-low border border-border-delicate space-y-3">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold">
                  Tugas Akhir & Riset Terapan Skala Nasional
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface font-medium italic">
                “{polban.thesisTitle}”
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-900 border border-amber-200 text-label-sm font-label-sm font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  Peraih Medali Perak PIMNAS 2025 (Poster)
                </span>
                <span className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-900 border border-amber-200 text-label-sm font-label-sm font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  Peraih Medali Perunggu PIMNAS 2025 (Presentasi)
                </span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-label-sm font-label-sm font-medium flex items-center gap-1.5">
                  <FileCheck className="w-3.5 h-3.5" />
                  Terdaftar HKI Kemenkumham RI
                </span>
              </div>
            </div>

            {/* Academic Highlights */}
            <div className="space-y-2.5 pt-2">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block font-medium">
                Sorotan Akademik & Organisasi
              </span>
              <ul className="space-y-2">
                {polban.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-body-sm text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right / Coursework Matrix (4 Items) */}
          <div className="w-full lg:w-80 shrink-0 bg-surface-container-low rounded-xl p-5 border border-border-delicate flex flex-col gap-4">
            <div>
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold block">
                Mata Kuliah Inti Relevan
              </span>
              <span className="font-body-sm text-body-sm text-secondary">
                Landasan teoritis dan praktis di POLBAN
              </span>
            </div>

            <div className="space-y-2.5">
              {courseworkItems.map((course, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-surface-container-lowest border border-border-delicate/80 space-y-1 shadow-xs hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    {course.icon}
                    <h4 className="font-label-md text-label-md text-on-surface font-semibold">
                      {course.name}
                    </h4>
                  </div>
                  <p className="font-body-sm text-[12px] leading-relaxed text-secondary pl-6">
                    {course.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
