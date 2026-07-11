"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogoIcon } from "@/components/logo";
import { ColourfulText } from "@/components/ui/colourful-text";
import { useLanguage } from "@/contexts/language-context";

export function HeroSection() {
  const { c } = useLanguage();

  return (
    <section className="relative w-full h-[550px] overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-background z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <div className="container mx-auto px-4 text-center z-20">
        <div className="flex items-center justify-center gap-4 md:gap-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-foreground">
            {c.hero.title}
          </h1>
          <LogoIcon
            squareClassName="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-9 lg:w-9"
            gapClassName="gap-1 md:gap-1.5"
          />
        </div>
        <p className="uppercase text-lg sm:text-xl md:text-2xl font-semibold tracking-wider mt-4">
          <ColourfulText text={c.hero.subtitle1} /> & <ColourfulText text={c.hero.subtitle2} />
        </p>
        <p className="mx-auto mt-6 max-w-[800px] text-lg text-foreground/80 md:text-xl">
          {c.hero.description}
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="#services">{c.hero.button}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
