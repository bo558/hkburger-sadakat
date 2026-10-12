import type { Brand } from "../types";
import "./theme.css";

/**
 * HK Burger&More (@hkburgertr, doğrulanmış hesap). Kaynaklar: Instagram profili ve gönderileri,
 * Google Haritalar işletme kaydı. Resmi web sitesi bulunamadı.
 * Ödül adları, tavan tutarları ve "Örnek şube" demo verisidir; gerçek kampanya değildir.
 */
export const brand: Brand = {
  id: "hkburger",
  name: "HK Burger&More",
  instagram: "@hkburgertr",
  storageKey: "hkburger-sadakat-demo",
  qrPrefix: "HK",
  logo: { src: "brand/logo.jpg", alt: "HK Burger&More logosu", shape: "circle" },
  look: { surface: "cream", outlineHeadings: false },
  cardTitle: ["hk", "kart"],
  cardName: "HK Kart",
  images: {
    hero: { src: "brand/smash-yakin.jpg", alt: "HK smash burger, eriyen cheddar ile yakın çekim", position: "object-[50%_45%]" },
    campaign: { src: "brand/smash-tava.jpg", alt: "Köfte sacda smash ediliyor", position: "object-[50%_88%]" },
    rewardThumb: "brand/cheeseburger.jpg",
    celebration: "brand/cheeseburger.jpg",
  },
  copy: {
    headline: ["Her smash", "bir damga!"],
    demoBarShort: "Bağımsız demo · HK onaylı değil",
    demoBarLong: "Bağımsız tanıtım demosu · HK Burger&More tarafından henüz onaylanmamıştır · Bilgiler gönderilmez",
    disclaimer: "Bu uygulama HK Burger&More'a sunulmak üzere hazırlanmış bağımsız bir tanıtım demosudur; marka tarafından henüz onaylanmamıştır.",
    landingNote: "Logo ve fotoğraflar @hkburgertr Instagram hesabından alınmıştır; kullanım izni henüz doğrulanmamıştır.",
    catalogNote: "Ürün görselleri @hkburgertr hesabındaki gönderilerden alınmıştır. Ödül adları ve tavan tutarları örnektir.",
    panelLabel: "HK Burger&More · İşletme paneli",
    campaignTitle: "Taze, asla dondurulmamış",
    campaignText: "Dana etiyle hazırlanır, her seferinde taze smash edilir. Duyuru alanı; içerikler panelden yönetilecek.",
  },
  rewards: [
    { id: "rw-burger-menu", name: "Smash Burger Menü", description: "Standart smash burgerlerden biri + patates + içecek", cap: 650, image: "brand/smash-yakin.jpg", active: true },
    { id: "rw-burger", name: "Smash Burger", description: "Standart smash burgerlerden biri", cap: 520, image: "brand/cheeseburger.jpg", active: true },
    { id: "rw-patates", name: "Tenders", description: "Porsiyon çıtır tavuk", cap: 300, active: false },
  ],
  branches: [
    { id: "br-cerkezkoy", name: "Çerkezköy", city: "Tekirdağ", address: "Cumhuriyet Mah., Moral Sk. · Çerkezköy", active: true },
    { id: "br-ornek", name: "Örnek şube", city: "—", address: "Çok şube özelliğini göstermek için örnek", active: true },
    { id: "br-yeni", name: "Silivri", city: "İstanbul", address: "Çok yakında (Instagram duyurusu)", active: false },
    { id: "br-halkali", name: "Halkalı", city: "İstanbul", address: "Yakında (Instagram duyurusu)", active: false },
    { id: "br-arnavutkoy", name: "Arnavutköy", city: "İstanbul", address: "Yakında (Instagram duyurusu)", active: false },
  ],
};
