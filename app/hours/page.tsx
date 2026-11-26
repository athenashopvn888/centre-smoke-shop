import { InfoPage } from "@/components/InfoPage";
import { SITE, meta } from "@/lib/site";

export const metadata = meta("Hours", "Centre Smoke Vape Shop hours are being confirmed. Call 289-804-0155 before visiting.", "/hours");

export default function HoursPage() {
  return <InfoPage eyebrow="Hours" title="Call before visiting" intro="Approved public hours have not been supplied for this website, so no schedule is guessed or copied from another business." links={[{ href: SITE.tel, label: `Call ${SITE.phone}` }, { href: "/visit", label: "Visit details" }]}>
    <div className="notice"><strong>Hours pending confirmation</strong>Please call the shop for today&apos;s opening and closing times.</div>
    <h2>Why no schedule is shown</h2><p>Store hours affect travel plans and search listings. This page will publish them only after an exact store-specific schedule is approved.</p>
  </InfoPage>;
}
