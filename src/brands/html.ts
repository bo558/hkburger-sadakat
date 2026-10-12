import type { BrandId } from "./types";

/** index.html başlık bilgileri ve geliştirme portu (vite.config.ts okur; uygulama paketine girmez). */
export const BRAND_HTML: Record<BrandId, { title: string; description: string; themeColor: string; fonts: string; port: number }> = {
  hkburger: {
    title: "HK Kart · Bağımsız demo",
    description: "HK Burger&amp;More için hazırlanmış bağımsız sadakat uygulaması tanıtım demosu. Marka tarafından henüz onaylanmamıştır.",
    themeColor: "#E06428",
    fonts: "https://fonts.googleapis.com/css2?family=Archivo:wght@800&family=Barlow:wght@400;500;600;700&display=swap",
    port: 5174
  },
};
