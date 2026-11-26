import { SITE, meta } from "@/lib/site";
import { getCigaretteDecision } from "@/lib/cigarette-control";
import { controlledProduct, snapshot } from "@/lib/menu-snapshot";
import { money } from "@/lib/catalog";

export const metadata = meta("Information Screen", "Centre Smoke Vape Shop information screen.", "/tv2");

export default async function Tv2Page() {
  const { tvOn } = await getCigaretteDecision();
  if (tvOn) {
    const items = snapshot.products.filter(controlledProduct);
    return (
      <main id="main" className="tv-screen tv-catalog">
        <div>
          <p>Centre Smoke Vape Shop</p>
          <h1>Cigarettes</h1>
          <p>Reference prices · Confirm in store</p>
          <ul>{items.map(({ name, slug, prices }) =>
            <li key={slug}><span>{name}</span>{prices.length > 0 && <strong>{money(prices[0].amount)}</strong>}</li>)}</ul>
        </div>
      </main>
    );
  }
  return <main id="main" className="tv-screen"><div><div className="tv-mark">C</div><p>Adult shop information</p><h1>Call before you visit</h1><p>{SITE.phone} · {SITE.address}</p><p>Current menu and hours are confirmed by phone.</p></div></main>;
}
