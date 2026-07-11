"use client";

import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";
import { ColourfulText } from "@/components/ui/colourful-text";
import { Highlighted } from "@/components/ui/highlighted";
import { useLanguage } from "@/contexts/language-context";
import { ASSETS } from "@/lib/assets";

export function WhoWeAreSection() {
  const { c } = useLanguage();

  return (
    <section id="quienes-somos" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-center">
          <div className="relative w-full aspect-video">
            <ImageWithSkeleton
              src={ASSETS.sections.whoWeAre}
              alt="Imagen decorativa de la oficina de Corpo TT services"
              data-ai-hint="office workspace"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-xl shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
              <ColourfulText text={c.quienesSomos.title}/>
            </h2>
            <div className="mt-6 space-y-4 text-foreground/80">
              <p>
                <Highlighted text={c.quienesSomos.p1} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
