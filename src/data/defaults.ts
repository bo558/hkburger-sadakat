import { brand } from "@brand";
import type { Branch, ProgramRules, Reward, Staff } from "./types";

/**
 * TASLAK PROGRAM KURALLARI — kesinleşmedi.
 * Panelde "Kampanya ve ödüller" ekranından değiştirilebilir.
 */
export const DEFAULT_RULES: ProgramRules = {
  stampsRequired: 10,
  welcomeStamps: 2,
  minSpend: 300,
  cooldownMinutes: 120,
  rewardExpiryDays: 60,
  stampExpiryMonths: 12,
  rewardId: "rw-burger-menu",
};

/** Ödül kataloğu ve şubeler markaya özeldir (src/brands/<id>/index.ts). */
export const DEFAULT_REWARDS: Reward[] = brand.rewards;

export const DEFAULT_BRANCHES: Branch[] = brand.branches;

export const DEFAULT_STAFF: Staff[] = [
  { id: "st-ayse", name: "Ayşe K.", role: "admin", branchIds: ["br-cerkezkoy", "br-ornek", "br-yeni"], active: true },
  { id: "st-mert", name: "Mert A.", role: "manager", branchIds: ["br-cerkezkoy"], active: true },
  { id: "st-can", name: "Can D.", role: "staff", branchIds: ["br-cerkezkoy"], active: true },
  { id: "st-selin", name: "Selin T.", role: "staff", branchIds: ["br-ornek"], active: true },
  { id: "st-emre", name: "Emre Y.", role: "staff", branchIds: ["br-ornek"], active: false },
];

export const ROLE_LABEL: Record<Staff["role"], string> = {
  staff: "Personel",
  manager: "Şube müdürü",
  admin: "Yönetici",
};
