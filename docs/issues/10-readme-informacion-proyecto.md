# Reescribir el README con información del proyecto

## User Story

Como persona que llega al repositorio, quiero un README que describa el proyecto, sus features y cómo ejecutarlo, siguiendo el formato de `ejemplo_readme.md`, para entender rápido de qué se trata y poder levantarlo localmente.

## Descripción

El `README.md` actual es el genérico de `create-next-app` (habla de Geist, puerto 3000, etc.) y no refleja este proyecto. Hay que reemplazarlo por uno propio siguiendo la estructura de `ejemplo_readme.md`:

- **Encabezado + descripción:** qué es (landing bilingüe ES/EN para **CorpoTT Services LLC**, empresa de apoyo empresarial a distancia), stack (Next.js 15 App Router, React 18, TypeScript, Tailwind, shadcn/ui + componentes tipo Aceternity).
- **Features del proyecto** (secciones: Hero, Quiénes somos, Misión/Visión, Servicios, Clientes, Contacto; toggle de idioma ES/EN; diseño según CorpoTT Design System).
- **Cómo ejecutar el proyecto:** requisitos (Node.js), instalación (`npm install`), dev server (`npm run dev` → puerto **9002**, no 3000), y comandos útiles (`build`, `start`, `lint`, `typecheck`).
- Corregir datos erróneos del README actual (puerto 3000, mención a Geist — el proyecto usa **Inter**).
- Referenciar el blueprint del diseño (`.docs/blueprint.md`), la licencia (issue de licencia) y el dominio una vez asignado.

Notas: seguir el estilo del ejemplo (emojis en secciones, bloques de código para comandos), pero con contenido real de este proyecto. Actualizar tanto en ES como cualquier referencia coherente con el resto del repo.

## Criterios de aceptación

- El `README.md` sigue la estructura de `ejemplo_readme.md` (encabezado/descripción, features, cómo ejecutar).
- Describe correctamente el proyecto: propósito, empresa (CorpoTT Services LLC), naturaleza bilingüe ES/EN y stack real.
- Los comandos son correctos: `npm run dev` en **puerto 9002**, más `build`/`start`/`lint`/`typecheck`.
- No queda contenido del template genérico (sin puerto 3000, sin Geist, sin enlaces boilerplate irrelevantes).
- Menciona la licencia (propietaria) y el dominio (si ya está asignado).
- El README renderiza correctamente en GitHub (formato/enlaces válidos).
