"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import type { Locale, Dictionary } from "@/data/dictionaries/types";
import { getDictionary } from "@/data/dictionaries/getDictionary";

type I18nContextValue = {
  locale: Locale;
  dict: Dictionary;
  setLocale: (next: Locale) => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  const value = useMemo<I18nContextValue>(() => {
    return {
      locale,
      dict: getDictionary(locale),
      setLocale: (next) => {
        setLocaleState(next);
        document.cookie = `locale=${next}; path=/; max-age=31536000; samesite=lax`;
      },
    };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}