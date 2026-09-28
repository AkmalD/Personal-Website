import React from "react";
import { Metadata } from "next";
import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { ProjectsCta } from "@/components/projects/ProjectsCta";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  title: `Selected Projects | ${profileData.fullName} - ${profileData.roleTitle}`,
  description:
    "Showcase portofolio rekayasa perangkat lunak, sistem microservices Spring Boot, aplikasi riset kesehatan LawanPMO PIMNAS 2025, dashboard Dasawisma HKI, dan sistem industri PT Pindad oleh Akmal Goniyyu Hartono.",
};

export default function ProjectsPage() {
  return (
    <div className="w-full bg-surface-container-lowest">
      {/* 1. Header & Project Metric Counters */}
      <ProjectsHero />

      {/* 2. Interactive Projects Grid with Category Filters & Architecture Modal */}
      <ProjectsGrid />

      {/* 3. Call-To-Action Banner */}
      <ProjectsCta />
    </div>
  );
}
