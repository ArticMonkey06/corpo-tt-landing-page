/**
 * Configuración canónica del sitio para SEO (issue #9).
 *
 * Fuente única de la URL de producción, datos del negocio y keywords, para no
 * repetir strings entre `layout.tsx`, `sitemap.ts`, `robots.ts` y el JSON-LD.
 *
 * IMPORTANTE (issue #8 — dominio aún sin asignar): la URL base se toma de la
 * variable de entorno `NEXT_PUBLIC_SITE_URL`. Mientras no exista dominio real se
 * usa el fallback de abajo; al asignar el dominio, define `NEXT_PUBLIC_SITE_URL`
 * en Vercel (o actualiza el fallback) y el resto del SEO (canonical, OG, sitemap)
 * se ajusta solo.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.corpottservices.com"
).replace(/\/$/, "");

export const SITE = {
  url: SITE_URL,
  name: "CorpoTT Services",
  legalName: "CorpoTT Services LLC",
  email: "corpottservices@gmail.com",
  /**
   * Idioma por defecto del documento. El bilingüe (ES/EN) es un toggle de
   * cliente sobre una única URL, por lo que NO hay rutas ni URLs alternas que
   * declarar con hreflang (ver `.docs/SEO.md`). El español es el idioma servido
   * por defecto y el declarado en `<html lang>`.
   */
  defaultLocale: "es_ES",
  alternateLocale: "en_US",
  title: {
    es: "CorpoTT Services | Apoyo empresarial a distancia",
    en: "CorpoTT Services | Remote business support",
  },
  description: {
    es: "CorpoTT Services LLC ofrece servicios de apoyo empresarial a distancia —outsourcing, tesorería, gestión de compras, reservas, multimoneda, etiquetado de datos para IA y personal capacitado— con calidad y excelencia.",
    en: "CorpoTT Services LLC provides remote business support —outsourcing, treasury, purchasing management, bookings, multi-currency, AI data labeling and trained personnel— with quality and excellence.",
  },
  keywords: [
    "CorpoTT",
    "CorpoTT Services",
    "apoyo empresarial a distancia",
    "remote business support",
    "outsourcing a distancia",
    "remote outsourcing",
    "gestión de tesorería",
    "treasury management",
    "gestión de compras remotas",
    "etiquetado de datos para IA",
    "AI data labeling",
    "personal capacitado Venezuela",
    "servicios empresariales remotos",
  ],
} as const;
