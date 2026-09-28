"use client";

import React from "react";
import Image from "next/image";
import {
  Mail,
  Download,
  MapPin,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { useContactModal } from "@/components/modals/ContactModalContext";
import { profileData } from "@/data/profile";

export function AboutHero() {
  const { openContactModal } = useContactModal();

  return (
    <section className="w-full pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-border-delicate">
      <Container>
        {/* Breadcrumb / Section Header Indicator */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase font-semibold">
            Engineering Background & Philosophy
          </span>
        </div>

        {/* Page Title */}
        <h1 className="font-headline-lg text-headline-lg lg:text-display text-on-surface max-w-4xl tracking-tight mb-12">
          Membangun sistem dengan presisi, rasa ingin tahu, dan empati pengguna.
        </h1>

        {/* Asymmetric Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Narrative & Engineering Mindset (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="prose text-secondary font-body-lg text-body-lg space-y-5 leading-relaxed">
              {profileData.narrativeParagraphs.map((paragraph, index) => (
                <p key={index} className="text-on-surface-variant">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Competencies Badges */}
            <div className="pt-3">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block mb-3 font-medium">
                Pilar Rekayasa & Fokus Utama
              </span>
              <div className="flex flex-wrap gap-2">
                {profileData.coreAttributes.map((attr, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full bg-surface-container-low text-primary border border-border-delicate font-label-md text-label-md hover:bg-surface-container transition-colors"
                  >
                    {attr}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={openContactModal}
                className="group"
              >
                <span>Hubungi Langsung</span>
                <Mail className="w-4 h-4 ml-1 group-hover:scale-110 transition-transform" />
              </Button>
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button variant="secondary" size="md">
                  <Download className="w-4 h-4 mr-1 text-secondary" />
                  <span>Unduh CV Lengkap (PDF)</span>
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Bio Card & Quick Facts (5 Cols) */}
          <div className="lg:col-span-5 bg-surface-container-lowest rounded-2xl border border-border-delicate shadow-level-1 p-6 flex flex-col gap-6">
            {/* Avatar & Floating Status Badge */}
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-surface-container border border-border-delicate">
              <Image
                src={profileData.avatarUrl}
                alt={profileData.fullName}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-surface-container-lowest/95 backdrop-blur-md flex items-center gap-2 shadow-level-1 border border-border-delicate">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-label-sm text-label-sm text-primary font-semibold">
                  Siap Kerja Penuh Waktu
                </span>
              </div>
            </div>

            {/* Metadata Rows */}
            <div className="flex flex-col divide-y divide-border-delicate font-body-sm text-body-sm">
              <div className="py-2.5 flex justify-between items-baseline gap-2">
                <span className="text-secondary font-label-md text-label-md">Nama Lengkap</span>
                <span className="text-on-surface font-semibold text-right">
                  {profileData.fullName}
                </span>
              </div>

              <div className="py-2.5 flex justify-between items-baseline gap-2">
                <span className="text-secondary font-label-md text-label-md">Peran Utama</span>
                <span className="text-on-surface font-medium text-right">
                  {profileData.roleTitle}
                </span>
              </div>

              <div className="py-2.5 flex justify-between items-baseline gap-2">
                <span className="text-secondary font-label-md text-label-md">Pendidikan</span>
                <span className="text-on-surface font-medium text-right">
                  POLBAN (D4 Teknik Informatika)
                </span>
              </div>

              <div className="py-2.5 flex justify-between items-baseline gap-2">
                <span className="text-secondary font-label-md text-label-md">Indeks Prestasi</span>
                <span className="text-primary font-bold text-right">
                  IPK {profileData.gpa} / 4.00
                </span>
              </div>

              <div className="py-2.5 flex justify-between items-baseline gap-2">
                <span className="text-secondary font-label-md text-label-md">Lokasi</span>
                <span className="text-on-surface font-medium text-right flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-secondary inline" />
                  {profileData.location}
                </span>
              </div>

              <div className="py-2.5 flex justify-between items-baseline gap-2">
                <span className="text-secondary font-label-md text-label-md">Bahasa</span>
                <span className="text-on-surface font-medium text-right">
                  Indonesia (Native), English (TOEIC 800)
                </span>
              </div>

              <div className="py-2.5 flex justify-between items-baseline gap-2">
                <span className="text-secondary font-label-md text-label-md">Jejaring & Kode</span>
                <div className="flex items-center gap-3 text-right">
                  <a
                    href={profileData.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:text-primary-container font-medium transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <span className="text-secondary/40">•</span>
                  <a
                    href={profileData.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:text-primary-container font-medium transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
