# Auditoría y mejora de SEO

## User Story

Como propietario de la landing, quiero una auditoría de SEO y sus correcciones, para que la página sea correctamente indexada, se vea bien al compartirla en redes y posicione mejor para el negocio de CorpoTT.

## Descripción

El SEO actual es mínimo. En `src/app/layout.tsx` la metadata solo define `title` y `description`; falta prácticamente todo lo demás:

- Sin `metadataBase`, `keywords`, `openGraph`, `twitter` (card), ni imagen social (`og:image`).
- Sin `robots.txt` ni `sitemap.xml`.
- Sin datos estructurados (JSON-LD tipo `Organization`/`LocalBusiness`).
- El sitio es bilingüe (ES/EN) mediante toggle de cliente, no rutas — hay que decidir cómo declarar `lang`/`hreflang` (hoy `<html lang="es">` es fijo).
- Verificar jerarquía de encabezados (un solo `<h1>`), `alt` de imágenes (ya presentes) y rendimiento (Core Web Vitals / Lighthouse).

> **💡 Recomendación de implementación** _(auditar con herramientas y luego corregir; varias opciones)_
>
> **Auditar:** correr **Lighthouse** (Chrome DevTools o `npx lighthouse <url> --view`) y/o [PageSpeed Insights](https://pagespeed.web.dev/) sobre el deploy; usar el reporte SEO/Best-Practices como checklist. Complementar con Search Console una vez haya dominio.
>
> **Corregir (Next.js App Router):**
> - Ampliar `metadata` en `layout.tsx`: `metadataBase`, `keywords`, `openGraph`, `twitter`, `alternates.canonical`.
> - Agregar imagen social (`public/og-image.*`) referenciada en `openGraph.images`.
> - Crear `app/robots.ts` y `app/sitemap.ts` (APIs nativas de Next 15) en lugar de archivos estáticos.
> - Añadir JSON-LD (`Organization`) vía `<script type="application/ld+json">`.
> - Como el bilingüe es toggle de cliente, documentar la decisión sobre `hreflang` (o dejar constancia de que no aplica sin rutas por idioma).

## Criterios de aceptación

- Se ejecutó una auditoría (Lighthouse/PageSpeed) y el reporte se adjunta o resume en la issue/PR.
- `metadata` en `layout.tsx` incluye `metadataBase`, `keywords`, `openGraph` (con `og:image`) y `twitter` card.
- Existen `robots` y `sitemap` (vía `app/robots.ts` y `app/sitemap.ts`).
- Se agregan datos estructurados JSON-LD (`Organization`/`LocalBusiness`) con los datos reales del negocio.
- Se decide y documenta el manejo de idioma/`hreflang` dado el toggle bilingüe.
- La puntuación SEO de Lighthouse mejora respecto al baseline (idealmente ≥ 90) y se verifica el preview social (og) al compartir el enlace.
