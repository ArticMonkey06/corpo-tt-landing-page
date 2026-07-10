# Fix: error de tipos silenciado en FloatingDock y activar el typecheck en el build

## User Story

Como desarrollador, quiero que el proyecto compile sin errores de tipo y que el `build` los detecte, para no dejar pasar regresiones de tipado ocultas.

## Descripción

`npm run typecheck` falla actualmente con:

```
src/components/ui/floating-dock.tsx(104,12): error TS18046: 'val' is of type 'unknown'.
```

En `src/components/ui/floating-dock.tsx` (línea ~102) el callback de `useTransform` no tipa su parámetro:

```tsx
let distance = useTransform(mouseX, (val) => {
  let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
  return val - bounds.x - bounds.width / 2;
});
```

El error queda **oculto** porque `next.config.ts` tiene `typescript.ignoreBuildErrors: true`, por lo que `npm run build` pasa en verde aun con el fallo. Un build verde hoy no garantiza código type-safe.

## Criterios de aceptación

- Se tipa el parámetro del callback (p. ej. `(val: number) => …`) y `npm run typecheck` pasa sin errores.
- Se cambia `typescript.ignoreBuildErrors` a `false` en `next.config.ts`.
- `npm run build` pasa con la comprobación de tipos activa.
