import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { PackPrices, ProductArt } from "@/components/Catalog";
import { CatalogNotice } from "@/components/CatalogPage";
import { categoryName, tierName } from "@/lib/catalog";
import { controlledProduct, snapshot, visibleProducts } from "@/lib/menu-snapshot";
import { getCigaretteDecision } from "@/lib/cigarette-control";
import { meta, SITE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };
async function getVisibleProduct(slug: string) {
  const product = snapshot.products.find((item) => item.slug === slug);
  if (!product) notFound();
  const { webOn } = await getCigaretteDecision();
  if (!webOn && controlledProduct(product)) redirect("/nicotine-vape");
  return visibleProducts(webOn).find((item) => item.slug === slug) ?? product;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = await getVisibleProduct(slug);
  return meta(product.name, `Compare listed pack sizes and prices for ${product.name}.`, `/products/${slug}`);
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getVisibleProduct(slug);
  return (
    <main id="main" className="shell catalog-shell">
      <nav className="catalog-back" aria-label="Breadcrumb"><Link href={`/menu/${product.category}`}>← {categoryName(product.category)}</Link></nav>
      <CatalogNotice />
      <article className="catalog-detail">
        <ProductArt product={product} eager />
        <div>
          <p className="eyebrow">{categoryName(product.category)}{product.tier && ` · ${tierName(product.tier)}`}</p>
          <h1>{product.name}</h1>
          <p>{[product.type, product.thc && `THC ${product.thc}`, product.mg].filter(Boolean).join(" · ")}</p>
          <p className="catalog-sku">SKU {product.sku}</p>
          <h2>Pack prices</h2>
          <PackPrices product={product} detailed />
          <a className="button button--primary" href={SITE.tel}>Call to confirm</a>
        </div>
      </article>
    </main>
  );
}
