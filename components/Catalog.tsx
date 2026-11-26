"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { categoryName, money, tierName, topTiers, type Product } from "@/lib/catalog";

export function ProductArt({ product, eager = false }: { product: Product; eager?: boolean }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="catalog-art">
      {product.image && !failed
        ? <Image src={product.image} alt={product.name} fill unoptimized loading={eager ? "eager" : "lazy"} sizes="(max-width: 720px) 95vw, 33vw" onError={() => setFailed(true)} />
        : <Image src="/brand/centre-mark.svg" alt="" width={84} height={84} />}
    </div>
  );
}

export function PackPrices({ product, detailed = false }: { product: Product; detailed?: boolean }) {
  if (!product.prices.length) return <p>Price on request</p>;
  const topTier = product.category === "flower" && topTiers.has(product.tier);
  return (
    <dl className="pack-prices" aria-label="Reference pricing">
      {product.prices.map((price) => {
        const label = topTier && price.label === "5g" ? "6g" : price.label;
        const grams = product.category === "flower" ? Number.parseInt(label, 10) : 0;
        const paidGrams = topTier && (grams === 3 || grams === 6) ? (grams === 3 ? 2 : 3) : null;
        return (
          <div key={price.label}>
            <dt>{label}</dt>
            <dd>
              {price.sale !== null && <del aria-label={`Regular price ${money(price.regular)}`}>{money(price.regular)}</del>}
              <strong>{money(price.amount)}</strong>
              {detailed && grams > 0 && <small>{money(price.amount / grams)}/g{paidGrams && ` · ${paidGrams}g paid / ${grams}g total`}</small>}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}

export function Catalog({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("name");
  const [type, setType] = useState("");
  const types = useMemo(() => [...new Set(products.filter((item) => item.category === "flower").map((item) => item.type.toLowerCase()).filter(Boolean))].sort(), [products]);
  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return products.filter((item) => {
      const searchable = [item.name, item.sku, categoryName(item.category), tierName(item.tier), item.type].join(" ").toLowerCase();
      return searchable.includes(needle) && (!type || item.type.toLowerCase() === type);
    }).sort((a, b) => {
      if (sort === "price") {
        const difference = Math.min(...a.prices.map((price) => price.amount)) - Math.min(...b.prices.map((price) => price.amount));
        if (difference) return difference;
      }
      return a.name.localeCompare(b.name);
    });
  }, [products, query, sort, type]);

  return (
    <>
      <div className="catalog-controls">
        <label>Search products
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Name, SKU or category" />
        </label>
        <label>Sort by
          <select value={sort} onChange={(event) => setSort(event.target.value)}>
            <option value="name">Name A–Z</option><option value="price">Price: low to high</option>
          </select>
        </label>
        {types.length > 0 && <label>Flower type
          <select value={type} onChange={(event) => setType(event.target.value)}>
            <option value="">All types</option>{types.map((value) => <option key={value}>{value}</option>)}
          </select>
        </label>}
      </div>
      <p role="status" className="catalog-count">{visible.length} {visible.length === 1 ? "product" : "products"}</p>
      {visible.length === 0 && <p>No matching products. <button type="button" className="catalog-reset" onClick={() => { setQuery(""); setType(""); setSort("name"); }}>Clear filters</button></p>}
      <div className="catalog-grid">
        {visible.map((product) => (
          <article className="catalog-card" key={product.slug}>
            <Link href={`/products/${product.slug}`} className="catalog-product-link" prefetch={false}>
              <ProductArt product={product} />
              <p className="eyebrow">{product.category === "flower" ? tierName(product.tier) : categoryName(product.category)}</p>
              <h3>{product.name}</h3>
            </Link>
            <PackPrices product={product} />
          </article>
        ))}
      </div>
    </>
  );
}
