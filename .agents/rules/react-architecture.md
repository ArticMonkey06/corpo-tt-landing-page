# Rule: Arquitectura React / Next.js (Server Components + islas de cliente)

**Aplica a:** todo `src/`. Stack: **Next.js 15 (App Router), React 18, TypeScript**.
Skills relacionadas: `vercel-react-best-practices`, `composition-patterns`.

## Convención

- La página raíz [`src/app/page.tsx`](../../src/app/page.tsx) es un **Server Component**
  que solo compone secciones; **no** debe llevar `'use client'` global.
- La interactividad vive en **islas de cliente** acotadas
  ([`src/components/sections/*`](../../src/components/sections/)): solo llevan
  `'use client'` las secciones que dependen de estado/idioma o de framer-motion.
- El idioma es estado de cliente en un **contexto** (`LanguageProvider`,
  [`src/contexts/language-context.tsx`](../../src/contexts/language-context.tsx)),
  no props encadenadas. Consúmelo con `useLanguage()`.
- Contenido con una **fuente única** en [`src/lib/content.tsx`](../../src/lib/content.tsx).
  Los resaltes se marcan con `**...**` y se renderizan con `<Highlighted>`.
- Alias de imports: `@/*` → `src/*`.

## Reglas

- Prefiere Server Components; añade `'use client'` solo cuando haya hooks, estado o
  eventos. Pasa Server Components como `children` a las islas cuando sea posible.
- **React 18** (no 19): no uses APIs exclusivas de 19.
- Componentes pequeños que "lean como el código de alrededor": mismo estilo, nombres e idioms.

## Don't

- ❌ Devolver a un `page.tsx` monolítico con `'use client'`.
- ❌ Duplicar copy en JSX en vez de leerlo de `content.tsx`.
