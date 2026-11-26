import Link from "next/link";

export default function NotFound() {
  return <main id="main" className="section"><div className="shell narrow prose"><p className="eyebrow">404</p><h1>Page not found</h1><p>The page may have moved. Return to the Centre Smoke home page or explore the current menu status.</p><div className="button-row"><Link className="button button--primary" href="/">Home</Link><Link className="button button--ghost" href="/menu">Menu status</Link></div></div></main>;
}
