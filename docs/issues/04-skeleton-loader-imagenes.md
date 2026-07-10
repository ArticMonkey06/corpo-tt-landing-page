# Agregar skeleton loader para la carga de imágenes

## User Story

Como visitante de la landing, quiero ver un placeholder de carga (skeleton) mientras las imágenes se descargan o si tardan/fallan, para no percibir espacios vacíos ni saltos de layout mientras navego.

## Descripción

Las secciones "Quiénes somos", "Misión/Visión", "Servicios" y el carrusel de clientes usan `next/image` con `fill`/`src`, pero no muestran ningún estado intermedio mientras la imagen carga. En conexiones lentas se ven huecos en blanco (y potencialmente CLS). El proyecto ya tiene el componente `src/components/ui/skeleton.tsx` de shadcn disponible para reutilizar.

> **💡 Recomendación de implementación** _(existen varias variantes; elegir según el caso)_
>
> - **Variante recomendada (LCP/UX + simple):** usar el `placeholder="blur"` de `next/image`. Para imágenes locales importadas, Next genera el blur automáticamente; para `src` en string se necesita `blurDataURL`. Combinable con `priority` en la primera imagen visible.
> - **Variante skeleton explícito:** envolver cada imagen en un contenedor con `Skeleton` de shadcn y usar el evento `onLoad`/`onLoadingComplete` de `next/image` con un `useState(isLoaded)` para ocultar el skeleton al terminar. Útil como fallback visible si la imagen tarda o falla.
> - Como son varias imágenes, conviene un pequeño componente reutilizable (`ImageWithSkeleton`) que encapsule el estado de carga y el error, y usarlo en todas las secciones.
> - Manejar también el caso de **error** de carga (`onError`) mostrando el skeleton o un fallback, no dejando el hueco vacío.

## Criterios de aceptación

- Existe un mecanismo reutilizable (componente o patrón) que muestra un skeleton/placeholder mientras la imagen carga.
- Todas las imágenes de contenido (`who-are`, misión, visión, servicios y logos de clientes) usan dicho mecanismo.
- No se produce salto de layout (CLS) al cargar: el contenedor reserva el espacio final de la imagen.
- Si una imagen falla al cargar (`onError`), se muestra el skeleton/fallback en lugar de un hueco vacío.
- El skeleton respeta los tokens de tema (`bg-secondary`/`muted`) y se ve consistente en las distintas secciones.
- `npm run typecheck` y `npm run lint` pasan.
