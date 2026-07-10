# Eliminar dependencias y código muerto (scaffolding de IA, UI no usada, Toaster)

## User Story

Como mantenedor, quiero eliminar dependencias y componentes que no se usan, para reducir el peso de instalación, la superficie de supply-chain y el ruido en el repositorio.

## Descripción

Auditando qué alcanza realmente el código de la app (`page.tsx`, `header.tsx`, `footer.tsx`), sólo se usan 6 componentes de `components/ui`: `button`, `sheet`, `toaster`, `card-spotlight`, `colourful-text`, `floating-dock`. El resto de primitivos shadcn y varias dependencias pesadas **no están alcanzados por el código de la aplicación**:

- **Dependencias sin uso real (verificado):** `firebase`, `zod`, `date-fns` (0 archivos); `genkit`/`@genkit-ai/*`, `recharts`, `react-day-picker`, `embla-carousel-*`, `react-hook-form` sólo aparecen en scaffolding o en primitivos `ui/` que la app nunca importa.
- **Scaffolding de IA muerto:** `src/ai/genkit.ts` y `src/ai/dev.ts` configuran Genkit + Google AI sin ningún flow ni uso en la página.
- **`<Toaster />` montado sin uso:** `src/app/layout.tsx` monta `<Toaster />` pero ningún `toast()` se dispara en toda la app.
- **Componentes `ui/` no usados:** la mayoría de los ~50 archivos de `components/ui/` no se referencian desde el código de la app.

> **💡 Recomendación de implementación** _(hacerlo de forma incremental y verificable)_
>
> - Empezar por lo seguro: eliminar `src/ai/` y las dependencias que dan **0 usos** (`firebase`, `zod`, `date-fns`) y sus scripts de Genkit en `package.json`.
> - Para los primitivos `ui/`: eliminar sólo los que no se importan desde el código de la app (verificar con un grep de imports antes de borrar cada uno) y las dependencias Radix que queden huérfanas.
> - Quitar `<Toaster />` de `layout.tsx` (y `toaster`/`use-toast`) **salvo** que se planee usar notificaciones pronto; en ese caso, dejar constancia.
> - Hacerlo en commits pequeños y correr `npm run build` + `npm run typecheck` tras cada bloque.

## Criterios de aceptación

- Se eliminan `src/ai/` y los scripts `genkit:*` de `package.json` (o se documenta por qué se conservan).
- Se eliminan de `package.json` las dependencias sin uso real (como mínimo `firebase`, `zod`, `date-fns`) y las que queden huérfanas tras purgar primitivos `ui/`.
- Los componentes de `components/ui/` no usados por la app se eliminan (o se documenta la decisión de conservarlos como librería interna).
- `<Toaster />` se retira si no se usa (o se justifica su permanencia).
- `npm run build` y `npm run typecheck` pasan, y la página se ve y funciona igual que antes.
