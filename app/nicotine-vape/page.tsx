import { InfoPage } from "@/components/InfoPage";
import { SITE, meta } from "@/lib/site";

export const metadata = meta("Nicotine Vapes", "Adult nicotine vape category guidance from Centre Smoke Vape Shop. Call for current selection before visiting.", "/nicotine-vape");

export default function VapePage() {
  return <InfoPage eyebrow="Vape" title="Nicotine vapes" intro="A simple guide to the questions adult shoppers can ask when comparing vape formats and accessories." links={[{ href: "/menu/nicotine-vapes", label: "Browse reference products" }, { href: SITE.tel, label: "Call for current selection" }]}>
    <div className="notice"><strong>Availability is not published</strong>No device, flavour, nicotine strength, price or stock status on this page should be treated as current store inventory.</div>
    <h2>Start with the format</h2>
    <p>When you call or visit, ask which device formats the shop currently carries and what compatible replacement parts are available. Bringing the name of an existing device can make the conversation easier.</p>
    <h2>Compare the practical details</h2>
    <ul><li>Device format and charging connection</li><li>Compatible pods, coils or other replacement parts</li><li>Package labelling and nicotine information</li><li>Care, storage and disposal instructions from the manufacturer</li></ul>
    <h2>Before you visit</h2><p>Call {SITE.phone} to confirm today&apos;s selection and store hours.</p>
  </InfoPage>;
}
