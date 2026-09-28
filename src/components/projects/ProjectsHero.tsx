import React from "react";
import { Container } from "@/components/ui/Container";
import { projectsData } from "@/data/projects";

export function ProjectsHero() {
  const metrics = [
    { label: "Portofolio Nyata", value: `${projectsData.length} Proyek`, desc: "Microservices, Fullstack, & Public Systems" },
    { label: "Legalitas Intelektual", value: "2 Hak Cipta HKI", desc: "Resmi Kemenkumham RI (LawanPMO & Dasawisma)" },
    { label: "Prestasi Ilmiah", value: "PIMNAS Dual Medal", desc: "Perak & Perunggu Nasional PKM-KI 2025" },
    { label: "Standar Implementasi", value: "Production Tested", desc: "PT Pindad, LawanPMO, & Sistem Publik" },
  ];

  return (
    <section className="w-full pt-10 pb-12 lg:pt-14 lg:pb-16 border-b border-border-delicate">
      <Container>
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low text-secondary font-label-sm text-label-sm border border-border-delicate shadow-xs">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-semibold text-primary">Selected Engineering Builds • 2024 – 2026</span>
          </div>

          <h1 className="font-headline-lg text-headline-lg lg:text-display text-on-surface tracking-tight">
            Selected Projects
          </h1>

          <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
            Kumpulan rekayasa perangkat lunak terpilih dengan fokus pada efisiensi basis data, isolasi microservices terdistribusi, serta penyelesaian masalah di ekosistem nyata.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-border-delicate">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-surface-container-low/50 border border-border-delicate/80 space-y-1"
            >
              <span className="font-label-sm text-[11px] text-secondary uppercase tracking-wider block font-medium">
                {item.label}
              </span>
              <div className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                {item.value}
              </div>
              <p className="font-body-sm text-[12px] text-secondary leading-tight">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
