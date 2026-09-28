"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, Code2, Layers, CheckCircle2, ShieldAlert } from "lucide-react";
import { Project } from "@/types/portfolio";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

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
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const arch = project.architecture;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="architecture-modal-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-surface-container-lowest rounded-2xl border border-border-delicate shadow-level-2 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-border-delicate flex items-start justify-between bg-surface-container-low/50">
          <div className="space-y-1.5 pr-6">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="primary">{project.categoryLabel}</Badge>
              {project.badge && <Badge variant="sage">{project.badge}</Badge>}
              <span className="text-label-sm text-secondary">{project.year}</span>
            </div>
            <h2
              id="architecture-modal-title"
              className="text-headline-sm font-semibold text-on-surface"
            >
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-body-sm">
          {/* Overview */}
          <div>
            <h3 className="font-label-md text-label-md font-semibold text-on-surface mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-primary" />
              <span>Arsitektur &amp; Alur Sistem</span>
            </h3>
            <p className="text-secondary leading-relaxed bg-surface-container-low/60 p-4 rounded-xl border border-border-delicate/80">
              {arch?.overview || project.summary}
            </p>
          </div>

          {/* Components Grid */}
          {arch?.components && arch.components.length > 0 && (
            <div>
              <h3 className="font-label-md text-label-md font-semibold text-on-surface mb-3">
                Komponen Arsitektur Utama
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {arch.components.map((comp, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-surface-container-low border border-border-delicate flex flex-col justify-between space-y-2"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-on-surface text-body-sm">
                          {comp.title}
                        </span>
                        {comp.tech && (
                          <span className="text-[11px] px-2 py-0.5 rounded-md bg-surface-container font-mono text-secondary">
                            {comp.tech}
                          </span>
                        )}
                      </div>
                      <p className="text-secondary text-[13px] leading-relaxed">
                        {comp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Highlights */}
          {arch?.technicalHighlights && arch.technicalHighlights.length > 0 && (
            <div>
              <h3 className="font-label-md text-label-md font-semibold text-on-surface mb-3">
                Pertimbangan &amp; Keputusan Teknis
              </h3>
              <ul className="space-y-2.5">
                {arch.technicalHighlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-secondary text-[13px]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Metric Spotlight */}
          {project.keyMetric && (
            <div className="p-4 rounded-xl bg-primary-container/10 border border-primary-container/20 flex items-center justify-between">
              <div>
                <span className="text-label-sm text-secondary block">
                  Metrik Kinerja Utama
                </span>
                <span className="font-semibold text-primary text-body-md">
                  {project.keyMetric.label}
                </span>
              </div>
              <span className="font-mono font-semibold text-primary text-body-sm bg-surface-container-lowest px-3 py-1.5 rounded-lg border border-border-delicate">
                {project.keyMetric.value}
              </span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-border-delicate bg-surface-container-low/40 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-label-sm font-medium border border-border-delicate hover:bg-surface-container transition-colors text-secondary hover:text-on-surface"
              >
                <Code2 className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-label-sm font-medium bg-primary text-on-primary hover:bg-primary-container transition-colors shadow-sm"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
          <Button variant="secondary" size="sm" onClick={onClose}>
            Tutup
          </Button>
        </div>
      </div>
    </div>
  );
}
