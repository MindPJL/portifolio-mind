"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLink } from "@/components/arrow-link";
import { Button } from "@/components/ui/button";
import { contactHref, nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

function sectionId(href: string) {
  return href.split("#")[1] ?? "";
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
  const [active, setActive] = useState("top");

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
      <header className="fixed top-3 right-[4%] left-[4%] z-40 mx-auto max-w-[1400px] rounded-[15px] border border-white/20 bg-[#160f19cc] px-4 py-2.5 shadow-[0_8px_30px_#0001] backdrop-blur-[18px] sm:top-[18px] sm:px-[18px]">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/#top"
            className="inline-flex shrink-0 items-center gap-2 text-[19px] font-extrabold tracking-[-0.07em] sm:text-[23px]"
          >
            <span aria-hidden="true" className="grid size-7 place-items-center rounded-md bg-primary font-display text-sm text-primary-foreground sm:size-8">
              M
            </span>
            <span>
              {site.name.toUpperCase()}
              <span className="text-primary">.</span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-7 text-sm lg:flex">
            {nav.map((item) => {
              const current = isCurrent(item.href, pathname, active);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={cn(
                    "relative pb-1 text-[#cdbfd4] transition-colors hover:text-foreground",
                    current && "text-foreground",
                    "after:absolute after:right-full after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-primary after:transition-[right] after:duration-300",
                    (current || undefined) && "after:right-0",
                    "hover:after:right-0",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <ArrowLink
              href={contactHref}
              className="nav-cta hidden min-h-11 px-[21px] text-sm sm:inline-flex"
            >
              Let’s talk
            </ArrowLink>
            <Button
              type="button"
              variant="outline"
              className="h-10 cursor-pointer border-white/20 bg-transparent px-3 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? "Close" : "Menu"}
            </Button>
          </div>
        </div>
      </header>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-[76px] bottom-0 z-30 overflow-y-auto bg-background/98 px-[4%] py-6 backdrop-blur-xl lg:hidden"
        >
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
                    "border-b border-border py-4 font-display text-5xl tracking-tight uppercase",
                    current ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <ArrowLink
            href={contactHref}
            className="mt-6 w-full"
            onClick={() => setOpen(false)}
          >
            Let’s talk
          </ArrowLink>
        </div>
      ) : null}
    </>
  );
}
