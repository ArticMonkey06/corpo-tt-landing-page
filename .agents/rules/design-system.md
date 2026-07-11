# Rule: CorpoTT Design System

**Aplica a:** cualquier trabajo visual/UI. Skills relacionadas: `frontend-design`, `web-design-guidelines`.

## Principio

La identidad es **corporativa, sobria y confiable**: fondos blancos amplios, azul
corporativo profundo como color de acción, y toques del degradado azul de marca para
resaltar frases clave. Nada estridente; alto contraste; layout en bloques separados.

Antes de tocar UI, lee la especificación canónica: [`.docs/DESIGN.md`](../../.docs/DESIGN.md)
(formato design.md, con tokens de color/tipografía/espaciado/componentes).

## Reglas

- **Tipografía:** una sola familia, **Inter** (`font-headline` / `font-body`).
  Jerarquía por tamaño/peso (400/600/700), no por familias distintas.
- **Layout:** página única en bloques a todo el ancho; secciones con `py-16 md:py-24`;
  fondos alternando `background` ↔ `secondary`; párrafos con `max-width` de lectura.
- **Formas:** radios suaves (`rounded-xl` en tarjetas, `rounded-full` en dock/avatares).
- **Profundidad:** sombras sutiles (`shadow-lg`/`shadow-2xl`), capas tonales y el
  spotlight interactivo; evita efectos recargados.
- **Acentos:** reserva el degradado de marca y el spotlight para énfasis puntual.

## Do / Don't

- ✅ Mantén la estética sobria; usa los tokens (ver [tailwind-tokens](./tailwind-tokens.md)).
- ❌ No introduzcas nuevas familias tipográficas, colores fuera de tokens, ni
  animaciones decorativas sin propósito.
