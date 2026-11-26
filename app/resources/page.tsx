import Link from "next/link";
import { InfoPage } from "@/components/InfoPage";
import { meta } from "@/lib/site";

export const metadata = meta("Resources", "Centre Smoke Vape Shop visit, FAQ and category resources.", "/resources");

export default function ResourcesPage() {
  return <InfoPage eyebrow="Resources" title="Useful before you visit" intro="Find the confirmed details and category guides in one place."><div className="guide-grid"><Link className="guide-card" href="/resources/first-visit"><h3>First-visit checklist</h3><p>Confirm hours, selection and identification before travelling.</p><span className="text-link">Open checklist →</span></Link><Link className="guide-card" href="/faq"><h3>Shop FAQ</h3><p>Location, phone, menu and service-status answers.</p><span className="text-link">Read FAQ →</span></Link><Link className="guide-card" href="/guides"><h3>Adult shopping guides</h3><p>Practical questions to prepare.</p><span className="text-link">Browse guides →</span></Link><Link className="guide-card" href="/contact"><h3>Contact the shop</h3><p>Use the confirmed store phone number.</p><span className="text-link">Contact details →</span></Link></div></InfoPage>;
}
