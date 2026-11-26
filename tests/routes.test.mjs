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

test("menu fails closed without an approved source", async () => {
  const source = await readFile(path.join(root, "app", "api", "menu", "route.ts"), "utf8");
  assert.match(source, /state: "unconfigured"/);
  assert.match(source, /products: \[\]/);
  assert.match(source, /status: 503/);
  assert.doesNotMatch(source, /process\.env/);
});

test("preview indexing is disabled", async () => {
  const config = await readFile(path.join(root, "next.config.ts"), "utf8");
  const sitemap = await readFile(path.join(root, "app", "sitemap.ts"), "utf8");
  assert.match(config, /noindex, nofollow, noarchive/);
  assert.match(sitemap, /return \[\]/);
});
