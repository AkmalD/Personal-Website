"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Network,
  Code2,
  Cpu,
  ArrowRight,
  ExternalLink,
  Layers,
  Sparkles,
  GitBranch,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ArchitectureModal } from "@/components/modals/ArchitectureModal";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import { Project } from "@/types/portfolio";

export function EngineeringEthos() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);

  const handleOpenArchitecture = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const getPillarIcon = (name: string) => {
    switch (name) {
      case "Network":
        return <Network className="w-6 h-6 text-primary" />;
      case "Code2":
        return <Code2 className="w-6 h-6 text-primary" />;
      default:
        return <Cpu className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <div className="w-full space-y-20 lg:space-y-28 py-12">
      {/* SECTION 1: ENGINEERING ETHOS (BENTO PILLARS) */}
      <section className="w-full bg-surface-container-low py-16 lg:py-24">
        <Container>
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase font-semibold">
                Engineering Ethos
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1.5 tracking-tight">
                Methodical craft behind the scenes.
              </h2>
            </div>
            <p className="font-body-md text-body-md text-secondary max-w-sm leading-relaxed">
              Software is built for humans. I balance deep database tuning and concurrent
              microservice architectures with deliberate, quiet digital experiences.
            </p>
          </div>

          {/* Bento Grid 3 Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {profileData.ethosPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-surface-container-lowest border border-border-delicate shadow-level-1 hover:shadow-level-2 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center">
                  {getPillarIcon(pillar.iconName)}
                </div>
                <div className="space-y-2.5">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    {pillar.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-2 flex flex-wrap gap-2">
                  {pillar.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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
                className="group bg-surface-container-lowest rounded-2xl border border-border-delicate shadow-level-1 hover:shadow-level-2 hover:border-border-interactive transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Image Preview with overlay badges */}
                  <div className="relative w-full aspect-video bg-surface-container overflow-hidden">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 360px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-[11px] font-semibold text-primary shadow-xs">
                        {project.categoryLabel}
                      </span>
                      {project.badge && (
                        <span className="px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-[11px] font-semibold text-accent-sage shadow-xs">
                          {project.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface group-hover:text-primary transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="font-body-sm text-body-sm text-secondary mt-1.5 line-clamp-2 leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    {/* Challenge & Outcome Highlights */}
                    <div className="p-3.5 rounded-xl bg-surface-container-low border border-border-delicate space-y-2 text-body-sm">
                      <div>
                        <span className="text-[11px] uppercase font-semibold text-secondary block">
                          Tantangan
                        </span>
                        <p className="text-[13px] text-on-surface line-clamp-1 font-medium">
                          {project.challenge}
                        </p>
                      </div>
                      <div className="pt-1 border-t border-border-delicate/60">
                        <span className="text-[11px] uppercase font-semibold text-emerald-700 block">
                          Hasil / Metrik
                        </span>
                        <p className="text-[13px] text-on-surface line-clamp-1 font-medium">
                          {project.outcome}
                        </p>
                      </div>
                    </div>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.slice(0, 4).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md bg-surface-container text-secondary text-[11px] font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md bg-surface-container-low text-secondary text-[11px]">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0 flex items-center justify-between gap-2 border-t border-border-delicate/50 pt-4 mt-2">
                  <button
                    type="button"
                    onClick={() => handleOpenArchitecture(project)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 min-h-[38px] rounded-lg text-label-sm font-medium bg-primary text-on-primary hover:bg-primary-container transition-colors shadow-xs cursor-pointer"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>View Architecture</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 min-h-[38px] min-w-[38px] flex items-center justify-center rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 min-h-[38px] min-w-[38px] flex items-center justify-center rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container transition-colors"
                        title="GitHub Repository"
                      >
                        <GitBranch className="w-4 h-4" />
                      </a>
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
    </div>
  );
}
