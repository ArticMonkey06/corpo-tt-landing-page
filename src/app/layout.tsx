import type {Metadata} from 'next';
import './globals.css';
import { LanguageProvider } from "@/contexts/language-context";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title.es,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description.es,
  keywords: [...SITE.keywords],
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  // Idioma: el bilingüe es un toggle de cliente sobre una única URL, así que la
  // canónica es la raíz y NO hay URLs alternas por idioma para hreflang
  // (ver `.docs/SEO.md`).
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: SITE.title.es,
    description: SITE.description.es,
    url: '/',
    locale: SITE.defaultLocale,
    alternateLocale: SITE.alternateLocale,
    // La imagen social se genera dinámicamente en `app/opengraph-image.tsx`.
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title.es,
    description: SITE.description.es,
    // La imagen la aporta `app/twitter-image.tsx`.
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    // El `?v=2` versiona la URL para forzar a los navegadores a re-descargar el
    // favicon (antes el sitio servía otro icono, que quedaba cacheado). Vercel
    // ignora el query en estáticos y sigue sirviendo public/favicon.ico.
    icon: '/favicon.ico?v=2',
  },
};

// Datos estructurados (JSON-LD). CorpoTT presta servicios 100% a distancia (sin
// dirección física), por eso se usa `Organization` y no `LocalBusiness`.
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.legalName,
  alternateName: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/favicon.ico`,
  email: SITE.email,
  description: SITE.description.es,
  areaServed: 'Worldwide',
  knowsLanguage: ['es', 'en'],
  contactPoint: {
    '@type': 'ContactPoint',
    email: SITE.email,
    contactType: 'customer service',
    availableLanguage: ['Spanish', 'English'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Inter se carga intencionalmente vía <link> (la CSP permite fonts.googleapis.com/gstatic.com). Migrar a next/font sería un cambio aparte. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
