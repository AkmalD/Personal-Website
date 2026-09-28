import {
  ExperienceItem,
  EducationItem,
  CertificationItem,
} from "@/types/portfolio";

export const educationData: EducationItem[] = [
  {
    institution: "Politeknik Negeri Bandung (POLBAN)",
    degree: "Sarjana Terapan (D4)",
    major: "Teknik Informatika",
    period: "Agu 2022 – Sept 2026",
    gpa: "3.47",
    thesisTitle:
      'Pengembangan Aplikasi Mobile Self-Regulation "Lawan PMO" Berbasis Preventive-Interventive Model dan Mindfulness-Based Stress Reduction untuk Mengatasi Problematic Pornography Use.',
    highlights: [
      "Fokus pada Rekayasa Perangkat Lunak, Arsitektur Backend, Basis Data Relasional, dan Algoritma.",
      "Meraih Medali Perak dan Perunggu PIMNAS tingkat nasional dari riset terapan tugas akhir.",
      "Aktif sebagai komite konferensi internasional iCAST (International Conference on Applied Science and Technology) 2024.",
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "lawan-pmo-backend",
    role: "Backend Developer",
    organization: "Lawan PMO — Digital Self-Regulation Ecosystem",
    period: "2025 – Sekarang",
    location: "Bandung, Indonesia",
    description:
      "Mengembangkan layanan backend aplikasi mobile kesehatan digital untuk membantu pemulihan kecanduan perilaku dengan basis sains model preventif-interventif.",
    responsibilities: [
      "Merancang dan mengimplementasikan RESTful API modular menggunakan Node.js, NestJS, dan Prisma ORM.",
      "Mengelola pemodelan basis data PostgreSQL dan optimasi query kueri analitik pengguna.",
      "Berkolaborasi lintas fungsi dalam tim pengembang (4 developer, 1 marketing) hingga aplikasi rilis publik di Google Play Store dan lawanpmo.id.",
      "Mengamankan Surat Pencatatan Ciptaan (HKI Nasional) dari Kemenkumham RI.",
    ],
    technologies: ["Node.js", "NestJS", "PostgreSQL", "Prisma ORM", "Kotlin", "Cloudflare"],
  },
  {
    id: "pindad-fullstack",
    role: "Pengembang Fullstack (Praktik Kerja Lapangan)",
    organization: "PT Pindad (Persero) — Divisi Teknologi Informasi",
    period: "Jun – Okt 2025",
    location: "Bandung, Indonesia",
    description:
      "Melakukan re-engineering dan pengembangan sistem E-Visitor (buku kunjungan tamu) digital di fasilitas industri pertahanan PT Pindad Bandung dan Malang.",
    responsibilities: [
      "Menggantikan buku kunjungan fisik dengan sistem digital terintegrasi untuk meningkatkan audit trail keamanan.",
      "Membangun arsitektur frontend responsif berbasis React dan backend REST API berbasis Express.js.",
      "Merancang skema relasional PostgreSQL dengan alur verifikasi approval keamanan bertingkat.",
    ],
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: "dasawisma-fullstack",
    role: "Fullstack Developer (Program Pengabdian kepada Masyarakat)",
    organization: "Desa Sariwangi — Sistem Manajemen Dasawisma",
    period: "2025",
    location: "Bandung Barat, Indonesia",
    description:
      "Mengembangkan dashboard administrasi kependudukan terpadu untuk digitalisasi rekapitulasi data keluarga warga Desa Sariwangi.",
    responsibilities: [
      "Membangun dashboard performa tinggi berbasis Next.js 15, React 19, dan TanStack Table.",
      "Mengimplementasikan fitur ekspor dokumen otomatis ke format PDF resmi pemerintah dan spreadsheet Excel.",
      "Meraih Surat Pencatatan Hak Cipta Perangkat Lunak Nasional dari Kemenkumham RI.",
    ],
    technologies: ["Next.js", "React 19", "TanStack Table", "Tailwind CSS", "PDF Generation"],
  },
  {
    id: "smkn1-lead-dev",
    role: "Lead Technical Developer (Program Pengabdian kepada Masyarakat)",
    organization: "SMKN 1 Cisarua Lembang — Portal Web & CMS Institusi",
    period: "2024",
    location: "Lembang, Bandung Barat",
    description:
      "Memimpin perancangan dan migrasi sistem portal web dan content management system institusi sekolah.",
    responsibilities: [
      "Memimpin tim pengembang (5 anggota) dari analisis kebutuhan fungsional hingga serah terima operasional sekolah.",
      "Melakukan migrasi arsitektur dari CodeIgniter 3 ke CodeIgniter 4 dengan basis data MySQL.",
      "Dianugerahi Sertifikat Resmi Lead Developer atas kepemimpinan teknis dalam pelaksanaan proyek.",
    ],
    technologies: ["PHP", "CodeIgniter 4", "MySQL", "Bootstrap", "Apache"],
  },
];

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-arutala-spring-boot",
    title: "Junior Back End Developer using Spring Boot – Distinguished",
    issuer: "ArutalaLab Certification Program",
    date: "17 Juli 2026",
    type: "certification",
    registrationNumber: "TC2026.J.SB-D.C.07.002",
    fileUrl: "/assets/certificates/sertifikat-kompetensi.pdf",
    description:
      "Sertifikasi kompetensi 22 jam mencakup Java OOP, arsitektur Spring Boot & ORM, REST API & audit trail, Security, File Transfer & Exception Handling, JUnit Testing, dan WebSocket.",
  },
  {
    id: "hki-lawan-pmo",
    title: "Hak Cipta Perangkat Lunak: Lawan PMO",
    issuer: "Kementerian Hukum dan HAM Republik Indonesia",
    date: "17 Oktober 2025",
    type: "patent_hki",
    registrationNumber: "EC002025157155 / EC002026167019",
    fileUrl: "/assets/certificates/SuratCiptaan_EC002026167019.pdf",
    description:
      "Surat Pencatatan Hak Kekayaan Intelektual (HKI) resmi atas ciptaan perangkat lunak ekosistem mobile self-regulation Lawan PMO.",
  },
  {
    id: "hki-dasawisma-sariwangi",
    title: "Hak Cipta Perangkat Lunak: Sistem Dasawisma Sariwangi",
    issuer: "Kementerian Hukum dan HAM Republik Indonesia",
    date: "4 Agustus 2025",
    type: "patent_hki",
    registrationNumber: "EC002025104608",
    fileUrl: "/assets/certificates/Hak Cipta Dasawisma Sariwangi.pdf",
    description:
      "Surat Pencatatan Hak Kekayaan Intelektual (HKI) resmi atas sistem dashboard data kependudukan perdesaan Desa Sariwangi.",
  },
  {
    id: "award-pimnas-perak",
    title: "Medali Perak (Juara 2) — PIMNAS 2025 (Kategori Poster)",
    issuer: "Pekan Ilmiah Mahasiswa Nasional (PIMNAS)",
    date: "2025",
    type: "award",
    fileUrl: "/assets/certificates/Sertifikat Penghargaan Perak - Poster.pdf",
    description:
      "Penghargaan kompetisi ilmiah bergengsi tingkat nasional atas riset dan inovasi rekayasa perangkat lunak platform kesehatan digital.",
  },
  {
    id: "award-pimnas-perunggu",
    title: "Medali Perunggu (Juara 3) — PIMNAS 2025 (Kategori Presentasi)",
    issuer: "Pekan Ilmiah Mahasiswa Nasional (PIMNAS)",
    date: "2025",
    type: "award",
    fileUrl: "/assets/certificates/Sertifikat Penghargaan Perunggu - Presentasi.pdf",
    description:
      "Penghargaan presentasi teknis dan demonstrasi efektivitas produk rekayasa perangkat lunak di hadapan dewan juri nasional.",
  },
  {
    id: "cert-toeic",
    title: "TOEIC® Listening & Reading — Skor 800",
    issuer: "ETS / International Test Center",
    date: "2 Mei 2026",
    type: "certification",
    registrationNumber: "Score: 800 (Listening: 495/495 Perfect)",
    fileUrl: "/assets/certificates/sertifikat-toeic.pdf",
    description:
      "Sertifikasi kemahiran bahasa Inggris internasional dengan skor sempurna 495/495 pada bagian Listening Comprehension.",
  },
  {
    id: "cert-lead-dev",
    title: "Sertifikat Lead Developer PkM SMKN 1 Cisarua",
    issuer: "Jurusan Teknik Komputer dan Informatika, POLBAN",
    date: "2024",
    type: "certification",
    fileUrl: "/assets/certificates/Sertif Lead Developer.jpeg",
    description:
      "Sertifikat apresiasi kepemimpinan teknis dalam memimpin tim rekayasa perangkat lunak pengabdian masyarakat.",
  },
  {
    id: "cert-icast-2024",
    title: "Certificate Committee — iCAST 2024",
    issuer: "International Conference on Applied Science and Technology",
    date: "23 Oktober 2024",
    type: "award",
    registrationNumber: "B/508/PL1.R7/PG.00.09/2024",
    fileUrl: "/assets/certificates/sertifikat-icast.pdf",
    description:
      "Apresiasi panitia teknis pada konferensi internasional sains terapan dan rekayasa teknologi informasi ke-7.",
  },
];
