import Link from "next/link";
import { InfoPage } from "@/components/InfoPage";
import { meta } from "@/lib/site";

export const metadata = meta("Guides", "Simple adult shopping guides from Centre Smoke Vape Shop.", "/guides");

export default function GuidesPage() {
  return <InfoPage eyebrow="Learn" title="Shop guides" intro="Short, practical reading for adult shoppers planning a visit."><div className="guide-grid"><Link className="guide-card" href="/guides/vape-shopping-basics"><p className="eyebrow">Vape</p><h3>Vape shopping basics</h3><p>Questions to prepare before comparing devices and compatible parts.</p><span className="text-link">Read guide →</span></Link><Link className="guide-card" href="/resources/first-visit"><p className="eyebrow">Visit</p><h3>Your first visit</h3><p>What to confirm before travelling to the shop.</p><span className="text-link">Read guide →</span></Link></div></InfoPage>;
}
