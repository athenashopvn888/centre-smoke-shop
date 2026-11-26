# Build report

## Scope

- New Athena-owned repository created after confirming no existing Centre Smoke repository or Vercel project.
- Owner-named reference storefront used for route coverage and layout rhythm only.
- Owner-supplied Centre Smoke artwork used for identity, palette, C mark and wave motifs.
- Confirmed public facts are limited to the exact business name, `15 Centre St S`, `289-804-0155` and `centresmokeshop.com`.

## Implemented

- Responsive Next.js storefront with age gate, accessible header/footer, category discovery and mobile-first layouts.
- Home, menu status, nicotine vape, cigarette, accessory, visit, contact, hours status, delivery status, FAQ, guide, resource, TV/TV2 and policy routes.
- Store-specific logo, app icons, abstract WebP hero and generated Open Graph art.
- Central store contract and safe Organization/WebSite identity schema. Full LocalBusiness address/hours schema is held.
- Fail-closed `503` menu API with no sample inventory.
- Noindex headers, robots rules and empty sitemap for preview release.
- Automated copied-identity sweep and contract/route tests.

## Verification

- Node/Next dependency audit: 0 vulnerabilities after upgrading to the patched framework and image-tool versions.
- TypeScript: PASS.
- ESLint: PASS.
- Automated contract/route tests: 6/6 PASS, including the repository-wide copied-identity sweep.
- Production build: PASS; 26 routes generated.
- Local HTTP crawl: all 20 tested public routes returned 200 with `X-Robots-Tag: noindex, nofollow, noarchive`; no copied identity appeared.
- Menu API: expected fail-closed 503 with `state: unconfigured`, null StoreCode/source and zero products.
- Desktop browser: brand header, hero, category layout and illustration visually reviewed; one H1, no broken images and no console errors.
- 390px browser: home and menu visually reviewed; no horizontal overflow, one H1, correct fail-closed menu notice and no console errors.
- Generated assets: hero WebP 26,800 bytes; logo PNGs 31,934 and 10,958 bytes, below the declared limits.

## Holds

- Full city/province/postal NAP and map destination.
- Owner-approved public hours.
- StoreCode, inventory/on-hand source and freshness contract.
- POD/delivery configuration and private delivery role.
- Voice and messaging routing proof.
- Analytics/GSC identifiers and Command Center registry entry.
- Production domain DNS/TLS and anonymous live read-back.

## State

`PR_READY` after commit and PR creation; production release still pending.
