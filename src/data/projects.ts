import { Project } from "@/types/portfolio";

export const projectsData: Project[] = [
  {
    id: "spring-boot-microservices",
    title: "Spring Boot Microservices Architecture",
    slug: "spring-boot-microservices",
    summary:
      "Arsitektur microservices terdistribusi berbasis Java 17 dan Spring Boot, menerapkan API Gateway, Catalogue Service, Order Service, DTO pattern, dan isolated PostgreSQL databases.",
    category: "microservices",
    categoryLabel: "Backend & Microservices",
    role: "Backend Engineer",
    year: "2024",
    featured: false,
    badge: "Featured Architecture",
    keyMetric: {
      label: "Inter-Service Latency",
      value: "< 15ms under load",
    },
    challenge:
      "Pemisahan domain monolitik menjadi layanan independen yang rawan inkonsistensi stok saat lonjakan order dan kebutuhan routing aman terpusat.",
    solution:
      "Implementasi Spring Cloud Gateway sebagai reverse proxy terpusat, isolasi database PostgreSQL per service, penerapan pola DTO terenkapsulasi, dan transaksional boundary ketat.",
    outcome:
      "Zero data corruption pada transaksi order concurrent, pemisahan dependensi service 100% modular, dan integrasi API yang terstruktur standar.",
    techStack: [
      "Java 17",
      "Spring Boot",
      "Spring Cloud Gateway",
      "PostgreSQL",
      "Maven",
      "Docker",
      "REST API",
      "DTO Pattern",
    ],
    coverImage: "",
    images: [],
    architecture: {
      overview:
        "Client request diterima terpusat oleh Spring Cloud Gateway untuk routing aman, kemudian diteruskan ke Catalogue & Order service yang berkomunikasi secara stateless dengan PostgreSQL masing-masing.",
      components: [
        {
          title: "Spring Cloud Gateway",
          description:
            "Menangani API routing terpusat, rate limiting, and request transformation.",
          tech: "Spring Cloud Gateway",
        },
        {
          title: "Catalogue Service",
          description:
            "Menyediakan katalog produk dan verifikasi ketersediaan stok secara read-optimized.",
          tech: "Spring Boot, JPA",
        },
        {
          title: "Order Service",
          description:
            "Mengatur orkestrasi pemesanan, pemotongan stok transaksional, dan validasi DTO.",
          tech: "Spring Boot, PostgreSQL",
        },
      ],
      technicalHighlights: [
        "Pola DTO (Data Transfer Object) ketat memisahkan entity internal dari response publik.",
        "Exception handling global dengan struktur response error terstandarisasi RFC 7807.",
        "Independent database per service mencegah coupling skema database.",
      ],
    },
  },
  {
    id: "clinic-information-system",
    title: "Clinic Information System (MedSys)",
    slug: "clinic-information-system",
    summary:
      "Sistem informasi manajemen operasional klinik komprehensif mencakup manajemen antrean pasien, rekam medis SOAP, resep obat, dan kontrol akses berbasis peran (RBAC).",
    category: "fullstack",
    categoryLabel: "Fullstack & Healthcare",
    role: "Fullstack Engineer",
    year: "2024",
    featured: false,
    badge: "Healthcare System",
    keyMetric: {
      label: "Workflow Automation",
      value: "4 Role RBAC & SOAP Records",
    },
    challenge:
      "Alur pelayanan medis manual yang lambat, rentan salah input resep, dan kebutuhan privasi ketat antara admin, perawat, dokter, dan apoteker.",
    solution:
      "Membangun REST API modular dengan Node.js (Express 5), Prisma 6 ORM pada PostgreSQL, otentikasi JWT + Role-Based Access Control, serta antarmuka React Vite yang responsif.",
    outcome:
      "Pencatatan rekam medis SOAP terstandardisasi, alur antrean otomatis real-time, dan pemisahan hak akses per role 100% aman.",
    techStack: [
      "Node.js",
      "Express 5",
      "Prisma ORM",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "JWT Auth",
      "RBAC",
    ],
    coverImage: "/assets/projects/clinic-system/clinic-1.png",
    images: [
      "/assets/projects/clinic-system/clinic-1.png",
      "/assets/projects/clinic-system/clinic-2.png",
      "/assets/projects/clinic-system/clinic-3.png",
      "/assets/projects/clinic-system/clinic-4.png",
    ],
    architecture: {
      overview:
        "Arsitektur client-server berlapis (Controller-Service-Repository) dengan Prisma ORM untuk memastikan integritas data medis relasional yang kompleks.",
      components: [
        {
          title: "RBAC & Auth Middleware",
          description:
            "Memverifikasi token JWT dan hak akses role (Admin, Dokter, Perawat, Apoteker).",
          tech: "Express Middleware, JWT",
        },
        {
          title: "Queue & Medical Records Service",
          description:
            "Mengatur antrean konsultasi berurutan dan penyimpanan format SOAP terstruktur.",
          tech: "Node.js, Prisma",
        },
        {
          title: "Prescription & Pharmacy Service",
          description:
            "Sinkronisasi otomatis resep dokter ke modul penyerahan obat farmasi.",
          tech: "PostgreSQL, Prisma ORM",
        },
      ],
      technicalHighlights: [
        "Migrasi Prisma schema relasional multi-tabel dengan referential integrity ON DELETE RESTRICT/CASCADE.",
        "Validasi request body runtime menggunakan schema validator sebelum masuk ke service layer.",
      ],
    },
  },
  {
    id: "lawanpmo",
    title: "LawanPMO — Platform Edukasi Adiksi Digital",
    slug: "lawanpmo",
    summary:
      "Platform edukasi kesehatan mental dan penanganan adiksi digital, tersertifikasi Hak Cipta Kemenkumham RI dan meraih Penghargaan Perak & Perunggu pada kompetisi nasional.",
    category: "public_sector",
    categoryLabel: "Public Impact & Healthtech",
    role: "Lead Technical Developer",
    year: "2024",
    featured: true,
    badge: "Juara Nasional & HKI",
    keyMetric: {
      label: "Prestasi & Legalitas",
      value: "HKI Resmi + Medali Perak PIMNAS",
    },
    challenge:
      "Menyediakan platform intervensi digital yang ramah stigma, teruji secara sains, dan mampu melayani ribuan pengguna dengan latensi minimal dan data privasi aman.",
    solution:
      "Mengembangkan arsitektur web modern yang ringan dengan modul edukasi interaktif, assessment adiksi terarah, pelacak pemulihan, dan pengamanan data anonim.",
    outcome:
      "Meraih Surat Pencatatan Ciptaan resmi Kemenkumham RI (No. EC002026167019), memenangkan medali perak poster & perunggu presentasi tingkat nasional, serta online di https://lawanpmo.id/.",
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Cloudflare CDN",
    ],
    liveUrl: "https://lawanpmo.id/",
    coverImage: "/assets/projects/lawanpmo/lawanpmo-cover.png",
    images: [
      "/assets/projects/lawanpmo/lawanpmo-cover.png",
      "/assets/projects/lawanpmo/lawanpmo-1.jpeg",
      "/assets/projects/lawanpmo/lawanpmo-2.jpeg",
      "/assets/projects/lawanpmo/lawanpmo-3.jpeg",
      "/assets/projects/lawanpmo/lawanpmo-4.jpeg",
    ],
    architecture: {
      overview:
        "Arsitektur static-first dengan edge caching Cloudflare untuk kecepatan akses instan dan penanganan lonjakan traffic kampanye edukasi nasional.",
      components: [
        {
          title: "Client Assessment Engine",
          description:
            "Menjalankan evaluasi tingkat adiksi dengan kalkulasi skor instan di browser.",
          tech: "React, TypeScript",
        },
        {
          title: "Edge CDN & Security",
          description:
            "Proteksi DDoS, caching statis, dan kompresi konten untuk pengguna mobile.",
          tech: "Cloudflare",
        },
      ],
      technicalHighlights: [
        "Terdaftar Hak Cipta Kemenkumham RI No. EC002026167019.",
        "Skor Lighthouse 98+ pada akses seluler untuk menjangkau pengguna di seluruh pelosok Indonesia.",
      ],
    },
  },
  {
    id: "dasawisma-sariwangi",
    title: "Dasawisma Sariwangi — Sistem Informasi Kependudukan",
    slug: "dasawisma-sariwangi",
    summary:
      "Aplikasi dashboard pendataan kependudukan terpadu tingkat rukun warga di Desa Sariwangi berbasis Next.js 15, React 19, dan TanStack Table berkinerja tinggi.",
    category: "public_sector",
    categoryLabel: "Public Governance & Web App",
    role: "Frontend & Fullstack Engineer",
    year: "2024",
    featured: true,
    badge: "Terdaftar HKI",
    keyMetric: {
      label: "Legalitas & Dampak",
      value: "Hak Cipta Kemenkumham RI",
    },
    challenge:
      "Proses rekapitulasi manual dokumen PKK Dasawisma kertas yang lambat, rentan duplikasi data keluarga, dan sulit dicetak sesuai format dinas.",
    solution:
      "Membangun antarmuka data tabular berperforma tinggi dengan TanStack Table, filter multi-kolom, pencarian instan, serta generator ekspor dokumen PDF & Excel otomatis.",
    outcome:
      "Terdaftar Hak Cipta Kemenkumham RI, memangkas waktu input data warga hingga 80%, dan eliminasi salah hitung data agregat kependudukan.",
    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Table",
      "PDF Export",
    ],
    coverImage: "/assets/projects/dasawisma/dasawisma-1.png",
    images: [
      "/assets/projects/dasawisma/dasawisma-1.png",
      "/assets/projects/dasawisma/dasawisma-2.png",
      "/assets/projects/dasawisma/dasawisma-3.png",
    ],
    architecture: {
      overview:
        "Arsitektur client-side virtualized table berbasis Next.js yang mampu me-render ribuan baris data keluarga tanpa frame drop.",
      components: [
        {
          title: "Tabular Processing Engine",
          description:
            "Virtual rendering dan agregasi formula statistik kependudukan real-time.",
          tech: "TanStack Table",
        },
        {
          title: "Reporting Subsystem",
          description:
            "Generator dokumen laporan PDF format resmi pemerintah daerah.",
          tech: "HTML5 Canvas, jsPDF",
        },
      ],
      technicalHighlights: [
        "Sertifikat Hak Cipta Kemenkumham RI atas karya perangkat lunak administrasi kemasyarakatan.",
        "Zero UI latency saat melakukan filtering data tabular multi-parameter.",
      ],
    },
  },
  {
    id: "evisitor-pindad",
    title: "E-Visitor PT Pindad — Guest Access Management",
    slug: "evisitor-pindad",
    summary:
      "Sistem registrasi tamu digital dan manajemen akses fasilitas industri pertahanan nasional (PT Pindad) untuk menjamin transparansi dan keamanan kunjungan.",
    category: "fullstack",
    categoryLabel: "Enterprise Security & Web",
    role: "Backend & Database Designer",
    year: "2024",
    featured: true,
    badge: "Enterprise Security",
    keyMetric: {
      label: "Security Compliance",
      value: "Multi-Tier Approval Workflow",
    },
    challenge:
      "Pencatatan buku tamu fisik rawan manipulasi identitas, tidak terpantau oleh divisi keamanan secara real-time, dan lambat dalam persetujuan pejabat penanggung jawab.",
    solution:
      "Merancang skema basis data relasional PostgreSQL dengan status flow approval bertingkat, API controller Express.js, dan autentikasi session terenkripsi.",
    outcome:
      "Alur persetujuan kunjungan tamu terdokumentasi 100% digital, tracking durasi kunjungan akurat, dan kepatuhan standar keamanan fasilitas vital.",
    techStack: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "React",
      "REST API",
      "Tailwind CSS",
    ],
    coverImage: "/assets/projects/evisitor/evisitor-1.png",
    images: ["/assets/projects/evisitor/evisitor-1.png"],
    architecture: {
      overview:
        "Sistem flow transaksi kunjungan dari Pre-registration -> Identity Verification -> Security Pass Approval -> Check-out Logging.",
      components: [
        {
          title: "Visitor Flow State Machine",
          description:
            "Mengatur transisi status kunjungan dari Pending -> Approved -> Active -> Completed.",
          tech: "Express.js, SQL",
        },
        {
          title: "Access Log Store",
          description:
            "Audit trail log untuk setiap interaksi dan perubahan status perizinan tamu.",
          tech: "PostgreSQL",
        },
      ],
      technicalHighlights: [
        "Desain relasi database terstruktur normalisasi 3NF untuk mencegah redundansi profil instansi tamu.",
      ],
    },
  },
  {
    id: "lalajoeuy-movie-review",
    title: "Lalajoeuy (webdev2024) — Movie Review & CMS",
    slug: "lalajoeuy-movie-review",
    summary:
      "Platform katalog ulasan film interaktif dan sistem manajemen konten (CMS) berbasis Express.js, React, MySQL, dan integrasi Google OAuth 2.0.",
    category: "fullstack",
    categoryLabel: "Fullstack & Media",
    role: "Fullstack Developer",
    year: "2024",
    featured: false,
    keyMetric: {
      label: "Authentication & CMS",
      value: "JWT + OAuth 2.0 Integration",
    },
    challenge:
      "Pengelolaan relasi data kompleks (Film, Genre, Reviewer, Rating) dan proteksi rute pengguna vs administrator.",
    solution:
      "Membangun REST API komprehensif dengan validasi token JWT ganda (access & refresh token), integrasi Google OAuth, dan dashboard administrasi konten film.",
    outcome:
      "Aplikasi ulasan film modular dengan pencarian multi-genre, autentikasi ganda yang aman, dan CMS terintegrasi.",
    techStack: [
      "React",
      "Express.js",
      "MySQL",
      "Google OAuth 2.0",
      "JWT Auth",
      "Tailwind CSS",
    ],
    repoUrl: "https://github.com/muhammadrama19/webdev2024",
    coverImage: "/assets/projects/lalajoeuy/lalajoeuy-1.png",
    images: [
      "/assets/projects/lalajoeuy/lalajoeuy-1.png",
      "/assets/projects/lalajoeuy/lalajoeuy-2.png",
      "/assets/projects/lalajoeuy/lalajoeuy-3.png",
    ],
    architecture: {
      overview:
        "Arsitektur SPA (Single Page Application) React yang berkomunikasi via RESTful endpoints ke backend Express dan basis data relasional MySQL.",
      components: [
        {
          title: "OAuth & JWT Service",
          description:
            "Penanganan login SSO Google dan verifikasi token Bearer pada route terproteksi.",
          tech: "Passport.js, JWT",
        },
        {
          title: "Catalog & Review Engine",
          description:
            "Agregasi rating film dan kalkulasi skor ulasan pengguna secara real-time.",
          tech: "Express, MySQL",
        },
      ],
      technicalHighlights: [
        "Penyimpanan relasi many-to-many antara Film dan Genre dengan query SQL terindeks.",
      ],
    },
  },
  {
    id: "pkm-smkn1-cisarua",
    title: "PkM SMKN 1 Cisarua — School Administration System",
    slug: "pkm-smkn1-cisarua",
    summary:
      "Sistem otomasi administrasi dan inventarisasi sekolah pada program Pengabdian kepada Masyarakat (PkM) di SMKN 1 Cisarua.",
    category: "fullstack",
    categoryLabel: "Education & Governance",
    role: "Lead Technical Developer",
    year: "2024",
    featured: false,
    badge: "Lead Developer",
    keyMetric: {
      label: "Project Leadership",
      value: "Sertifikasi Resmi Lead Developer",
    },
    challenge:
      "Data administratif sekolah yang tersebar di spreadsheet terpisah, menyebabkan ketidaksinkronan data dan lambatnya pelaporan berkala.",
    solution:
      "Memimpin perancangan dan implementasi web aplikasi terintegrasi dengan modul inventaris, absensi, dan administrasi guru.",
    outcome:
      "Berhasil diimplementasikan langsung di sekolah mitra dan dianugerahi Sertifikat Resmi Lead Developer.",
    techStack: [
      "PHP",
      "CodeIgniter",
      "MySQL",
      "Bootstrap",
      "JavaScript",
      "Apache",
    ],
    coverImage: "/assets/projects/smkn1cisarua/smkn-1.png",
    images: [
      "/assets/projects/smkn1cisarua/smkn-1.png",
      "/assets/projects/smkn1cisarua/smkn-2.png",
      "/assets/projects/smkn1cisarua/smkn-3.png",
    ],
    architecture: {
      overview:
        "Arsitektur MVC (Model-View-Controller) klasik yang tangguh untuk lingkungan server on-premise sekolah.",
      components: [
        {
          title: "School Administration Engine",
          description:
            "Pusat pengelolaan master data guru, siswa, dan log inventaris barang sekolah.",
          tech: "CodeIgniter, MySQL",
        },
      ],
      technicalHighlights: [
        "Memimpin tim rekayasa perangkat lunak dari analisis kebutuhan pengguna hingga tahap serah terima operasional.",
      ],
    },
  },
];
