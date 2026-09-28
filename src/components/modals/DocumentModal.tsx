"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, Download, FileText } from "lucide-react";
import { CertificationItem } from "@/types/portfolio";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface DocumentModalProps {
  item: CertificationItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function DocumentModal({
  item,
  isOpen,
  onClose,
}: DocumentModalProps) {
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

  if (!isOpen || !item) return null;

  const fileUrl = item.fileUrl || "";
  const cleanPath = fileUrl.split("?")[0].toLowerCase();
  const isPdf = cleanPath.endsWith(".pdf");
  const isImage =
    cleanPath.endsWith(".jpeg") ||
    cleanPath.endsWith(".jpg") ||
    cleanPath.endsWith(".png") ||
    cleanPath.endsWith(".webp");

  const getTypeBadge = (type: CertificationItem["type"]) => {
    switch (type) {
      case "patent_hki":
        return <Badge variant="primary">Hak Cipta Resmi (HKI)</Badge>;
      case "award":
        return <Badge variant="sage">Penghargaan Nasional</Badge>;
      case "certification":
      default:
        return <Badge variant="secondary">Sertifikasi Kompetensi</Badge>;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="document-modal-title"
    >
      <div
        className="relative w-full max-w-4xl h-[88vh] max-h-[92vh] bg-surface-container-lowest rounded-2xl border border-border-delicate shadow-level-2 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-border-delicate flex items-start justify-between bg-surface-container-low/60 shrink-0">
          <div className="space-y-1.5 pr-4">
            <div className="flex items-center gap-2 flex-wrap">
              {getTypeBadge(item.type)}
              <span className="font-mono text-label-sm text-secondary font-medium">
                {item.date}
              </span>
            </div>
            <h2
              id="document-modal-title"
              className="font-headline-sm text-headline-sm text-on-surface font-semibold leading-snug"
            >
              {item.title}
            </h2>
            <div className="flex items-center gap-3 text-secondary text-body-sm flex-wrap">
              <span>{item.issuer}</span>
              {item.registrationNumber && (
                <>
                  <span className="text-secondary/40">•</span>
                  <span className="font-mono text-[12px] bg-surface-container px-2 py-0.5 rounded text-primary font-medium">
                    No: {item.registrationNumber}
                  </span>
                </>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {fileUrl && (
              <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button variant="secondary" size="sm" className="inline-flex">
                  <span>Tab Baru</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </Button>
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-secondary hover:text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
              aria-label="Tutup pratinjau dokumen"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Document Content Viewport */}
        <div className="flex-1 w-full bg-surface-container-lowest overflow-auto p-2 sm:p-4 flex items-center justify-center relative">
          {fileUrl && isPdf ? (
            <iframe
              src={fileUrl}
              title={item.title}
              className="w-full h-full rounded-xl border border-border-delicate bg-white shadow-xs"
            />
          ) : fileUrl && isImage ? (
            <div className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-surface-container-low/30 rounded-xl p-2 sm:p-4 overflow-auto">
              <Image
                src={fileUrl}
                alt={item.title}
                width={1200}
                height={850}
                className="max-h-full w-auto object-contain rounded-lg shadow-sm border border-border-delicate"
              />
            </div>
          ) : (
            <div className="text-center p-8 space-y-3">
              <FileText className="w-12 h-12 text-secondary mx-auto" />
              <p className="font-body-md text-secondary">
                Pratinjau langsung tidak tersedia untuk format ini.
              </p>
              {fileUrl && (
                <a
                  href={fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Button variant="primary" size="md">
                    <Download className="w-4 h-4 mr-2" />
                    <span>Unduh Dokumen Asli</span>
                  </Button>
                </a>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 border-t border-border-delicate bg-surface-container-low/40 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <p className="font-body-sm text-secondary text-xs sm:text-sm text-center sm:text-left line-clamp-1">
            {item.description}
          </p>
          <div className="flex items-center gap-2 shrink-0">
            {fileUrl && (
              <a
                href={fileUrl}
                download
                className="inline-flex"
              >
                <Button variant="outline" size="sm">
                  <Download className="w-3.5 h-3.5 mr-1 text-secondary" />
                  <span>Unduh File</span>
                </Button>
              </a>
            )}
            <Button variant="primary" size="sm" onClick={onClose}>
              Tutup
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
