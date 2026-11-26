import { notFound, redirect } from "next/navigation";
import { CatalogPage } from "@/components/CatalogPage";
import { CATEGORIES } from "@/lib/catalog";
import { meta } from "@/lib/site";
import { getCigaretteDecision } from "@/lib/cigarette-control";

type Props = { params: Promise<{ category: string }> };

async function checkCategory(category: string) {
  const row = CATEGORIES.find(({ slug }) => slug === category);
  if (!row) notFound();
  if (row.slug === "cigarettes" && !(await getCigaretteDecision()).webOn) redirect("/nicotine-vape");
  return row;
}

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  const row = await checkCategory(category);
  return meta(row.name, `Browse ${row.name.toLowerCase()} in the Centre Smoke reference menu.`, `/menu/${row.slug}`);
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const row = await checkCategory(category);
  return <CatalogPage title={row.name} category={row.slug} />;
}
