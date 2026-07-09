# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page bilingual (ES/EN) marketing landing page for **CorpoTT Services LLC**, a remote business-support company. Built with Next.js 15 (App Router), React 18, TypeScript, Tailwind CSS, and shadcn/ui. The design follows the "CorpoTT Design System" documented in [.docs/blueprint.md](.docs/blueprint.md) (brand colors, Inter typography, blocked content layout).

## Commands

```bash
npm run dev        # dev server with Turbopack on port 9002 (http://localhost:9002)
npm run build      # production build
npm run start      # serve production build
npm run lint       # next lint
npm run typecheck  # tsc --noEmit (run this — build does NOT typecheck; see below)
```

There are no tests in this project.

## Architecture

- **Entire page lives in [src/app/page.tsx](src/app/page.tsx)** — a single `'use client'` component. All sections (hero, quiénes somos, about, services, clients carousel, contact) are inline JSX within `Home()`. There is no routing beyond the root; navigation uses in-page anchor links (`#services`, etc.).

- **Bilingual content is a client-side toggle, not i18n routing.** A `content` object at the top of `page.tsx` holds every string keyed by `es`/`en`. `useState('es')` in `Home()` drives it; `setLanguage` is passed down to `Header`. `Header` and `Footer` keep their own local `navLinksContent`-style dictionaries. When adding/editing copy, update **both** `es` and `en`.
  - Note: some service descriptions in the services section are rendered twice — once as plain `description` strings in the `content` object, and again as an inline `index === N ? ... : ...` ladder in the JSX (to inject `<ColourfulText>` highlights). Editing copy for those services means editing the JSX ladder, not just the `content` object.

- **UI components** ([src/components/ui/](src/components/ui/)) are shadcn/ui primitives plus several Aceternity-style animated components (`card-spotlight`, `colourful-text`, `floating-dock`, `background-boxes`, `lamp`, `following-pointer`). Managed via [components.json](components.json); add new ones with `npx shadcn@latest add <name>`.

- **Path alias:** `@/*` → `src/*`. Import aliases: `@/components`, `@/components/ui`, `@/lib/utils` (the `cn()` helper), `@/hooks`.

- **Styling:** Tailwind with CSS-variable-based theming (HSL vars in [src/app/globals.css](src/app/globals.css), mapped in [tailwind.config.ts](tailwind.config.ts)). Use semantic tokens (`bg-background`, `text-foreground`, `bg-secondary`, `text-primary`) rather than raw colors. Fonts: Inter loaded via `<link>` in [layout.tsx](src/app/layout.tsx); use `font-body` / `font-headline`. `darkMode: 'class'` is configured but there is no dark-mode toggle wired up.

- **Images:** Static assets in [public/images/](public/images/). Use `next/image`. Remote images are only allowed from `placehold.co` and `storage.googleapis.com` (see [next.config.ts](next.config.ts)).

## AI (Genkit) — scaffolded but unused

[src/ai/genkit.ts](src/ai/genkit.ts) configures a Genkit instance with Google AI (`gemini-2.0-flash`), and [src/ai/dev.ts](src/ai/dev.ts) is an empty flow-registration entrypoint. No flows exist yet and nothing in the page uses AI. Run the dev harness with `npm run genkit:dev` / `npm run genkit:watch`. Requires a Google AI API key in the environment (`.env*` is gitignored).

## Gotchas

- **`next.config.ts` sets `typescript.ignoreBuildErrors: true` and `eslint.ignoreDuringBuilds: true`.** A green `npm run build` does not mean the code is type-safe or lint-clean. Always run `npm run typecheck` and `npm run lint` explicitly to catch errors.
- There is a real bug at `page.tsx` service `index === 4` (en): `<ColourfulText risk="currency risks" />` uses `risk=` instead of `text=`. Fix as `text=` if you touch that block.
