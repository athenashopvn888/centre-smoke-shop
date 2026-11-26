import { InfoPage } from "@/components/InfoPage";
import { SITE, meta } from "@/lib/site";

export const metadata = meta("Vape Shopping Basics", "Prepare useful questions before comparing nicotine vape formats and accessories at Centre Smoke Vape Shop.", "/guides/vape-shopping-basics");

export default function VapeGuidePage() {
  return <InfoPage eyebrow="Guide" title="Vape shopping basics" intro="A useful conversation starts with the device format, compatibility and information on the package." links={[{ href: SITE.tel, label: "Call the shop" }, { href: "/nicotine-vape", label: "Vape category" }]}>
    <h2>1. Name the format</h2><p>If you already use a device, bring its exact model name. Similar-looking parts are not always compatible.</p>
    <h2>2. Read the package</h2><p>Check the manufacturer label for nicotine information, charging guidance, warnings and storage directions.</p>
    <h2>3. Ask about compatible parts</h2><p>Before buying a replacement pod, coil or charger, confirm that it is intended for the exact device.</p>
    <h2>4. Confirm current selection</h2><p>Call {SITE.phone}. This guide does not represent live inventory.</p>
  </InfoPage>;
}
