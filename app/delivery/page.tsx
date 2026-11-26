import { InfoPage } from "@/components/InfoPage";
import { SITE, meta } from "@/lib/site";

export const metadata = meta("Delivery", "Contact Centre Smoke Vape Shop for current service information. Delivery areas, fees and timing are not published yet.", "/delivery");

export default function DeliveryPage() {
  return <InfoPage eyebrow="Service" title="Delivery information" intro="Delivery coverage, timing, fees, minimums and ordering steps are not published until the store-specific service configuration is approved." links={[{ href: SITE.tel, label: "Call for current information" }, { href: "/contact", label: "Contact details" }]}>
    <div className="notice"><strong>No online delivery promise</strong>This page does not represent that delivery is available to any address.</div>
    <h2>What to ask</h2><ul><li>Whether service is available today</li><li>Whether your address is eligible</li><li>What identification and payment steps apply</li><li>Any current fees, minimums or timing information</li></ul>
  </InfoPage>;
}
