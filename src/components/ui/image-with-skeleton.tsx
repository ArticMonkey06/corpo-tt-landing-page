"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * next/image con un skeleton/placeholder mientras la imagen carga y un fallback
 * si falla (`onError`). Drop-in para <Image>: colócalo dentro de un contenedor
 * `relative` con dimensiones reservadas (p. ej. `fill`, o `width/height`) para
 * evitar CLS. El skeleton usa tokens de tema (`bg-muted`).
 */
export function ImageWithSkeleton({ className, alt, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <>
      {(!loaded || error) && (
        <div
          className="absolute inset-0 animate-pulse rounded-[inherit] bg-muted"
          aria-hidden="true"
        />
      )}
      <Image
        {...props}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={cn(
          "transition-opacity duration-500",
          loaded && !error ? "opacity-100" : "opacity-0",
          className
        )}
      />
    </>
  );
}
