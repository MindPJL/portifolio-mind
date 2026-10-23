"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const linkFocus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal";

function isCurrent(href: string, pathname: string) {
  if (href === "/work") {
    return pathname === "/work" || pathname.startsWith("/work/");
  }
  return pathname === href;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [seenPath, setSeenPath] = useState(pathname);

  if (seenPath !== pathname) {
    setSeenPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) {
      return;
    }

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-background">
        <Container className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            className={cn(
              "inline-flex items-center gap-2.5 font-serif text-[1.7rem] leading-none tracking-tight",
              linkFocus,
            )}
          >
            <span aria-hidden="true" className="size-2 bg-signal" />
            {site.name}
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-7 sm:flex">
            {nav.map((item) => {
              const current = isCurrent(item.href, pathname);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={cn(
                    "border-b pb-0.5 font-mono text-xs tracking-[0.16em] uppercase",
                    linkFocus,
                    current
                      ? "border-signal text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Button
            type="button"
            variant="outline"
            className="h-10 cursor-pointer px-3 sm:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </Button>
        </Container>
      </header>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-16 bottom-0 z-30 overflow-y-auto border-t border-border bg-background sm:hidden"
        >
          <Container className="flex flex-col py-4">
            <nav aria-label="Mobile">
              {nav.map((item) => {
                const current = isCurrent(item.href, pathname);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block border-b border-border py-4 font-serif text-4xl tracking-tight",
                      linkFocus,
                      current ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </Container>
        </div>
      ) : null}
    </>
  );
}
