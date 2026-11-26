# Build report

## Scheduled cigarette visibility

Centre Smoke uses the existing fleet Website Sync decision, scoped to the cigarette control key `CSS01`. Its `CIG_CONTROL` row inherits the shared Toronto schedule while `CigOn` is blank. The control key is specific to this integration and does not identify a live inventory source.

The server-only `CIG_CONTROL_URL` setting connects Preview and Production to the same control feed. Missing or invalid decisions hide the controlled category and rows. The menu API, product and category routes, navigation, and TV2 apply the same decision. The usual fleet exceptions such as Backwoods remain accessible. Active screens refresh when the visibility changes.

## Temporary reference menu update

On 2026-11-26 the owner authorized use of the named reference storefront’s public stock list, categories, flower tiers and pricing for the temporary Centre Smoke menu. The returned stock timestamp was 2026-10-29 02:25:07 UTC. The import includes 110 products across nine categories and five flower tiers, including all listed regular and sale prices, with no reference-store identity or location fields. The menu and product pages identify the date and direct customers to confirm local stock and prices by phone; the API identifies the same data as a reference snapshot.

The storefront includes search, category and flower tier navigation, product details, and pack pricing. Exotic, Premium and AAA+ use the source's 3g and 6g pricing rules. AA preserves true 5g and 14g weights. Budget preserves each product’s listed weights. The temporary reference does not feed the delivery or live inventory lane.

Local verification: lint, typing, six tests, production build, production-dependency audit, 126 catalog and homepage HTTP checks, direct product and pricing parity across all 110 rows, and desktop/390px browser checks passed.

The original build below records the starting release before this update.

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

`DEPLOYED`. Source is merged and production is verified on the stable Vercel host. Canonical-domain DNS/TLS remains held by the existing Namecheap parking records and a fresh registrar login.
