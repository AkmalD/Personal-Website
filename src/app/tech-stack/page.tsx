import React from "react";
import { Metadata } from "next";
import { TechStackHero } from "@/components/tech-stack/TechStackHero";
import { TechStackBento } from "@/components/tech-stack/TechStackBento";
import { MethodologySpotlight } from "@/components/tech-stack/MethodologySpotlight";
import { TechStackCta } from "@/components/tech-stack/TechStackCta";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  title: `Tech Stack & Tools | ${profileData.fullName} - ${profileData.roleTitle}`,
  description:
    "Eksplorasi seluruh teknologi, bahasa pemrograman, basis data relasional, framework Spring Boot/Next.js, dan standar rekayasa perangkat lunak Akmal Goniyyu Hartono.",
};

export default function TechStackPage() {
  return (
    <div className="w-full bg-surface-container-lowest">
      {/* 1. Header & Architectural Metrics */}
      <TechStackHero />

      {/* 2. Interactive Bento Grid with Instant Category Filtering */}
      <TechStackBento />

      {/* 3. Engineering Stack Rationale & Methodology Spotlight */}
      <MethodologySpotlight />

      {/* 4. Action Banner Linking to Projects */}
      <TechStackCta />
    </div>
  );
}
