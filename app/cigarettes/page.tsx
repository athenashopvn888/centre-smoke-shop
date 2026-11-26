import { redirect } from "next/navigation";
import { InfoPage } from "@/components/InfoPage";
import { SITE, meta } from "@/lib/site";
import { getCigaretteDecision } from "@/lib/cigarette-control";

export async function generateMetadata() {
  if (!(await getCigaretteDecision()).webOn) redirect("/nicotine-vape");
  return meta("Cigarettes", "Adult cigarette category information from Centre Smoke Vape Shop. Call the shop for current brands, formats and availability.", "/cigarettes");
}

export default async function CigarettesPage() {
  if (!(await getCigaretteDecision()).webOn) redirect("/nicotine-vape");
  return <InfoPage eyebrow="Smoke" title="Cigarettes" intro="Category information for adult shoppers." links={[{ href: "/menu/cigarettes", label: "Browse reference products" }, { href: SITE.tel, label: "Call the shop" }]}>
    <div className="notice"><strong>Confirm current selection</strong>Call the shop to ask about the selection available today.</div>
    <h2>Make your question specific</h2><p>If you are looking for a particular package format or brand, say so when you call. Staff can answer based on the shop&apos;s current shelves.</p>
    <h2>Adult purchase only</h2><p>Age verification may be required in store. Product packaging and manufacturer information should be followed as supplied.</p>
  </InfoPage>;
}
