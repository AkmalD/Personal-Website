import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

    const variantStyles = {
      primary:
        "bg-primary text-white hover:bg-primary-container shadow-sm active:translate-y-0 hover:-translate-y-0.5",
      secondary:
        "bg-surface-container-low text-primary hover:bg-surface-container border border-border-delicate shadow-sm",
      ghost:
        "bg-transparent text-secondary hover:text-on-surface hover:bg-surface-container-low",
      outline:
        "bg-transparent border border-border-delicate text-on-surface hover:border-border-interactive hover:bg-surface-container-low",
    };

    const sizeStyles = {
      sm: "text-label-sm px-3 py-1.5 min-h-[36px] rounded-lg gap-1.5",
      md: "text-label-md px-4 py-2.5 min-h-[42px] rounded-lg gap-2",
      lg: "text-body-md px-6 py-3.5 min-h-[48px] rounded-xl gap-2.5",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
