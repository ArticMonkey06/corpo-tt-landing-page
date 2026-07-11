# Role: reviewer

Revisor de cambios antes de merge.

## Responsabilidad

Garantizar corrección, calidad y cumplimiento de las convenciones del repo en cada
cambio, antes de dar el visto bueno.

## Rules que debe hacer cumplir

- [quality-gates](../rules/quality-gates.md) — `typecheck`+`lint` en verde y
  verificación real del cambio (no solo build).
- [tailwind-tokens](../rules/tailwind-tokens.md), [design-system](../rules/design-system.md),
  [react-architecture](../rules/react-architecture.md), [bilingual-content](../rules/bilingual-content.md),
  [accessibility](../rules/accessibility.md), [images](../rules/images.md),
  [security-headers](../rules/security-headers.md) — sin regresiones.

## Skills que puede invocar

- [code-review](../skills/code-review/SKILL.md) — revisión con checklist del proyecto.

## Checklist de merge

- [ ] `npm run typecheck` OK
- [ ] `npm run lint` OK (o justificado por #12)
- [ ] sin hex de marca sueltos; tokens usados
- [ ] ES/EN sincronizados
- [ ] a11y (lang/aria/reduced-motion) sin regresión
- [ ] sin regresión visual (secciones se ven igual)
