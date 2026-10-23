"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLink } from "@/components/arrow-link";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { contactHref, site } from "@/lib/site";
import type { Locale } from "@/lib/i18n/locales";
import { cn } from "@/lib/utils";

function sectionId(href: string) {
  return href.split("#")[1] ?? "";
}

function isCurrent(href: string, pathname: string, active: string) {
  if (href === "/#work" && pathname.startsWith("/work")) {
    return true;
  }
  if (href === "/languages" && pathname.startsWith("/languages")) {
    return true;
  }
  if (pathname !== "/") {
    return false;
  }
  return sectionId(href) === active;
}

export function SiteHeader() {
  const pathname = usePathname();
  const { dictionary, locale, setLocale, hasChosen } = useLanguage();
  const [open, setOpen] = useState(false);
  const [seenPath, setSeenPath] = useState(pathname);
  const [active, setActive] = useState("top");

  const nav = [
    { href: "/#work", label: dictionary.nav.work },
    { href: "/#results", label: dictionary.nav.results },
    { href: "/#process", label: dictionary.nav.process },
    { href: "/languages", label: dictionary.nav.languages },
    { href: "/#contact", label: dictionary.nav.contact },
  ];

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
  }, [pathname, hasChosen]);

  function switchLocale(next: Locale) {
    setLocale(next);
  }

  return (
    <>
      <header className="fixed top-3 right-[4%] left-[4%] z-40 mx-auto max-w-[1400px] rounded-[15px] border border-white/20 bg-[#160f19cc] px-4 py-2.5 shadow-[0_8px_30px_#0001] backdrop-blur-[18px] sm:top-[18px] sm:px-[18px]">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/#top"
            className="inline-flex shrink-0 items-center gap-2 text-[19px] font-extrabold tracking-[-0.07em] sm:text-[23px]"
          >
            <span
              aria-hidden="true"
              className="grid size-7 place-items-center rounded-md bg-[#ff385b] font-display text-sm text-[#fff4ec] sm:size-8"
            >
              M
            </span>
            <span>
              {site.name.toUpperCase()}
              <span className="text-[#ff385b]">.</span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-5 text-sm xl:flex">
            {nav.map((item) => {
              const current = isCurrent(item.href, pathname, active);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={cn(
                    "relative pb-1 text-[#cdbfd4] transition-colors hover:text-foreground",
                    current && "text-foreground after:right-0",
                    "after:absolute after:right-full after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-[#ff385b] after:transition-[right] after:duration-300 hover:after:right-0",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label={dictionary.github}
              className="hidden size-10 items-center justify-center rounded-full border border-white/15 text-muted-foreground transition-colors hover:border-primary hover:text-foreground sm:inline-flex"
            >
              <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
                <path d="M12 .5C5.73.5.75 5.48.75 11.76c0 4.97 3.22 9.18 7.69 10.66.56.1.77-.24.77-.54 0-.27-.01-1.16-.02-2.1-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.72 2.06 2.72 2.5.84.23 1.32-.02 1.68-.4.1-1.3.39-2.13.71-2.62-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.11 1.15a10.8 10.8 0 0 1 2.84-.38c.96 0 1.93.13 2.84.38 2.16-1.45 3.11-1.15 3.11-1.15.61 1.54.23 2.68.11 2.96.72.79 1.16 1.8 1.16 3.02 0 4.32-2.64 5.27-5.15 5.55.4.35.76 1.03.76 2.08 0 1.5-.01 2.71-.01 3.08 0 .3.2.65.78.54A11.02 11.02 0 0 0 23.25 11.76C23.25 5.48 18.27.5 12 .5Z" />
              </svg>
            </a>
            {hasChosen ? (
              <div
                role="group"
                aria-label="Language"
                className="hidden items-center rounded-full border border-white/15 p-0.5 sm:flex"
              >
                {(["en", "pt"] as const).map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => switchLocale(item)}
                    className={cn(
                      "rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase transition-colors",
                      locale === item
                        ? "bg-[#ff385b] text-[#fff4ec]"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {item}
                  </button>
                ))}
              </div>
            ) : null}
            <ArrowLink
              href={contactHref}
              className="nav-cta hidden min-h-11 px-[21px] text-sm lg:inline-flex"
            >
              {dictionary.ctaTalk}
            </ArrowLink>
            <Button
              type="button"
              variant="outline"
              className="h-10 cursor-pointer border-white/20 bg-transparent px-3 xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? dictionary.close : dictionary.menu}
            </Button>
          </div>
        </div>
      </header>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-[76px] bottom-0 z-30 overflow-y-auto bg-background/98 px-[4%] py-6 backdrop-blur-xl xl:hidden"
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
                    "block border-b border-border py-4 font-display text-5xl tracking-tight uppercase",
                    current ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="block border-b border-border py-4 font-display text-5xl tracking-tight uppercase text-muted-foreground"
            >
              {dictionary.github}
            </a>
          </nav>
          {hasChosen ? (
            <div className="mt-6 flex gap-2">
              {(["en", "pt"] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => switchLocale(item)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-semibold uppercase",
                    locale === item
                      ? "border-[#ff385b] bg-[#ff385b] text-[#fff4ec]"
                      : "border-white/15 text-muted-foreground",
                  )}
                >
                  {item === "en" ? "English" : "Português"}
                </button>
              ))}
            </div>
          ) : null}
          <ArrowLink
            href={contactHref}
            className="mt-6 w-full"
            onClick={() => setOpen(false)}
          >
            {dictionary.ctaTalk}
          </ArrowLink>
        </div>
      ) : null}
    </>
  );
}
