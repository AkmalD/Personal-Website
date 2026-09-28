import React from "react";
import { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { EducationSection } from "@/components/about/EducationSection";
import { CertificationsShowcase } from "@/components/about/CertificationsShowcase";
import { ExperienceTimeline } from "@/components/about/ExperienceTimeline";
import { WorkPrinciples } from "@/components/about/WorkPrinciples";
import { AboutCta } from "@/components/about/AboutCta";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  title: `About | ${profileData.fullName} - ${profileData.roleTitle}`,
  description:
    "Profil biodata, riwayat pendidikan Politeknik Negeri Bandung (POLBAN), sertifikasi kompetensi, Hak Cipta HKI, dan pengalaman rekayasa perangkat lunak Akmal Goniyyu Hartono.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-surface-container-lowest">
      {/* 1. Asymmetric Hero & Bio Card */}
      <AboutHero />

      {/* 2. Formal Education & Academic Research */}
      <EducationSection />

      {/* 3. Authentic Certifications, HKI & National Honors */}
      <CertificationsShowcase />

      {/* 4. Engineering & Project Leadership Experience */}
      <ExperienceTimeline />

      {/* 5. Work Principles & Personal Mindset */}
      <WorkPrinciples />

      {/* 6. Contact & Next Actions Call-To-Action */}
      <AboutCta />
    </div>
  );
}
