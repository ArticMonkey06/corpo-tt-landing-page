# .claude — Configuración de Claude Code (espejo de `.agents/`)

Esta carpeta hace que Claude Code tenga **todo el contenido disponible localmente**,
reutilizando la fuente de verdad de [`../.agents/`](../.agents/) sin duplicarla.

## Cómo se materializa cada cosa

| Contenido | En `.claude/` | Forma | Motivo |
|---|---|---|---|
| **Skills** | `skills/<name>/SKILL.md` | **symlink** → `../../../.agents/skills/<name>/SKILL.md` | El formato `SKILL.md` (frontmatter `name`/`description`) es idéntico al nativo de Claude Code: no hace falta adaptar. |
| **Rules** | `rules/*.md` | **symlink** → `../../.agents/rules/*.md` | Claude Code no tiene un concepto nativo de "rules"; se exponen como contexto compartido, sin duplicar. |
| **Roles (crudo)** | `roles/*.md` | **symlink** → `../../.agents/roles/*.md` | Se conserva el documento de rol tal cual (fuente de verdad), y así resuelven los enlaces relativos de las skills. |
| **Roles (adaptado)** | `agents/*.md` | **copia adaptada (real)** | El equivalente **nativo** de un rol en Claude Code es un **subagente**: requiere frontmatter `name`/`description`/`tools`, que los `.agents/roles/*` no tienen. Por eso estos SÍ son archivos reales adaptados. |

## Contenido

- `agents/` (5, reales/adaptados): `frontend-dev`, `content-editor`, `seo-auditor`,
  `reviewer`, `deployer` — cada uno referencia su rol, rules y skills.
- `skills/` (6, symlinks): `seo-audit`, `code-review`, `copy-review`, `deploy-vercel`,
  `add-form`, `add-carousel`.
- `rules/` (10, symlinks) y `roles/` (5, symlinks): espejo de `../.agents/`.

## Principio

**Una sola fuente de verdad:** edita siempre en [`../.agents/`](../.agents/). Los symlinks
de `.claude/` reflejan el cambio automáticamente; solo los `agents/*.md` (adaptación nativa)
son archivos propios y hay que mantenerlos en línea con su rol.
