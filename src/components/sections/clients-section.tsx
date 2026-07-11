import Link from "next/link";
import { content } from "@/lib/content";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";
import { ClientsTitle } from "./clients-title";

// Client logos are identical across languages, so the marquee structure renders
// on the server. Only the heading (ClientsTitle) and each logo (ImageWithSkeleton,
// for its load/skeleton state) are client leaves.
const logos = content.es.clients.logos;

export function ClientsSection() {
  return (
    <section id="clients" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
            <ClientsTitle />
          </h2>
        </div>
      </div>
      <div className="group relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {[0, 1].map((group) => (
          <div
            key={group}
            className="flex shrink-0 items-center animate-marquee group-hover:[animation-play-state:paused] motion-reduce:[animation-play-state:paused]"
            aria-hidden={group === 1}
          >
            {[...logos, ...logos, ...logos].map((logo, index) => {
              const wrapperClass = "relative mx-8 flex h-24 w-[180px] shrink-0 items-center justify-center md:mx-12";
              const image = (
                <ImageWithSkeleton
                  src={logo.src}
                  alt={logo.alt}
                  width={180}
                  height={90}
                  className="max-h-full w-auto object-contain transition-transform duration-300 hover:scale-110"
                />
              );
              return logo.href ? (
                <Link
                  key={index}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={wrapperClass}
                >
                  {image}
                </Link>
              ) : (
                <div key={index} className={wrapperClass}>
                  {image}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
