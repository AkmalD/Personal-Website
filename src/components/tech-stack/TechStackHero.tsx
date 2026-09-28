import React from "react";
import { Container } from "@/components/ui/Container";
import { techStackData } from "@/data/tech-stack";

export function TechStackHero() {
  const totalSkills = techStackData.reduce((acc, cat) => acc + cat.skills.length, 0);

  const metrics = [
    { label: "Domain Arsitektur", value: `${techStackData.length} Kategori`, desc: "Backend, DB, UI, DevOps, & Standards" },
    { label: "Keahlian Teruji", value: `${totalSkills}+ Tools`, desc: "Bahasa, framework, & tooling modern" },
    { label: "Landasan Utama", value: "Spring & Postgres", desc: "Enterprise microservices & ACID safety" },
    { label: "Standar Kode", value: "SOLID & Type-Safe", desc: "DTO pattern & contract-first APIs" },
  ];

  return (
    <section className="w-full pt-10 pb-12 lg:pt-14 lg:pb-16 border-b border-border-delicate">
      <Container>
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low text-secondary font-label-sm text-label-sm border border-border-delicate shadow-xs">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-semibold text-primary">Technical Capabilities • 2026</span>
          </div>

          <h1 className="font-headline-lg text-headline-lg lg:text-display text-on-surface tracking-tight">
            Tech Stack & Tools
          </h1>

          <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
            Teknologi dan tools yang saya gunakan untuk merancang sistem backend berkinerja tinggi, alur data konkuren, serta antarmuka web modern dengan kejelasan arsitektur yang tenang dan teruji.
          </p>
        </div>

        {/* Metrics Bar */}
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
