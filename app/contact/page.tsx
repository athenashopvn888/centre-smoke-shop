import { InfoPage } from "@/components/InfoPage";
import { SITE, meta } from "@/lib/site";

export const metadata = meta("Contact", "Call Centre Smoke Vape Shop at 289-804-0155 or visit 15 Centre St S.", "/contact");

export default function ContactPage() {
  return <InfoPage eyebrow="Contact" title="Talk to the shop" intro="The fastest way to confirm hours, categories and current service details is to call Centre Smoke directly." links={[{ href: SITE.tel, label: `Call ${SITE.phone}` }, { href: "/visit", label: "Visit details" }]}>
    <h2>Centre Smoke Vape Shop</h2><p><strong>Address:</strong> {SITE.address}</p><p><strong>Phone:</strong> <a href={SITE.tel}>{SITE.phone}</a></p>
    <div className="notice"><strong>Contact form not enabled</strong>The site does not collect messages or identification documents. Call the shop instead.</div>
  </InfoPage>;
}
