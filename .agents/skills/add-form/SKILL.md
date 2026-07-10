---
name: add-form
description: (Futuro) Añade un formulario validado con react-hook-form + zod y las primitivas de shadcn (form.tsx). Úsala si se agrega, p. ej., un formulario de contacto real. Paquetes ya instalados, aún sin uso.
---

# Skill: add-form (CorpoTT) — activable a futuro

> **Estado:** los paquetes (`react-hook-form`, `zod`, `@hookform/resolvers`) y la
> primitiva [`src/components/ui/form.tsx`](../../../src/components/ui/form.tsx) ya están
> instalados, pero **hoy no hay formularios en uso**. Esta skill queda lista para cuando
> se decida añadir uno (p. ej. contacto real en vez del `mailto:` actual).

Aplica el rol [frontend-dev](../../roles/frontend-dev.md).

## Procedimiento

1. Define el esquema con **zod** y tipa el formulario con `z.infer`.
2. Usa **react-hook-form** con `@hookform/resolvers/zod` y las primitivas de shadcn
   (`Form`, `FormField`, `FormItem`, `FormControl`, `FormMessage`).
3. Copy **bilingüe** para labels/placeholders/errores (ver [bilingual-content](../../rules/bilingual-content.md)).
4. Estilo con tokens semánticos (ver [tailwind-tokens](../../rules/tailwind-tokens.md)); accesible
   (labels asociados, foco, errores anunciados — ver [accessibility](../../rules/accessibility.md)).
5. Como es una landing estática sin backend, decide el destino del envío (Server Action,
   servicio externo, mailto) y ajústalo en la **CSP** (`connect-src`/`form-action`) si aplica.

## Verificación

`npm run typecheck`; probar validaciones y envío; sin errores de CSP en consola.
