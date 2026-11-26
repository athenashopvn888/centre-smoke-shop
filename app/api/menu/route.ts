import { NextResponse } from "next/server";
import { snapshot } from "@/lib/menu-snapshot";

export async function GET() {
  return NextResponse.json(
    { state: "reference", storeCode: null, liveAvailability: false, ...snapshot },
    { headers: { "Cache-Control": "no-store" } }
  );
}
