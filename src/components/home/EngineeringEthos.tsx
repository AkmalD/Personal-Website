"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Trophy,
  ShieldCheck,
  ArrowRight,
  Layers,
  Sparkles,
  Eye,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ArchitectureModal } from "@/components/modals/ArchitectureModal";
import { DocumentModal } from "@/components/modals/DocumentModal";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import { certificationsData } from "@/data/experience";
import { Project, CertificationItem } from "@/types/portfolio";

export function EngineeringEthos() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<CertificationItem | null>(null);
  const [isDocModalOpen, setIsDocModalOpen] = useState(false);

  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);

  const handleOpenArchitecture = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleOpenDocById = (docId: string) => {
    const doc = certificationsData.find((c) => c.id === docId);
    if (doc) {
      setSelectedDoc(doc);
      setIsDocModalOpen(true);
    }
  };

  return (
    <div className="w-full space-y-20 lg:space-y-28 py-12">
      {/* SECTION 1: PIMNAS NATIONAL ACHIEVEMENT SPOTLIGHT */}
      <section className="w-full bg-surface-container-low py-16 lg:py-24 border-b border-border-delicate">
        <Container>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-semibold border border-border-delicate mb-3">
                <Trophy className="w-3.5 h-3.5 text-amber-500" />
                <span>Pencapaian Prestasi Nasional</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Dual Medalist PIMNAS: Riset &amp; Rekayasa Terapan
              </h2>
            </div>
            <p className="font-body-md text-body-md text-secondary max-w-md leading-relaxed">
              Pekan Ilmiah Mahasiswa Nasional (PIMNAS) adalah ajang kompetisi penalaran ilmiah dan inovasi sains-teknologi perguruan tinggi paling bergengsi di Indonesia yang diselenggarakan oleh Puspresnas / Kemendikbudristek.
            </p>
          </div>

          {/* 2-Column Spotlight Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Stage Photo (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-border-delicate shadow-level-2 bg-surface-container-lowest group flex-1">
                <Image
                  src={profileData.bgImageUrl || "/assets/profile/pimnas-bg.jpeg"}
                  alt="Kontingen PIMNAS POLBAN - Peraih Medali Perak dan Perunggu Tingkat Nasional"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 680px"
                  className="object-cover object-[center_35%] group-hover:scale-102 transition-transform duration-700"
                />

                {/* Top Floating Badge */}
                <div className="absolute top-3.5 left-3.5 px-3 py-1.5 rounded-lg bg-slate-950/80 text-white text-xs font-medium backdrop-blur-md border border-white/15 flex items-center gap-2 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span>Panggung PIMNAS 36 • Kontingen POLBAN</span>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent text-white">
                  <p className="font-headline-sm text-sm sm:text-base font-semibold leading-snug">
                    Penganugerahan Medali Nasional di Universitas Hasanuddin
                  </p>
                  <p className="font-body-sm text-xs sm:text-sm text-slate-300 mt-0.5">
                    Tim Rekayasa Perangkat Lunak Lawan PMO bersama jajaran kontingen POLBAN
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Achievements & Credentials (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4">
              {/* Medal 1: Perak */}
              <div
                onClick={() => handleOpenDocById("award-pimnas-perak")}
                className="p-5 rounded-2xl bg-surface-container-lowest border border-border-delicate shadow-level-1 hover:shadow-level-2 hover:border-border-interactive transition-all space-y-3 cursor-pointer group"
                title="Klik untuk melihat sertifikat resmi Medali Perak"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-slate-200 text-slate-800 flex items-center justify-center font-bold text-sm shadow-xs border border-slate-300 group-hover:scale-105 transition-transform">
                      🥈
                    </span>
                    <span className="font-label-sm text-label-sm font-semibold uppercase text-secondary tracking-wider">
                      Medali Perak (Juara 2)
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-secondary bg-surface-container px-2 py-0.5 rounded">
                    <span>Poster PKM-KI</span>
                  </div>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-primary transition-colors">
                  Penyajian Solusi Komprehensif &amp; Desain Sistem
                </h3>
                <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                  Dianugerahi oleh dewan juri nasional atas keunggulan poster ilmiah yang menyajikan solusi secara lengkap dan tuntas—menjelaskan secara utuh analisis urgensi masalah, perancangan arsitektur sistem, formulasi metode preventif-interventif, hingga efektivitas solusi yang ditawarkan.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-border-delicate/60">
                  <span className="font-mono text-[11px] text-secondary">
                    PIMNAS 36 Kemendikbudristek
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenDocById("award-pimnas-perak");
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary text-white hover:bg-primary-container transition-colors shadow-xs shrink-0 cursor-pointer self-start sm:self-auto"
                  >
                    <Eye className="w-3.5 h-3.5 text-white" />
                    <span className="text-white">Lihat Sertifikat</span>
                  </button>
                </div>
              </div>

              {/* Medal 2: Perunggu */}
              <div
                onClick={() => handleOpenDocById("award-pimnas-perunggu")}
                className="p-5 rounded-2xl bg-surface-container-lowest border border-border-delicate shadow-level-1 hover:shadow-level-2 hover:border-border-interactive transition-all space-y-3 cursor-pointer group"
                title="Klik untuk melihat sertifikat resmi Medali Perunggu"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm shadow-xs border border-amber-200 group-hover:scale-105 transition-transform">
                      🥉
                    </span>
                    <span className="font-label-sm text-label-sm font-semibold uppercase text-secondary tracking-wider">
                      Medali Perunggu (Juara 3)
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-secondary bg-surface-container px-2 py-0.5 rounded">
                    <span>Presentasi PKM-KI</span>
                  </div>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-primary transition-colors">
                  Kesiapan Implementasi &amp; Uji Teknis
                </h3>
                <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                  Dianugerahi atas pembuktian teknis yang solid, kesiapan implementasi kode produksi, dan demonstrasi keandalan sistem di hadapan dewan penilai ahli nasional.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-border-delicate/60">
                  <span className="font-mono text-[11px] text-secondary">
                    PIMNAS 36 Kemendikbudristek
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenDocById("award-pimnas-perunggu");
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary text-white hover:bg-primary-container transition-colors shadow-xs shrink-0 cursor-pointer self-start sm:self-auto"
                  >
                    <Eye className="w-3.5 h-3.5 text-white" />
                    <span className="text-white">Lihat Sertifikat</span>
                  </button>
                </div>
              </div>

              {/* HKI & Direct Modal Trigger */}
              <div className="p-4 rounded-xl bg-surface-container border border-border-delicate flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                  <div className="min-w-0">
                    <p className="font-label-md text-label-md text-primary font-semibold truncate">
                      Karya Terdaftar HKI Kemenkumham RI
                    </p>
                    <p className="text-[11px] text-secondary truncate">
                      Lawan PMO • No: EC002025157155
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleOpenDocById("hki-lawan-pmo")}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary text-white hover:bg-primary-container transition-colors shadow-xs shrink-0 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-white" />
                  <span className="text-white">Lihat Dokumen HKI</span>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: FEATURED ENGINEERING PROJECTS SPOTLIGHT */}
      <section className="w-full">
        <Container>
          {/* Section Heading */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-label-sm text-secondary uppercase font-semibold tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span>Selected Works</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-label-md font-medium text-primary hover:text-primary-container transition-colors group"
            >
              <span>Explore All {projectsData.length} Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Featured Project Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                onClick={() => handleOpenArchitecture(project)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleOpenArchitecture(project);
                  }
                }}
                role="button"
                tabIndex={0}
                className="group bg-surface-container-lowest rounded-2xl border border-border-delicate shadow-level-1 hover:shadow-level-2 hover:border-primary/40 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {/* Image Preview with overlay badges */}
                <div className="relative w-full aspect-video bg-surface-container overflow-hidden">
                  {project.coverImage ? (
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 360px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary via-slate-800 to-slate-950 flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-primary-fixed mb-2">
                        <Layers className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-white/70">
                        {project.categoryLabel}
                      </span>
                    </div>
                  )}

                </div>

                {/* Body Content: Judul, Peran & Badges kecil di bawah peran */}
                <div className="p-5 space-y-2">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-headline-sm text-[1.125rem] font-semibold text-on-surface group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                      {project.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-surface-container-low group-hover:bg-primary group-hover:text-white text-secondary flex items-center justify-center shrink-0 transition-colors shadow-2xs mt-0.5">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>

                  <p className="text-[12px] text-secondary">
                    Peran: <span className="font-medium text-primary">{project.role}</span>
                  </p>

                  <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
                    <span className="px-2 py-0.5 rounded-md bg-surface-container text-secondary text-[11px] font-medium">
                      {project.categoryLabel}
                    </span>
                    {project.badge && (
                      <span className="px-2 py-0.5 rounded-md bg-surface-container-low text-accent-sage text-[11px] font-medium border border-border-delicate/60">
                        {project.badge}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Architecture Modal Instance */}
      <ArchitectureModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Interactive Document / HKI Modal Instance */}
      <DocumentModal
        item={selectedDoc}
        isOpen={isDocModalOpen}
        onClose={() => setIsDocModalOpen(false)}
      />
    </div>
  );
}
