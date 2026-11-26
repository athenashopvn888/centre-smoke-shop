import { InfoPage } from "@/components/InfoPage";
import { SITE, meta } from "@/lib/site";

export const metadata = meta("Cigarettes", "Adult cigarette category information from Centre Smoke Vape Shop. Call the shop for current brands, formats and availability.", "/cigarettes");

export default function CigarettesPage() {
  return <InfoPage eyebrow="Smoke" title="Cigarettes" intro="Category information for adult shoppers, without unverified brand, price or stock claims." links={[{ href: SITE.tel, label: "Call the shop" }, { href: "/menu", label: "All categories" }]}>
    <div className="notice"><strong>Current brands are not listed online</strong>Call the shop to ask about the selection available today.</div>
    <h2>Make your question specific</h2><p>If you are looking for a particular package format or brand, say so when you call. Staff can answer based on the shop&apos;s current shelves.</p>
    <h2>Adult purchase only</h2><p>Age verification may be required in store. Product packaging and manufacturer information should be followed as supplied.</p>
  </InfoPage>;
}
