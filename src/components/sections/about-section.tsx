"use client";

import Image from "next/image";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Highlighted } from "@/components/ui/highlighted";
import { useLanguage } from "@/contexts/language-context";

export function AboutSection() {
  const { c } = useLanguage();

  return (
    <section id="about" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
            {c.about.title}
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 justify-center">
          <CardSpotlight spotlightColor="var(--spotlight)" className="bg-secondary text-card-foreground p-0 overflow-hidden rounded-xl max-w-sm mx-auto">
            <div className="flex flex-col items-center text-center h-full">
              <div className="relative w-full h-80">
                <Image
                  src="/images/business-vision-corpott.webp"
                  alt="Imagen decorativa para la visión de la empresa"
                  data-ai-hint="telescope future"
                  fill
                  sizes="(max-width: 768px) 100vw, 384px"
                  className="object-cover rounded-t-xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground relative z-20">{c.about.vision.title}</h3>
                <p className="mt-2 text-foreground/80 relative z-20">
                  <Highlighted text={c.about.vision.description1} />
                </p>
              </div>
            </div>
          </CardSpotlight>
          <CardSpotlight spotlightColor="var(--spotlight)" className="bg-secondary text-card-foreground p-0 overflow-hidden rounded-xl max-w-sm mx-auto">
            <div className="flex flex-col items-center text-center h-full">
              <div className="relative w-full h-80">
                <Image
                  src="/images/business-mission-corpott.webp"
                  alt="Imagen decorativa para la misión de la empresa"
                  data-ai-hint="target goal"
                  fill
                  sizes="(max-width: 768px) 100vw, 384px"
                  className="object-cover rounded-t-xl"
                />
              </div>
              <div className="p-6">
              <h3 className="text-2xl font-bold text-foreground relative z-20">{c.about.mission.title}</h3>
              <p className="mt-2 text-foreground/80 relative z-20">
                <Highlighted text={c.about.mission.description1} />
              </p>
              </div>
            </div>
          </CardSpotlight>
        </div>
      </div>
    </section>
  );
}
