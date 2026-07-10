---
name: add-carousel
description: (Futuro) Convierte el marquee CSS de clientes en un carrusel interactivo con embla-carousel (ya instalado) o añade un carrusel nuevo. Úsala solo si se quiere interactividad de carrusel. Aún sin uso.
---

# Skill: add-carousel (CorpoTT) — activable a futuro

> **Estado:** `embla-carousel-react` y `embla-carousel-autoplay` están instalados y existe
> la primitiva [`src/components/ui/carousel.tsx`](../../../src/components/ui/carousel.tsx),
> pero **hoy el carrusel de clientes es un marquee CSS** (`animate-marquee`), no embla.
> Esta skill aplica si se decide migrar a un carrusel interactivo o añadir uno nuevo.

Aplica el rol [frontend-dev](../../roles/frontend-dev.md).

## Procedimiento

1. Usa la primitiva `Carousel` de shadcn (embla) con `embla-carousel-autoplay` si se
   quiere autoplay.
2. **Accesibilidad crítica** (ver [accessibility](../../rules/accessibility.md)): respeta
   `prefers-reduced-motion` (pausa autoplay), controles con `aria-label`, foco navegable.
3. Mantén la estética sobria y los tokens ([design-system](../../rules/design-system.md),
   [tailwind-tokens](../../rules/tailwind-tokens.md)); es una isla de cliente
   ([react-architecture](../../rules/react-architecture.md)).
4. Reutiliza los datos de logos desde `content.tsx` (idénticos en ES/EN).

## Trade-off

El marquee CSS actual es ligero y no hidrata JS. Migrar a embla añade interactividad pero
también JS de cliente; hazlo solo si la interactividad aporta valor. Mide antes/después.
