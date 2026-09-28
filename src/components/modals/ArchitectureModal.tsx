"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  X,
  ExternalLink,
  Layers,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ImageIcon,
} from "lucide-react";
import { Project } from "@/types/portfolio";
import { Button } from "@/components/ui/Button";
import { GithubIcon } from "@/components/ui/Icons";

interface ArchitectureModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ArchitectureModal({
  project,
  isOpen,
  onClose,
}: ArchitectureModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const [prevProjectId, setPrevProjectId] = useState(project?.id);

  if (project?.id !== prevProjectId) {
    setPrevProjectId(project?.id);
    setActiveImageIndex(0);
    setLightboxOpen(false);
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxOpen) {
          setLightboxOpen(false);
        } else {
          onClose();
        }
      }
    };

    if (isOpen) {
      window.document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.document.body.style.overflow = "";
    }

    return () => {
      window.document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, lightboxOpen, onClose]);

  if (!isOpen || !project) return null;

  const arch = project.architecture;
  const images =
    project.images && project.images.length > 0
      ? project.images
      : project.coverImage
      ? [project.coverImage]
      : [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="architecture-modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-surface-container-lowest rounded-2xl border border-border-delicate shadow-level-2 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-border-delicate flex items-start justify-between bg-surface-container-low/60 shrink-0">
          <div className="space-y-2 pr-4">
            <h2
              id="architecture-modal-title"
              className="font-headline-sm text-headline-sm text-on-surface font-semibold leading-snug"
            >
              {project.title}
            </h2>
            <p className="font-body-sm text-body-sm text-secondary">
              Peran: <span className="font-medium text-primary">{project.role}</span>
            </p>
            {/* Badges kecil di bawah peran */}
            <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
              <span className="px-2 py-0.5 rounded-md bg-surface-container text-primary text-[11px] font-semibold border border-border-delicate">
                {project.categoryLabel}
              </span>
              {project.badge && (
                <span className="px-2 py-0.5 rounded-md bg-surface-container text-accent-sage text-[11px] font-semibold border border-border-delicate">
                  {project.badge}
                </span>
              )}
              <span className="font-mono text-[11px] text-secondary bg-surface-container-low px-2 py-0.5 rounded border border-border-delicate">
                {project.year}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-secondary hover:text-on-surface hover:bg-surface-container transition-colors cursor-pointer shrink-0"
            aria-label="Tutup modal arsitektur"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-body-sm">
          {/* Image Gallery Carousel Section */}
          {images.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-[11px] text-secondary uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <ImageIcon className="w-3.5 h-3.5 text-primary" />
                  <span>Galeri Dokumentasi &amp; Antarmuka</span>
                </span>
                <span className="font-mono text-[11px] text-secondary bg-surface-container-low px-2 py-0.5 rounded border border-border-delicate">
                  {activeImageIndex + 1} / {images.length}
                </span>
              </div>

              {/* Main Carousel Display Frame */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-950/5 border border-border-delicate group">
                <div
                  className="relative w-full h-full cursor-zoom-in"
                  onClick={() => setLightboxOpen(true)}
                  title="Klik untuk memperbesar gambar"
                >
                  <Image
                    src={images[activeImageIndex]}
                    alt={`${project.title} - Screenshot ${activeImageIndex + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 720px"
                    className="object-contain"
                  />

                  {/* Hover Prompt to Zoom */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 text-white text-xs backdrop-blur-md shadow-sm pointer-events-none">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Klik untuk perbesar</span>
                  </div>
                </div>

                {/* Left/Right Navigation Arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
                      }}
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-sm transition-all shadow-md cursor-pointer opacity-80 hover:opacity-100"
                      aria-label="Gambar sebelumnya"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
                      }}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-sm transition-all shadow-md cursor-pointer opacity-80 hover:opacity-100"
                      aria-label="Gambar berikutnya"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails Strip */}
              {images.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1.5 no-scrollbar">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-16 sm:w-20 aspect-video rounded-lg overflow-hidden border shrink-0 transition-all cursor-pointer ${
                        idx === activeImageIndex
                          ? "border-primary ring-2 ring-primary/30 opacity-100"
                          : "border-border-delicate opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 1. Overview Box */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary font-semibold font-label-md">
              <Layers className="w-4 h-4" />
              <span>Arsitektur &amp; Gambaran Sistem</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed bg-surface-container-low/60 p-4 rounded-xl border border-border-delicate">
              {arch?.overview || project.summary}
            </p>
          </div>

          {/* 2. Visual Request & Dataflow Pipeline */}
          {arch?.components && arch.components.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-[11px] text-secondary uppercase tracking-wider font-semibold">
                  Alur Pipeline Data &amp; Komponen
                </span>
                <span className="font-mono text-[11px] text-secondary">
                  {arch.components.length} Tahapan Transaksional
                </span>
              </div>

              {/* Horizontal / Step Flow Diagram */}
              <div className="p-4 rounded-xl bg-surface-container-low/40 border border-border-delicate space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {arch.components.map((comp, idx) => (
                    <div
                      key={idx}
                      className="relative p-3.5 rounded-xl bg-surface-container-lowest border border-border-delicate shadow-2xs flex flex-col justify-between space-y-2 group hover:border-primary/40 transition-colors"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[11px] font-bold text-primary bg-surface-container px-2 py-0.5 rounded">
                            Step 0{idx + 1}
                          </span>
                          {comp.tech && (
                            <span className="font-mono text-[10px] text-secondary truncate max-w-[120px]">
                              {comp.tech}
                            </span>
                          )}
                        </div>
                        <h4 className="font-label-md text-label-md text-on-surface font-semibold leading-tight">
                          {comp.title}
                        </h4>
                        <p className="font-body-sm text-[12px] text-secondary leading-relaxed">
                          {comp.description}
                        </p>
                      </div>

                      {/* Directional Indicator (Between items on desktop) */}
                      {idx < arch.components.length - 1 && (
                        <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-surface-container-lowest border border-border-delicate items-center justify-center text-primary shadow-xs">
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 3. Challenge vs Outcome Technical Block */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-surface-container-low border border-border-delicate">
            <div className="space-y-1">
              <span className="font-label-sm text-[11px] text-rose-700 uppercase tracking-wider font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                Problem / Bottleneck
              </span>
              <p className="font-body-sm text-[13px] text-secondary leading-snug">
                {project.challenge}
              </p>
            </div>

            <div className="space-y-1 sm:border-l sm:border-border-delicate sm:pl-3">
              <span className="font-label-sm text-[11px] text-emerald-800 uppercase tracking-wider font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Engineering Solution &amp; Outcome
              </span>
              <p className="font-body-sm text-[13px] text-on-surface font-medium leading-snug">
                {project.outcome}
              </p>
            </div>
          </div>

          {/* 4. Technical Decisions & Architectural Highlights */}
          {arch?.technicalHighlights && arch.technicalHighlights.length > 0 && (
            <div className="space-y-2.5">
              <span className="font-label-sm text-[11px] text-secondary uppercase tracking-wider block font-semibold">
                Pertimbangan &amp; Keputusan Desain Sistem
              </span>
              <div className="space-y-2">
                {arch.technicalHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-container-low/50 border border-border-delicate/80 text-[13px] text-on-surface-variant"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. Key Performance Metric Spotlight */}
          {project.keyMetric && (
            <div className="p-4 rounded-xl bg-primary-container/10 border border-primary-container/20 flex items-center justify-between">
              <div>
                <span className="font-label-sm text-[11px] text-secondary uppercase tracking-wider block">
                  Metrik Efisiensi &amp; Performa Utama
                </span>
                <span className="font-semibold text-primary text-body-md">
                  {project.keyMetric.label}
                </span>
              </div>
              <span className="font-mono font-bold text-primary text-body-sm bg-surface-container-lowest px-3 py-1.5 rounded-lg border border-border-delicate shadow-2xs">
                {project.keyMetric.value}
              </span>
            </div>
          )}

          {/* 6. Technology Stack Used */}
          <div className="space-y-2">
            <span className="font-label-sm text-[11px] text-secondary uppercase tracking-wider block font-medium">
              Teknologi &amp; Modul Terintegrasi
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded-md bg-surface-container text-primary font-mono text-[11px] font-medium border border-border-delicate"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-border-delicate bg-surface-container-low/40 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button variant="secondary" size="sm">
                  <GithubIcon className="w-3.5 h-3.5 mr-1" />
                  <span>Lihat Source Code</span>
                </Button>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 min-h-[36px] rounded-lg text-label-sm font-semibold bg-primary text-white hover:bg-primary-container shadow-xs transition-colors cursor-pointer"
                >
                  <span className="text-white">Buka Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white ml-1" />
                </button>
              </a>
            )}
          </div>
          <Button variant="outline" size="sm" onClick={onClose}>
            Tutup
          </Button>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && images.length > 0 && (
        <div
          className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar with counter & close */}
          <div
            className="absolute top-4 left-4 right-4 flex items-center justify-between z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="font-mono text-sm text-white/90 bg-white/10 px-3 py-1 rounded-full backdrop-blur-md border border-white/15">
              {activeImageIndex + 1} / {images.length}
            </span>
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Tutup preview penuh"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Fullscreen Image Container */}
          <div
            className="relative w-full max-w-5xl h-[82vh] flex items-center justify-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeImageIndex]}
              alt={`${project.title} - Fullscreen Preview`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Lightbox Navigation */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer"
                aria-label="Gambar sebelumnya"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer"
                aria-label="Gambar berikutnya"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
