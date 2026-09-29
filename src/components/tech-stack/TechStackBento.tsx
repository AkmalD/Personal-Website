"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Terminal,
  Database,
  Layout,
  Cpu,
  Compass,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { TechIcon } from "./TechIcon";
import { techStackData } from "@/data/tech-stack";
import { SkillCategoryType } from "@/types/portfolio";
import { cn } from "@/lib/utils";

export function TechStackBento() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const tabsRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const isMoved = useRef(false);

  const [scrollProgress, setScrollProgress] = useState(0);

  const checkScroll = () => {
    if (!tabsRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
    const maxScroll = scrollWidth - clientWidth;
    setCanScrollLeft(scrollLeft > 2);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 2);
    if (maxScroll > 0) {
      setScrollProgress(Math.min(100, Math.max(0, (scrollLeft / maxScroll) * 100)));
    } else {
      setScrollProgress(0);
    }
  };

  useEffect(() => {
    checkScroll();
    const handleResize = () => checkScroll();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (!tabsRef.current) return;
    const offset = direction === "left" ? -240 : 240;
    tabsRef.current.scrollBy({ left: offset, behavior: "smooth" });
    setTimeout(checkScroll, 300);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!tabsRef.current) return;
    setIsDragging(true);
    isMoved.current = false;
    setStartX(e.pageX - tabsRef.current.offsetLeft);
    setScrollLeftState(tabsRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !tabsRef.current) return;
    const x = e.pageX - tabsRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 4) {
      isMoved.current = true;
    }
    tabsRef.current.scrollLeft = scrollLeftState - walk;
    checkScroll();
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (!tabsRef.current) return;
    if (e.deltaY !== 0) {
      tabsRef.current.scrollLeft += e.deltaY;
      checkScroll();
    }
  };

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
        {/* Controls Bar: Search & Category Filter Slider */}
        <div className="space-y-4 mb-10">
          {/* Top Row: Label & Search Input */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="font-label-sm text-secondary uppercase tracking-wider font-semibold">
                Kategori Teknologi
              </span>
              <span className="text-secondary/40 text-xs">•</span>
              <span className="text-xs text-secondary font-mono">
                {filterTabs.length} Kategori Tersedia
              </span>
            </div>

            {/* Quick Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-secondary absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Cari tool, teknologi, fokus area..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface border border-border-delicate text-body-sm focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-secondary/60 transition-all shadow-2xs"
              />
            </div>
          </div>

          {/* Dedicated Category Slider Card */}
          <div className="bg-surface-container-low/40 p-2.5 sm:p-3 rounded-2xl border border-border-delicate">
            <div className="flex items-center gap-2">
              {/* Left Chevron Button */}
              <button
                type="button"
                onClick={() => handleScroll("left")}
                disabled={!canScrollLeft}
                aria-label="Geser kategori ke kiri"
                className={cn(
                  "w-9 h-9 rounded-xl bg-surface-container border border-border-delicate flex items-center justify-center shrink-0 transition-all text-secondary hover:text-on-surface hover:bg-surface-container-high shadow-2xs cursor-pointer",
                  !canScrollLeft ? "opacity-35 pointer-events-none cursor-default" : "opacity-100"
                )}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Scrollable Tabs */}
              <div
                ref={tabsRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUpOrLeave}
                onMouseLeave={handleMouseUpOrLeave}
                onWheel={handleWheel}
                onScroll={checkScroll}
                className={cn(
                  "flex items-center gap-2 overflow-x-auto scroll-smooth py-1 px-1 no-scrollbar select-none min-w-0 flex-1 cursor-grab",
                  isDragging && "cursor-grabbing"
                )}
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {filterTabs.map((tab) => {
                  const isActive = activeFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        if (!isMoved.current) {
                          setActiveFilter(tab.id);
                        }
                      }}
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

              {/* Right Chevron Button */}
              <button
                type="button"
                onClick={() => handleScroll("right")}
                disabled={!canScrollRight}
                aria-label="Geser kategori ke kanan"
                className={cn(
                  "w-9 h-9 rounded-xl bg-surface-container border border-border-delicate flex items-center justify-center shrink-0 transition-all text-secondary hover:text-on-surface hover:bg-surface-container-high shadow-2xs cursor-pointer",
                  !canScrollRight ? "opacity-35 pointer-events-none cursor-default" : "opacity-100"
                )}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Visual Slider Track Indicator */}
            <div className="mt-2.5 mx-auto max-w-xs h-1.5 bg-surface-container rounded-full overflow-hidden relative">
              <div
                className="h-full bg-primary rounded-full transition-all duration-100 ease-out"
                style={{
                  width: "35%",
                  marginLeft: `${scrollProgress * 0.65}%`,
                }}
              />
            </div>
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
                  {category.skills.map((skill, sIdx) => {
                    const isLastOdd =
                      category.skills.length % 2 === 1 &&
                      sIdx === category.skills.length - 1;
                    return (
                      <div
                        key={sIdx}
                        className={cn(
                          "group p-3 rounded-xl bg-surface-container-low/60 hover:bg-surface-container border border-border-delicate/70 transition-all duration-200 flex items-center gap-3 cursor-default",
                          isLastOdd && "sm:col-span-2"
                        )}
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
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
