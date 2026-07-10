# Respetar `prefers-reduced-motion` en el marquee de clientes

## User Story

Como usuario sensible al movimiento (o con `prefers-reduced-motion` activado), quiero que la animación infinita del carrusel de clientes se detenga o reduzca, para no sufrir molestias ni mareos al navegar.

## Descripción

La sección de clientes en `src/app/page.tsx` (línea ~449-485) usa una animación `animate-marquee` infinita definida en `tailwind.config.ts`:

```ts
animation: {
  marquee: 'marquee 40s linear infinite',
}
```

La animación se ejecuta siempre, sin considerar la preferencia del sistema `prefers-reduced-motion: reduce`. Para usuarios con esa preferencia debería pausarse o desactivarse.

> **💡 Recomendación de implementación**
>
> - Añadir una regla en `globals.css` que, bajo `@media (prefers-reduced-motion: reduce)`, aplique `animation: none` (o `animation-play-state: paused`) a `.animate-marquee`.
> - Alternativa Tailwind: usar la variante `motion-reduce:[animation-play-state:paused]` (o `motion-reduce:animate-none`) directamente en el contenedor del marquee.

## Criterios de aceptación

- Con `prefers-reduced-motion: reduce` activado en el sistema, el marquee no se desplaza (queda estático o pausado) y los logos siguen siendo legibles.
- Sin la preferencia activada, la animación funciona como antes (incluido el `pause on hover` existente).
- Verificado activando la preferencia en el sistema o en las DevTools del navegador.
