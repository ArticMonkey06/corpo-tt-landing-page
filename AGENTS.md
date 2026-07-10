# AGENTS.md

Punto de entrada de instrucciones para herramientas tipo **OpenCode** (y agentes
compatibles con la convención `AGENTS.md`). El detalle NO se duplica aquí: la fuente de
verdad son las carpetas portables.

## Proyecto

Landing page bilingüe (ES/EN) de **CorpoTT Services LLC** — Next.js 15 (App Router),
React 18, TypeScript, Tailwind + shadcn/ui, framer-motion. Sin backend ni tests.

## Fuente de verdad: `.agents/`

Lee y respeta:

- **Rules** → [`.agents/rules/`](.agents/rules/) — convenciones del repo (tokens Tailwind,
  bilingüe ES/EN, arquitectura Server Components + islas, accesibilidad, imágenes,
  animación, shadcn, security headers/CSP, puertas de calidad).
- **Roles** → [`.agents/roles/`](.agents/roles/) — `frontend-dev`, `content-editor`,
  `seo-auditor`, `reviewer`, `deployer`.
- **Skills** → [`.agents/skills/`](.agents/skills/) — `seo-audit`, `code-review`,
  `copy-review`, `deploy-vercel`, `add-form`, `add-carousel`.

Guía de consumo por herramienta: [`.agents/README.md`](.agents/README.md).

## Reglas de oro (resumen; el detalle está en `.agents/rules/`)

- `page.tsx` es Server Component; interactividad en islas `'use client'`.
- Tokens semánticos de Tailwind; nunca hex de marca sueltos.
- Todo el copy en `src/lib/content.tsx`, **editando ES y EN**; resaltes con `**...**`.
- Antes de cerrar un cambio: `npm run typecheck` (obligatorio; el build NO valida tipos),
  `npm run lint`, y verificación real del comportamiento.
- Imágenes con `next/image`; orígenes remotos solo `placehold.co` y `storage.googleapis.com`.
