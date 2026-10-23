"use client";

import { useEffect } from "react";
import { useLanguage } from "@/components/language-provider";
import type { Locale } from "@/lib/i18n/locales";

export function LanguageGate() {
  const { ready, hasChosen, setLocale } = useLanguage();
  const open = ready && !hasChosen;

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) {
    return null;
  }

  function choose(locale: Locale) {
    setLocale(locale);
    document.body.style.overflow = "";
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="language-gate-title"
      className="fixed inset-0 z-[80] flex items-center justify-center bg-[#0c0910]/96 px-6 backdrop-blur-xl"
    >
      <div className="gate-enter w-full max-w-xl rounded-[28px] border border-white/15 bg-[#160f19] p-8 shadow-[0_40px_120px_#000a] sm:p-10">
        <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
          Mind / Portfolio · Portfólio
        </p>
        <h1
          id="language-gate-title"
          className="mt-4 font-display text-[clamp(2.6rem,7vw,4.2rem)] leading-[0.92] font-bold tracking-tight uppercase"
        >
          Choose your language
          <span className="mt-2 block text-[0.72em] tracking-normal text-[#e4bfcc] normal-case">
            Escolha o idioma
          </span>
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Pick how you want to read the site. You can change it later.
          <span className="mt-1 block text-sm">
            Escolha como quer ler o site. Dá para mudar depois.
          </span>
        </p>

        <div
          role="group"
          aria-label="Choose a language / Escolha um idioma"
          className="mt-8 grid gap-3 sm:grid-cols-2"
        >
          <button
            type="button"
            onClick={() => choose("en")}
            className="group relative overflow-hidden rounded-2xl border border-white/15 bg-[#201723] px-5 py-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_16px_40px_#ff385b22] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet"
          >
            <span className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
              EN
            </span>
            <span className="mt-2 block font-display text-3xl uppercase">English</span>
            <span
              aria-hidden="true"
              className="mt-4 inline-block text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              ↗
            </span>
          </button>
          <button
            type="button"
            onClick={() => choose("pt")}
            className="group relative overflow-hidden rounded-2xl border border-white/15 bg-[#201723] px-5 py-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_16px_40px_#ff385b22] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet"
          >
            <span className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
              PT
            </span>
            <span className="mt-2 block font-display text-3xl uppercase">Português</span>
            <span
              aria-hidden="true"
              className="mt-4 inline-block text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              ↗
            </span>
          </button>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          This choice is saved on this device. · Essa escolha fica salva neste dispositivo.
        </p>
      </div>
    </div>
  );
}
