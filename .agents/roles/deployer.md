# Role: deployer

Responsable del despliegue y la configuración de plataforma (Vercel).

## Responsabilidad

Desplegar la landing de forma segura y reproducible, preservando cabeceras de seguridad,
optimización de imágenes y renderizado estático.

## Rules que debe seguir

- [security-headers](../rules/security-headers.md) — CSP y headers en `next.config.ts`.
- [images](../rules/images.md) — orígenes remotos permitidos.
- [react-architecture](../rules/react-architecture.md) — conservar SSG.
- [quality-gates](../rules/quality-gates.md) — build/typecheck antes de desplegar.

## Skills que puede invocar

- [deploy-vercel](../skills/deploy-vercel/SKILL.md).

## Foco

- Deploy a Vercel (preview/prod), variables de entorno (`.env*` gitignored;
  Google AI key si se activa Genkit), y asignación de dominio (issue #8).
