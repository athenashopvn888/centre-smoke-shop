import Link from "next/link";
import { notFound } from "next/navigation";
import { PackPrices, ProductArt } from "@/components/Catalog";
import { CatalogNotice } from "@/components/CatalogPage";
import { categoryName, tierName } from "@/lib/catalog";
import { snapshot } from "@/lib/menu-snapshot";
import { meta, SITE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => snapshot.products.map(({ slug }) => ({ slug }));

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = snapshot.products.find((item) => item.slug === slug);
  return product ? meta(product.name, `Compare listed pack sizes and prices for ${product.name}.`, `/products/${slug}`) : {};
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = snapshot.products.find((item) => item.slug === slug);
  if (!product) notFound();
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
