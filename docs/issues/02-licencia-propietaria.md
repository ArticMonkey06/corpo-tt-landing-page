# Agregar una licencia propietaria (cerrada) al proyecto

## User Story

Como propietario del proyecto (CorpoTT Services LLC), quiero una licencia **cerrada/propietaria** en el repositorio, para dejar explícito que el código y los activos de esta landing son propiedad de la empresa y no pueden usarse, copiarse ni redistribuirse sin autorización.

## Descripción

El repositorio no tiene archivo `LICENSE`. Por defecto, ausencia de licencia ya implica "todos los derechos reservados", pero para un proyecto corporativo conviene hacerlo **explícito** con un `LICENSE` propietario y una nota en el `README`. No debe usarse una licencia open source (MIT, Apache, etc.) porque el objetivo es restringir el uso.

> **💡 Recomendación de implementación** _(no hay un estándar único para "cerrado"; se sugiere una de estas variantes)_
>
> - **Opción A (recomendada, simple):** crear `LICENSE` con un texto propietario corto: "Copyright © 2026 CorpoTT Services LLC. All rights reserved." + cláusula de "no se concede ningún derecho de uso, copia, modificación o distribución sin permiso escrito".
> - **Opción B (formal):** usar una plantilla tipo [PolyForm Noncommercial / PolyForm Strict](https://polyformproject.org/licenses/) si se quiere un texto legal más robusto.
> - En `package.json` fijar `"license": "UNLICENSED"` y `"private": true` (ya está en `true`) — `UNLICENSED` es el valor de npm para código propietario.
> - Confirmar con la clienta/empresa el nombre legal exacto y el año antes de mergear.

## Criterios de aceptación

- Existe un archivo `LICENSE` en la raíz con texto **propietario** ("All rights reserved") a nombre de **CorpoTT Services LLC** y el año correcto.
- No se introduce ninguna licencia open source.
- `package.json` declara `"license": "UNLICENSED"`.
- El `README` incluye una sección corta de licencia que enlaza a `LICENSE` y aclara que es software propietario.
- El nombre legal y el año fueron confirmados con la empresa.
