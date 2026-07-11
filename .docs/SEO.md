# SEO — CorpoTT Services (issue #9)

Estado del SEO de la landing y decisiones tomadas. La fuente única de datos de SEO
(URL canónica, keywords, negocio) es [`src/lib/site.ts`](../src/lib/site.ts).

## Qué se implementó

- **Metadata ampliada** ([`src/app/layout.tsx`](../src/app/layout.tsx)): `metadataBase`,
  `title` (con `template`), `description`, `keywords`, `authors`/`creator`/`publisher`,
  `alternates.canonical`, `openGraph` (con `og:image`), `twitter` (`summary_large_image`)
  y `robots`.
- **Imagen social** generada dinámicamente con `next/og`:
  [`app/opengraph-image.tsx`](../src/app/opengraph-image.tsx) y su reexport para Twitter
  [`app/twitter-image.tsx`](../src/app/twitter-image.tsx). No se mantiene ningún PNG en
  `public/`.
- **Descubribilidad**: [`app/robots.ts`](../src/app/robots.ts) y
  [`app/sitemap.ts`](../src/app/sitemap.ts) (APIs nativas de Next 15).
- **Datos estructurados**: JSON-LD `Organization` inyectado en `layout.tsx` (inline, dentro
  de la CSP vía `script-src 'unsafe-inline'`). Se usa `Organization` y **no**
  `LocalBusiness` porque el negocio es 100% a distancia, sin dirección física.
- **Semántica** (verificada, ya correcta): un único `<h1>` en el hero; `h2` por sección;
  `h3` en tarjetas de servicios y en Visión/Misión; landmarks `header`/`main`/`footer` y
  `section` con `id`.

## Decisión de idioma / hreflang

El sitio es **bilingüe (ES/EN) mediante un toggle de cliente sobre una única URL**; no hay
rutas por idioma (`/es`, `/en`). En consecuencia:

- **No aplica `hreflang`**: hreflang requiere URLs distintas por idioma para declararlas
  como alternas. Al existir una sola URL, no hay nada que enlazar. Añadir etiquetas
  `alternates.languages` apuntando a la misma URL sería incorrecto.
- La **canónica** es la raíz (`/`) y el idioma por defecto declarado es **español**
  (`<html lang="es">`, sincronizado con el toggle vía `LanguageProvider`).
- En Open Graph se declara `locale: es_ES` y `alternateLocale: en_US` como señal informativa.

**Si en el futuro se migra a i18n por rutas** (`/es`, `/en`): habría que (1) generar ambas
rutas, (2) añadir `alternates.languages` con hreflang en la metadata, (3) listar ambas URLs
en el sitemap con `alternates`, y (4) actualizar este documento y la skill `seo-audit`.

## Dominio (depende del issue #8)

Aún no hay dominio de producción. La URL base se resuelve por entorno:

```
NEXT_PUBLIC_SITE_URL  (fallback: https://www.corpottservices.com)
```

Al asignar el dominio real, definir `NEXT_PUBLIC_SITE_URL` en Vercel (o actualizar el
fallback en `src/lib/site.ts`). Con eso, canonical, OG, JSON-LD, `robots` y `sitemap` se
alinean automáticamente.

## Auditoría (Lighthouse / PageSpeed)

La auditoría con Lighthouse/PageSpeed debe correrse **sobre el deploy** (issue #8), no en
local, para reflejar cabeceras y CDN reales:

```bash
npx lighthouse <URL_DEL_DEPLOY> --only-categories=seo,best-practices,performance --view
```

Baseline previo: metadata mínima (solo `title`+`description`), sin OG, sin sitemap/robots,
sin datos estructurados. Con los cambios de este issue se cubren los ítems de SEO que
Lighthouse evalúa (title, meta description, canonical, robots válido, indexable,
document has valid `hreflang`/`lang`, structured data). Adjuntar el reporte al PR una vez
haya URL pública.
