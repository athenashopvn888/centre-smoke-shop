import Link from "next/link";
import type { ReactNode } from "react";

export function InfoPage({ eyebrow, title, intro, children, links }: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
  links?: { href: string; label: string }[];
}) {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="shell narrow">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="lede">{intro}</p>
          {links && <div className="button-row">{links.map((link, i) => <Link className={`button ${i === 0 ? "button--primary" : "button--ghost"}`} href={link.href} key={link.href}>{link.label}</Link>)}</div>}
        </div>
      </section>
      <section className="section"><div className="shell narrow prose">{children}</div></section>
    </main>
  );
}
