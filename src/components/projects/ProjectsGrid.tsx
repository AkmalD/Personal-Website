"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Layers,
  ExternalLink,
  Search,
  Zap,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GithubIcon } from "@/components/ui/Icons";
import { ArchitectureModal } from "@/components/modals/ArchitectureModal";
import { projectsData } from "@/data/projects";
import { Project } from "@/types/portfolio";

export function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filterTabs = [
    { id: "all", label: "Semua Proyek", count: projectsData.length },
    {
      id: "microservices",
      label: "Microservices & Backend",
      count: projectsData.filter((p) => p.category === "microservices").length,
    },
    {
      id: "fullstack",
      label: "Fullstack Web & Systems",
      count: projectsData.filter((p) => p.category === "fullstack").length,
    },
    {
      id: "public_sector",
      label: "Healthcare & HKI Publik",
      count: projectsData.filter((p) => p.category === "public_sector").length,
    },
  ];

  const handleOpenArchitecture = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const filteredProjects = projectsData.filter((project) => {
    // Category filter
    if (activeFilter !== "all" && project.category !== activeFilter) {
      return false;
    }
    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = project.title.toLowerCase().includes(q);
      const matchSummary = project.summary.toLowerCase().includes(q);
      const matchTech = project.techStack.some((t) => t.toLowerCase().includes(q));
      if (!matchTitle && !matchSummary && !matchTech) {
        return false;
      }
    }
    return true;
  });

  return (
    <section className="w-full py-12 lg:py-20 bg-surface-container-lowest border-b border-border-delicate">
      <Container>
        {/* Controls Bar: Filter Tabs & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          {/* Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2 rounded-xl text-label-md font-medium transition-all duration-200 cursor-pointer shrink-0 flex items-center gap-2 ${
                    isActive
                      ? "bg-primary text-on-primary shadow-xs"
                      : "bg-surface-container-low text-secondary border border-border-delicate hover:bg-surface-container hover:text-on-surface"
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

          {/* Quick Search */}
          <div className="relative w-full md:w-64 shrink-0">
            <Search className="w-4 h-4 text-secondary absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari proyek, teknologi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-surface-container-low text-on-surface border border-border-delicate text-body-sm focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-secondary/60"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-surface-container-low border border-border-delicate space-y-3">
            <p className="font-body-md text-secondary">
              Tidak ada proyek yang sesuai dengan kriteria filter atau kata kunci &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("all");
              }}
              className="text-label-md text-primary font-semibold hover:underline cursor-pointer"
            >
              Reset filter pencarian
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group bg-surface-container-lowest rounded-2xl border border-border-delicate shadow-level-1 hover:shadow-level-2 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Visual Preview / Schematic Header */}
                  <div className="relative w-full h-56 bg-surface-container overflow-hidden border-b border-border-delicate">
                    {project.coverImage ? (
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 600px"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary via-slate-800 to-slate-950 flex flex-col items-center justify-center p-6 text-center">
                        <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white mb-2">
                          <Layers className="w-6 h-6" />
                        </div>
                        <span className="font-mono text-[11px] uppercase tracking-wider text-white/70">
                          Backend Microservices &amp; Architecture
                        </span>
                      </div>
                    )}

                    {/* Gradient Overlay for Tag Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent pointer-events-none" />

                    {/* Top Floating Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <Badge variant="primary">{project.categoryLabel}</Badge>
                        {project.badge && (
                          <span className="font-label-sm text-[11px] px-2.5 py-0.5 rounded-full bg-surface-container-lowest/90 text-primary font-semibold backdrop-blur-md border border-border-delicate shadow-xs">
                            {project.badge}
                          </span>
                        )}
                      </div>
                      <span className="font-mono text-label-sm text-white/90 bg-slate-950/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
                        {project.year}
                      </span>
                    </div>

                    {/* Bottom Performance Metric Indicator */}
                    {project.keyMetric && (
                      <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between px-3 py-1.5 rounded-lg bg-surface-container-lowest/95 backdrop-blur-md border border-border-delicate shadow-level-1">
                        <div className="flex items-center gap-1.5 text-secondary text-[12px] font-medium">
                          <Zap className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>{project.keyMetric.label}</span>
                        </div>
                        <span className="font-mono text-[12px] font-semibold text-primary">
                          {project.keyMetric.value}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-8 space-y-5">
                    <div>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-primary transition-colors leading-snug">
                        {project.title}
                      </h2>
                      <p className="font-body-sm text-body-sm text-secondary mt-1">
                        Peran: <span className="font-medium text-primary">{project.role}</span>
                      </p>
                    </div>

                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Challenge vs Outcome 2-Column Comparison Block */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-surface-container-low/70 border border-border-delicate">
                      <div className="space-y-1">
                        <span className="font-label-sm text-[11px] text-rose-700 uppercase tracking-wider font-semibold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                          Challenge
                        </span>
                        <p className="font-body-sm text-[12px] text-secondary leading-snug">
                          {project.challenge}
                        </p>
                      </div>

                      <div className="space-y-1 sm:border-l sm:border-border-delicate sm:pl-3">
                        <span className="font-label-sm text-[11px] text-emerald-800 uppercase tracking-wider font-semibold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          Outcome
                        </span>
                        <p className="font-body-sm text-[12px] text-on-surface font-medium leading-snug">
                          {project.outcome}
                        </p>
                      </div>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-surface-container text-primary font-mono text-[11px] font-medium border border-border-delicate/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-4 md:p-6 bg-surface-container-low/40 border-t border-border-delicate flex flex-wrap items-center justify-between gap-3">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleOpenArchitecture(project)}
                    className="group/btn"
                  >
                    <Layers className="w-3.5 h-3.5 mr-1 text-on-primary group-hover/btn:scale-110 transition-transform" />
                    <span>View Architecture</span>
                  </Button>

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
                          <span>Code</span>
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
                        <Button variant="outline" size="sm">
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5 ml-1 text-secondary" />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </Container>

      {/* Global Architecture Modal */}
      <ArchitectureModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProject(null);
        }}
      />
    </section>
  );
}
