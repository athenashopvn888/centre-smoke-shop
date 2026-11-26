import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const root = process.cwd();
const routes = [
  "app/page.tsx", "app/menu/page.tsx", "app/nicotine-vape/page.tsx", "app/cigarettes/page.tsx",
  "app/accessories/page.tsx", "app/visit/page.tsx", "app/contact/page.tsx", "app/hours/page.tsx",
  "app/delivery/page.tsx", "app/faq/page.tsx", "app/guides/page.tsx",
  "app/guides/vape-shopping-basics/page.tsx", "app/resources/page.tsx",
  "app/resources/first-visit/page.tsx", "app/tv/page.tsx", "app/tv2/page.tsx",
  "app/privacy/page.tsx", "app/accessibility/page.tsx"
];

test("required route family exists", async () => {
  for (const route of routes) await access(path.join(root, route));
});

test("temporary menu exposes a reference snapshot without claiming live availability", async () => {
  const source = await readFile(path.join(root, "app", "api", "menu", "route.ts"), "utf8");
  const snapshot = JSON.parse(await readFile(path.join(root, "data", "menu-snapshot.json"), "utf8"));
  assert.match(source, /state: "reference", storeCode: null, liveAvailability: false/);
  assert.doesNotMatch(source, /process\.env/);
  assert.equal(new Set(snapshot.products.map(({ slug }) => slug)).size, snapshot.products.length);
  assert.equal(new Set(snapshot.products.map(({ category }) => category)).size, 9);
  assert.deepEqual([...new Set(snapshot.products.filter(({ category }) => category === "flower").map(({ tier }) => tier))].sort(), ["AA", "AAA+", "BUDGET", "EXOTIC", "PREMIUM"]);
  for (const { prices } of snapshot.products) {
    for (const { amount, regular, sale } of prices) assert.equal(amount, sale ?? regular);
  }
});

test("preview indexing is disabled", async () => {
  const config = await readFile(path.join(root, "next.config.ts"), "utf8");
  const sitemap = await readFile(path.join(root, "app", "sitemap.ts"), "utf8");
  assert.match(config, /noindex, nofollow, noarchive/);
  assert.match(sitemap, /return \[\]/);
});
