"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { useLanguage } from "@/components/language-provider";

export function SmoothScroll() {
  const { hasChosen } = useLanguage();

  useEffect(() => {
    if (!hasChosen) {
      return;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.45,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.15,
      syncTouch: false,
    });

    document.documentElement.classList.add("lenis", "lenis-smooth");

    let frame = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      frame = window.requestAnimationFrame(loop);
    };
    frame = window.requestAnimationFrame(loop);

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a[href*="#"]') as HTMLAnchorElement | null;
      if (!anchor) {
        return;
      }
      const href = anchor.getAttribute("href");
      if (!href) {
        return;
      }

      const url = new URL(href, window.location.href);
      if (url.pathname !== window.location.pathname) {
        return;
      }
      const hash = url.hash;
      if (!hash || hash === "#") {
        return;
      }

      const id = decodeURIComponent(hash.slice(1));
      const node = document.getElementById(id);
      if (!node) {
        return;
      }

      event.preventDefault();
      lenis.scrollTo(node, {
        offset: -96,
        duration: 1.55,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      window.history.pushState(null, "", hash);
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      window.cancelAnimationFrame(frame);
      document.documentElement.classList.remove("lenis", "lenis-smooth");
      lenis.destroy();
    };
  }, [hasChosen]);

  return null;
}
