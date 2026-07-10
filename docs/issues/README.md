# Issues — CorpoTT Landing Page

Backlog de tareas de implementación, una por archivo, siguiendo el formato de [`ejemplo_issue.md`](../templates/ejemplo_issue.md) (**User Story** / **Descripción** / **Criterios de aceptación**). Las issues que involucran múltiples variantes o un método no evidente incluyen una **💡 Recomendación de implementación**.

| # | Issue | Recomendación incluida |
|---|-------|:---:|
| 01 | [Estructura de agentes y skills (OpenCode + Claude)](01-estructura-agentes-skills.md) | ✅ |
| 02 | [Licencia propietaria (cerrada)](02-licencia-propietaria.md) | ✅ |
| 03 | [Mejorar las rutas de los assets](03-mejorar-rutas-assets.md) | ✅ |
| 04 | [Skeleton loader para imágenes](04-skeleton-loader-imagenes.md) | ✅ |
| 05 | [Descripción y etiquetas del proyecto](05-descripcion-y-etiquetas-proyecto.md) | — |
| 06 | [Fix: tamaño del logo en el Hero](06-fix-tamano-logo-hero.md) | — |
| 07 | [Agregar SECURITY.md](07-security-md.md) | — |
| 08 | [Comprar y asignar el dominio web](08-comprar-y-asignar-dominio.md) | ✅ |
| 09 | [Auditoría y mejora de SEO](09-auditoria-seo.md) | ✅ |
| 10 | [Reescribir el README](10-readme-informacion-proyecto.md) | — |

## Auditoría de código (issues #11–#23)

Derivadas del informe de auditoría (`docs/auditoria/informe-auditoria.md`, no versionado). Una por punto del diagnóstico.

| # | Issue | Recomendación incluida |
|---|-------|:---:|
| 11 | [Fix: typecheck silenciado en FloatingDock + activar en build](11-fix-typecheck-floating-dock.md) | — |
| 12 | [Fix: instalar ESLint y no ignorar el lint en build](12-instalar-eslint.md) | — |
| 13 | [Fix: `<html lang>` no cambia al alternar idioma](13-fix-html-lang-idioma.md) | ✅ |
| 14 | [Accesibilidad del toggle de idioma (aria-pressed)](14-accesibilidad-toggle-idioma.md) | — |
| 15 | [Marquee: respetar `prefers-reduced-motion`](15-marquee-prefers-reduced-motion.md) | ✅ |
| 16 | [Añadir `sizes` a imágenes `next/image fill`](16-sizes-next-image-fill.md) | ✅ |
| 17 | [Eliminar dependencias y código muerto](17-eliminar-dependencias-y-codigo-muerto.md) | ✅ |
| 18 | [Fuente única para el contenido de servicios](18-fuente-unica-contenido-servicios.md) | ✅ |
| 19 | [Fix: typos/anglicismos en el copy en español](19-fix-typos-copy-espanol.md) | — |
| 20 | [Fix: enlace "Ubicación" con `href="#"`](20-fix-enlace-ubicacion-href.md) | ✅ |
| 21 | [Reconciliar blueprint con la paleta real + tokens](21-reconciliar-blueprint-y-tokens.md) | ✅ |
| 22 | [Arquitectura: Server Components + islas de cliente](22-arquitectura-server-components-islas.md) | ✅ |
| 23 | [Agregar security headers en `next.config.ts`](23-security-headers.md) | ✅ |

> Para subirlas como issues reales de GitHub puedes usar `gh issue create --title "..." --body-file issues/0X-....md`.
