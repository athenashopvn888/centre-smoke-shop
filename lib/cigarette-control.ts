import "server-only";
import { cache } from "react";

const CONTROL_KEY = "CSS01";
const off = { webOn: false, tvOn: false, source: "unavailable" } as const;
type Decision = { webOn: boolean; tvOn: boolean; source: string };
let current: { until: number; decision: Decision } | undefined;
let inflight: Promise<Decision> | undefined;

async function readDecision(): Promise<Decision> {
  try {
    const endpoint = new URL(process.env.CIG_CONTROL_URL ?? "");
    if (endpoint.origin !== "https://script.google.com" || !/^\/macros\/s\/[^/]+\/exec$/.test(endpoint.pathname)) return off;
    endpoint.searchParams.set("store", CONTROL_KEY);
    const response = await fetch(endpoint, { cache: "no-store", signal: AbortSignal.timeout(8000) });
    if (!response.ok) return off;
    const { cig } = await response.json();
    if (!cig || !["ALL", CONTROL_KEY].includes(cig.source) ||
        typeof cig.webOn !== "boolean" || typeof cig.tvOn !== "boolean") return off;
    return { webOn: cig.webOn, tvOn: cig.tvOn, source: cig.source };
  } catch {
    return off;
  }
}

export const getCigaretteDecision = cache(async () => {
  if (current && current.until > Date.now()) return current.decision;
  inflight ??= readDecision().then((decision) => {
    current = { decision, until: Date.now() + (decision.source === "unavailable" ? 5000 : 30000) };
    inflight = undefined;
    return decision;
  });
  return inflight;
});

export const contentStatusHeaders = { "Cache-Control": "private, no-store, max-age=0" };
