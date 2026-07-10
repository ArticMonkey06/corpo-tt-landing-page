---
name: seo-audit
description: Audita y mejora el SEO de la landing estática bilingüe de CorpoTT (metadata, semántica, hreflang, imágenes, sitemap/robots). Úsala al revisar o mejorar la descubribilidad del sitio (issue #9).
---

# Skill: SEO audit (CorpoTT)

Skill portable adaptada a una **landing estática y bilingüe (ES/EN)** en Next.js 15 App
Router. Aplica el rol [seo-auditor](../../roles/seo-auditor.md) y respeta las
[rules](../../rules/) del repo.

## Cuándo usarla

Al auditar SEO, preparar el sitio para producción/dominio (issue #8) o abordar el issue #9.

## Procedimiento

1. **Metadata** (`src/app/layout.tsx`): verifica `title` y `description` (bilingüe/representativa),
   e incorpora `openGraph`/`twitter` y una imagen OG. Considera `metadataBase`.
2. **Idioma / hreflang**: hoy el idioma es un toggle de cliente y `<html lang>` se
   sincroniza (issue #13). Evalúa y **documenta** la decisión: mantener toggle vs. migrar
   a rutas `/es` `/en` con `alternates.languages` (hreflang) — es un cambio de arquitectura,
   no lo apliques sin acuerdo.
3. **Semántica**: un solo `<h1>` (el hero), jerarquía `h2/h3` correcta, landmarks
   (`header`/`main`/`footer`/`section` con `id`). Se solapa con [accessibility](../../rules/accessibility.md).
4. **Imágenes**: `alt` descriptivos, `sizes` en `fill`, peso razonable (ver [images](../../rules/images.md)).
5. **Descubribilidad**: añade `app/sitemap.ts` y `app/robots.ts`; datos estructurados
   (`Organization`/`LocalBusiness` JSON-LD) si aportan — respeta la CSP.
6. **Rendimiento percibido**: conserva SSG (no vuelvas dinámica la página sin motivo).

## Entregable

Reporte de hallazgos priorizados + los cambios aplicados. Verifica con `npm run build`
y revisa el HTML servido (metadata presente, un solo `h1`).

## Adaptación pendiente

Genérica de origen; ya ajustada a: bilingüe por toggle, orígenes de imagen restringidos,
CSP activa. Si se migra a i18n por rutas, actualizar los pasos 2 y 3.
