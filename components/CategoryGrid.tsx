import Link from "next/link";
import { CATEGORIES } from "@/lib/catalog";
import { getCigaretteDecision } from "@/lib/cigarette-control";

export async function CategoryGrid() {
  const { webOn } = await getCigaretteDecision();
  return (
    <nav className="catalog-chips" aria-label="Shop categories">
      {CATEGORIES.filter(({ slug }) => webOn || slug !== "cigarettes").map((category) => (
        <Link href={`/menu/${category.slug}`} prefetch={false} key={category.slug}>{category.name} <span aria-hidden="true"> →</span></Link>
      ))}
    </nav>
  );
}
