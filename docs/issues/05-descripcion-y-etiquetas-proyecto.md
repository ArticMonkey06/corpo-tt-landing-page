# Agregar descripción y etiquetas del proyecto

## User Story

Como propietario del repositorio, quiero que el proyecto tenga una descripción clara y etiquetas/keywords bien definidas, para que luzca profesional y sea identificable tanto en el repositorio (GitHub) como en el `package.json`.

## Descripción

El proyecto se ve genérico: `package.json` tiene `"name": "nextn"` (nombre por defecto del scaffolding), sin `description`, `keywords`, `author` ni `homepage`. El repositorio de GitHub tampoco tiene descripción ni topics. Esto le resta profesionalismo.

Cambios a realizar:

- **`package.json`:** renombrar a algo significativo (ej. `corpott-landing-page`), agregar `description`, `keywords` (ej. `landing-page`, `nextjs`, `tailwindcss`, `corpott`, `business-support`, `bilingual`), `author` y `homepage` (dominio, una vez asignado).
- **GitHub:** agregar descripción corta del repo y topics.

Nota: la parte de metadatos SEO del `<head>` (title, keywords, Open Graph) se cubre en la issue de **auditoría SEO**; esta issue es sobre la identidad del proyecto/repositorio.

## Criterios de aceptación

- `package.json` tiene `name` significativo, `description`, `keywords`, `author` y (si el dominio ya existe) `homepage`.
- El repositorio de GitHub tiene una descripción corta y al menos 4 topics relevantes.
- La descripción es coherente con el negocio (CorpoTT Services LLC, apoyo empresarial a distancia, bilingüe ES/EN).
- `npm run build` sigue funcionando tras el cambio de `name`.
