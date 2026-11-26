import Image from "next/image";
import Link from "next/link";
import { Catalog } from "@/components/Catalog";
import { CATEGORIES, TIERS } from "@/lib/catalog";
import { snapshot, sourceDate } from "@/lib/menu-snapshot";
import { SITE } from "@/lib/site";

export function CatalogNotice() {
  return <p className="catalog-notice"><strong>Reference menu · {sourceDate}</strong><span>Listed prices are in CAD. Call <a href={SITE.tel}>{SITE.phone}</a> to confirm current stock and prices at Centre Smoke.</span></p>;
}

export function CatalogPage({ title, category, tier }: { title: string; category?: string; tier?: string }) {
  const products = snapshot.products.filter((item) => (!category || item.category === category) && (!tier || item.tier === tier));
  const menu = !category && !tier;
  return (
    <main id="main" className="shell catalog-shell">
      {!menu && <nav aria-label="Breadcrumb" className="catalog-back"><Link href="/menu">← All menu items</Link></nav>}
      <header className={`catalog-banner ${menu ? "catalog-banner--dark" : "catalog-banner--light"}`}>
        <Image src={menu ? "/brand/menu-banner.webp" : "/brand/category-banner.webp"} alt="" fill sizes="100vw" priority />
        <div className="catalog-banner-copy">
          <p className="eyebrow">Centre Smoke Vape Shop</p>
          <h1>{title}</h1>
          {menu && <p>Browse products and compare pack prices.</p>}
        </div>
        {menu && <Image className="catalog-banner-decal" src="/brand/centre-menu-decal.svg" alt="" width={110} height={110} />}
      </header>
      <CatalogNotice />
      <nav className="catalog-chips" aria-label="Menu categories">
        <Link href="/menu" aria-current={menu ? "page" : undefined}>All products</Link>
        {CATEGORIES.map((row) => <Link key={row.slug} href={`/menu/${row.slug}`} aria-current={category === row.slug && !tier ? "page" : undefined}>{row.name}</Link>)}
      </nav>
      <nav className="catalog-tiers" aria-label="Flower tiers">
        <Image src="/brand/centre-tier-decal.svg" alt="" width={70} height={70} />
        <div>
          <h2>Flower tiers</h2>
          <div className="catalog-chips">{TIERS.map((row) => <Link key={row.slug} href={`/${row.slug}`} aria-current={tier === row.key ? "page" : undefined}>{row.name}</Link>)}</div>
        </div>
      </nav>
      {(menu || category === "flower") && <details className="catalog-explainer" open={Boolean(tier)}>
        <summary>How flower pack pricing works</summary>
        <p>Exotic, Premium and AAA+ use 3g packs (2g paid + 1g included) and, where listed, 6g packs (3g paid + 3g included). The per-gram rate is the listed pack price divided by the full pack weight.</p>
        <p>AA uses the listed 5g and 14g pack weights. Budget uses the listed weights for each item. When both regular and sale prices appear, the crossed-out amount is the regular price.</p>
      </details>}
      <h2 className="catalog-products-heading">{menu ? "All products" : `${title} products`}</h2>
      <Catalog products={products} />
    </main>
  );
}
