"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { site } from "@/lib/site";

export function SiteFooter() {
  const { dictionary } = useLanguage();
  const nav = [
    { href: "/#work", label: dictionary.nav.work },
    { href: "/#results", label: dictionary.nav.results },
    { href: "/#process", label: dictionary.nav.process },
    { href: "/#pricing", label: dictionary.nav.pricing },
    { href: "/#contact", label: dictionary.nav.contact },
  ];

  return (
    <footer className="border-t border-border bg-[#0c0a10]">
      <div className="mx-auto flex max-w-[1480px] flex-col gap-6 px-[6%] py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-3xl tracking-tight uppercase">
            {site.name}
            <span className="text-[#ff385b]">.</span>
          </p>
          <p className="mt-1 text-xs tracking-[0.14em] text-muted-foreground uppercase">
            {dictionary.role} · {dictionary.footerYear}
          </p>
        </div>
        <nav
          aria-label="Footer"
          className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
