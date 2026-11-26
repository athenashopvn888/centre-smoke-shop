import { InfoPage } from "@/components/InfoPage";
import { meta } from "@/lib/site";

export const metadata = meta("Privacy", "Centre Smoke Vape Shop website privacy information.", "/privacy");

export default function PrivacyPage() {
  return <InfoPage eyebrow="Site policy" title="Privacy" intro="This preview is designed to collect as little information as possible."><h2>What this site stores</h2><p>The age-confirmation choice is stored in your browser. The website does not provide an account, checkout, contact form or identification upload.</p><h2>Hosting logs</h2><p>The hosting provider may process routine request and security logs needed to operate the website. Analytics are not configured in this preview.</p><h2>Contact</h2><p>For shop questions, use the phone number on the contact page.</p></InfoPage>;
}
