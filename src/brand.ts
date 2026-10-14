/**
 * HK Burger&More (@hkburgertr). Renk ve yazı tipleri index.css içindedir.
 * Logo ve fotoğraflar Instagram hesabından alınmıştır; kullanım izni henüz doğrulanmamıştır.
 */
export const brand = {
  name: "HK Burger&More",
  instagram: "@hkburgertr",
  logo: { src: "brand/logo.jpg", alt: "HK Burger&More logosu" },
  cardTitle: ["hk", "kart"] as const,
  images: {
    hero: { src: "brand/smash-yakin.jpg", alt: "HK smash burger, eriyen cheddar ile yakın çekim", position: "object-[50%_45%]" },
    reward: "brand/cheeseburger.jpg",
    celebration: "brand/cheeseburger.jpg",
  },
  copy: {
    demoBarShort: "Bağımsız demo · HK onaylı değil",
    demoBarLong: "Bağımsız tanıtım demosu · HK Burger&More tarafından henüz onaylanmamıştır · Bilgiler gönderilmez",
    disclaimer: "Bu uygulama HK Burger&More'a sunulmak üzere hazırlanmış bağımsız bir tanıtım demosudur; marka tarafından henüz onaylanmamıştır.",
    landingNote: "Logo ve fotoğraflar @hkburgertr Instagram hesabından alınmıştır; kullanım izni henüz doğrulanmamıştır.",
  },
};
