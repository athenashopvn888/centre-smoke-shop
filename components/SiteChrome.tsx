import Link from "next/link";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";

const NAV = [
  ["Menu", "/menu"],
  ["Vape", "/nicotine-vape"],
  ["Cigarettes", "/cigarettes"],
  ["Accessories", "/accessories"],
  ["Visit", "/visit"]
] as const;

export function Header() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="announcement">Adult smoke, vape and accessory shop · Call before visiting</div>
      <header className="site-header">
        <div className="shell header-inner">
          <Logo />
          <nav aria-label="Primary navigation">
            {NAV.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          </nav>
          <a className="button button--small button--primary header-call" href={SITE.tel}>Call shop</a>
        </div>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-wave" aria-hidden="true" />
      <div className="shell footer-grid">
        <div>
          <Logo compact />
          <p>Adult smoke, vape and accessory shopping at {SITE.address}.</p>
        </div>
        <div>
          <h2>Visit</h2>
          <p>{SITE.address}</p>
          <p><a href={SITE.tel}>{SITE.phone}</a></p>
          <p className="muted-on-dark">Call to confirm today&apos;s hours.</p>
        </div>
        <div>
          <h2>Explore</h2>
          <Link href="/menu">Menu status</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/resources">Resources</Link>
        </div>
        <div>
          <h2>Site</h2>
          <Link href="/accessibility">Accessibility</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="shell footer-bottom">© {new Date().getFullYear()} Centre Smoke Vape Shop. Adults only.</div>
    </footer>
  );
}
