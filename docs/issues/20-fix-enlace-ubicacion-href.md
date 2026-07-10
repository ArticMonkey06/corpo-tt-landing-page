# Fix: enlace "Ubicación" con `href="#"` (dead-link)

## User Story

Como visitante, quiero que la información de contacto no me lleve a un salto inútil al inicio de la página, para no confundirme al interactuar con la sección de contacto.

## Descripción

En la sección de contacto de `src/app/page.tsx`, el ítem "Ubicación" / "Location" define `href="#"` (`page.tsx:119` en ES y `page.tsx:225` en EN):

```tsx
{
  title: "Ubicación",
  description: "Servicios a distancia",
  icon: <svg …/>,
  href: "#",
},
```

Al renderizarse dentro del `FloatingDock` como un `<Link>`, hacer clic salta al top de la página (comportamiento de ancla vacía), lo cual no aporta nada: la ubicación es "servicios a distancia", no hay un destino real.

> **💡 Recomendación de implementación**
>
> - Si no hay destino, renderizar el ítem de ubicación como elemento **no interactivo** (sin `<Link>`), o
> - Darle un destino con sentido (p. ej. un mapa/URL real) si en el futuro hay dirección física.
> - Requiere un pequeño ajuste en `FloatingDock` para soportar ítems sin `href` (o pasar un `href` que no dispare navegación).

## Criterios de aceptación

- El ítem "Ubicación"/"Location" ya no provoca un salto al inicio de la página al hacer clic.
- Si se mantiene sin destino, no se renderiza como enlace (o no captura el clic); si se le da destino, apunta a una URL válida.
- El tooltip/estilo del dock se mantiene consistente con los demás ítems.
