import { InfoPage } from "@/components/InfoPage";
import { SITE, meta } from "@/lib/site";

export const metadata = meta("Smoke & Vape Accessories", "Explore smoke, rolling and vape accessory categories at Centre Smoke Vape Shop. Call for current selection.", "/accessories");

export default function AccessoriesPage() {
  return <InfoPage eyebrow="Accessories" title="Smoke & vape gear" intro="Prepare for your visit with a quick overview of common accessory questions." links={[{ href: SITE.tel, label: "Call for current selection" }, { href: "/resources/first-visit", label: "First-visit guide" }]}>
    <div className="status-grid"><article className="status-card"><h3>Rolling essentials</h3><p>Ask about paper or cone size, quantity and material preferences.</p></article><article className="status-card"><h3 id="tools">Everyday tools</h3><p>Ask about grinders, storage and other practical smoke accessories.</p></article><article className="status-card"><h3>Vape accessories</h3><p>Bring the exact device name when asking about compatible parts.</p></article><article className="status-card"><h3>Care items</h3><p>Follow device and accessory manufacturer instructions for care and storage.</p></article></div>
    <h2>Selection changes</h2><p>The site does not claim a specific accessory is in stock. Call {SITE.phone} before visiting if you need a particular item.</p>
  </InfoPage>;
}
