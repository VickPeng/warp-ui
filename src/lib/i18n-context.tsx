"use client";

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import type { Lang, Key } from "./i18n";
import { dict } from "./i18n";

interface I18nValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: Key) => string;
}

const I18nCtx = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("warp-lang") as Lang | null;
    if (saved === "en" || saved === "zh") setLangState(saved);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("warp-lang", l);
  }, []);

  const t = useCallback((key: Key) => dict[lang][key] ?? key, [lang]);

  return (
    <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>
  );
}

export function useT() {
  const ctx = useContext(I18nCtx);
  if (!ctx) return { lang: "en" as Lang, setLang: (_: Lang) => {}, t: (k: Key) => k };
  return ctx;
}
