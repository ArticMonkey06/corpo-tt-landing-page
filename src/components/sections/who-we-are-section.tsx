"use client";

import Image from "next/image";
import { ColourfulText } from "@/components/ui/colourful-text";
import { useLanguage } from "@/contexts/language-context";

export function WhoWeAreSection() {
  const { c, language } = useLanguage();

  return (
    <section id="quienes-somos" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-center">
          <div className="relative w-full aspect-video">
            <Image
              src="/images/who-are.webp"
              alt="Imagen decorativa de la oficina de Corpo TT services"
              data-ai-hint="office workspace"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
              <ColourfulText text={c.quienesSomos.title}/>
            </h2>
            <div className="mt-6 space-y-4 text-foreground/80">
              <p>
                {language === 'es' ?
                  <>Corpott Services tiene como filosofía fundamental la <ColourfulText text="calidad y excelencia" /> en la ejecución de sus trabajos, buscando con esto la plena satisfacción del cliente. Por ello, brindamos <ColourfulText text="soluciones adaptadas" /> para resolver problemas de logística, asistencia remota, gestión de tesorería y contratación de personal temporal.</> :
                  <>Corpott Services' fundamental philosophy is <ColourfulText text="quality and excellence" /> in the execution of its work, seeking full client satisfaction. Therefore, we provide <ColourfulText text="adapted solutions" /> to solve problems in logistics, remote assistance, treasury management, and temporary staff hiring.</>
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
