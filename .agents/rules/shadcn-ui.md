# Rule: shadcn/ui

**Aplica a:** componentes de UI. Skills relacionadas: `shadcn`.

## Contexto

Las primitivas viven en [`src/components/ui/`](../../src/components/ui/) y se gestionan
con [`components.json`](../../components.json). Conviven con componentes animados estilo
Aceternity (`card-spotlight`, `floating-dock`, etc.).

## Reglas

- Añade componentes con `npx shadcn@latest add <name>` (no los escribas a mano si existen).
- Modelo **copy-paste**: los componentes son código del repo; puedes ajustarlos, pero
  respeta los tokens semánticos (ver [tailwind-tokens](./tailwind-tokens.md)) y `cn()`
  de [`@/lib/utils`](../../src/lib/utils.ts).
- Reutiliza primitivas existentes antes de crear nuevas. Muchas ya están instaladas
  (dialog, tooltip, select, tabs, toast…) aunque no todas se usen aún.
- Alias: `@/components`, `@/components/ui`, `@/lib/utils`, `@/hooks`.

## Don't

- ❌ Reimplementar a mano un primitivo que shadcn ya provee.
- ❌ Hardcodear colores en vez de tokens.
