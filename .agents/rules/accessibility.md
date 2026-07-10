# Rule: Accesibilidad (a11y)

**Aplica a:** todo el markup y las animaciones. Skills relacionadas: `web-design-guidelines` (WCAG).

## Reglas vigentes

- **Idioma del documento:** `<html lang>` debe reflejar el idioma mostrado. Ya se
  sincroniza con el toggle vía `useEffect` en `LanguageProvider` (issue #13). Si
  añades idiomas, mantén esa sincronización.
- **Controles:** el toggle de idioma y todo botón/enlace deben tener nombre accesible
  (`aria-label`) y estado cuando aplique (`aria-pressed` en el toggle ES/EN — issue #14).
- **Movimiento:** respeta `prefers-reduced-motion`. El marquee de clientes y las
  animaciones de framer-motion deben pausarse/reducirse cuando el usuario lo pida
  (issue #15). Ver [animation](./animation.md).
- **Imágenes:** todo `next/image` con `alt` descriptivo (o vacío si es decorativa).
  Ver [images](./images.md).
- **Contraste y foco:** cumple WCAG AA; no elimines el outline de foco sin reemplazo visible.
- **Enlaces sin destino:** no uses `href="#"`; si no hay destino, renderiza el
  elemento como no interactivo (issue #20).

## Checklist rápido

- [ ] `lang` correcto y dinámico
- [ ] nombres/estados ARIA en controles
- [ ] `prefers-reduced-motion` respetado
- [ ] `alt` en imágenes; foco visible; contraste AA
