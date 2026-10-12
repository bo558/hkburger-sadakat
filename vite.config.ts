import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { BRAND_HTML } from "./src/brands/html";

const html = BRAND_HTML.hkburger;

export default defineConfig(({ command }) => ({
  // GitHub Pages: https://bo558.github.io/hkburger-sadakat/ (yerelde kök yol)
  base: command === "build" ? "/hkburger-sadakat/" : "/",
  resolve: { alias: { "@brand": fileURLToPath(new URL("./src/brands/hkburger/index.ts", import.meta.url)) } },
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "brand-html",
      transformIndexHtml: (s: string) =>
        s
          .replaceAll("__BRAND_TITLE__", html.title)
          .replaceAll("__BRAND_DESCRIPTION__", html.description)
          .replaceAll("__BRAND_THEME_COLOR__", html.themeColor)
          .replaceAll("__BRAND_FONTS__", html.fonts),
    },
  ],
  server: { host: "127.0.0.1", port: html.port, strictPort: true },
  preview: { host: "127.0.0.1", port: 4174, strictPort: true },
}));
