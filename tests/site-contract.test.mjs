import assert from "node:assert/strict";
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const root = process.cwd();

async function textFiles(dir) {
  const entries = await readdir(dir);
  const files = [];
  for (const entry of entries) {
    if ([".git", ".next", "node_modules"].includes(entry)) continue;
    const full = path.join(dir, entry);
    const info = await stat(full);
    if (info.isDirectory()) files.push(...await textFiles(full));
    else if (/\.(?:md|mjs|ts|tsx|json|css|svg)$/.test(entry)) files.push(full);
  }
  return files;
}

test("central store contract contains only approved public facts", async () => {
  const source = await readFile(path.join(root, "lib", "site.ts"), "utf8");
  assert.match(source, /name: "Centre Smoke Vape Shop"/);
  assert.match(source, /address: "15 Centre St S"/);
  assert.match(source, /phone: "289-804-0155"/);
  assert.match(source, /domain: "https:\/\/centresmokeshop\.com"/);
  assert.match(source, /storeCode: null/);
  assert.match(source, /hours: null/);
  assert.match(source, /indexable: false/);
});

test("copied-store identity sweep is clean", async () => {
  const forbidden = ["Pres" + "ton", "TPC" + "01", "CHC" + "01", "Fort" + " York", "Ott" + "awa"];
  const hits = [];
  for (const file of await textFiles(root)) {
    const source = await readFile(file, "utf8");
    for (const term of forbidden) if (source.toLowerCase().includes(term.toLowerCase())) hits.push(`${path.relative(root, file)}: ${term}`);
  }
  assert.deepEqual(hits, []);
});

test("private or unapproved business fields stay absent", async () => {
  const publicSource = [
    await readFile(path.join(root, "lib", "site.ts"), "utf8"),
    await readFile(path.join(root, "lib", "content.ts"), "utf8")
  ].join("\n");
  assert.doesNotMatch(publicSource, /openingHoursSpecification|geo:|latitude|longitude|priceRange|aggregateRating|areaServed/);
});
