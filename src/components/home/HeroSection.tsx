"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Layers, BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { profileData } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle Ambient Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1120px] h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-surface-container/60 blur-3xl opacity-70" />
        <div className="absolute top-72 -left-20 w-80 h-80 rounded-full bg-surface-container-low/90 blur-3xl opacity-60" />
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-center">
          {/* Text & Value Proposition (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Status Indicator Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface-variant shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-label-sm text-label-sm tracking-wide uppercase text-primary font-semibold">
                {profileData.statusBadge}
              </span>
            </div>

            {/* Catchphrase & Headline */}
            <h1 className="font-display text-display-mobile sm:text-display tracking-tight text-on-surface leading-tight">
              Hi, I&apos;m{" "}
              <span className="text-primary font-semibold">
                {profileData.fullName}
              </span>
              . I build thoughtful digital products &amp; reliable backend systems.
            </h1>

            {/* Subtitle Elevator Pitch */}
            <p className="font-body-lg text-body-lg text-secondary max-w-xl leading-relaxed">
              Software engineering graduate from Politeknik Negeri Bandung focused on
              scalable distributed systems, clean REST &amp; event-driven APIs, and
              seamless fullstack interfaces that turn complex data into quiet clarity.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-medium shadow-sm hover:bg-primary-container transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/tech-stack"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-container-low text-primary font-label-md text-label-md font-medium border border-border-delicate shadow-xs hover:bg-surface-container transition-all cursor-pointer"
              >
                <Layers className="w-4 h-4 text-primary" />
                <span>View Tech Stack</span>
              </Link>
            </div>

            {/* Trust Markers */}
            <div className="grid grid-cols-3 gap-6 pt-6 w-full max-w-md border-t border-border-delicate/80">
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary font-semibold">
                  {profileData.projectsCompleted}+
                </span>
                <span className="font-label-sm text-label-sm text-secondary">
                  Projects Completed
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary font-semibold">
                  {profileData.gpa}
                </span>
                <span className="font-label-sm text-label-sm text-secondary">
                  Cumulative GPA
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary font-semibold">
                  2 HKI
                </span>
                <span className="font-label-sm text-label-sm text-secondary">
                  Hak Cipta Nasional
                </span>
              </div>
            </div>
          </div>

          {/* Hero Portrait Card Frame (5 Columns) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] group">
              {/* Background Backdrop Frame */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-surface-container-high transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4" />

              {/* Main Image Container */}
              <div className="relative z-10 rounded-2xl overflow-hidden bg-surface-container-lowest border border-border-delicate shadow-level-1 transition-transform duration-300 group-hover:-translate-y-1">
                <div className="relative w-full aspect-square">
                  <Image
                    src={profileData.avatarUrl}
                    alt={profileData.fullName}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                </div>

                {/* Floating Bio Status Card */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-surface-container-lowest/95 backdrop-blur-md p-3.5 rounded-xl border border-border-delicate shadow-sm flex items-center justify-between">
                  <div className="flex flex-col min-w-0 pr-2">
                    <span className="font-label-md text-label-md text-primary font-semibold truncate">
                      {profileData.fullName}
                    </span>
                    <span className="text-[11px] text-secondary truncate">
                      D4 Teknik Informatika • POLBAN
                    </span>
                  </div>
                  <div
                    className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0"
                    title="Terverifikasi"
                  >
                    <BadgeCheck className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
