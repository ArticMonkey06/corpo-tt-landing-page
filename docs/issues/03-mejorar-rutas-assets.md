# Mejorar las rutas de los assets

## User Story

Como desarrollador, quiero centralizar y sanear las rutas de los assets (imágenes), para evitar strings mágicos repetidos, prevenir errores por nombres de archivo con caracteres no ASCII y facilitar el mantenimiento.

## Descripción

Hoy las rutas de imágenes están hardcodeadas como strings literales repartidos por `src/app/page.tsx` (`/images/outsourcing.webp`, `/images/clients/client-felix.png`, etc.), duplicadas además en los bloques `es` y `en` del objeto `content`.

Problemas detectados:

- **Nombre con acento:** `public/images/tesorería-corpott.webp` contiene una `í`. Los nombres de archivo con caracteres no ASCII pueden causar problemas de portabilidad/encoding entre sistemas y CDNs. Debe renombrarse a `tesoreria-corpott.webp` y actualizar todas las referencias.
- **Rutas duplicadas** entre `es`/`en`: las mismas URLs de imagen se repiten, con riesgo de que una copia quede desincronizada.
- **Sin fuente única:** no existe un módulo que agrupe las rutas.

> **💡 Recomendación de implementación** _(hay varias formas; esta reduce duplicación)_
>
> Crear un módulo `src/lib/assets.ts` que exporte constantes/objeto con todas las rutas (`ASSETS.services.outsourcing`, `ASSETS.clients.felix`, …) y consumirlo desde `page.tsx`. Como las imágenes son iguales en `es` y `en`, referenciar la constante en ambos idiomas en lugar de repetir el string. Renombrar el archivo con `git mv` para preservar historial.

## Criterios de aceptación

- El archivo `public/images/tesorería-corpott.webp` se renombra a `tesoreria-corpott.webp` (sin acentos) y todas sus referencias quedan actualizadas.
- Ningún nombre de archivo en `public/images/` contiene caracteres no ASCII ni espacios.
- Existe una fuente única de rutas de assets (p. ej. `src/lib/assets.ts`) consumida por `page.tsx`.
- Las rutas de imagen ya no están duplicadas entre los bloques `es` y `en`.
- `npm run build` y `npm run typecheck` pasan; todas las imágenes cargan correctamente en el navegador (sin 404).
