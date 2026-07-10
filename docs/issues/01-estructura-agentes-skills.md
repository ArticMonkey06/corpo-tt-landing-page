# Estructura de agentes y skills compatible con OpenCode y Claude

## User Story

Como desarrollador del proyecto, quiero una carpeta de agentes con skills, rules y roles que funcione tanto para **OpenCode** como para **Claude Code**, para estandarizar el contexto y las tareas asistidas por IA sin duplicar configuración entre herramientas.

## Descripción

Actualmente solo existe un `CLAUDE.md` en la raíz. Se quiere formalizar el tooling de IA en dos carpetas:

- `.claude/` → configuración específica de Claude Code (agents, skills, commands, settings).
- `.agents/` → definición neutral/portátil de agentes reutilizable por OpenCode y otras herramientas.

Ambas deben compartir la misma fuente de verdad de **Rules** (convenciones del proyecto: Tailwind con tokens semánticos, bilingüe ES/EN editando ambos idiomas, `npm run typecheck`/`lint` obligatorios, imágenes remotas solo desde `placehold.co` y `storage.googleapis.com`, etc.) y **Roles** (p. ej. `frontend-dev`, `content-editor` bilingüe, `seo-auditor`, `reviewer`).

Objetivo: que un agente definido una sola vez pueda invocarse desde cualquiera de las dos herramientas, evitando divergencia de instrucciones.

> **💡 Recomendación de implementación** _(existen muchas variantes; esta es la sugerida)_
>
> No dupliques el contenido: mantén las **Rules** y **Roles** como archivos markdown canónicos en `.agents/rules/*.md` y `.agents/roles/*.md`, y desde `.claude/` **referéncialos** (los `agents`/`skills` de Claude Code pueden incluir rutas relativas y `@import`). Estructura sugerida:
>
> ```
> .agents/
>   rules/          # convenciones del repo (fuente de verdad única)
>   roles/          # frontend-dev, content-editor, seo-auditor, reviewer
>   skills/         # skills portables (build, i18n-sync, seo-audit)
>   README.md       # cómo consumir esta carpeta desde cada herramienta
> .claude/
>   agents/*.md     # frontmatter (name/description/tools) + body que importa ../.agents/roles/*
>   skills/*/SKILL.md
>   settings.json   # permisos, hooks
> ```
>
> - Para OpenCode: expón los mismos roles vía su formato de config apuntando a `.agents/`.
> - Mantén `CLAUDE.md` como índice corto que apunte a `.claude/` y `.agents/` para no duplicar reglas.
> - Verifica que Claude Code detecta los agents con `/agents` y que OpenCode carga la carpeta antes de cerrar la issue.

## Criterios de aceptación

- Existe la carpeta `.agents/` con subcarpetas `rules/`, `roles/` y `skills/`, cada una con al menos un archivo real (no placeholder vacío).
- Existe la carpeta `.claude/` con al menos un `agent` y un `skill` que **reutilizan** (referencian, no copian) las rules/roles de `.agents/`.
- Las **Rules** documentan las convenciones ya vigentes del proyecto (Tailwind tokens semánticos, edición bilingüe ES/EN, `typecheck`+`lint` obligatorios, orígenes de imágenes permitidos).
- Se definen al menos 3 **Roles** con responsabilidad clara (ej.: `frontend-dev`, `content-editor`, `seo-auditor`).
- Un `README.md` en `.agents/` explica cómo consumir la estructura desde OpenCode y desde Claude Code.
- `CLAUDE.md` se actualiza para apuntar a la nueva estructura sin duplicar el detalle de las reglas.
- Ninguna herramienta reporta error al cargar la configuración (verificado manualmente en ambas).
