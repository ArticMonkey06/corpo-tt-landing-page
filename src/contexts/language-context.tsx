"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { content, type Language } from "@/lib/content";

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  /** Content for the currently selected language. */
  c: (typeof content)[Language];
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  // Keep <html lang> in sync with the client-side language toggle so screen
  // readers and search engines interpret the shown language correctly. Runs in
  // an effect (not during render) to avoid a hydration mismatch: the server
  // renders lang="es" (the default) and this only diverges after user action.
  // NOTE: this reflects the runtime toggle only; full SEO/hreflang handling is
  // tracked separately (route-based i18n, issue #9).
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, c: content[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
