import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "secondary" | "sage" | "outline";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-surface-container text-secondary",
    primary: "bg-primary text-on-primary",
    secondary: "bg-surface-container-low text-secondary border border-border-delicate",
    sage: "bg-accent-sage/10 text-accent-sage border border-accent-sage/20",
    outline: "bg-transparent border border-border-delicate text-secondary",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-label-sm font-medium tracking-wide transition-colors",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
