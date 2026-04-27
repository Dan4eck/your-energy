import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  asChild?: boolean;
}

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium transition-colors duration-200",
        variant === "primary" &&
          "bg-olive text-white hover:bg-olive-hover",
        variant === "outline" &&
          "border border-text text-text hover:bg-text hover:text-cream",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
