"use client";

import { ColourfulText } from "@/components/ui/colourful-text";
import { useLanguage } from "@/contexts/language-context";

/** Client island: only the translated heading of the Clients section. */
export function ClientsTitle() {
  const { c } = useLanguage();
  return <ColourfulText text={c.clients.title} />;
}
