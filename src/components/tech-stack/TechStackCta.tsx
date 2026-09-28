"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, FolderGit2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useContactModal } from "@/components/modals/ContactModalContext";

export function TechStackCta() {
  const { openContactModal } = useContactModal();

  return (
    <section className="w-full py-16 lg:py-20 bg-surface-container-lowest">
      <Container>
        <div className="bg-surface-container-low rounded-3xl border border-border-delicate shadow-level-1 p-8 md:p-12 lg:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl space-y-3">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold block">
              Pembuktian Nyata
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Ingin melihat stack ini bekerja di lingkungan riil?
            </h2>
            <p className="font-body-md text-body-md text-secondary leading-relaxed">
              Jelajahi diagram arsitektur sistem, alur konkurensi data, dan repositori kode dari 7 proyek rekayasa perangkat lunak terpilih.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
            <Link href="/projects" className="inline-flex">
              <Button variant="primary" size="lg" className="w-full group">
                <FolderGit2 className="w-4 h-4 mr-1" />
                <span>Lihat Semua Proyek</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>

            <Button
              variant="outline"
              size="lg"
              onClick={openContactModal}
              className="w-full sm:w-auto"
            >
              <Mail className="w-4 h-4 mr-1 text-secondary" />
              <span>Diskusi Teknis</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
