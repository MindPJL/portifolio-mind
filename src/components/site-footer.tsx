import Link from "next/link";
import { Container } from "@/components/container";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <Container className="flex flex-col gap-8 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-serif text-2xl tracking-tight">{site.name}</p>
          <p className="mt-1 font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
            {site.role}
            <span aria-hidden="true"> · </span>
            <span>2026</span>
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase underline-offset-4 hover:text-foreground hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
