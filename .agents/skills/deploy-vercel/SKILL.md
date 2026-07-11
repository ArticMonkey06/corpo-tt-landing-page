---
name: deploy-vercel
description: Despliega la landing de CorpoTT a Vercel (preview/prod) preservando CSP, optimización de imágenes y SSG. Úsala para desplegar o configurar dominio/entorno (issue #8).
---

# Skill: deploy-vercel (CorpoTT)

Aplica el rol [deployer](../../roles/deployer.md).

## Cuándo usarla

Para publicar un preview o producción, configurar variables de entorno o asignar el
dominio (issue #8).

## Procedimiento

1. **Pre-check**: `npm run typecheck` y `npm run build` en verde
   ([quality-gates](../../rules/quality-gates.md)).
2. **Deploy**: `vercel` (preview) / `vercel --prod` (producción), o vía integración de Git.
3. **Cabeceras**: confirma que la CSP y los security headers de `next.config.ts` llegan
   en la respuesta de Vercel (`curl -I`) — ver [security-headers](../../rules/security-headers.md).
4. **Imágenes**: verifica que `next/image` optimiza y que los orígenes remotos permitidos
   (`placehold.co`, `storage.googleapis.com`) cargan sin bloqueo de CSP.
5. **Entorno**: `.env*` está gitignored. Si se activa Genkit/Google AI, define la API key
   como variable de entorno en Vercel (no en el repo).
6. **Dominio** (issue #8): asigna el dominio y valida HTTPS/redirects.

## Notas de plataforma

Next 15 corre nativo en Vercel (Fluid Compute). No es necesario `output: 'export'`; el
`headers()` de `next.config.ts` se aplica en el servidor de Vercel. Prefiere config
nativa de plataforma antes que infraestructura propia.
