# Accesibilidad del toggle de idioma (aria-pressed / aria-label)

## User Story

Como usuario de tecnología asistiva, quiero que los botones de idioma comuniquen cuál está activo y qué hacen, para poder cambiar de idioma con confianza.

## Descripción

En `src/components/header.tsx` (líneas ~50-51) los botones de idioma sólo cambian su `variant` visual, sin exponer estado ni etiqueta accesible:

```tsx
<Button variant={language === 'es' ? 'default' : 'outline'} size="sm" onClick={() => setLanguage('es')}>ES</Button>
<Button variant={language === 'en' ? 'default' : 'outline'} size="sm" onClick={() => setLanguage('en')}>EN</Button>
```

Un lector de pantalla anuncia sólo "ES"/"EN" como botones, sin indicar cuál es el idioma activo. Debe añadirse `aria-pressed` (estado seleccionado) y una etiqueta descriptiva.

## Criterios de aceptación

- Cada botón expone `aria-pressed={true|false}` según el idioma activo.
- Cada botón tiene una etiqueta accesible descriptiva (p. ej. `aria-label="Cambiar idioma a Español"` / `"Switch language to English"`).
- El foco de teclado es visible y ambos botones son operables con teclado.
- Verificado con un lector de pantalla o con el árbol de accesibilidad del navegador.
