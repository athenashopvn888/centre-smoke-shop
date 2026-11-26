import Image from "next/image";
import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link className={`brand-logo${compact ? " brand-logo--compact" : ""}`} href="/" aria-label="Centre Smoke Vape Shop home">
      <Image src="/brand/centre-mark.svg" width={56} height={56} alt="" priority />
      <span>
        <strong>Centre</strong>
        <span>Smoke Vape Shop</span>
      </span>
    </Link>
  );
}
