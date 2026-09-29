# Akmal Goniyyu Hartono - Portfolio Website

> Production-grade personal portfolio website showcasing Fullstack & Backend Engineering expertise (Spring Boot, Next.js, PostgreSQL, Microservices, and Cloud Native architectures).

Live URL: [https://akmal-portofolio.pages.dev](https://akmal-portofolio.pages.dev)

---

## ⚡ Tech Stack & Architecture

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, React 19)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict type-safety, zero `any`)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom design tokens (`@theme`)
- **Architecture**: Static Site Generation (SSG / `output: 'export'`) for sub-second CDN delivery
- **Hosting**: [Cloudflare Pages](https://pages.cloudflare.com/) (100% Free Tier, Global Anycast Edge CDN)
- **CI/CD**: GitHub Actions (`.github/workflows/deploy-cloudflare.yml`) via `cloudflare/wrangler-action`
- **Security**: Strict HTTP security headers (`_headers`), HSTS preload, zero external server attack surface

---

## 🚀 Quick Start (Local Development)

### Prerequisites

- **Node.js**: `v20.x` or later (LTS recommended)
- **npm**: `v10.x` or later

### Installation

```bash
# Clone the repository
git clone https://github.com/AkmalD/Personal-Website.git
cd Personal-Website

# Install dependencies
npm install
```

### Running Locally

```bash
# Start development server with Turbopack
npm run dev

# Open http://localhost:3000 in your browser
```

### Production Build & Static Export

```bash
# Run type-check and generate static export in `out/`
npm run build

# Preview static build locally using any static web server
npx serve out
```

---

## 🌐 Cloudflare Pages Deployment Guide

### Option 1: Automatic CI/CD via GitHub Actions (Recommended)

Workflow terkonfigurasi pada [`.github/workflows/deploy-cloudflare.yml`](.github/workflows/deploy-cloudflare.yml). Setiap push ke branch `main` akan memicu build otomatis dan deploy langsung ke Cloudflare Pages.

#### Setup GitHub Repository Secrets:
1. Masuk ke repository GitHub: **Settings** > **Secrets and variables** > **Actions**.
2. Tambahkan **New repository secret**:
   - `CLOUDFLARE_API_TOKEN`: Buat API Token di Cloudflare Dashboard (**My Profile** > **API Tokens** > Buat token dengan template **Cloudflare Pages: Edit**).
   - `CLOUDFLARE_ACCOUNT_ID`: Dapatkan Account ID dari sidebar kanan dashboard Cloudflare Anda.
3. Push perubahan ke branch `main` untuk memulai deployment.

### Option 2: Direct Git Integration via Cloudflare Dashboard

Jika memilih menghubungkan repository GitHub langsung dari dashboard Cloudflare tanpa GitHub Actions:

1. Buka [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
2. Pilih repository: `AkmalD/Personal-Website`.
3. Isi konfigurasi build:
   - **Framework preset**: `Next.js (Static Export)`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/` (atau kosongkan)
   - **Environment variables**: `NODE_VERSION = 20`
4. Klik **Save and Deploy**.

---

## 🔒 Security & Performance Features

- **Edge Security Headers (`public/_headers`)**:
  - `X-Frame-Options: DENY` (Anti-clickjacking)
  - `X-Content-Type-Options: nosniff` (Anti-MIME sniffing)
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
- **Edge Static Caching**: Cache immutability 1 tahun untuk aset bundler `/_next/static/*` dan media `assets/*`.
- **Lighthouse Score**: Dioptimalkan untuk skor 95+ pada Performance, Accessibility, Best Practices, dan SEO.

---

## 📄 License & Attribution

Hak Cipta © 2026 Akmal Goniyyu Hartono. Seluruh sertifikat, dokumen HKI Kemenkumham, dan karya proyek merupakan hak cipta sah pemilik portofolio.
