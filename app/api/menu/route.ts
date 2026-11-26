import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { state: "unconfigured", storeCode: null, source: null, products: [], message: "An approved store-specific inventory source is not connected." },
    { status: 503, headers: { "Cache-Control": "no-store" } }
  );
}
