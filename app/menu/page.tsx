import Link from "next/link";
import { CategoryGrid } from "@/components/CategoryGrid";
import { InfoPage } from "@/components/InfoPage";
import { SITE, meta } from "@/lib/site";

export const metadata = meta("Menu", "Explore Centre Smoke Vape Shop categories. Live products and prices remain unavailable until the approved store inventory source is connected.", "/menu");

export default function MenuPage() {
  return (
    <InfoPage eyebrow="Shop" title="Menu" intro="Browse the main shop categories. Live products, availability and prices are intentionally not shown until the correct store-specific source is approved." links={[{ href: SITE.tel, label: `Call ${SITE.phone}` }, { href: "/visit", label: "Plan a visit" }]}>
      <div className="notice"><strong>Live menu not connected</strong>This page does not use sample inventory or another store&apos;s products. Call the shop for current information.</div>
      <h2>Explore categories</h2>
      <CategoryGrid />
      <h2>Why the menu is closed</h2>
      <p>Reliable online availability needs an approved store identity, current inventory feed and freshness checks. Until those are in place, the site fails closed instead of presenting unverified products.</p>
      <p><Link href="/faq">Read the shop FAQ</Link> or <a href={SITE.tel}>call Centre Smoke</a>.</p>
    </InfoPage>
  );
}
