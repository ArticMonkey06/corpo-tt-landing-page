# Arquitectura: reducir `'use client'` con Server Components e islas de cliente

## User Story

Como desarrollador, quiero que sólo las partes interactivas se rendericen en cliente, para reducir el JavaScript hidratado y aprovechar mejor el App Router de Next 15.

## Descripción

`src/app/page.tsx` es un único componente `'use client'` (línea 2) que abarca toda la página, aunque el contenido es en su mayoría estático. Sólo necesitan cliente:

- El toggle de idioma (estado `useState`).
- Los efectos con `framer-motion`/hover (`CardSpotlight`, `FloatingDock`).

Marcar toda la página como cliente hidrata JS innecesario para secciones estáticas (Hero, Quiénes Somos, About).

> **💡 Recomendación de implementación** _(refactor incremental, opcional según prioridad)_
>
> - Convertir `page.tsx` en Server Component y extraer las partes interactivas a **islas** `'use client'` acotadas (el switch de idioma, las tarjetas con spotlight, el dock).
> - Manejar el idioma con un contexto cliente que envuelva sólo lo necesario, o migrar a i18n por rutas (`/es`, `/en`) — lo que también ayuda al SEO (issues #9 y #13).
> - Es un cambio de arquitectura: hacerlo sólo si se prioriza rendimiento/mantenibilidad; medir antes/después.

## Criterios de aceptación

- Las secciones puramente estáticas dejan de estar bajo un `'use client'` global (se renderizan en servidor).
- La interactividad (toggle de idioma, spotlight, dock) sigue funcionando exactamente igual.
- Se observa una reducción del JS de cliente / mejora en métricas (documentar medición antes/después).
- `npm run build` y `npm run typecheck` pasan.
