import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Akmal Goniyyu Hartono — Backend & Fullstack Software Engineer",
  description:
    "Portfolio of Akmal Goniyyu Hartono. Methodical craft in backend architecture, scalable microservices, relational database design, and modern fullstack products.",
  keywords: [
    "Akmal Goniyyu Hartono",
    "Akmal G. Hartono",
    "Software Engineer",
    "Backend Developer",
    "Fullstack Developer",
    "Java",
    "Spring Boot",
    "Next.js",
    "PostgreSQL",
    "Cloudflare Pages",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} h-full antialiased`}>
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
