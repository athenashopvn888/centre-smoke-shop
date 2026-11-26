import Image from "next/image";
import Link from "next/link";
import { CategoryGrid } from "@/components/CategoryGrid";
import { SITE, canonical, meta } from "@/lib/site";

export const metadata = meta(
  SITE.name,
  "Centre Smoke Vape Shop at 15 Centre St S. Explore adult smoke, vape and accessory categories, then call the shop before visiting."
);

const identitySchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${SITE.domain}/#organization`, name: SITE.name, url: SITE.domain, telephone: "+1-289-804-0155" },
    { "@type": "WebSite", "@id": `${SITE.domain}/#website`, name: SITE.name, url: SITE.domain, publisher: { "@id": `${SITE.domain}/#organization` } }
  ]
};

export default function Home() {
  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(identitySchema).replace(/</g, "\\u003c") }} />
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Smoke · Vape · Accessories</p>
            <h1>Centre Smoke<br /><span>Vape Shop</span></h1>
            <p className="hero-lede">A clean, straightforward place for adult smoke and vape shopping at {SITE.address}.</p>
            <div className="button-row">
              <Link className="button button--primary" href="/menu">Explore the shop</Link>
              <a className="button button--ghost" href={SITE.tel}>Call {SITE.phone}</a>
            </div>
            <dl className="hero-facts">
              <div><dt>Visit</dt><dd>{SITE.address}</dd></div>
              <div><dt>Hours</dt><dd>Call to confirm</dd></div>
            </dl>
          </div>
          <div className="hero-art">
            <span className="art-label">Brand illustration</span>
            <Image src="/brand/centre-hero.webp" alt="Green and white Centre Smoke Vape Shop brand illustration" width={1200} height={900} priority sizes="(max-width: 800px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      <section className="category-band section">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow">Start here</p><h2>Shop by category</h2></div>
            <p>Browse useful category information now. Current products and prices will appear only after a store-specific inventory source is approved.</p>
          </div>
          <CategoryGrid />
        </div>
      </section>

      <section className="section split-section">
        <div className="shell split-grid">
          <div className="feature-panel feature-panel--green">
            <p className="eyebrow eyebrow--light">A better first visit</p>
            <h2>Know what to ask before you arrive.</h2>
            <p>Use the guides to compare formats and prepare questions. For hours, current selection or service details, call the shop directly.</p>
            <Link className="button button--white" href="/resources/first-visit">Plan your visit</Link>
          </div>
          <div className="feature-list">
            <article><span>01</span><div><h3>Clear categories</h3><p>Smoke, vape and accessory sections stay easy to scan on any screen.</p></div></article>
            <article><span>02</span><div><h3>No made-up stock</h3><p>The menu stays closed until the correct store feed is connected and verified.</p></div></article>
            <article><span>03</span><div><h3>Direct contact</h3><p>Call the number printed on the storefront artwork before making the trip.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section visit-strip">
        <div className="shell visit-card">
          <div><p className="eyebrow">Visit Centre Smoke</p><h2>{SITE.address}</h2><p>Approved public hours and the complete postal address are being confirmed.</p></div>
          <div className="visit-actions"><a className="button button--primary" href={SITE.tel}>Call {SITE.phone}</a><Link className="text-link" href="/visit">Visit details →</Link></div>
        </div>
      </section>
      <link rel="canonical" href={canonical()} />
    </main>
  );
}
