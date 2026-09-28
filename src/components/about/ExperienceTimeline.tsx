import React from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronRight,
  ShieldCheck,
  CheckCircle,
  Users,
  Building2,
  Code,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { experienceData } from "@/data/experience";

export function ExperienceTimeline() {
  const getExperienceBadge = (id: string) => {
    switch (id) {
      case "smkn1-lead-dev":
        return <Badge variant="primary">Technical Lead</Badge>;
      case "lawan-pmo-backend":
        return <Badge variant="secondary">Production System</Badge>;
      case "pindad-fullstack":
        return <Badge variant="secondary">Industry PKL</Badge>;
      case "dasawisma-fullstack":
        return <Badge variant="secondary">Public Sector PkM</Badge>;
      default:
        return null;
    }
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-surface-container-lowest border-b border-border-delicate">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase font-semibold">
              Rekam Jejak & Pengalaman
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1 tracking-tight">
              Pengalaman Rekayasa & Kepemimpinan Proyek
            </h2>
          </div>
          <p className="font-body-md text-body-md text-secondary max-w-md leading-relaxed">
            Penerapan rekayasa perangkat lunak pada ekosistem produksi nyata, industri pertahanan strategis negara, serta sistem digitalisasi sektor publik.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-6">
          {experienceData.map((exp, index) => (
            <div
              key={exp.id}
              className="p-6 md:p-8 rounded-2xl bg-surface-container-lowest border border-border-delicate shadow-level-1 hover:border-primary/25 transition-all duration-300 flex flex-col gap-6"
            >
              {/* Header: Role, Badges, Period & Location */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-border-delicate">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      {exp.role}
                    </h3>
                    {getExperienceBadge(exp.id)}
                  </div>
                  <div className="flex items-center gap-2 text-secondary font-body-sm text-body-sm">
                    <span className="text-primary font-medium">{exp.organization}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-secondary font-body-sm text-body-sm shrink-0">
                  <div className="flex items-center gap-1.5 font-mono text-[13px] bg-surface-container px-3 py-1 rounded-full">
                    <Calendar className="w-3.5 h-3.5 text-secondary" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-secondary">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {exp.description}
              </p>

              {/* Responsibilities & Key Contributions */}
              <div className="space-y-2.5">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block font-medium">
                  Tanggung Jawab & Kontribusi Kunci
                </span>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li
                      key={rIdx}
                      className="flex items-start gap-2.5 text-body-sm text-secondary bg-surface-container-low/50 p-3 rounded-xl border border-border-delicate/60"
                    >
                      <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="leading-snug">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Applied */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <span className="font-label-sm text-label-sm text-secondary font-medium mr-2">
                  Teknologi:
                </span>
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md bg-surface-container text-primary font-mono text-[12px] font-medium border border-border-delicate"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
