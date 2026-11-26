import { InfoPage } from "@/components/InfoPage";
import { SITE, meta } from "@/lib/site";

export const metadata = meta("Accessibility", "Accessibility information for the Centre Smoke Vape Shop website.", "/accessibility");

export default function AccessibilityPage() {
  return <InfoPage eyebrow="Site policy" title="Accessibility" intro="The site is built for keyboard navigation, readable contrast, reduced motion and responsive text." links={[{ href: SITE.tel, label: "Call the shop" }, { href: "/contact", label: "Contact details" }]}><h2>Using the website</h2><p>Pages use semantic headings, visible keyboard focus, labelled controls and large touch targets. Motion is reduced when your device requests it.</p><h2>Need help?</h2><p>Call {SITE.phone} for shop information. Physical-location accessibility details have not been published yet.</p></InfoPage>;
}
