# Rule: Puertas de calidad (typecheck + lint obligatorios)

**Aplica a:** todo cambio de código antes de commitear/cerrar. Skills relacionadas: `code-review`.

## Contexto crítico

[`next.config.ts`](../../next.config.ts) tiene `typescript.ignoreBuildErrors: true` y
`eslint.ignoreDuringBuilds: true`. **Un `npm run build` en verde NO garantiza tipos ni
lint correctos.** Por eso hay que correrlos explícitamente.

## Obligatorio antes de dar por hecho un cambio

1. `npm run typecheck` (`tsc --noEmit`) — debe pasar sin errores.
2. `npm run lint` — debe pasar (nota: ESLint puede no estar instalado aún, issue #12;
   si falla por eso, indícalo).
3. Verificar el cambio **de verdad** (no solo compilar): levantar la app y observar el
   comportamiento afectado (SSR/HTTP 200, la sección tocada, el toggle ES/EN, etc.).

## Comandos

```bash
npm run dev        # dev con Turbopack en http://localhost:9002
npm run build      # build de producción (NO valida tipos/lint)
npm run typecheck  # obligatorio
npm run lint       # obligatorio
```

No hay tests en el proyecto: la verificación es manual/observacional.
