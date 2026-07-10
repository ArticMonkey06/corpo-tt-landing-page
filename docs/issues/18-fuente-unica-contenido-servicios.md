# Unificar las descripciones de servicios en una sola fuente de datos

## User Story

Como editor de contenido/desarrollador, quiero una única fuente de verdad para el copy de los servicios (incluidos los resaltes), para editar el texto en un solo lugar sin riesgo de desincronización.

## Descripción

Actualmente cada descripción de servicio existe **dos veces** en `src/app/page.tsx`:

1. Como string plano en el objeto `content` (`content.es.services.list[i].description` y su equivalente `en`).
2. De nuevo como JSX en una escalera `index === 0 ? … : index === 1 ? … : …` (líneas ~400-430) para inyectar los resaltes `<ColourfulText>`.

Consecuencias:
- Los strings `description` de los índices 0–6 son **código muerto**: nunca se renderizan (el `else` de la escalera sólo aplicaría a un índice ≥ 7 que no existe).
- Editar el copy exige tocar dos lugares y mantener ES/EN en sincronía en cada uno → alto riesgo de divergencia.
- La escalera `index === N` es frágil y difícil de mantener.

Relacionado: los **SVGs de los iconos de contacto** también están duplicados inline en los bloques `es` y `en` (`page.tsx:118/124` y `224/230`), siendo idénticos.

> **💡 Recomendación de implementación** _(varias formas; elegir una)_
>
> - Modelar cada descripción como **datos**: un array de fragmentos `{ text, highlight?: boolean }` por idioma, y renderizar con un único componente que envuelva en `<ColourfulText>` los fragmentos marcados. Así desaparece la escalera y el copy vive sólo en `content`.
> - Alternativa más simple: permitir un marcador en el string (p. ej. `**...**`) y un pequeño parser que lo convierta en `<ColourfulText>`.
> - Extraer los SVGs de contacto a un componente/const reutilizable y referenciarlo en ambos idiomas.

## Criterios de aceptación

- El copy de cada servicio (texto + qué se resalta) se define en **un solo lugar** por idioma; se elimina la escalera `index === N` del JSX.
- No quedan strings de descripción muertos/duplicados en el objeto `content`.
- Los resaltes `<ColourfulText>` se siguen viendo igual que antes en ES y EN para los 7 servicios.
- Los SVGs de iconos de contacto dejan de estar duplicados (extraídos a un componente/const).
- `npm run typecheck` pasa y la sección de servicios se ve idéntica visualmente.
