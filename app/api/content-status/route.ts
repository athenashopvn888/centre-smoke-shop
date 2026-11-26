import { contentStatusHeaders, getCigaretteDecision } from "@/lib/cigarette-control";

export const dynamic = "force-dynamic";

export async function GET() {
  const decision = await getCigaretteDecision();
  return Response.json({ storeCode: "CSS01", cigaretteWebOn: decision.webOn, cigaretteTvOn: decision.tvOn, source: decision.source }, { headers: contentStatusHeaders });
}
