"use client";

import React from "react";
import Link from "next/link";
import { Mail, ArrowRight, Cpu, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useContactModal } from "@/components/modals/ContactModalContext";

export function ProjectsCta() {
  const { openContactModal } = useContactModal();

  return (
    <section className="w-full py-16 lg:py-20 bg-surface-container-lowest">
      <Container>
        <div className="bg-surface-container-low rounded-3xl border border-border-delicate shadow-level-1 p-8 md:p-12 lg:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-medium border border-border-delicate">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Rekayasa Teruji</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Butuh engineer yang fokus pada performa dan reliabilitas arsitektur?
            </h2>
            <p className="font-body-md text-body-md text-secondary leading-relaxed">
              Saya siap berkontribusi pada pengembangan sistem backend enterprise, optimasi query basis data, hingga eksekusi produk fullstack end-to-end.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
            <Button
              variant="primary"
              size="lg"
              onClick={openContactModal}
              className="group"
            >
              <span>Mulai Diskusi Teknis</span>
              <Mail className="w-4 h-4 ml-1 group-hover:scale-110 transition-transform" />
            </Button>

            <Link href="/tech-stack" className="inline-flex">
              <Button variant="outline" size="lg" className="w-full group">
                <Cpu className="w-4 h-4 mr-1 text-secondary" />
                <span>Lihat Tech Stack</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
