# CORPO TT SERVICES

Landing page corporativa y **bilingüe (Español / Inglés)** para **CorpoTT Services LLC**, una empresa de **apoyo empresarial a distancia** cuya filosofía es la calidad y la excelencia para la satisfacción del cliente.

El sitio presenta la visión, misión, servicios y datos de contacto de la empresa, siguiendo el **CorpoTT Design System** (colores de marca, tipografía Inter y contenido estructurado en bloques). Diseño documentado en [`.docs/blueprint.md`](.docs/blueprint.md).

> ℹ️ Software **propietario** — © CorpoTT Services LLC. Todos los derechos reservados. Ver [`LICENSE`](LICENSE).

---

## 🧰 Stack

Este proyecto está construido con **Next.js 15 (App Router)**.

- **Framework:** [Next.js 15](https://nextjs.org) + React 18 + TypeScript
- **Estilos:** [Tailwind CSS](https://tailwindcss.com) con theming por variables CSS (HSL)
- **UI:** [shadcn/ui](https://ui.shadcn.com) + componentes animados estilo Aceternity (`card-spotlight`, `colourful-text`, `floating-dock`, `background-boxes`, `lamp`, `following-pointer`)
- **Animación:** [Framer Motion](https://www.framer.com/motion/)
- **Tipografía:** [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)

Si nunca antes has utilizado **Next.js**, aquí tienes algunos recursos para empezar:

- [Documentación de Next.js](https://nextjs.org/docs) — funciones y API del framework.
- [Learn Next.js](https://nextjs.org/learn) — tutorial interactivo.
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Componentes de shadcn/ui](https://ui.shadcn.com/docs/components)

---

# 💾 Features del proyecto

## 🌐 1. Contenido bilingüe (ES / EN)

1. Toda la copia del sitio está disponible en Español e Inglés.
2. El idioma se cambia con un toggle en el encabezado (no hay rutas por idioma; es un estado del cliente).

## 🖥️ 2. Secciones de la landing

1. **Hero** — nombre de marca, lema ("apoyo empresarial a distancia · calidad y excelencia") y llamada a la acción.
2. **¿Quiénes Somos?** — presentación de la empresa y su filosofía.
3. **Visión y Misión** — objetivos y propósito de la organización.
4. **Servicios** — detalle de los servicios ofrecidos (ver abajo).
5. **Clientes** — carrusel con logos de clientes (Felix, CB Pay, OCK, AB Trading America).
6. **Contacto** — canal de contacto de la empresa.

## 🧩 3. Servicios ofrecidos

1. Outsourcing a Distancia
2. Gestión de Compras Remotas
3. Gestión de Reservas de Vuelos y Estadías
4. Soluciones Financieras de Tesorería
5. Estructura de Pagos y Cobros en Multimoneda
6. Etiquetado de Datos para IA
7. Personal Capacitado de Venezuela

## 📱 4. Diseño y experiencia

1. Totalmente **responsive** (escritorio, tablet y móvil).
2. Navegación por anclas a las secciones clave (single-page).
3. Interfaz basada en el **CorpoTT Design System** con tokens semánticos de color y tipografía Inter.

---

# 🧪 Cómo ejecutar el proyecto

Instala [**Node.js**](https://nodejs.org/) (versión 18 o superior recomendada).

**1. Clona el repositorio e instala las dependencias:**

```bash
git clone https://github.com/ArticMonkey06/corpo-tt-landing-page.git
cd corpo-tt-landing-page
npm install
```

**2. Levanta el servidor de desarrollo:**

```bash
npm run dev
```

El proyecto correrá con **Turbopack** en el puerto **9002**. Abre [http://localhost:9002](http://localhost:9002) en tu navegador para ver el resultado.

Puedes empezar a editar la página modificando [`src/app/page.tsx`](src/app/page.tsx); la página se recarga automáticamente al guardar.

## ⚙️ Comandos disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con Turbopack en el puerto **9002**. |
| `npm run build` | Build de producción. |
| `npm run start` | Sirve el build de producción. |
| `npm run lint` | Ejecuta `next lint`. |
| `npm run typecheck` | Verificación de tipos con `tsc --noEmit`. |

> ⚠️ **Nota:** el `build` **no** falla ante errores de tipos o lint (`ignoreBuildErrors` / `ignoreDuringBuilds` están activados). Corre siempre `npm run typecheck` y `npm run lint` por separado antes de subir cambios.

---

## 📄 Licencia

Software propietario. Copyright © CorpoTT Services LLC. Todos los derechos reservados. Consulta el archivo [`LICENSE`](LICENSE) para más detalles.
