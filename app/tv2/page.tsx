import { SITE, meta } from "@/lib/site";

export const metadata = meta("Information Screen", "Centre Smoke Vape Shop information screen.", "/tv2");

export default function Tv2Page() {
  return <main id="main" className="tv-screen"><div><div className="tv-mark">C</div><p>Adult shop information</p><h1>Call before you visit</h1><p>{SITE.phone} · {SITE.address}</p><p>Current menu and hours are confirmed by phone.</p></div></main>;
}
