// La tarjeta de Twitter/X reutiliza la misma imagen que Open Graph.
// `runtime` se declara aquí (no se re-exporta) para que Next lo reconozca estáticamente.
export const runtime = "nodejs";
export { default, alt, size, contentType } from "./opengraph-image";
