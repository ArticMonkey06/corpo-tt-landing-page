# Fix: ajustar el tamaño del logo en la sección Hero

## User Story

Como visitante, quiero que el logo (icono de 4 cuadros) del Hero esté bien proporcionado respecto al título, para que la cabecera se vea equilibrada y profesional en todos los tamaños de pantalla.

## Descripción

En `src/app/page.tsx` (sección Hero, alrededor de la línea 251-262), el `LogoIcon` se renderiza junto al `<h1>` con estas clases:

```tsx
<LogoIcon
  squareClassName="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"
  gapClassName="gap-1 md:gap-1.5"
/>
```

El tamaño actual del icono no acompaña correctamente la escala del título (`text-4xl … lg:text-7xl`): se ve desproporcionado (demasiado grande/pequeño) respecto al texto en ciertos breakpoints. Se debe ajustar la escala del `squareClassName` (y `gapClassName` si aplica) para que el logo quede visualmente balanceado con el título en mobile, tablet y desktop.

## Criterios de aceptación

- El `LogoIcon` del Hero queda visualmente proporcionado respecto al `<h1>` en los breakpoints principales (mobile, `sm`, `md`, `lg`).
- No se rompe la alineación vertical entre el título y el logo (siguen centrados en la misma línea).
- El cambio se limita a las clases de tamaño/gap del `LogoIcon` del Hero (no altera el `LogoIcon` del header/footer).
- Verificado visualmente en al menos 3 anchos de pantalla.
