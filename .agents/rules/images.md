# Rule: Imágenes (next/image)

**Aplica a:** toda imagen del proyecto. Skills relacionadas: `next-image-guard`.

## Reglas

- Usa siempre **`next/image`** (`Image`), no `<img>`.
- Assets locales en [`public/images/`](../../public/images/).
- **Orígenes remotos permitidos:** SOLO `placehold.co` y `storage.googleapis.com`
  (allowlist en [`next.config.ts`](../../next.config.ts) → `images.remotePatterns`).
  Para usar otro host, primero agrégalo ahí y a la CSP `img-src`
  (ver [security-headers](./security-headers.md)).
- Con `fill`, añade **`sizes`** acorde al layout para no servir imágenes sobredimensionadas
  (issue #16). Ej.: tarjetas en grid de 3 columnas → `sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"`.
- `alt` descriptivo y bilingüe cuando el texto lo amerite (o `alt=""` si es decorativa).
- Considera skeleton/placeholder para la carga (issue #4).

## Don't

- ❌ Hosts remotos fuera de la allowlist.
- ❌ `fill` sin `sizes`.
