import { brand } from "@brand";
import { Gift, Hamburger } from "lucide-react";
import QRCode from "qrcode";
import { useEffect, useState, type ReactNode } from "react";
import { useStore } from "../store/store";

/** public/ altındaki dosyalar için yol: uygulama hangi alt yoldan sunulursa sunulsun çalışır. */
export const asset = (p: string) => `${import.meta.env.BASE_URL}${p.replace(/^\/+/, "")}`;

/**
 * Marka logosu (public/brand/logo.jpg, orijinal dosya).
 * Kare oran korunur; esnetme veya yeniden çizim yok. Köşe yuvarlaması ya da daire
 * maskesi yalnızca logonun düz zeminine denk gelir (HK logosu Instagram'daki gibi daire).
 */
export function BrandLogo({ size = "sm", className = "", onBrand = false }: { size?: "sm" | "md" | "lg"; className?: string; onBrand?: boolean }) {
  const px = { sm: 40, md: 52, lg: 76 }[size];
  return (
    <img
      src={asset(brand.logo.src)}
      width={px}
      height={px}
      alt={brand.logo.alt}
      className={`block aspect-square shrink-0 select-none object-contain ${brand.logo.shape === "circle" ? "rounded-full" : "rounded-md"} ${onBrand ? "ring-2 ring-cream/70" : ""} ${className}`}
      style={{ width: px, height: px }}
      draggable={false}
    />
  );
}

/** "— Burger & More —" gönderisindeki çizgili, geniş aralıklı bölüm etiketi. */
export function SectionLabel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`eyebrow ${className}`}>{children}</span>;
}

/**
 * Dijital sadakat kartı. "accent": turuncu zemin + krem damgalar.
 * "cream": krem zemin + turuncu damgalar (HK logosu). İkisinde de koyu hediye şeridi.
 */
export function StampCard({
  stamps,
  required,
  name,
  rewardName,
  freshIndex,
  compact,
}: {
  stamps: number;
  required: number;
  name?: string;
  rewardName: string;
  freshIndex?: number | null;
  compact?: boolean;
}) {
  const cols = required <= 4 ? required : required <= 10 ? Math.ceil(required / 2) : 6;
  const left = Math.max(0, required - stamps);
  const cream = brand.look.surface === "cream";
  const c = cream
    ? { box: "bg-cream text-ink ring-1 ring-ink/10", title: "text-hk", titleAccent: "text-ink", sub: "text-ink/65", num: "text-hk", of: "text-ink/40", fill: "bg-hk text-cream", next: "border-hk bg-hk/10", empty: "border-ink/25", nextNum: "text-hk", emptyNum: "text-ink/50", strip: "line-clamp-2 text-[12px] leading-snug" }
    : { box: "bg-hk text-cream", title: "", titleAccent: "text-ink", sub: "text-ink/75", num: "text-cream", of: "text-ink/45", fill: "bg-cream text-hk", next: "border-cream bg-cream/10", empty: "border-cream/45", nextNum: "text-cream", emptyNum: "text-cream/65", strip: "truncate text-[13px]" };
  return (
    <div className={`relative overflow-hidden rounded-2xl ${c.box}`}>
      <div className={`relative ${compact ? "p-3.5" : "p-4"}`}>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className={`font-display text-[17px] uppercase leading-none tracking-[0.02em] ${c.title}`}>
              {brand.cardTitle[0]} <span className={c.titleAccent}>{brand.cardTitle[1]}</span>
            </div>
            {name && <div className={`mt-1.5 truncate text-xs font-medium ${c.sub}`}>{name}</div>}
          </div>
          <div className={`t-num-lg ${c.num}`} aria-label={`${stamps} / ${required} damga`}>
            {stamps}
            <span className={`text-[17px] ${c.of}`}>/{required}</span>
          </div>
        </div>

        <div className={`grid ${compact ? "mt-3 gap-2" : "mt-3.5 gap-2.5"}`} style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }} role="list">
          {Array.from({ length: required }, (_, i) => {
            const filled = i < stamps;
            const next = i === stamps;
            const rot = ((i * 37) % 17) - 8;
            return (
              <div key={i} role="listitem" className="mx-auto aspect-square w-full max-w-12">
                {filled ? (
                  <div
                    className={`grid h-full w-full place-items-center rounded-full ${c.fill} ${freshIndex === i ? "animate-stamp" : ""}`}
                    style={{ transform: `rotate(${rot}deg)`, ["--r" as string]: `${rot}deg` }}
                    aria-label={`${i + 1}. damga dolu`}
                  >
                    <Hamburger className="h-[50%] w-[50%]" strokeWidth={2.2} />
                  </div>
                ) : (
                  <div
                    className={`grid h-full w-full place-items-center rounded-full border-[1.5px] border-dashed ${next ? c.next : c.empty}`}
                    aria-label={`${i + 1}. damga boş`}
                  >
                    <span className={`font-display text-[13px] ${next ? c.nextNum : c.emptyNum}`}>{i + 1}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className={`flex items-center gap-2.5 rounded-xl bg-ink px-3 text-cream ${compact ? "mt-3 py-2" : "mt-3.5 py-2.5"}`}>
          <Gift className="h-4 w-4 shrink-0 text-hk" />
          <div className={`min-w-0 flex-1 ${c.strip}`}>
            <span className="font-semibold">{required + 1}. sipariş hediye</span>
            <span className="text-smoke"> · {rewardName}</span>
          </div>
          <div className="shrink-0 text-xs font-semibold text-hk">{left === 0 ? "Hazır!" : `${left} kaldı`}</div>
        </div>
      </div>
    </div>
  );
}

export function QrImage({ value, size = 208 }: { value: string; size?: number }) {
  const [src, setSrc] = useState("");
  useEffect(() => {
    QRCode.toDataURL(value, { margin: 1, width: size * 2, errorCorrectionLevel: "M", color: { dark: "#0E0D0B", light: "#FFFFFF" } })
      .then(setSrc)
      .catch(() => setSrc(""));
  }, [value, size]);
  return src ? (
    <img src={src} width={size} height={size} alt="Kişisel QR kodu" className="block" style={{ imageRendering: "pixelated" }} />
  ) : (
    <div style={{ width: size, height: size }} className="animate-pulse rounded bg-ink/10" />
  );
}

export function Toasts() {
  const { toasts } = useStore();
  return (
    <div className="pointer-events-none fixed inset-x-0 top-[calc(var(--demo-bar)+max(10px,env(safe-area-inset-top)))] z-[100] flex flex-col items-center gap-2 px-4">
      {toasts.map((t) => (
        <div
          key={t.id}
          role="status"
          className={`animate-rise pointer-events-auto max-w-sm rounded-xl px-3.5 py-2.5 text-[13px] font-medium shadow-lg ${
            t.tone === "ok" ? "bg-ink text-cream ring-1 ring-hk/50" : t.tone === "bad" ? "bg-bad text-cream" : "bg-white text-ink ring-1 ring-black/10"
          }`}
        >
          {t.text}
        </div>
      ))}
    </div>
  );
}

export function DemoBadge({ className = "" }: { className?: string }) {
  return <span className={`inline-flex items-center rounded-full bg-black/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] ${className}`}>Örnek veri</span>;
}
