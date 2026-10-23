import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function ArrowLink({
  href,
  children,
  variant = "solid",
  className,
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group relative inline-flex h-11 items-center justify-center gap-2 overflow-hidden border px-4 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal",
        variant === "solid"
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-background text-foreground",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 origin-left scale-x-0 bg-signal transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
      />
      <span className="relative transition-colors duration-300 group-hover:text-background">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="relative transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-background motion-reduce:transition-none motion-reduce:group-hover:translate-none"
      >
        ↗
      </span>
    </Link>
  );
}
