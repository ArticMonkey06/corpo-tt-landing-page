# Comprar el dominio web y asignarlo

## User Story

Como propietario de CorpoTT Services LLC, quiero comprar un dominio propio y asignarlo al despliegue de la landing, para tener una URL profesional y de marca en lugar de una URL genérica del proveedor de hosting.

## Descripción

La landing aún no tiene dominio propio asignado. Hay que: (1) elegir y verificar disponibilidad de un dominio (ej. `corpott.com`, `corpottservices.com`), (2) comprarlo y (3) asignarlo al proyecto de hosting (el proyecto está preparado para Vercel/Next.js), configurando DNS y HTTPS.

> **💡 Recomendación de implementación** _(hay varias variantes de registrador y hosting; esta es la ruta más simple para este stack)_
>
> - **Verificar disponibilidad/precio** antes de comprar. Con el toolkit de Vercel se puede consultar disponibilidad y precio del dominio directamente.
> - **Opción recomendada (integrada):** comprar el dominio a través de **Vercel** y asignarlo al proyecto — Vercel gestiona DNS y certificados SSL automáticamente, sin configuración manual de registros.
> - **Opción alternativa (registrador externo):** comprar en Namecheap/Cloudflare/GoDaddy y luego apuntar a Vercel con un registro `A`/`CNAME` (o cambiando nameservers). Requiere configurar DNS manualmente.
> - Tras asignar: verificar `www` → apex (o viceversa) con redirección, forzar HTTPS, y actualizar `homepage` en `package.json` y `metadataBase` en la app.
> - Confirmar con la empresa el dominio exacto y quién debe figurar como titular/registrante antes de comprar.

## Criterios de aceptación

- Se verificó la disponibilidad y el precio del dominio elegido antes de la compra.
- El dominio está comprado a nombre de la empresa (titular confirmado).
- El dominio está asignado al proyecto de hosting y la landing carga correctamente en él.
- HTTPS activo (certificado válido) y redirección consistente entre apex y `www`.
- `homepage` (package.json) y `metadataBase` de la app apuntan al nuevo dominio.
