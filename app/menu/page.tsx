import { CatalogPage } from "@/components/CatalogPage";
import { meta } from "@/lib/site";

export const metadata = meta("Menu", "Browse the Centre Smoke reference catalogue, compare pack prices and explore flower tiers.", "/menu");

export default function MenuPage() {
  return <CatalogPage title="Menu" />;
}
