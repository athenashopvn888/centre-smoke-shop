import "server-only";
import data from "@/data/menu-snapshot.json";
import type { Product } from "@/lib/catalog";

export const snapshot = data;
export const sourceDate = new Intl.DateTimeFormat("en-CA", {
  dateStyle: "long", timeZone: "America/Toronto"
}).format(new Date(snapshot.stockDate));

export function controlledProduct(product: Product) {
  const label = `${product.category} ${product.name}`;
  return !/BACKWOOD|CIGARILLO|PAPER|POUCH|ZYN|VELO|WRAP/i.test(label) && /CIGARETTE|GRABBA/i.test(label);
}

export function visibleProducts(webOn: boolean) {
  return snapshot.products.flatMap((product) => {
    if (controlledProduct(product)) return webOn ? [product] : [];
    // Keep the fleet's exempt products discoverable independently of the scheduled category.
    if (!webOn && product.category === "cigarettes") return [{ ...product, category: "other" }];
    return [product];
  });
}
