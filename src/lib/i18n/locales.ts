export const locales = ["en", "pt"] as const;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  pt: "Português",
};

export const STORAGE_KEY = "mind-locale";
