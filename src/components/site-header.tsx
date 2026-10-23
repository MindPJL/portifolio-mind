"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLink } from "@/components/arrow-link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { contactHref, nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const linkFocus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal";

function sectionId(href: string) {
  const hash = href.split("#")[1];
  return hash ?? "";
}

function isCurrent(href: string, pathname: string, active: string) {
  if (href === "/#work" && pathname.startsWith("/work")) {
    return true;
  }
  if (pathname !== "/") {
    return false;
  }
  return sectionId(href) === active;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [seenPath, setSeenPath] = useState(pathname);
  const [active, setActive] = useState("hero");

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

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }
    const nodes = [...document.querySelectorAll<HTMLElement>("[data-section]")];
    if (nodes.length === 0) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const id = visible[0]?.target.id;
        if (id) {
          setActive(id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-background">
        <Container className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/#hero"
            aria-current={pathname === "/" && active === "hero" ? "page" : undefined}
            className={cn(
              "inline-flex shrink-0 items-center gap-2.5 font-serif text-[1.7rem] leading-none tracking-tight",
              linkFocus,
            )}
          >
            <span aria-hidden="true" className="size-2 bg-signal" />
            {site.name}
          </Link>

          <nav aria-label="Primary" className="hidden items-center justify-center gap-5 lg:flex">
            {nav.map((item) => {
              const current = isCurrent(item.href, pathname, active);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={cn(
                    "border-b pb-0.5 font-mono text-[0.68rem] tracking-[0.14em] uppercase",
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

          <div className="flex shrink-0 items-center gap-2">
            <ArrowLink href={contactHref} className="h-10 px-3">
              <span className="sm:hidden">Note</span>
              <span className="hidden sm:inline">Write a note</span>
            </ArrowLink>
            <Button
              type="button"
              variant="outline"
              className="h-10 cursor-pointer px-3 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? "Close" : "Menu"}
            </Button>
          </div>
        </Container>
      </header>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-16 bottom-0 z-30 overflow-y-auto border-t border-border bg-background lg:hidden"
        >
          <Container className="flex flex-col gap-6 py-6">
            <nav aria-label="Mobile" className="flex flex-col">
              {nav.map((item) => {
                const current = isCurrent(item.href, pathname, active);
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
            <ArrowLink href={contactHref} className="w-full" onClick={() => setOpen(false)}>
              Write a note
            </ArrowLink>
          </Container>
        </div>
      ) : null}
    </>
  );
}
