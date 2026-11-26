import type { Metadata } from "next";

export const SITE = {
  name: "Centre Smoke Vape Shop",
  shortName: "Centre Smoke",
  address: "15 Centre St S",
  phone: "289-804-0155",
  tel: "tel:+12898040155",
  domain: "https://centresmokeshop.com",
  storeCode: null,
  pod: null,
  hours: null,
  city: null,
  province: null,
  postalCode: null,
  maps: null,
  indexable: false
} as const;

export function canonical(path = "/") {
  const clean = path === "/" ? "" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  return `${SITE.domain}${clean}`;
}

export function meta(title: string, description: string, path = "/"): Metadata {
  const pageTitle = path === "/" ? SITE.name : `${title} | ${SITE.name}`;
  return {
    title: pageTitle,
    description,
    alternates: { canonical: canonical(path) },
    robots: { index: SITE.indexable, follow: SITE.indexable, noarchive: true },
    openGraph: {
      title: pageTitle,
      description,
      url: canonical(path),
      siteName: SITE.name,
      locale: "en_CA",
      type: "website",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: SITE.name }]
    },
    twitter: { card: "summary_large_image", title: pageTitle, description, images: ["/opengraph-image"] }
  };
}
