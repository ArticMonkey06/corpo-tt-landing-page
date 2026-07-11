---
name: add-form
description: (Futuro) Añade un formulario validado con react-hook-form + shadcn (form.tsx). Úsala si se agrega, p. ej., un formulario de contacto real. react-hook-form y form.tsx están instalados; zod se removió (issue #17) — instálalo al activar.
---

# Skill: add-form (CorpoTT) — activable a futuro

> **Estado:** `react-hook-form` y `@hookform/resolvers`, junto con la primitiva
> [`src/components/ui/form.tsx`](../../../src/components/ui/form.tsx) (y `ui/label`),
> se conservan instalados, pero **hoy no hay formularios en uso**. **`zod` se eliminó
> en el issue #17** (0 usos); al activar esta skill, instala la librería de esquemas:
> `npm i zod`. Esta skill queda lista para cuando se decida añadir un formulario
> (p. ej. contacto real en vez del `mailto:` actual).

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
