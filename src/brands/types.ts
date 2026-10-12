import type { Branch, Reward } from "../data/types";

/**
 * Marka yapılandırması. Her marka src/brands/<id>/index.ts içinde bu şekli doldurur;
 * görseller public/brand/ altında durur.
 * Renk ve yazı tipleri src/brands/<id>/theme.css içinde CSS değişkenleriyle ezilir.
 */
export type BrandId = "hkburger";

export interface BrandImage {
  src: string; // brand/... (public kökünden göreli)
  alt: string;
  position?: string; // object-position sınıfı
}

export interface Brand {
  id: BrandId;
  /** Tam ad: demo bandı, panel başlığı */
  name: string;
  instagram: string;
  /** localStorage anahtarı: markalar aynı tarayıcıda birbirinin verisini görmez */
  storageKey: string;
  /** QR içeriğinin öneki */
  qrPrefix: string;
  logo: BrandImage & { shape: "square" | "circle" };
  /**
   * Görünüm tercihleri:
   * surface "accent" = giriş ve kart turuncu zemin; "cream" = logo gibi krem zemin + turuncu yazı.
   * outlineHeadings = başlığın ikinci satırı konturlu (afiş stili).
   */
  look: { surface: "accent" | "cream"; outlineHeadings: boolean };
  /** Dijital kart başlığı: [marka kısmı, vurgulu kısım] */
  cardTitle: [string, string];
  cardName: string;
  images: {
    hero: BrandImage;
    campaign: BrandImage;
    rewardThumb: string;
    celebration: string;
  };
  copy: {
    headline: [string, string];
    demoBarShort: string;
    demoBarLong: string;
    /** Bağımsız demo uyarısı: giriş, müşteri uygulaması ve panelde gösterilir */
    disclaimer: string;
    landingNote: string;
    catalogNote: string;
    panelLabel: string;
    campaignTitle: string;
    campaignText: string;
  };
  rewards: Reward[];
  branches: Branch[];
}
