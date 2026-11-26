import type { Metadata, Viewport } from "next";
import { AgeGate } from "@/components/AgeGate";
import { Footer, Header } from "@/components/SiteChrome";
import { SITE } from "@/lib/site";
import { getCigaretteDecision } from "@/lib/cigarette-control";
import { ContentStatusRefresh } from "@/components/ContentStatusRefresh";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: SITE.name,
  description: "Centre Smoke Vape Shop at 15 Centre St S. Explore adult smoke, vape and accessory categories, then call the shop before visiting.",
  applicationName: SITE.name,
  robots: { index: false, follow: false, noarchive: true },
  icons: { icon: "/icon", apple: "/apple-icon" }
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#09620F" };
export const dynamic = "force-dynamic";

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const { webOn, tvOn } = await getCigaretteDecision();
  return (
    <html lang="en">
      <body>
        <AgeGate />
        <Header showCigarettes={webOn} />
        <ContentStatusRefresh webOn={webOn} tvOn={tvOn} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
