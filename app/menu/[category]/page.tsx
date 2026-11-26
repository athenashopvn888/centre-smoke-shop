import { notFound } from "next/navigation";
import { CatalogPage } from "@/components/CatalogPage";
import { CATEGORIES } from "@/lib/catalog";
import { meta } from "@/lib/site";

type Props = { params: Promise<{ category: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => CATEGORIES.map(({ slug }) => ({ category: slug }));

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  const row = CATEGORIES.find(({ slug }) => slug === category);
  return row ? meta(row.name, `Browse ${row.name.toLowerCase()} in the Centre Smoke reference menu.`, `/menu/${row.slug}`) : {};
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const row = CATEGORIES.find(({ slug }) => slug === category);
  if (!row) notFound();
  return <CatalogPage title={row.name} category={row.slug} />;
}
