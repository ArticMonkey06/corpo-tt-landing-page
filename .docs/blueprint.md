# **App Name**: CorpoTT Web Showcase

## Core Features:

- Design System Replication: Display the information following the CorpoTT Design System, including colors, typography and layout
- Content Structuring: Structure the content into clearly defined blocks separated by images or background color changes, ensuring a clean and readable layout.
- Image Integration: Incorporate high-quality, realistic photos that illustrate services or concepts, using full-width or large rectangular blocks with subtle treatments.
- Navigation: Implement a navigation menu with links to key sections of the website, styled in line with the CorpoTT Design System.
- Responsiveness: Ensure the website is fully responsive across various screen sizes, maintaining the visual style and readability on desktops, tablets, and mobile devices.
- Information Display: Display information about CorpoTT Services LLC, including their vision, mission, services, and contact information.

## Style Guidelines:

> **Single source of truth:** all colors below are defined as tokens in
> [`src/app/globals.css`](../src/app/globals.css) (CSS variables) and mapped in
> [`tailwind.config.ts`](../tailwind.config.ts). Consume them via semantic
> classes (`bg-primary`, `text-foreground`, `bg-brand`, …) — do **not** hardcode
> hex values in components.

- Primary color: a deep corporate blue, `--primary: hsl(216 65% 35%)` (≈ `#1f4a94`),
  not a pure `#0000FF`. It evokes corporate trust and stability and is used for
  key interactive elements, buttons, links and the focus ring (`--ring`).
- Background color: White, `--background: hsl(0 0% 100%)` (`#FFFFFF`), for a clean
  and professional feel with high contrast for readability. Section backgrounds
  alternate with `--secondary: hsl(210 40% 96.1%)` (a very light blue-gray).
- Foreground / text: `--foreground: hsl(222.2 84% 4.9%)` (near-black navy).
- Brand blues (from the logo squares): `--brand-blue: #1e429f` (dark) and
  `--brand-blue-light: #8d9fce` (light). Exposed as the Tailwind `brand` /
  `brand-light` tokens and used in the logo (`logo.tsx`) and in the gradient
  highlight text (`colourful-text.tsx`: `from-primary via-brand-light to-brand`).
- Accent color: `--accent: hsl(220 30% 60%)`, a muted blue. **There is no yellow
  accent** — the previous `#FFFF00` guideline was never implemented and has been
  removed to match the real, sober blue palette.
- Spotlight glow: `--spotlight: hsl(220, 60%, 85%)`, a very light blue used for
  the hover spotlight on cards (`card-spotlight.tsx` via the `spotlightColor`
  prop). Defined once as a token and consumed with `var(--spotlight)`.
- Font family: 'Inter', a sans-serif typeface known for its clean lines and
  modern appearance, suitable for both headings and body text (`font-headline` /
  `font-body`). Loaded from Google Fonts.
- Icons: simple line-based icons (lucide-react) and inline SVGs. Contact icons in
  the floating dock are rendered in white (`text-white`) over dark circular
  backgrounds — not yellow.
- Layout: content is centered within a `container` with horizontal padding, and
  sections use generous vertical padding (`py-16 md:py-24`) with clearly defined
  blocks separated by background-color changes and images.