import { NextResponse } from "next/server";
import { createHash } from "node:crypto";
import { snapshot, visibleProducts } from "@/lib/menu-snapshot";
import { contentStatusHeaders, getCigaretteDecision } from "@/lib/cigarette-control";

export const dynamic = "force-dynamic";

export async function GET() {
  const { webOn } = await getCigaretteDecision();
  const products = visibleProducts(webOn);
  const productHash = createHash("sha256").update(JSON.stringify(products)).digest("hex");
  return NextResponse.json(
    { state: "reference", storeCode: null, liveAvailability: false, ...snapshot, products, productHash },
    { headers: contentStatusHeaders }
  );
}
