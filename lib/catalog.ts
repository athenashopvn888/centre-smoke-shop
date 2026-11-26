import type data from "@/data/menu-snapshot.json";

export const CATEGORIES = [
  { slug: "flower", name: "Flower" },
  { slug: "pre-rolls", name: "Pre-rolls" },
  { slug: "vape-disposables", name: "THC vapes" },
  { slug: "edibles", name: "Edibles" },
  { slug: "concentrates", name: "Concentrates" },
  { slug: "accessories", name: "Accessories" },
  { slug: "nicotine-vapes", name: "Nicotine vapes" },
  { slug: "cigarettes", name: "Cigarettes" },
  { slug: "other", name: "Other" }
] as const;

export const TIERS = [
  { slug: "exotic", key: "EXOTIC", name: "Exotic" },
  { slug: "premium", key: "PREMIUM", name: "Premium" },
  { slug: "aaa", key: "AAA+", name: "AAA+" },
  { slug: "aa", key: "AA", name: "AA" },
  { slug: "budget", key: "BUDGET", name: "Budget" }
] as const;

export type Product = (typeof data.products)[number];
export type Price = Product["prices"][number];
export const topTiers = new Set<string>(TIERS.slice(0, 3).map(({ key }) => key));
export const money = (amount: number) =>
  new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(amount);
export const categoryName = (slug: string) => CATEGORIES.find((row) => row.slug === slug)?.name ?? slug;
export const tierName = (key: string) => TIERS.find((row) => row.key === key)?.name ?? key;
