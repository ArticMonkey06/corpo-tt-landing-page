# Rule: Tailwind con tokens semánticos (sin colores literales)

**Aplica a:** todo el CSS/JSX del proyecto. Skills relacionadas: `tailwind`, `design-tokens-guard`.

## Convención

- Usa **tokens semánticos** de Tailwind, nunca colores crudos: `bg-background`,
  `text-foreground`, `bg-secondary`, `text-primary`, `border-border`, `bg-muted`, etc.
- Los colores de marca viven como tokens: `bg-brand` (`#1e429f`) y `bg-brand-light`
  (`#8d9fce`); el gradiente de resalte es `from-primary via-brand-light to-brand`.
- El glow del spotlight se pasa como `spotlightColor="var(--spotlight)"`.

## Fuente de verdad

- Variables CSS (HSL/hex) en [`src/app/globals.css`](../../src/app/globals.css) (`:root`).
- Mapeo de tokens en [`tailwind.config.ts`](../../tailwind.config.ts).
- Descripción de la paleta en [`.docs/DESIGN.md`](../../.docs/DESIGN.md) y [`.docs/blueprint.md`](../../.docs/blueprint.md).

## Prohibido

- ❌ Hex de marca sueltos en componentes (`bg-[#1e429f]`, `via-[#8d9fce]`).
- ❌ `hsl(220, 60%, 85%)` u otros literales repetidos: usa `var(--spotlight)`.
- ❌ Introducir el acento amarillo `#FFFF00` (no forma parte del sistema real).
- ❌ Usar `#0000FF` como primario; el azul real es `hsl(216 65% 35%)`.

## Al añadir un color nuevo

1. Defínelo como variable en `globals.css`.
2. Mapéalo en `tailwind.config.ts` como token semántico.
3. Consúmelo por clase/`var()`; documenta el rol en `DESIGN.md`.
