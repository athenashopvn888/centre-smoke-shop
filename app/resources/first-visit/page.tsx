import { InfoPage } from "@/components/InfoPage";
import { SITE, meta } from "@/lib/site";

export const metadata = meta("First Visit", "Plan a first visit to Centre Smoke Vape Shop at 15 Centre St S.", "/resources/first-visit");

export default function FirstVisitPage() {
  return <InfoPage eyebrow="Visit guide" title="Your first visit" intro="A two-minute checklist can save an unnecessary trip." links={[{ href: SITE.tel, label: `Call ${SITE.phone}` }, { href: "/visit", label: "Visit details" }]}>
    <h2>Before you leave</h2><ol><li>Call to confirm the shop is open.</li><li>Ask whether the product category you need is currently available.</li><li>Bring government-issued identification if required for age verification.</li><li>Write down the exact device or accessory model when asking about compatibility.</li></ol>
    <h2>At the shop</h2><p>Read product packaging and ask staff about the current selection. This website does not replace package instructions or claim live availability.</p>
  </InfoPage>;
}
