import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

// Imagen social (Open Graph / Twitter) generada en build con next/og. Evita tener
// que mantener un PNG en `public/`. Estética de marca: fondo blanco, azul
// corporativo profundo y toque del degradado de marca (ver `.docs/DESIGN.md`).
export const runtime = "nodejs";
export const alt = "CorpoTT Services — Apoyo empresarial a distancia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Colores de marca (hex directos: next/og no procesa las clases de Tailwind).
const BRAND = "#1e429f";
const BRAND_LIGHT = "#8d9fce";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "16px",
            width: "180px",
            borderRadius: "9999px",
            background: `linear-gradient(90deg, ${BRAND}, ${BRAND_LIGHT}, ${BRAND})`,
            marginBottom: "48px",
          }}
        />
        <div
          style={{
            fontSize: "88px",
            fontWeight: 700,
            color: BRAND,
            letterSpacing: "-2px",
            lineHeight: 1.05,
          }}
        >
          CorpoTT Services
        </div>
        <div
          style={{
            marginTop: "28px",
            fontSize: "40px",
            fontWeight: 600,
            color: "#1f2937",
          }}
        >
          Apoyo empresarial a distancia
        </div>
        <div
          style={{
            marginTop: "16px",
            fontSize: "30px",
            color: "#6b7280",
          }}
        >
          Calidad y excelencia · Remote business support
        </div>
        <div
          style={{
            marginTop: "auto",
            fontSize: "26px",
            color: BRAND_LIGHT,
            fontWeight: 600,
          }}
        >
          {SITE.url.replace(/^https?:\/\//, "")}
        </div>
      </div>
    ),
    { ...size }
  );
}
