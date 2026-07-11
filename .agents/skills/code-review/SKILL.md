---
name: code-review
description: Revisa cambios del repo CorpoTT contra sus convenciones (tokens, bilingüe ES/EN, arquitectura de islas, a11y, CSP) y las puertas de calidad (typecheck+lint). Úsala antes de commitear o mergear.
---

# Skill: code-review (CorpoTT)

Revisión con checklist específico del proyecto. Aplica el rol
[reviewer](../../roles/reviewer.md).

## Cuándo usarla

Antes de commitear/mergear un cambio no trivial, o al revisar un PR.

## Procedimiento

1. **Puertas de calidad** ([quality-gates](../../rules/quality-gates.md)):
   - `npm run typecheck` en verde (recuerda: el build NO valida tipos).
   - `npm run lint` en verde (o justifica si falla por ESLint ausente, issue #12).
   - Verificación **real**: levanta la app y observa el comportamiento afectado.
2. **Convenciones**:
   - [tailwind-tokens](../../rules/tailwind-tokens.md): sin hex de marca ni `hsl(...)`
     sueltos; tokens semánticos.
   - [react-architecture](../../rules/react-architecture.md): `'use client'` solo en islas;
     `page.tsx` server; contenido desde `content.tsx`.
   - [bilingual-content](../../rules/bilingual-content.md): ES/EN sincronizados; resaltes `**...**`.
   - [accessibility](../../rules/accessibility.md): `lang`, ARIA, `prefers-reduced-motion`, `alt`.
   - [images](../../rules/images.md) y [security-headers](../../rules/security-headers.md):
     orígenes remotos alineados entre `remotePatterns` y CSP.
3. **Sin regresión visual**: las secciones deben verse igual (compara SSR/DOM cuando aplique).

## Entregable

Lista de hallazgos (más severo primero) y, si procede, los fixes aplicados. Nota: en
Claude Code existe además el comando `/code-review`; esta skill añade el checklist del repo.
