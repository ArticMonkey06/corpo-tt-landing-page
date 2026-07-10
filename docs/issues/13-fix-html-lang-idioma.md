# Fix: el atributo `<html lang>` no cambia al alternar el idioma

## User Story

Como usuario de lector de pantalla (y como motor de búsqueda), quiero que el atributo `lang` del documento refleje el idioma realmente mostrado, para que el contenido se interprete y pronuncie correctamente.

## Descripción

El idioma es un toggle de estado en cliente (`useState('es')` en `src/app/page.tsx`, propagado a `Header`/`Footer`), pero `src/app/layout.tsx` declara el idioma de forma **fija**:

```tsx
<html lang="es" className="scroll-smooth">
```

Al cambiar a inglés con el botón **EN**, todo el texto pasa a inglés pero `document.documentElement.lang` sigue siendo `"es"`. Esto perjudica la accesibilidad (pronunciación de lectores de pantalla) y la correcta interpretación del idioma.

> **💡 Recomendación de implementación** _(varias opciones según cómo evolucione el i18n)_
>
> - **Mínima:** en `Home()` (o en el handler de `setLanguage`), actualizar `document.documentElement.lang = language` dentro de un `useEffect` que dependa de `language`.
> - **Estructural:** mover el estado de idioma a un contexto/layout y setear el `lang` allí; o migrar a i18n por rutas (`/es`, `/en`) para resolver además el SEO (relacionado con la issue de SEO #9).

## Criterios de aceptación

- Al alternar entre ES/EN, `document.documentElement.lang` cambia a `"es"` / `"en"` respectivamente.
- No hay error de hidratación por desajuste del atributo `lang`.
- La solución queda documentada (y, si aplica, referenciada) junto con la decisión de idioma/`hreflang` de la issue #9.
