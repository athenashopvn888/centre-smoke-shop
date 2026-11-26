import { notFound } from "next/navigation";
import { CatalogPage } from "@/components/CatalogPage";
import { TIERS } from "@/lib/catalog";
import { meta } from "@/lib/site";

type Props = { params: Promise<{ tier: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => TIERS.map(({ slug }) => ({ tier: slug }));

export async function generateMetadata({ params }: Props) {
  const { tier } = await params;
  const row = TIERS.find(({ slug }) => slug === tier);
  return row ? meta(`${row.name} Flower`, `Compare ${row.name} flower pack sizes and listed prices.`, `/${row.slug}`) : {};
}

export default async function TierPage({ params }: Props) {
  const { tier } = await params;
  const row = TIERS.find(({ slug }) => slug === tier);
  if (!row) notFound();
  return <CatalogPage title={`${row.name} Flower`} category="flower" tier={row.key} />;
}
