import Link from "next/link";
import { CATEGORIES } from "@/lib/catalog";

export function CategoryGrid() {
  return (
    <nav className="catalog-chips" aria-label="Shop categories">
      {CATEGORIES.map((category) => (
        <Link href={`/menu/${category.slug}`} key={category.slug}>{category.name} <span aria-hidden="true"> →</span></Link>
      ))}
    </nav>
  );
}
