import type {Metadata} from 'next';
import './globals.css';
import { LanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: 'CorpoTT Services',
  description: 'Servicios de apoyo empresarial a distancia con calidad y excelencia.',
  icons: {
    icon: '/favicon.ico',
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
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
