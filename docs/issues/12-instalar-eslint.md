# Fix: instalar ESLint y dejar de ignorar el lint en el build

## User Story

Como desarrollador, quiero que `npm run lint` funcione y que el linting se ejecute en el build, para mantener una calidad de código consistente y detectar problemas temprano.

## Descripción

`npm run lint` falla actualmente con:

```
⨯ ESLint must be installed: npm install --save-dev eslint
```

Existe `eslint.config.mjs` en el repo, pero **ESLint no está declarado en `devDependencies`** de `package.json`, por lo que el linting es efectivamente inexistente. Además, `next.config.ts` tiene `eslint.ignoreDuringBuilds: true`, que silencia el lint durante `npm run build`.

## Criterios de aceptación

- `eslint` (y el config de Next que corresponda, p. ej. `eslint-config-next`) se agregan a `devDependencies`.
- `npm run lint` se ejecuta correctamente y reporta/pasa sin errores de configuración.
- Se cambia `eslint.ignoreDuringBuilds` a `false` en `next.config.ts`.
- Se corrigen (o justifican con regla desactivada) los warnings/errores que aparezcan al habilitar el lint.
