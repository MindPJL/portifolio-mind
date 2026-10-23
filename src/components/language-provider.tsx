"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getDictionary, type Dictionary } from "@/lib/i18n/dictionary";
import { STORAGE_KEY, type Locale } from "@/lib/i18n/locales";

type LanguageContextValue = {
  locale: Locale | null;
  ready: boolean;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
  hasChosen: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "pt") {
      setLocaleState(saved);
      document.documentElement.lang = saved === "pt" ? "pt-BR" : "en";
    }
    setReady(true);
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next === "pt" ? "pt-BR" : "en";
  };

  const value = useMemo<LanguageContextValue>(() => {
    const active = locale ?? "en";
    return {
      locale,
      ready,
      dictionary: getDictionary(active),
      setLocale,
      hasChosen: locale !== null,
    };
  }, [locale, ready]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
