# Añadir `sizes` a las imágenes `next/image` con `fill`

## User Story

Como visitante, quiero que las imágenes se descarguen en la resolución adecuada a mi pantalla, para que la página cargue más rápido y consuma menos datos.

## Descripción

Todas las imágenes que usan `fill` en `src/app/page.tsx` carecen de la prop `sizes`:

- Quiénes somos (`page.tsx:282`)
- Visión / Misión (`page.tsx:319`, `page.tsx:341`)
- Servicios (`page.tsx:389`)

Sin `sizes`, `next/image` con `fill` asume `100vw` y sirve imágenes más grandes de lo necesario (emitiendo además un warning en consola). Definir `sizes` acorde al layout responsive (1 col mobile → 2/3 cols desktop) mejora LCP y ancho de banda.

> **💡 Recomendación de implementación**
>
> Definir `sizes` según el grid de cada sección, por ejemplo para las tarjetas de servicios (3 columnas en `lg`): `sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"`. Ajustar por sección. Considerar `priority` en la primera imagen visible por encima del pliegue.

## Criterios de aceptación

- Todas las imágenes con `fill` incluyen una prop `sizes` acorde a su ancho real en cada breakpoint.
- Desaparecen los warnings de `next/image` sobre `sizes` en la consola.
- No hay regresión visual en las imágenes en mobile/tablet/desktop.
- `npm run build` pasa sin advertencias relacionadas.
