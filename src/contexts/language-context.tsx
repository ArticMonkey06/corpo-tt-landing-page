"use client";

import React, { createContext, useContext, useState } from "react";
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
