# Reconciliar el blueprint con la paleta real y centralizar tokens de diseño

## User Story

Como diseñador/desarrollador, quiero que el documento de diseño refleje la paleta realmente implementada y que los colores repetidos vivan en tokens, para tener una fuente de verdad de diseño coherente y fácil de mantener.

## Descripción

Hay una **deriva** entre `.docs/blueprint.md` y la implementación:

- El blueprint especifica **primario azul `#0000FF`** y **acento amarillo `#FFFF00`** para iconos.
- La implementación usa otra paleta más sobria: primario `hsl(216 65% 35%)` en `globals.css` y los azules de marca `#1e429f` / `#8d9fce` en `logo.tsx` y `colourful-text.tsx`. **No existe el acento amarillo** en ningún lado.

Además, el color del spotlight `spotlightColor="hsl(220, 60%, 85%)"` está **repetido literal** ~9 veces en `page.tsx`, y los hex de marca (`#1e429f`, `#8d9fce`) están hardcodeados en varios componentes en lugar de venir de tokens.

> **💡 Recomendación de implementación** _(dos frentes)_
>
> - **Documentación:** actualizar `.docs/blueprint.md` para que describa la paleta realmente construida (o, si se prefiere la del blueprint, alinear el código). Dejar una sola versión canónica.
> - **Tokens:** mover `#1e429f` / `#8d9fce` y el color del spotlight a variables CSS/tokens de Tailwind (p. ej. `--brand-blue`, `--brand-blue-light`, `--spotlight`) y consumirlos desde `logo.tsx`, `colourful-text.tsx` y `page.tsx` en lugar de literales repetidos.

## Criterios de aceptación

- `.docs/blueprint.md` describe la paleta y el acento realmente usados (sin contradicciones con el código).
- Los colores de marca y el color del spotlight se definen como tokens/variables y se consumen desde ahí; no quedan hex de marca ni el `hsl(220,60%,85%)` repetidos como literales sueltos.
- No hay regresión visual (logo, textos con gradiente y spotlight se ven igual).
