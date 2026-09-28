"use client";

import React, { useState, useEffect } from "react";
import { X, Mail, Copy, Check, Send, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import { profileData } from "@/data/profile";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.document.body.style.overflow = "";
    }

    return () => {
      window.document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(
      subject || `Pesan Portofolio dari ${name || "Pengunjung"}`
    );
    const mailBody = encodeURIComponent(
      `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`
    );
    window.location.href = `mailto:${profileData.socialLinks.email}?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className="relative w-full max-w-lg bg-surface-container-lowest rounded-2xl border border-border-delicate shadow-level-2 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-border-delicate flex items-start justify-between bg-surface-container-low/50">
          <div>
            <span className="text-label-sm text-secondary font-semibold uppercase tracking-wider">
              Get in Touch
            </span>
            <h2
              id="contact-modal-title"
              className="text-headline-sm font-semibold text-on-surface mt-0.5"
            >
              Mari Berdiskusi
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content & Form */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Quick Copy Email Box */}
          <div className="p-4 rounded-xl bg-surface-container-low border border-border-delicate flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] text-secondary uppercase font-semibold block">
                  Email Langsung
                </span>
                <span className="text-body-sm font-medium text-on-surface truncate block">
                  {profileData.socialLinks.email}
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-label-sm font-medium border border-border-delicate bg-surface-container-lowest hover:bg-surface-container text-secondary hover:text-on-surface transition-colors cursor-pointer shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Tersalin</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin</span>
                </>
              )}
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSendMail} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label
                  htmlFor="contact-name"
                  className="text-label-sm font-medium text-on-surface block"
                >
                  Nama Anda
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Nama lengkap"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg text-body-sm bg-surface-container-lowest border border-border-delicate focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-secondary/50"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="contact-email"
                  className="text-label-sm font-medium text-on-surface block"
                >
                  Email Anda
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="nama@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg text-body-sm bg-surface-container-lowest border border-border-delicate focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-secondary/50"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="contact-subject"
                className="text-label-sm font-medium text-on-surface block"
              >
                Subjek
              </label>
              <input
                id="contact-subject"
                type="text"
                placeholder="Peluang Kerja / Kolaborasi Rekayasa"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg text-body-sm bg-surface-container-lowest border border-border-delicate focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-secondary/50"
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="contact-message"
                className="text-label-sm font-medium text-on-surface block"
              >
                Pesan
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                placeholder="Tuliskan pesan atau detail peluang yang ingin didiskusikan..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg text-body-sm bg-surface-container-lowest border border-border-delicate focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-secondary/50 resize-none"
              />
            </div>

            <Button type="submit" variant="primary" size="md" className="w-full">
              <Send className="w-4 h-4 mr-2" />
              <span>Buka di Email Client</span>
            </Button>
          </form>

          {/* Alternate Channels */}
          <div className="pt-2 border-t border-border-delicate flex items-center justify-between text-label-sm text-secondary">
            <span>Kanal Lain:</span>
            <div className="flex items-center gap-3">
              <a
                href={profileData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-primary transition-colors font-medium"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
              <span className="text-outline">•</span>
              <a
                href={profileData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-primary transition-colors font-medium"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
