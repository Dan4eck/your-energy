import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  href?: string;
  variant?: "primary" | "outline";
}

const buttonClasses = (variant: ButtonProps["variant"], className?: string) =>
  cn(
    "inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive",
    variant === "primary" && "bg-olive text-white hover:bg-olive-hover hover:-translate-y-0.5",
    variant === "outline" && "border border-text text-text hover:bg-text hover:text-cream",
    className
  );

export function Button({
  children,
  className,
  href,
  variant = "primary",
  ...props
}: ButtonProps) {
  if (href) {
    return (
      <a href={href} className={buttonClasses(variant, className)}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClasses(variant, className)} {...props}>
      {children}
    </button>
  );
}
