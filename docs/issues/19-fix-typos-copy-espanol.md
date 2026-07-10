# Fix: typos/anglicismos en el copy en español

## User Story

Como visitante hispanohablante, quiero un texto en español correcto y profesional, para confiar en la seriedad de la empresa.

## Descripción

En el copy en español de `src/app/page.tsx` hay palabras en inglés coladas en el texto:

- **"complications administrativas"** → debe ser **"complicaciones administrativas"**. Aparece en el JSX renderizado del servicio "Personal Capacitado" (`page.tsx:426`) y también en el string del objeto `content` (`page.tsx:96`).
- **"objectives principales"** → debe ser **"objetivos principales"** (en el string del objeto `content`, `page.tsx:96`).

Nota: el texto que efectivamente se renderiza para ese servicio es el de la escalera JSX (línea ~426), así que la corrección visible está ahí; conviene corregir también el string del objeto para dejarlo consistente (o eliminarlo si se resuelve la issue #18).

## Criterios de aceptación

- No aparecen las palabras "complications" ni "objectives" en el copy en español.
- El texto renderizado del servicio "Personal Capacitado de Venezuela" dice "complicaciones administrativas" y "objetivos principales".
- Se revisa el resto del copy ES/EN en busca de otros anglicismos/typos evidentes.
