"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { profileData } from "@/data/profile";
import { useContactModal } from "@/components/modals/ContactModalContext";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Tech Stack", href: "/tech-stack" },
  { label: "Projects", href: "/projects" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const { openContactModal } = useContactModal();

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-200 border-b",
        scrolled
          ? "bg-surface-container-lowest/90 backdrop-blur-md border-border-delicate shadow-sm"
          : "bg-surface-container-lowest/80 backdrop-blur-sm border-border-delicate/60"
      )}
    >
      <div className="h-16 max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Monogram */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center font-label-md text-label-md text-primary font-semibold group-hover:bg-primary group-hover:text-on-primary transition-colors">
            AH
          </div>
          <div className="flex flex-col">
            <span className="font-label-md text-label-md font-semibold text-on-surface tracking-tight group-hover:text-primary transition-colors">
              Akmal H.
            </span>
            <span className="text-[10px] text-secondary -mt-1 hidden sm:inline">
              Software Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-label-md transition-colors relative py-1",
                  isActive
                    ? "text-primary font-semibold"
                    : "text-on-surface-variant hover:text-on-surface font-medium"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Profile Avatar */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openContactModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-label-md bg-primary text-on-primary hover:bg-primary-container transition-colors shadow-sm cursor-pointer"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </button>

          <Link
            href="/about"
            className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-border-delicate hover:ring-primary transition-all focus:outline-none"
            title="Lihat Profil"
          >
            <Image
              src={profileData.avatarUrl}
              alt={profileData.fullName}
              fill
              className="object-cover"
              sizes="32px"
              priority
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container-low transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container-lowest border-b border-border-delicate px-4 pt-3 pb-5 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-3 py-2.5 rounded-lg text-body-sm transition-colors flex items-center justify-between",
                    isActive
                      ? "bg-surface-container text-primary font-semibold"
                      : "text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-medium"
                  )}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-border-delicate/80">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openContactModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-body-sm font-medium bg-primary text-on-primary hover:bg-primary-container transition-colors shadow-sm cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
