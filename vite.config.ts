import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command }) => ({
  // GitHub Pages: https://bo558.github.io/hkburger-sadakat/ (yerelde kök yol)
  base: command === "build" ? "/hkburger-sadakat/" : "/",
  plugins: [react(), tailwindcss()],
  server: { host: "127.0.0.1", port: 5174, strictPort: true },
  preview: { host: "127.0.0.1", port: 4174, strictPort: true },
}));
