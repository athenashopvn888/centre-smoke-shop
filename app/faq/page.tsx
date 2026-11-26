import { InfoPage } from "@/components/InfoPage";
import { FAQS } from "@/lib/content";
import { meta } from "@/lib/site";

export const metadata = meta("FAQ", "Answers about Centre Smoke Vape Shop location, phone, hours, online menu and delivery status.", "/faq");

export default function FaqPage() {
  const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  return <InfoPage eyebrow="Questions" title="Frequently asked questions" intro="Straight answers based only on confirmed shop information.">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <div className="faq-list">{FAQS.map(({ q, a }) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
  </InfoPage>;
}
