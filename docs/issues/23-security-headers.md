# Agregar security headers en `next.config.ts`

## User Story

Como responsable del sitio, quiero que la aplicación envíe cabeceras de seguridad HTTP, para reforzar la protección del navegador y transmitir buenas prácticas, aun siendo una landing estática.

## Descripción

`next.config.ts` no define ninguna cabecera de seguridad. Aunque la superficie de ataque es mínima (sin backend ni entrada de usuario), añadir headers estándar es de bajo costo y mejora la postura de seguridad y las puntuaciones de "Best Practices" de Lighthouse/observatorios.

Cabeceras recomendadas: `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `X-Frame-Options` (o `frame-ancestors` vía CSP), `Permissions-Policy` y una `Content-Security-Policy` acorde (contemplando Google Fonts, imágenes de `placehold.co`/`storage.googleapis.com` y los estilos/inline necesarios de Next).

> **💡 Recomendación de implementación**
>
> - Usar la función `async headers()` de `next.config.ts` para aplicar las cabeceras a todas las rutas (`source: '/(.*)'`).
> - Construir la CSP con cuidado: probarla primero en modo `Content-Security-Policy-Report-Only` para no romper Google Fonts ni `next/image` antes de forzarla.

## Criterios de aceptación

- `next.config.ts` define, vía `headers()`, al menos: `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`/`frame-ancestors` y `Permissions-Policy`.
- Se evalúa y (si es viable sin romper fuentes/imágenes) se agrega una `Content-Security-Policy`.
- La página sigue cargando correctamente fuentes, imágenes locales/remotas y estilos (sin errores de CSP en consola).
- Se verifica la presencia de las cabeceras en las respuestas (DevTools → Network → Headers).
