# Rule: Cabeceras de seguridad / CSP

**Aplica a:** [`next.config.ts`](../../next.config.ts). Skills relacionadas: `security-headers`.

## Estado vigente (issue #23)

`next.config.ts` define, vía `async headers()` sobre `source: '/(.*)'`:

- `Content-Security-Policy` (enforced, pragmática): `default-src 'self'`;
  `script-src 'self' 'unsafe-inline'` (+ `'unsafe-eval'` **solo en desarrollo** para HMR);
  `style-src` con `https://fonts.googleapis.com`; `font-src https://fonts.gstatic.com`;
  `img-src 'self' data: blob: https://placehold.co https://storage.googleapis.com`;
  `frame-ancestors 'none'`; `base-uri`/`form-action 'self'`; `object-src 'none'`.
- `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`,
  `X-Frame-Options: DENY`, `Permissions-Policy`.

## Reglas al cambiar recursos

- ¿Nuevo host de **imágenes**? Añádelo a `img-src` **y** a `images.remotePatterns`
  (ver [images](./images.md)).
- ¿Nuevo **script/estilo/fuente/fetch** externo? Añade el origen a la directiva
  correspondiente (`script-src`/`style-src`/`font-src`/`connect-src`). Evita ampliar
  `'unsafe-*'` en producción.
- Conserva el renderizado estático (no introduzcas nonce/middleware dinámico sin motivo).
