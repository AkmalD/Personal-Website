import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModalProvider } from "@/components/modals/ContactModalContext";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://akmal-portfolio.pages.dev";

export const viewport: Viewport = {
  themeColor: "#1d2b3e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Akmal Goniyyu Hartono | Backend & Fullstack Software Engineer",
    template: "%s | Akmal Goniyyu Hartono",
  },
  description:
    "Portfolio of Akmal Goniyyu Hartono (POLBAN). Methodical craft in enterprise backend architecture, Java Spring Boot microservices, high-concurrency systems, and scalable fullstack applications.",
  keywords: [
    "Akmal Goniyyu Hartono",
    "Akmal G. Hartono",
    "Backend Engineer",
    "Fullstack Engineer",
    "Software Engineer",
    "Java",
    "Spring Boot",
    "Spring Cloud Gateway",
    "PostgreSQL",
    "Microservices",
    "Next.js",
    "React",
    "POLBAN",
    "Politeknik Negeri Bandung",
    "PIMNAS 2025",
    "Lawan PMO",
    "Cloudflare Pages",
  ],
  authors: [{ name: "Akmal Goniyyu Hartono", url: siteUrl }],
  creator: "Akmal Goniyyu Hartono",
  publisher: "Akmal Goniyyu Hartono",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Akmal Goniyyu Hartono — Portfolio",
    title: "Akmal Goniyyu Hartono | Backend & Fullstack Software Engineer",
    description:
      "Enterprise backend architecture, Java Spring Boot microservices, high-concurrency systems, and scalable fullstack applications.",
    images: [
      {
        url: "/assets/profile/avatar.jpg",
        width: 800,
        height: 800,
        alt: "Akmal Goniyyu Hartono - Backend & Fullstack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akmal Goniyyu Hartono | Backend & Fullstack Software Engineer",
    description:
      "Enterprise backend architecture, Spring Boot microservices, PostgreSQL relational design, and modern web systems.",
    images: ["/assets/profile/avatar.jpg"],
    creator: "@goniyyu",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-surface-container-lowest text-on-surface">
        <ContactModalProvider>
          <Navbar />
          <div className="flex-1 pt-16 flex flex-col">{children}</div>
          <Footer />
        </ContactModalProvider>
      </body>
    </html>
  );
}
