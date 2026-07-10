"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { ColourfulText } from "@/components/ui/colourful-text";
import { useLanguage } from "@/contexts/language-context";

export function ContactSection() {
  const { c } = useLanguage();

  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
            <ColourfulText text={c.contact.title} />
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-foreground/80 md:text-lg">
            {c.contact.subtitle}
          </p>
        </div>
        <div className="flex items-center justify-center w-full mt-12">
          <FloatingDock items={c.contact.links} />
        </div>
      </div>
    </section>
  );
}
