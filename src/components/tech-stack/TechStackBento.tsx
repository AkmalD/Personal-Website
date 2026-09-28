"use client";

import React, { useState } from "react";
import {
  Terminal,
  Database,
  Layout,
  Cpu,
  Compass,
  CheckCircle2,
  Sparkles,
  Search,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { TechIcon } from "./TechIcon";
import { techStackData } from "@/data/tech-stack";
import { SkillCategory, SkillCategoryType } from "@/types/portfolio";

export function TechStackBento() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filterTabs = [
    { id: "all", label: "Semua Kategori", count: techStackData.length },
    { id: "backend", label: "Backend & Core", count: techStackData.find((c) => c.id === "backend")?.skills.length || 0 },
    { id: "database", label: "Databases & Cache", count: techStackData.find((c) => c.id === "database")?.skills.length || 0 },
    { id: "frontend", label: "Frontend & UI", count: techStackData.find((c) => c.id === "frontend")?.skills.length || 0 },
    { id: "devops_tools", label: "DevOps & Tools", count: techStackData.find((c) => c.id === "devops_tools")?.skills.length || 0 },
    { id: "architecture", label: "Architecture", count: techStackData.find((c) => c.id === "architecture")?.skills.length || 0 },
  ];

  const getCategoryIcon = (id: SkillCategoryType) => {
    switch (id) {
      case "backend":
        return <Terminal className="w-6 h-6 text-primary" />;
      case "database":
        return <Database className="w-6 h-6 text-primary" />;
      case "frontend":
        return <Layout className="w-6 h-6 text-primary" />;
      case "devops_tools":
        return <Cpu className="w-6 h-6 text-primary" />;
      case "architecture":
        return <Compass className="w-6 h-6 text-primary" />;
      default:
        return <Terminal className="w-6 h-6 text-primary" />;
    }
  };

  // Filter categories and skills
  const filteredCategories = techStackData
    .filter((category) => {
      if (activeFilter !== "all" && category.id !== activeFilter) {
        return false;
      }
      return true;
    })
    .map((category) => {
      if (!searchQuery.trim()) return category;
      const query = searchQuery.toLowerCase();
      const matchingSkills = category.skills.filter(
        (s) =>
          s.name.toLowerCase().includes(query) ||
          s.focusArea.toLowerCase().includes(query)
      );
      return {
        ...category,
        skills: matchingSkills,
      };
    })
    .filter((category) => category.skills.length > 0);

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

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64 shrink-0">
            <Search className="w-4 h-4 text-secondary absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari tool, teknologi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-surface-container-low text-on-surface border border-border-delicate text-body-sm focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-secondary/60"
            />
          </div>
        </div>

        {/* Categories Bento Grid */}
        {filteredCategories.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-surface-container-low border border-border-delicate space-y-3">
            <p className="font-body-md text-secondary">
              Tidak ada teknologi yang cocok dengan kata kunci &ldquo;{searchQuery}&rdquo;.
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className="bg-surface-container-lowest rounded-2xl border border-border-delicate shadow-level-1 hover:border-primary/25 hover:shadow-level-2 transition-all duration-300 p-6 md:p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-border-delicate">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center shrink-0">
                        {getCategoryIcon(category.id)}
                      </div>
                      <div>
                        <span className="font-label-sm text-[11px] text-secondary uppercase tracking-wider block font-medium">
                          {category.subtitle}
                        </span>
                        <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                          {category.categoryName}
                        </h2>
                      </div>
                    </div>
                    <Badge variant="secondary">
                      {category.skills.length} Tools
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-6">
                    {category.description}
                  </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group p-3 rounded-xl bg-surface-container-low/60 hover:bg-surface-container border border-border-delicate/70 transition-all duration-200 flex items-center gap-3 cursor-default"
                    >
                      <div className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                        <TechIcon name={skill.icon} className="w-4 h-4 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-label-md text-label-md text-on-surface font-semibold truncate group-hover:text-primary transition-colors">
                          {skill.name}
                        </p>
                        <p className="font-mono text-[11px] text-secondary truncate">
                          {skill.focusArea}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
