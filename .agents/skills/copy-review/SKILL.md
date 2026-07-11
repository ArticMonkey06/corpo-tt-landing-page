---
name: copy-review
description: Revisa el copy bilingüe ES/EN de CorpoTT (content.tsx y diccionarios de Header/Footer) buscando desincronización, anglicismos, typos y resaltes inconsistentes. Úsala al editar o revisar textos.
---

# Skill: copy-review (CorpoTT, ES/EN)

Aplica el rol [content-editor](../../roles/content-editor.md) y la rule
[bilingual-content](../../rules/bilingual-content.md).

## Cuándo usarla

Al añadir/editar copy, o antes de publicar cambios de texto.

## Procedimiento

1. **Sincronía ES/EN**: cada string de `content.es.*` tiene su equivalente en
   `content.en.*` (y viceversa) en [`src/lib/content.tsx`](../../../src/lib/content.tsx).
   Revisa también los diccionarios locales de `Header` y `Footer`.
2. **Resaltes**: los marcadores `**...**` marcan lo mismo (semánticamente) en ambos idiomas.
3. **Calidad ES**: sin anglicismos colados (ej. "complicaciones" no "complications";
   "objetivos" no "objectives"), tildes correctas, sin typos (issue #19).
4. **Calidad EN**: inglés natural y consistente; sin restos en español.
5. **Marca y tono**: "CorpoTT"/"CorpoTT Services LLC" consistente; tono profesional y sobrio.
6. **Sin duplicación**: el copy vive solo en `content.tsx`; no debe reaparecer hardcodeado
   en el JSX (issue #18).

## Entregable

Lista de correcciones por idioma + los cambios aplicados en `content.tsx`. Verifica en
SSR que el texto renderizado es el esperado y que no quedan `**` literales.
