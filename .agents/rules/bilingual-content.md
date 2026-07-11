# Rule: Contenido bilingüe ES/EN y calidad de copy

**Aplica a:** todo el copy. Skills relacionadas: `copy-review`, `i18n-sync`.

## Fuente única

Todo el texto vive en [`src/lib/content.tsx`](../../src/lib/content.tsx), con claves
`es` y `en`. El idioma es un toggle de cliente (no hay rutas por idioma). Algunos
diccionarios locales (`Header`, `Footer`) también tienen sus claves `es`/`en`.

## Reglas

- **Edita SIEMPRE ambos idiomas** al añadir/cambiar copy: `es` y `en` deben quedar
  sincronizados. Nunca dejes uno sin su equivalente.
- **Resaltes:** marca el texto a resaltar con `**dobles asteriscos**` dentro del string;
  se renderiza con `<Highlighted>` ([`src/components/ui/highlighted.tsx`](../../src/components/ui/highlighted.tsx)).
  Mantén los mismos resaltes en ES y EN.
- **Calidad (issue #19):** español correcto y profesional; sin anglicismos colados
  (p. ej. "complicaciones", no "complications"; "objetivos", no "objectives"). Inglés
  natural y consistente. Revisa typos, tildes y coherencia de marca ("CorpoTT").
- No dupliques descripciones: no dejes strings muertos ni escaleras `index === N` (issue #18).

## Checklist

- [ ] ES y EN actualizados y equivalentes
- [ ] resaltes `**...**` iguales en ambos idiomas
- [ ] sin anglicismos/typos; tono profesional
