# Rule: Animación (framer-motion / Aceternity)

**Aplica a:** componentes animados. Skills relacionadas: `css-animations`, framer-motion patterns.

## Contexto

El proyecto usa **framer-motion** y componentes estilo Aceternity ya presentes:
`card-spotlight`, `floating-dock`, `colourful-text`, `background-boxes`, `lamp`,
`following-pointer`. El marquee de clientes es CSS (`animate-marquee` en
[`tailwind.config.ts`](../../tailwind.config.ts)).

## Reglas

- **`prefers-reduced-motion`**: toda animación no esencial (marquee, spotlight,
  magnificación del dock) debe reducirse o pausarse cuando el usuario lo pide
  (issue #15). Usa la media query en CSS o el hook correspondiente.
- Las animaciones deben sentirse **intencionales**, coherentes con la estética sobria
  (ver [design-system](./design-system.md)); no decorativas.
- Los componentes con motion/hover son **islas de cliente** (`'use client'`); mantenlos
  acotados para no arrastrar JS innecesario (ver [react-architecture](./react-architecture.md)).
- Rendimiento: anima `transform`/`opacity`; evita animar propiedades que fuercen layout.

## Don't

- ❌ Animaciones que ignoren `prefers-reduced-motion`.
- ❌ Añadir librerías pesadas (GSAP, Three.js) — fuera del alcance de una landing sobria.
