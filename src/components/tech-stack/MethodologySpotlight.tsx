import React from "react";
import { Server, Database, Zap, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function MethodologySpotlight() {
  const pillars = [
    {
      title: "Backend Core: Spring Boot & Node.js",
      icon: <Server className="w-5 h-5 text-primary" />,
      desc: "Mengapa kombinasi ini? Spring Boot memberikan ekosistem enterprise yang matang untuk microservices bertransaksi tinggi (Java OOP, Spring Cloud Gateway, dan security context). Sementara Node.js / Express.js sangat lincah untuk I/O asinkron cepat dan streaming payload real-time.",
      badge: "High Throughput & Isolation",
    },
    {
      title: "Persistence: Strict ACID PostgreSQL",
      icon: <Database className="w-5 h-5 text-primary" />,
      desc: "Integritas data adalah prioritas pertama. Pemodelan basis data relasional menerapkan normalisasi 3NF, kunci asing yang ketat, dan indeks komposit terencana. Menggabungkan Prisma ORM untuk keamanan tipe saat kompilasi serta raw SQL saat optimasi query kritis.",
      badge: "Zero Data Corruption",
    },
    {
      title: "Delivery: Static App Router & Edge CDN",
      icon: <Zap className="w-5 h-5 text-primary" />,
      desc: "Arsitektur frontend memanfaatkan Next.js 15 App Router yang diekspor menjadi aset statis murni (SSG). Hasil build didistribusikan melalui Cloudflare Edge Network global tanpa server origin, menghasilkan waktu muat sub-detik dan skor Lighthouse 95+.",
      badge: "Zero Cold-Start Latency",
    },
    {
      title: "Quality: SOLID & DTO Abstractions",
      icon: <ShieldCheck className="w-5 h-5 text-primary" />,
      desc: "Memisahkan lapisan controller, service, repository, dan payload DTO secara tegas. Pola ini mencegah entity leak ke respon API publik, mempermudah pembuatan mock unit tests, dan menjaga basis kode tetap bersih saat kebutuhan bisnis berkembang.",
      badge: "Auditable & Maintainable",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-surface-container-low/40 border-b border-border-delicate">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase font-semibold">
              Rasionalisasi Arsitektur
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1 tracking-tight">
              Filosofi Pemilihan Stack Rekayasa
            </h2>
          </div>
          <p className="font-body-md text-body-md text-secondary max-w-md leading-relaxed">
            Setiap teknologi dipilih bukan berdasarkan tren semata, melainkan kesesuaian matematis antara keandalan sistem dan kemudahan pemeliharaan tim.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 rounded-2xl bg-surface-container-lowest border border-border-delicate shadow-level-1 hover:border-primary/25 transition-all duration-300 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <span className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-surface-container text-primary font-medium border border-border-delicate">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                  {pillar.title}
                </h3>

                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
