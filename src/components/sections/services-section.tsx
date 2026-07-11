"use client";

import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Highlighted } from "@/components/ui/highlighted";
import { useLanguage } from "@/contexts/language-context";

export function ServicesSection() {
  const { c } = useLanguage();

  return (
    <section id="services" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
            {c.services.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-foreground/80 md:text-lg">
            {c.services.subtitle}
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {c.services.list.map((service, index) => (
            <CardSpotlight
              key={index}
              spotlightColor="var(--spotlight)"
              className={
                "bg-card text-card-foreground p-0 overflow-hidden rounded-xl " +
                (c.services.list.length % 2 !== 0 && index === c.services.list.length - 1
                  ? "sm:col-span-2 lg:col-span-1 lg:col-start-2"
                  : "")
              }
            >
              <div className="flex flex-col items-center text-center h-full">
                  <div className="relative w-full h-64">
                    <ImageWithSkeleton
                      src={service.image}
                      alt={service.alt}
                      data-ai-hint="tech service"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover rounded-t-xl"
                    />
                  </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 relative z-20 text-foreground">{service.title}</h3>
                  <p className="text-sm text-foreground/80 relative z-20">
                    <Highlighted text={service.description} />
                  </p>
                </div>
              </div>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </section>
  );
}
