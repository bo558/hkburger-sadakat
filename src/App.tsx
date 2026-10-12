import { brand } from "@brand";
import { ArrowRight, LayoutDashboard, Smartphone } from "lucide-react";
import { asset, BrandLogo } from "./components/brand";
import { CustomerApp } from "./customer/CustomerApp";
import { PanelApp } from "./panel/PanelApp";
import { useRoute } from "./store/store";

export default function App() {
  const [parts, go] = useRoute();
  const [area, sub = "", param] = parts;
  return (
    <>
      <DemoBar />
      {area === "app" ? <CustomerApp sub={sub} go={go} /> : area === "panel" ? <PanelApp sub={sub} param={param} go={go} /> : <Landing go={go} />}
    </>
  );
}

/**
 * Tüm ekranlarda görünen demo uyarısı. Yüksekliği --demo-bar değişkeniyle düzende hesaba katılır.
 * "fixed" + aynı yükseklikte boşluk: "sticky" #root yüksekliğini (bir ekran) aşan kaydırmalarda kayboluyordu.
 */
function DemoBar() {
  return (
    <>
      <div aria-hidden className="h-[var(--demo-bar)]" />
      <div
        role="note"
        className="fixed inset-x-0 top-0 z-[90] flex h-[var(--demo-bar)] items-center justify-center gap-2 bg-cream px-3 text-center text-[10.5px] font-semibold leading-tight text-ink sm:text-[11px]"
      >
        <span className="rounded bg-hk px-1.5 py-px tracking-[0.12em] text-ink">DEMO</span>
        <span className="min-w-0 truncate sm:hidden">{brand.copy.demoBarShort}</span>
        <span className="hidden min-w-0 truncate sm:inline">{brand.copy.demoBarLong}</span>
      </div>
    </>
  );
}

/* Giriş. "accent": turuncu zemin, dolu + konturlu başlık.
   "cream": logo gibi krem zemin, turuncu + koyu başlık (HK). */
const LANDING = {
  accent: { box: "bg-hk text-cream", label: "text-ink/70", line1: "", line2: "t-outline", body: "text-ink/80", panelBtn: "bg-cream text-ink", panelSub: "text-ink/65", note: "text-ink/65", logo: "", btnGrid: "sm:grid-cols-2", btnTitle: "text-[17px]" },
  cream: { box: "bg-cream text-ink", label: "text-ink/55", line1: "text-hk", line2: "text-ink", body: "text-ink/75", panelBtn: "bg-white text-ink ring-1 ring-paper-line", panelSub: "text-ink/60", note: "text-ink/55", logo: "ring-1 ring-ink/10", btnGrid: "xl:grid-cols-2", btnTitle: "text-[16px]" },
}[brand.look.surface];

function Landing({ go }: { go: (p: string) => void }) {
  const L = LANDING;
  return (
    <div className={`relative min-h-[calc(100%-var(--demo-bar))] overflow-hidden px-4 py-8 sm:px-8 ${L.box}`}>
      <div className="relative mx-auto grid min-h-[calc(100dvh-80px)] max-w-5xl content-between gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,360px)] md:items-center">
        <div className="flex min-w-0 flex-col gap-8">
          <div className="self-start">
            <BrandLogo size="lg" onBrand={brand.look.surface === "accent"} className={L.logo} />
          </div>
          <div>
            <div className={`t-label ${L.label}`}>Sadakat uygulaması · etkileşimli prototip</div>
            <h1 className="t-display mt-2 text-[clamp(38px,6vw,64px)] leading-[1.02]">
              <span className={L.line1}>{brand.copy.headline[0]}</span>
              <br />
              <span className={L.line2}>{brand.copy.headline[1]}</span>
            </h1>
            <p className={`mt-3 max-w-lg text-sm leading-relaxed ${L.body}`}>
              Müşteri uygulaması ve işletme paneli aynı örnek veriyi paylaşır. Panelde verilen damga, müşteri kartında anında görünür. Gerçek veritabanı, SMS veya kasa bağlantısı yoktur.
            </p>
            <div className={`mt-6 grid max-w-2xl gap-3 ${L.btnGrid}`}>
              <button onClick={() => go("app")} className="group flex items-center gap-3.5 rounded-xl bg-ink p-4 text-left text-cream">
                <Smartphone className="h-6 w-6 shrink-0 text-hk" />
                <span className="flex-1">
                  <span className={`t-h2 block ${L.btnTitle}`}>Müşteri uygulaması</span>
                  <span className="mt-0.5 block text-xs text-smoke">Kayıt, dijital kart, QR, ödüller, geçmiş, profil</span>
                </span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button onClick={() => go("panel/kasa")} className={`group flex items-center gap-3.5 rounded-xl p-4 text-left ${L.panelBtn}`}>
                <LayoutDashboard className="h-6 w-6 shrink-0 text-hk" />
                <span className="flex-1">
                  <span className={`t-h2 block ${L.btnTitle}`}>İşletme paneli</span>
                  <span className={`mt-0.5 block text-xs ${L.panelSub}`}>Kasa, müşteriler, işlemler, kampanya, şubeler</span>
                </span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            <p className={`mt-4 text-[11px] ${L.note}`}>
              {brand.copy.disclaimer} {brand.copy.landingNote}
            </p>
          </div>
        </div>
        <img src={asset(brand.images.hero.src)} alt={brand.images.hero.alt} className={`hidden aspect-[3/4] w-full rounded-2xl object-cover md:block ${brand.images.hero.position ?? ""}`} />
      </div>
    </div>
  );
}
