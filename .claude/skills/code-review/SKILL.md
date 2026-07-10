---
name: code-review
description: Revisa cambios de CorpoTT contra las convenciones del repo y las puertas de calidad (typecheck+lint, tokens, bilingüe, a11y, CSP). Reutiliza la skill portable de .agents. Úsala antes de commitear/mergear.
---

# code-review (Claude Code)

Esta skill **reutiliza** la definición portable, no la copia.

**Sigue el playbook canónico:** [`../../../.agents/skills/code-review/SKILL.md`](../../../.agents/skills/code-review/SKILL.md)

Y haz cumplir las rules de [`../../../.agents/rules/`](../../../.agents/rules/).
Rol asociado: [`reviewer`](../../agents/reviewer.md). Complementa (no reemplaza) al
comando integrado `/code-review` con el checklist propio del repo.
