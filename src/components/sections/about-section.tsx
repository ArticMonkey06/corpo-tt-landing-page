"use client";

import Image from "next/image";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { ColourfulText } from "@/components/ui/colourful-text";
import { useLanguage } from "@/contexts/language-context";

export function AboutSection() {
  const { c, language } = useLanguage();

  return (
    <section id="about" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
            {c.about.title}
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 justify-center">
          <CardSpotlight spotlightColor="hsl(220, 60%, 85%)" className="bg-secondary text-card-foreground p-0 overflow-hidden rounded-xl max-w-sm mx-auto">
            <div className="flex flex-col items-center text-center h-full">
              <div className="relative w-full h-80">
                <Image
                  src="/images/business-vision-corpott.webp"
                  alt="Imagen decorativa para la visión de la empresa"
                  data-ai-hint="telescope future"
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground relative z-20">{c.about.vision.title}</h3>
                <p className="mt-2 text-foreground/80 relative z-20">
                  {language === 'es' ?
                    <>Ser la empresa líder en servicios de <ColourfulText text="apoyo empresarial a distancia" />, proporcionando <ColourfulText text="personal calificado" /> para las necesidades específicas de los clientes.</> :
                    <>To be the leading company in <ColourfulText text="remote business support" /> services, providing <ColourfulText text="qualified personnel" /> for the specific needs of our clients.</>
                  }
                </p>
              </div>
            </div>
          </CardSpotlight>
          <CardSpotlight spotlightColor="hsl(220, 60%, 85%)" className="bg-secondary text-card-foreground p-0 overflow-hidden rounded-xl max-w-sm mx-auto">
            <div className="flex flex-col items-center text-center h-full">
              <div className="relative w-full h-80">
                <Image
                  src="/images/business-mission-corpott.webp"
                  alt="Imagen decorativa para la misión de la empresa"
                  data-ai-hint="target goal"
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>
              <div className="p-6">
              <h3 className="text-2xl font-bold text-foreground relative z-20">{c.about.mission.title}</h3>
              <p className="mt-2 text-foreground/80 relative z-20">
                {language === 'es' ?
                  <>Proporcionar <ColourfulText text="soluciones empresariales a distancia" /> eficientes y sostenibles, mejorar la experiencia del cliente a través de un <ColourfulText text="servicio de calidad" /> y garantizar servicios de calidad con <ColourfulText text="tiempos de respuesta expeditos" />.</> :
                  <>To provide efficient and sustainable <ColourfulText text="remote business solutions" />, enhance the client experience through <ColourfulText text="quality service" />, and guarantee quality services with <ColourfulText text="prompt response times" />.</>
                }
              </p>
              </div>
            </div>
          </CardSpotlight>
        </div>
      </div>
    </section>
  );
}
