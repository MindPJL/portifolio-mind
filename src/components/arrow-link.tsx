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
  variant?: "solid" | "outline" | "cream";
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group relative inline-flex min-h-13 items-center justify-center overflow-hidden rounded-lg border px-6 text-[15px] font-bold transition-[transform,box-shadow] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet",
        variant === "solid" &&
          "border-transparent bg-[#ff385b] text-[#fff4ec] hover:shadow-[0_10px_35px_#ff385b23]",
        variant === "outline" && "border-white/20 bg-white/[0.03] text-foreground",
        variant === "cream" && "border-transparent bg-[#fff4ec] text-[#1a1021]",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-[-80%_-30%] z-0 rounded-[45%] bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-[101%] -rotate-[15deg] group-hover:translate-y-0 group-hover:rotate-0 motion-reduce:transition-none"
      />
      <span className="relative z-10 inline-flex items-center gap-2 transition-transform duration-300 group-hover:-translate-y-px group-hover:text-[#180d19]">
        {children}
        <span
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:group-hover:translate-none"
        >
          ↗
        </span>
      </span>
    </Link>
  );
}
