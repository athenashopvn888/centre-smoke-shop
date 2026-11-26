import Link from "next/link";
import { CATEGORIES } from "@/lib/content";

export function CategoryGrid() {
  return (
    <div className="category-grid">
      {CATEGORIES.map((category) => (
        <Link className="category-card" href={category.href} key={category.name}>
          <span className="category-mark" aria-hidden="true">{category.mark}</span>
          <span className="eyebrow">{category.eyebrow}</span>
          <h3>{category.name}</h3>
          <p>{category.text}</p>
          <span className="text-link">Explore category <span aria-hidden="true">→</span></span>
        </Link>
      ))}
    </div>
  );
}
