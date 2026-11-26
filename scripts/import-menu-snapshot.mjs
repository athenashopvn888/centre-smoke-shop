import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";

// Supply the authorized public source URL and its expected store identity.
// Neither value is written to the destination or exposed by the site.
const [endpoint, expectedStore] = process.argv.slice(2);
assert.ok(endpoint && expectedStore, "Pass a public menu URL and its expected store code");
assert.equal(new URL(endpoint).protocol, "https:");
const result = await fetch(endpoint, { redirect: "error", signal: AbortSignal.timeout(25000) });
assert.ok(result.ok, `Menu source returned HTTP ${result.status}`);
const source = await result.json();
assert.equal(source.state, "connected");
assert.equal(source.source, expectedStore);
assert.equal(source.sourceIdentity, "response-validated");
assert.ok(Number.isFinite(Date.parse(source.stockDate)));
assert.ok(Array.isArray(source.products) && source.products.length > 0);

const categories = new Set(["flower", "pre-rolls", "vape-disposables", "edibles", "concentrates", "accessories", "nicotine-vapes", "cigarettes", "other"]);
const tiers = new Set(["EXOTIC", "PREMIUM", "AAA+", "AA", "BUDGET"]);
const includedSlugs = new Set();
const products = source.products.map(({ sku, name, slug, category, tier, type, thc, mg, image, prices }) => {
  assert.ok(typeof sku === "string" && sku && typeof name === "string" && name);
  assert.match(slug, /^[a-z0-9][a-z0-9-]*$/);
  assert.ok(!includedSlugs.has(slug), `Duplicate product route: ${slug}`);
  includedSlugs.add(slug);
  assert.ok(categories.has(category), `Unexpected category: ${category}`);
  assert.ok(category !== "flower" || tiers.has(tier), `Unexpected flower tier: ${tier}`);
  if (image) assert.match(image, /^https:\/\/pub-eb3e1fe18a43477eabc885cfb791d97c\.r2\.dev\/products\//);
  assert.ok(Array.isArray(prices));
  const packs = prices.map(({ label, amount, regular, sale }) => {
    assert.ok((category === "flower" ? ["3g", "5g", "14g", "28g"] : ["Listed price"]).includes(label));
    assert.ok(Number.isFinite(regular) && regular > 0);
    assert.ok(sale === null || (Number.isFinite(sale) && sale > 0 && sale < regular));
    assert.equal(amount, sale ?? regular);
    return { label, amount, regular, sale };
  });
  return { sku, name, slug, category, tier, type, thc, mg, image, prices: packs };
});

const snapshot = {
  stockDate: new Date(source.stockDate).toISOString(),
  importedAt: new Date().toISOString(),
  productHash: createHash("sha256").update(JSON.stringify(products)).digest("hex"),
  products
};
await mkdir(new URL("../data/", import.meta.url), { recursive: true });
await writeFile(new URL("../data/menu-snapshot.json", import.meta.url), JSON.stringify(snapshot, null, 2) + "\n");
console.log(`${products.length} products imported with stock timestamp ${snapshot.stockDate} (SHA-256 ${snapshot.productHash})`);
