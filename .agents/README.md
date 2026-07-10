# .agents — Configuración portátil de IA (fuente de verdad única)

Esta carpeta define, de forma **neutral y reutilizable**, las convenciones y roles del
proyecto CorpoTT para asistentes de IA. Es la **fuente de verdad**: tanto **Claude Code**
como **OpenCode** (u otras herramientas) consumen de aquí en lugar de duplicar reglas.

## Estructura

```
.agents/
  rules/    # convenciones del repo (fuente de verdad única)
  roles/    # perfiles con responsabilidad clara (referencian rules/skills)
  skills/   # playbooks portables por tarea (SKILL.md con frontmatter)
  README.md # este archivo
```

- **rules/** — cómo se hacen las cosas aquí (tokens Tailwind, bilingüe ES/EN, arquitectura
  de islas, a11y, imágenes, CSP, animación, shadcn, puertas de calidad).
- **roles/** — `frontend-dev`, `content-editor`, `seo-auditor`, `reviewer`, `deployer`.
  Cada rol enlaza las rules y skills que le aplican.
- **skills/** — `seo-audit`, `code-review`, `copy-review`, `deploy-vercel`, y dos
  activables a futuro (`add-form`, `add-carousel`). Cada una es un `SKILL.md` con
  frontmatter `name`/`description`.

## Cómo consumirla

### Claude Code

- El índice raíz [`CLAUDE.md`](../CLAUDE.md) apunta a esta carpeta; no duplica las reglas.
- Los agentes de Claude Code viven en [`.claude/agents/*.md`](../.claude/agents/) y
  **referencian** (no copian) estos roles/rules mediante rutas relativas
  (`../../.agents/roles/*.md`).
- Las skills de Claude Code en [`.claude/skills/*/SKILL.md`](../.claude/skills/) apuntan a
  la skill portable equivalente de `.agents/skills/`.
- Verificación: en una sesión interactiva, `/agents` debe listar los agentes sin error.

### OpenCode (u otras herramientas)

- OpenCode lee un archivo de instrucciones raíz: [`AGENTS.md`](../AGENTS.md), que apunta a
  esta carpeta.
- Para exponer roles como agentes de OpenCode, referencia estos archivos desde su config
  (`opencode.json` / `.opencode/`) con las mismas rutas relativas a `.agents/`.
- Al ser Markdown plano con enlaces relativos, cualquier herramienta puede cargar los
  `rules/`, `roles/` y `skills/` directamente.

## Principio

**No dupliques contenido.** Si una convención cambia, edítala **solo** en `.agents/rules/`;
todas las herramientas la heredan por referencia.
