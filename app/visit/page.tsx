import { InfoPage } from "@/components/InfoPage";
import { SITE, meta } from "@/lib/site";

export const metadata = meta("Visit", "Visit Centre Smoke Vape Shop at 15 Centre St S. Call 289-804-0155 to confirm hours before travelling.", "/visit");

export default function VisitPage() {
  return <InfoPage eyebrow="Visit" title="Plan your visit" intro={`Centre Smoke Vape Shop is at ${SITE.address}. Call before travelling while the approved public hours and complete postal address are being finalized.`} links={[{ href: SITE.tel, label: `Call ${SITE.phone}` }, { href: "/hours", label: "Hours status" }]}>
    <h2>Store details</h2><div className="status-grid"><article className="status-card"><h3>Address</h3><p>{SITE.address}</p><p>The city and postal code are not published until the canonical store record is approved.</p></article><article className="status-card"><h3>Phone</h3><p><a href={SITE.tel}>{SITE.phone}</a></p><p>Call for current hours, selection and service information.</p></article></div>
    <h2>Before you travel</h2><ul><li>Confirm the shop is open.</li><li>Ask whether the category you need is available.</li><li>Bring government-issued identification if required for age verification.</li></ul>
  </InfoPage>;
}
