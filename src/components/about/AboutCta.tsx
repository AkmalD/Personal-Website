"use client";

import React from "react";
import Link from "next/link";
import { Mail, Download, ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useContactModal } from "@/components/modals/ContactModalContext";
import { profileData } from "@/data/profile";

export function AboutCta() {
  const { openContactModal } = useContactModal();

  return (
    <section className="w-full py-16 lg:py-20 bg-surface-container-low/80">
      <Container>
        <div className="bg-surface-container-lowest rounded-3xl border border-border-delicate shadow-level-1 p-8 md:p-12 lg:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-medium border border-border-delicate">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Kolaborasi & Rekrutmen</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Tertarik untuk berdiskusi atau bekerja sama?
            </h2>
            <p className="font-body-md text-body-md text-secondary leading-relaxed">
              Terbuka untuk posisi Backend Engineer, Fullstack Engineer, atau peluang riset dan rekayasa perangkat lunak skala produksi.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
            <Button
              variant="primary"
              size="lg"
              onClick={openContactModal}
              className="group text-white"
            >
              <span className="text-white">Hubungi Saya</span>
              <Mail className="w-4 h-4 ml-1 text-white group-hover:scale-110 transition-transform" />
            </Button>

            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button variant="secondary" size="lg" className="w-full">
                <Download className="w-4 h-4 mr-1 text-secondary" />
                <span>Unduh CV (PDF)</span>
              </Button>
            </a>

            <Link href="/projects" className="inline-flex">
              <Button variant="outline" size="lg" className="w-full group">
                <span>Lihat Proyek</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
