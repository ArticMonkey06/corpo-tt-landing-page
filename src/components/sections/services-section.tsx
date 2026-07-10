"use client";

import Image from "next/image";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { ColourfulText } from "@/components/ui/colourful-text";
import { useLanguage } from "@/contexts/language-context";

export function ServicesSection() {
  const { c, language } = useLanguage();

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
                    <Image
                      src={service.image}
                      alt={service.alt}
                      data-ai-hint="tech service"
                      fill
                      className="object-cover rounded-t-xl"
                    />
                  </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 relative z-20 text-foreground">{service.title}</h3>
                  <p className="text-sm text-foreground/80 relative z-20">
                    {index === 0 ? (
                      language === 'es' ?
                      <>Servicio de <ColourfulText text="operadores tecnológicos" /> que simplifica la <ColourfulText text="administración y contratación de personal" />, integrando un equipo especializado a su operación para ofrecer soporte y soluciones tecnológicas sin complicaciones administrativas.</> :
                      <>A technology operator service that <ColourfulText text="simplifies personnel administration and hiring" />, integrating a specialized team into your operation to offer support and technological solutions without administrative complications.</>
                    ) : index === 1 ? (
                      language === 'es' ?
                      <>Nos encargamos de la <ColourfulText text="selección de proveedores" />, <ColourfulText text="negociación de precios" /> y <ColourfulText text="gestión de pedidos" />, asegurando la distribución eficiente y utilizando herramientas digitales para optimizar tiempos y costos.</> :
                      <>We handle <ColourfulText text="supplier selection" />, <ColourfulText text="price negotiation" />, and <ColourfulText text="order management" />, ensuring efficient distribution and using digital tools to optimize time and costs.</>
                    ) : index === 2 ? (
                      language === 'es' ?
                      <>Servicios de gestión de <ColourfulText text="reservas nacionales e internacionales" />, coordinando detalles y usando <ColourfulText text="plataformas avanzadas" /> para encontrar las mejores opciones y precios.</> :
                      <>National and international <ColourfulText text="booking management services" />, coordinating details and using <ColourfulText text="advanced platforms" /> to find the best options and prices.</>
                    ) : index === 3 ? (
                      language === 'es' ?
                      <>Soluciones para <ColourfulText text="optimizar la gestión del flujo de efectivo" />, encargándonos de la planificación, control y seguimiento de recursos financieros para <ColourfulText text="maximizar la eficiencia" /> y minimizar riesgos.</> :
                      <>Solutions to <ColourfulText text="optimize cash flow management" />, handling the planning, control, and monitoring of financial resources to <ColourfulText text="maximize efficiency" /> and minimize risks.</>
                    ) : index === 4 ? (
                      language === 'es' ?
                      <>Servicio especializado para <ColourfulText text="facilitar transacciones internacionales" />, optimizando el proceso, asegurando <ColourfulText text="cumplimiento normativo" /> y minimizando <ColourfulText text="riesgos cambiarios" />.</> :
                      <>A specialized service to <ColourfulText text="facilitate international transactions" />, optimizing the process, ensuring <ColourfulText text="regulatory compliance" />, and minimizing <ColourfulText text="currency risks" />.</>
                    ) : index === 5 ? (
                      language === 'es' ?
                      <>Nuestros servicios construyen una <ColourfulText text="base sólida para modelos de IA" /> de alto rendimiento, asignando <ColourfulText text="etiquetas precisas" /> a grandes volúmenes de datos para que los modelos reconozcan patrones y tomen decisiones más inteligentes.</> :
                      <>Our services build a <ColourfulText text="solid foundation for high-performance AI models" /> by assigning <ColourfulText text="precise labels" /> to large volumes of data, enabling the models to recognize patterns and make smarter decisions.</>
                    ) : index === 6 ? (
                      language === 'es' ?
                      <>Ofrecemos <ColourfulText text="personal capacitado" /> sin las complications administrativas de la contratación, <ColourfulText text="adaptándonos a sus necesidades" /> para que pueda concentrarse en sus objetivos principales.</> :
                      <>We offer <ColourfulText text="trained personnel" /> without the administrative complications of hiring, <ColourfulText text="adapting to your needs" /> so you can focus on your main objectives.</>
                    ) : (
                      service.description
                    )}
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
