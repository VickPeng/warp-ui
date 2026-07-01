"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

interface ThemeContextValue {
  theme: string;
  setTheme: (t: string) => void;
}

const ThemeCtx = createContext<ThemeContextValue | null>(null);
const KEY = "warp-theme";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    const t = saved === "dark" || saved === "light" ? saved : "light";
    setThemeState(t);
    document.documentElement.className = t;
    setMounted(true);
  }, []);

  const setTheme = useCallback((t: string) => {
    setThemeState(t);
    localStorage.setItem(KEY, t);
    document.documentElement.className = t;
  }, []);

  if (!mounted) return <>{children}</>;

  return (
    <ThemeCtx.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeCtx.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeCtx);
  if (!ctx) return { theme: "light", setTheme: (_: string) => {} };
  return ctx;
}
