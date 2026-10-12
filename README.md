# HK Kart — HK Burger&More sadakat uygulaması demosu

> **Bu, HK Burger&More'a sunulmak üzere hazırlanmış bağımsız bir tanıtım demosudur. Markanın resmî uygulaması değildir ve HK Burger&More tarafından henüz onaylanmamıştır.**
> Sunucu, veritabanı, SMS, ödeme veya kasa bağlantısı yoktur. Girilen bilgiler hiçbir yere gönderilmez; yalnızca kullandığınız tarayıcının yerel deposunda (localStorage) tutulur. Tüm müşteri, personel ve işlem kayıtları uydurma örnek verilerdir.

Canlı demo: https://bo558.github.io/hkburger-sadakat/

## Neler var?

**Müşteri uygulaması** (`#/app`, mobil öncelikli)
Kayıt (demo doğrulama kodu: `123456`), dijital damga kartı, QR kod ekranı, ödüller, işlem geçmişi, profil.

**İşletme paneli** (`#/panel`)
Kasa (QR okutma simülasyonu, damga verme, ödül kullandırma), genel bakış, müşteriler, sadakat işlemleri, kampanya ve ödül ayarları, şubeler ve personel. Sol alttaki "Oturum (demo)" menüsünden Personel / Şube müdürü / Yönetici rolleri arasında geçiş yapılabilir.

**Deneme önerisi:** Müşteri uygulamasını ve paneli aynı tarayıcıda iki ayrı sekmede açın. Panelde verdiğiniz damga, müşteri kartında anında görünür. Farklı cihazlar veya kişiler aynı veriyi paylaşmaz; herkes kendi örnek verisiyle başlar. Profil › "Demoyu sıfırla" ile başa dönebilirsiniz.

Program kuralları (ör. 10 damga = 1 Smash Burger Menü), ödül adları ve tavan tutarları örnektir; panelden değiştirilebilir. "Örnek şube" uydurmadır; Silivri, Halkalı ve Arnavutköy markanın Instagram'da "yakında" olarak duyurduğu konumlardır.

## Güvenlik notu

Bu demoda gerçek kimlik doğrulama yoktur. Doğrulama kodu (`123456`) ekranda açıkça gösterilir; işletme paneline herkes girebilir ve "Oturum (demo)" menüsünden rol seçilebilir. Rol kısıtlamaları yalnızca arayüzde gösterim amaçlıdır ve bir güvenlik önlemi değildir. Gerçek bir sürümde giriş, yetki ve kayıtlar sunucu tarafında doğrulanmalıdır. Uygulama hiçbir sunucuya veri göndermez; yazı tipleri dışında dış bağlantısı yoktur.

## Yerelde çalıştırma

Node.js 20 veya üzeri gerekir.

```
npm install
npm run dev
```

Adres: http://127.0.0.1:5174/ · Windows'ta `baslat.cmd` da kullanılabilir. Derleme: `npm run build` (çıktı `dist/`, GitHub Pages yolu `/hkburger-sadakat/`).

## Teknoloji

React · TypeScript · Vite · Tailwind CSS · `qrcode` · `lucide-react`. Yazı tipleri (Archivo 800 başlık, Barlow metin) Google Fonts üzerinden yüklenir. Marka ayarları `src/brands/hkburger/` içindedir.

## Haklar

Logo ve fotoğraflar (`public/brand/`) HK Burger&More'a (@hkburgertr) aittir ve markanın Instagram hesabından alınmıştır. **Kullanım izinleri henüz doğrulanmamıştır.** Yalnızca bu tanıtım demosunda gösterilmektedir; başka projelerde yeniden kullanılmamalı, kopyalanmamalı veya dağıtılmamalıdır. Marka talep ederse kaldırılacaktır.

Bu depodaki kod için açık kaynak lisansı verilmemiştir; tüm hakları saklıdır.
