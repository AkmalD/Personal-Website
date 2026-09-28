"use client";

import React, { useState } from "react";
import {
  Award,
  ShieldCheck,
  FileCheck,
  ExternalLink,
  Eye,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DocumentModal } from "@/components/modals/DocumentModal";
import { certificationsData } from "@/data/experience";
import { CertificationItem } from "@/types/portfolio";

export function CertificationsShowcase() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeDoc, setActiveDoc] = useState<CertificationItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filterTabs = [
    { id: "all", label: "Semua Dokumen", count: certificationsData.length },
    {
      id: "patent_hki",
      label: "Hak Cipta (HKI)",
      count: certificationsData.filter((c) => c.type === "patent_hki").length,
    },
    {
      id: "award",
      label: "Penghargaan Nasional",
      count: certificationsData.filter((c) => c.type === "award").length,
    },
    {
      id: "certification",
      label: "Sertifikasi Kompetensi",
      count: certificationsData.filter((c) => c.type === "certification").length,
    },
  ];

  const filteredItems = certificationsData.filter((item) => {
    if (selectedFilter === "all") return true;
    return item.type === selectedFilter;
  });

  const handleOpenDoc = (doc: CertificationItem) => {
    setActiveDoc(doc);
    setIsModalOpen(true);
  };

  const getDocTypeBadge = (type: CertificationItem["type"]) => {
    switch (type) {
      case "patent_hki":
        return <Badge variant="primary">Hak Cipta (HKI)</Badge>;
      case "award":
        return <Badge variant="sage">Penghargaan Nasional</Badge>;
      case "certification":
      default:
        return <Badge variant="secondary">Sertifikasi Kompetensi</Badge>;
    }
  };

  const getDocIcon = (type: CertificationItem["type"]) => {
    switch (type) {
      case "patent_hki":
        return <FileCheck className="w-5 h-5 text-primary" />;
      case "award":
        return <Award className="w-5 h-5 text-amber-600" />;
      case "certification":
      default:
        return <ShieldCheck className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-surface-container-low/40 border-b border-border-delicate">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-xl">
            <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase font-semibold">
              Legalitas & Validitas Otentik
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1 tracking-tight">
              Sertifikasi, HKI & Prestasi Nasional
            </h2>
          </div>
          <p className="font-body-md text-body-md text-secondary max-w-md leading-relaxed">
            Seluruh karya dan kompetensi didukung oleh dokumen resmi terbitan Kementerian Hukum & HAM RI, Kementerian Diktisaintek (PIMNAS), dan badan sertifikasi industri.
          </p>
        </div>

        {/* Featured Spotlight: Dual Medalist PIMNAS 2025 */}
        <div className="mb-10 p-6 md:p-8 rounded-2xl bg-surface-container-lowest border border-border-delicate shadow-level-1 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shrink-0">
              <Award className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-label-sm text-label-sm text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200 font-semibold uppercase tracking-wider">
                  Juara Nasional
                </span>
                <span className="font-label-sm text-label-sm text-secondary">
                  Kemen Diktisaintek RI
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                Dual Medalist PIMNAS 2025: Medali Perak (Poster) & Perunggu (Presentasi)
              </h3>
              <p className="font-body-sm text-body-sm text-secondary max-w-2xl leading-relaxed">
                Riset aplikasi mobile self-regulation “Lawan PMO” memenangkan medali ganda dalam Pekan Ilmiah Mahasiswa Nasional ke-37 kategori PKM-Karsa Cipta.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full lg:w-auto shrink-0">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                const perak = certificationsData.find((c) => c.id === "award-pimnas-perak");
                if (perak) handleOpenDoc(perak);
              }}
              className="flex-1 lg:flex-none"
            >
              <Eye className="w-4 h-4 mr-1 text-secondary" />
              <span>Sertifikat Perak</span>
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                const perunggu = certificationsData.find((c) => c.id === "award-pimnas-perunggu");
                if (perunggu) handleOpenDoc(perunggu);
              }}
              className="flex-1 lg:flex-none"
            >
              <Eye className="w-4 h-4 mr-1 text-secondary" />
              <span>Sertifikat Perunggu</span>
            </Button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-label-md font-medium transition-all duration-200 cursor-pointer shrink-0 flex items-center gap-2 ${
                  isActive
                    ? "bg-primary text-on-primary shadow-xs"
                    : "bg-surface-container-lowest text-secondary border border-border-delicate hover:bg-surface-container hover:text-on-surface"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-mono font-semibold ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-surface-container text-secondary"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-surface-container-lowest rounded-2xl border border-border-delicate shadow-level-1 hover:border-primary/25 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6 space-y-4">
                {/* Top Badge & Date */}
                <div className="flex items-center justify-between gap-2">
                  {getDocTypeBadge(item.type)}
                  <span className="font-mono text-label-sm text-secondary">
                    {item.date}
                  </span>
                </div>

                {/* Icon & Title */}
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center shrink-0 mt-0.5">
                      {getDocIcon(item.type)}
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold line-clamp-2 leading-snug">
                        {item.title}
                      </h4>
                      <p className="font-body-sm text-body-sm text-primary font-medium mt-0.5">
                        {item.issuer}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Registration / ID if exists */}
                {item.registrationNumber && (
                  <div className="bg-surface-container-low/60 px-3 py-1.5 rounded-lg border border-border-delicate/80 text-[12px] font-mono text-secondary truncate">
                    <span className="text-secondary/60">ID:</span> {item.registrationNumber}
                  </div>
                )}

                {/* Description */}
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-4 bg-surface-container-low/40 border-t border-border-delicate flex items-center justify-between gap-2">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleOpenDoc(item)}
                  className="w-full justify-center group/btn"
                >
                  <Eye className="w-3.5 h-3.5 mr-1 text-on-primary group-hover/btn:scale-110 transition-transform" />
                  <span>Lihat Dokumen Asli</span>
                </Button>

                <a
                  href={item.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Buka dokumen ${item.title} di tab baru`}
                  className="p-2 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container transition-colors shrink-0"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Interactive Document Preview Modal */}
      <DocumentModal
        item={activeDoc}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setActiveDoc(null);
        }}
      />
    </section>
  );
}
