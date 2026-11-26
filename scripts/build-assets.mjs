import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const brand = path.join(root, "public", "brand");
await mkdir(brand, { recursive: true });

await sharp(path.join(brand, "centre-mark.svg"))
  .resize(512, 512)
  .png({ compressionLevel: 9 })
  .toFile(path.join(brand, "centre-logo-512.png"));

await sharp(path.join(brand, "centre-mark.svg"))
  .resize(192, 192)
  .png({ compressionLevel: 9 })
  .toFile(path.join(brand, "centre-logo-192.png"));

await sharp(path.join(brand, "centre-hero.svg"))
  .resize(1200, 900)
  .webp({ quality: 84, effort: 6 })
  .toFile(path.join(brand, "centre-hero.webp"));

console.log("Centre Smoke brand assets generated.");
