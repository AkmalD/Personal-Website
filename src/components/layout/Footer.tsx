import Link from "next/link";
import { Mail, ArrowUpRight, Cloud } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";
import { profileData } from "@/data/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-surface-container-low border-t border-border-delicate mt-auto">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand & Narrative */}
          <div className="md:col-span-6 flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center font-label-md text-label-md text-primary font-semibold group-hover:bg-primary group-hover:text-on-primary transition-colors">
                AH
              </div>
              <span className="font-headline-sm text-headline-sm font-semibold text-on-surface tracking-tight">
                {profileData.fullName}
              </span>
            </Link>
            <p className="text-body-sm text-secondary max-w-md leading-relaxed">
              Software Engineer berfokus pada Backend Architecture, Microservices, dan Sistem Terdistribusi. Menggabungkan ketahanan sistem dengan pengalaman pengguna yang tenang dan terukur.
            </p>
            <div className="inline-flex items-center gap-2 pt-1 text-label-sm text-secondary">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>{profileData.statusBadge}</span>
              <span className="text-outline">•</span>
              <span>{profileData.location}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <h3 className="font-label-sm text-label-sm font-semibold text-on-surface uppercase tracking-wider">
              Navigasi
            </h3>
            <ul className="space-y-2 text-body-sm text-secondary">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About &amp; Experience
                </Link>
              </li>
              <li>
                <Link href="/tech-stack" className="hover:text-primary transition-colors">
                  Tech Stack &amp; Tools
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-primary transition-colors">
                  Featured Projects
                </Link>
              </li>
              {profileData.resumeUrl && (
                <li>
                  <a
                    href={profileData.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-primary transition-colors font-medium text-primary"
                  >
                    <span>Download CV</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <h3 className="font-label-sm text-label-sm font-semibold text-on-surface uppercase tracking-wider">
              Terhubung
            </h3>
            <ul className="space-y-2 text-body-sm text-secondary">
              <li>
                <a
                  href={profileData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60 ml-auto" />
                </a>
              </li>
              <li>
                <a
                  href={profileData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60 ml-auto" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profileData.socialLinks.email}`}
                  className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>{profileData.socialLinks.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-12 pt-6 border-t border-border-delicate flex flex-col sm:flex-row items-center justify-between gap-4 text-label-sm text-secondary">
          <p>© {currentYear} {profileData.fullName}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-container text-[11px] text-secondary">
              <Cloud className="w-3 h-3 text-sky-600" />
              <span>Deployed on Cloudflare Pages</span>
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
