---
version: alpha
name: CorpoTT Design System
description: Sistema de diseño de la landing page de CorpoTT Services LLC — una paleta azul corporativa sobria, tipografía Inter y contenido estructurado en bloques.
colors:
  background: "#FFFFFF"
  foreground: "hsl(222.2 84% 4.9%)"
  primary: "hsl(216 65% 35%)"
  primary-foreground: "hsl(0 0% 98%)"
  secondary: "hsl(210 40% 96.1%)"
  secondary-foreground: "hsl(210 40% 9.8%)"
  muted: "hsl(210 40% 96.1%)"
  muted-foreground: "hsl(215.4 16.3% 46.9%)"
  accent: "hsl(220 30% 60%)"
  brand: "#1e429f"
  brand-light: "#8d9fce"
  spotlight: "hsl(220 60% 85%)"
  destructive: "hsl(0 84.2% 60.2%)"
  border: "hsl(214.3 31.8% 91.4%)"
typography:
  hero:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: -0.03em
  headline:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.02em
  title:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.2
  subtitle-caps:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: 600
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.2
rounded:
  sm: 4px
  md: 6px
  lg: 8px
  xl: 12px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  section-y: 64px
  section-y-lg: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.md}"
    typography: "{typography.label}"
    padding: 12px
  card:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.xl}"
    spotlightColor: "{colors.spotlight}"
  gradient-text:
    fromColor: "{colors.primary}"
    viaColor: "{colors.brand-light}"
    toColor: "{colors.brand}"
  dock-item:
    backgroundColor: "hsl(0 0% 45% / 0.5)"
    iconColor: "#FFFFFF"
    rounded: "{rounded.full}"
  header:
    backgroundColor: "hsl(0 0% 100% / 0.6)"
    borderColor: "{colors.border}"
---

# CorpoTT Design System

> Documento canónico de diseño en formato [`design.md`](https://github.com/google-labs-code/design.md).
> Describe el sistema **realmente implementado** en el código. Los tokens viven en
> [`src/app/globals.css`](../src/app/globals.css) (variables CSS) y en
> [`tailwind.config.ts`](../tailwind.config.ts). Ver también el brief narrativo en
> [`blueprint.md`](./blueprint.md).

## Overview

CorpoTT Services LLC es una empresa de apoyo empresarial a distancia cuya identidad
gira en torno a la **calidad y la excelencia**. El sistema visual traduce esos
valores en una estética **corporativa, sobria y confiable**: fondos blancos amplios,
un azul corporativo profundo como color de acción, y toques de un degradado azul de
marca para resaltar frases clave.

La personalidad es **profesional pero cercana**: nada estridente, alto contraste
para máxima legibilidad, y un layout en bloques bien separados que guía la lectura de
arriba hacia abajo. El público objetivo son empresas y responsables de operaciones que
buscan un proveedor serio; la respuesta emocional buscada es **confianza y solidez**.
La interactividad (spotlight en tarjetas, dock flotante, texto con degradado) aporta
un matiz moderno y tecnológico sin comprometer la sobriedad.

## Colors

La paleta es monocromática-azul sobre blanco. **No hay acento amarillo** (una versión
previa del brief lo mencionaba, pero nunca se implementó y se descartó).

- **primary** `hsl(216 65% 35%)` — azul corporativo profundo. Color de acción:
  botones, enlaces, anillo de foco (`--ring`). Es el ancla de confianza de la marca.
- **background** `#FFFFFF` — blanco puro para una sensación limpia y profesional.
- **foreground** `hsl(222.2 84% 4.9%)` — negro azulado casi puro para el texto,
  garantizando alto contraste sobre blanco.
- **secondary / muted** `hsl(210 40% 96.1%)` — gris azulado muy claro. Se usa para
  alternar el fondo de las secciones y crear ritmo vertical entre bloques.
- **accent** `hsl(220 30% 60%)` — azul apagado, para estados y detalles sutiles.
- **brand** `#1e429f` y **brand-light** `#8d9fce` — los dos azules del logotipo
  (cuadros). Son la base del degradado de las frases destacadas y del propio logo.
- **spotlight** `hsl(220 60% 85%)` — azul muy claro; luz del efecto spotlight al
  pasar el cursor sobre las tarjetas.
- **destructive** `hsl(0 84.2% 60.2%)` — rojo reservado para errores/acciones
  peligrosas. **border** `hsl(214.3 31.8% 91.4%)` para separadores y contornos.

## Typography

Una única familia, **Inter** (Google Fonts), cubre titulares y cuerpo, aportando
coherencia y una lectura moderna y neutral. La jerarquía se construye con **tamaño y
peso**, no con familias distintas. Pesos disponibles: 400 (regular), 600 (semibold),
700 (bold).

- **hero** — 72px / 700, tracking muy ceñido: el nombre de marca en el Hero (escala
  responsiva de 36px en móvil hasta 72px en escritorio).
- **headline** — 36px / 700: títulos de sección (`¿Quiénes Somos?`, `Servicios`…).
- **title** — 24px / 600: títulos de tarjetas (Visión, Misión, cada servicio).
- **subtitle-caps** — 20px / 600, mayúsculas y `letter-spacing` amplio: el lema del
  Hero renderizado con degradado de marca.
- **body-lg / body** — 18px / 16px, 400: párrafos descriptivos, con `line-height`
  holgado (1.6) para lectura cómoda.
- **body-sm** — 14px / 400: descripciones dentro de tarjetas de servicio.
- **label** — 14px / 600: texto de botones y navegación.

## Layout

Modelo de **página única en bloques apilados a todo el ancho**. Cada sección ocupa el
100% del ancho de viewport y contiene su contenido dentro de un `container` centrado
con padding horizontal (`px-4`, ~16px). La navegación es por anclas internas
(`#services`, `#contact`…).

El **espaciado vertical** es el principal recurso de ritmo: cada sección usa
`py-16` (64px) en móvil y `py-24` (96px) en escritorio, y los bloques alternan fondo
blanco / gris azulado (`secondary`) para separarse visualmente. Dentro de las
secciones se usan grids responsivas (1 → 2 → 3 columnas) para tarjetas, con `gap`
de 32px. El contenido de encabezados se centra; los párrafos largos se limitan en
ancho (`max-w-[700px]`/`[800px]`) para no perder legibilidad.

## Elevation & Depth

La profundidad es **sutil y plana**, coherente con la sobriedad corporativa:

- **Sombras suaves** (`shadow-lg`, `shadow-2xl`) en imágenes y tarjetas para
  despegarlas ligeramente del fondo.
- **Capas tonales**: la alternancia de fondos (`background` ↔ `secondary`) crea
  separación entre secciones sin necesidad de bordes fuertes.
- **Spotlight interactivo**: al pasar el cursor, las tarjetas revelan un resplandor
  radial (`spotlight`) que sigue al puntero — una señal de profundidad *dinámica*
  más que una sombra estática.
- **Header translúcido** fijo (`backdrop-blur` + fondo al 60%) que flota sobre el
  contenido al hacer scroll.

## Shapes

Lenguaje de formas **suavemente redondeado**. El radio base es `--radius: 0.5rem`
(8px), del que derivan `lg` (8px), `md` (6px) y `sm` (4px). Las tarjetas e imágenes
usan un radio mayor `xl` (12px) para un aspecto amable y contenedor. Los elementos
del dock de contacto y los avatares son **completamente circulares** (`full`,
9999px). El logotipo emplea cuadros con esquinas `sm` (4px), un guiño geométrico a la
marca.

## Components

- **button-primary** — fondo `primary`, texto `primary-foreground`, radio `md`,
  tipografía `label`, padding ~12px. Es la llamada a la acción principal (p. ej.
  "Nuestros Servicios" en el Hero). Estado hover: oscurecimiento leve del fondo;
  usa `asChild` para envolver enlaces.
- **card** (CardSpotlight) — fondo `secondary`/`card`, texto `foreground`, radio
  `xl`, contenido en columna centrada. Al hacer hover muestra el resplandor
  `spotlightColor` = `{colors.spotlight}` siguiendo al cursor. Sin borde marcado.
- **gradient-text** (ColourfulText) — texto con degradado horizontal
  `from primary → via brand-light → to brand`, recortado al texto
  (`bg-clip-text`). Resalta frases clave dentro de párrafos y títulos.
- **dock-item** (FloatingDock) — círculos (`full`) con fondo gris translúcido e
  icono blanco; en escritorio se **magnifican** al acercar el cursor, en móvil
  muestran tooltip. Se usan para los canales de contacto.
- **header** — barra fija translúcida (`backdrop-blur`, fondo al 60%) con borde
  inferior `border`; contiene logo, navegación por anclas y el toggle de idioma
  ES/EN (botones `default`/`outline` según el idioma activo).

## Do's and Don'ts

**Do**
- Consumir siempre los **tokens** (`bg-primary`, `text-foreground`, `bg-brand`,
  `via-brand-light`, `var(--spotlight)`…). Son la fuente única de verdad.
- Mantener **alto contraste**: texto oscuro sobre fondo claro; blanco sobre azul.
- Usar Inter con jerarquía por **tamaño/peso**, no introducir otras familias.
- Alternar fondos `background`/`secondary` para separar secciones y respetar el
  espaciado vertical generoso.
- Reservar el degradado de marca para **acentos puntuales** (frases clave, lema).

**Don't**
- No **hardcodear** hex de marca (`#1e429f`, `#8d9fce`) ni el color del spotlight en
  los componentes: usar los tokens.
- No reintroducir el **acento amarillo `#FFFF00`**: no forma parte del sistema real.
- No usar `#0000FF` puro como primario; el azul de marca es `hsl(216 65% 35%)`.
- No abusar del degradado ni del spotlight hasta volverlos ruido — pierden su función
  de énfasis.
- No comprometer la legibilidad con párrafos a todo el ancho: respetar los
  `max-width` de lectura.
