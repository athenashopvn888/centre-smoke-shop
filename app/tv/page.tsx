import { SITE, meta } from "@/lib/site";

export const metadata = meta("Store Screen", "Centre Smoke Vape Shop branded store screen.", "/tv");

export default function TvPage() {
  return <main id="main" className="tv-screen"><div><div className="tv-mark">C</div><p>Smoke · Vape · Accessories</p><h1>Centre Smoke</h1><p>{SITE.address} · {SITE.phone}</p></div></main>;
}
