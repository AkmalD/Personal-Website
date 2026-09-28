import React from "react";
import { Compass, MessageSquareCode, ShieldCheck, HeartHandshake } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function WorkPrinciples() {
  const principles = [
    {
      title: "Rasa Ingin Tahu Berkelanjutan",
      mindset: "Continuous Learner",
      icon: <Compass className="w-5 h-5 text-primary" />,
      desc: "Selalu antusias mendalami internal framework, efisiensi query basis data pada level execution plan, serta bereksperimen dengan pola arsitektur modern yang relevan untuk kebutuhan riil industri.",
    },
    {
      title: "Komunikasi & Transparansi Kolaboratif",
      mindset: "Empathetic Collaboration",
      icon: <MessageSquareCode className="w-5 h-5 text-primary" />,
      desc: "Menjunjung tinggi kejelasan dokumentasi, penyusunan kontrak API yang terdefinisi rapi, code review yang konstruktif dan solutif, serta komunikasi asinkron yang terstruktur antar tim.",
    },
    {
      title: "Ketelitian & Kualitas Kode Rekayasa",
      mindset: "Software Craftsmanship",
      icon: <ShieldCheck className="w-5 h-5 text-primary" />,
      desc: "Mengutamakan unit testing menyeluruh, mitigasi edge cases sejak perancangan awal, kepatuhan prinsip SOLID, dan perancangan skema data yang disiplin demi kemudahan pemeliharaan jangka panjang.",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-surface-container-low/30 border-b border-border-delicate">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase font-semibold">
              Cara Kerja & Karakter
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1 tracking-tight">
              Nilai Kerja & Rekayasa Perangkat Lunak
            </h2>
          </div>
          <p className="font-body-md text-body-md text-secondary max-w-md leading-relaxed">
            Prinsip kerja profesional yang saya pegang teguh dalam setiap baris kode, diskusi arsitektur, dan kolaborasi tim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((item, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 rounded-2xl bg-surface-container-lowest border border-border-delicate shadow-level-1 hover:shadow-level-2 transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-xl bg-surface-container flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    {item.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-border-delicate">
                <span className="font-label-sm text-label-sm text-primary font-mono tracking-wider uppercase font-semibold">
                  Mindset: {item.mindset}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
