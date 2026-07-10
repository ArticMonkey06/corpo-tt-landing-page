import React from "react";
import { ColourfulText } from "@/components/ui/colourful-text";

/**
 * Renders a copy string where segments wrapped in `**double asterisks**` are
 * highlighted with <ColourfulText>. This keeps every piece of copy (text + which
 * words are highlighted) as a single source of truth in the content module.
 *
 * Example: "Servicio de **operadores tecnológicos** que simplifica..."
 */
export function Highlighted({ text }: { text: string }) {
  // Splitting on a capturing group interleaves plain text (even indices) with
  // the captured, highlighted segments (odd indices).
  const parts = text.split(/\*\*(.+?)\*\*/g);

  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? <ColourfulText key={i} text={part} /> : part
      )}
    </>
  );
}
