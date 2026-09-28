import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-display",
        "text-display-mobile",
        "text-headline-lg",
        "text-headline-md",
        "text-headline-sm",
        "text-body-lg",
        "text-body-md",
        "text-body-sm",
        "text-label-md",
        "text-label-sm",
      ],
      "text-color": [
        "text-primary",
        "text-on-primary",
        "text-secondary",
        "text-on-secondary",
        "text-on-surface",
        "text-on-surface-variant",
        "text-inverse-surface",
        "text-inverse-on-surface",
        "text-accent-sage",
        "text-accent-taupe",
      ],
    },
  },
});

/**
 * Merges Tailwind and conditional class names cleanly
 */
export function cn(...inputs: ClassValue[]): string {
  return customTwMerge(clsx(inputs));
}
