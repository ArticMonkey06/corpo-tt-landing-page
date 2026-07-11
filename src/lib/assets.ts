/**
 * Fuente única de rutas de assets (imágenes) del sitio.
 *
 * Evita strings mágicos repetidos y la duplicación entre los idiomas `es`/`en`
 * de `content.tsx` (las imágenes son iguales en ambos). Todos los nombres de
 * archivo son ASCII (sin acentos ni espacios) por portabilidad (ver issue #3).
 */
export const ASSETS = {
  sections: {
    whoWeAre: "/images/who-are.webp",
    vision: "/images/business-vision-corpott.webp",
    mission: "/images/business-mission-corpott.webp",
  },
  services: {
    outsourcing: "/images/outsourcing.webp",
    purchasing: "/images/sales-managment-corpott.webp",
    flights: "/images/flights-managment-corpott.webp",
    treasury: "/images/tesoreria-corpott.webp",
    multicurrency: "/images/currency-money-multi-wallet-corpott.webp",
    dataLabeling: "/images/ia-corpott.webp",
    staff: "/images/team-corpott.webp",
  },
  clients: {
    felix: "/images/clients/client-felix.png",
    cbPay: "/images/clients/client-cb-pay.png",
    ock: "/images/clients/client-ock.png",
    abTrading: "/images/clients/client-abtrading.png",
  },
} as const;
