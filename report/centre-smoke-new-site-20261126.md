# Centre Smoke new-site receipt

- Store: Centre Smoke Vape Shop
- StoreCode: HELD — not supplied
- Repository: `athenashopvn888/centre-smoke-shop`
- Branch: `codex/centre-smoke-new-site-20261126`
- Canonical domain: `https://centresmokeshop.com`
- Redirect domain: `https://www.centresmokeshop.com`
- Commit: `3e70f6052f23b68dfde7763aac8d5d75ad16001a`
- Site PR: `https://github.com/athenashopvn888/centre-smoke-shop/pull/1`
- Merge commit: `255407a71416fb37e2604718320b3a39768c23c8`
- Vercel project: `centre-smoke-shop` (`prj_wdvun8iOrgYfxjVLgAIseJcYOUZQ`)
- Production deployment: `dpl_726W81g6QM9Vi1D1EQwNcWnKLv2T`, READY
- Verified production host: `https://centre-smoke-shop.vercel.app`
- Custom domains: apex and `www` attached; Namecheap DNS/TLS held
- State: `DEPLOYED`, not `LIVE_VERIFIED`

## Implemented routes

`/`, `/menu`, `/nicotine-vape`, `/cigarettes`, `/accessories`, `/visit`, `/contact`, `/hours`, `/delivery`, `/faq`, `/guides`, `/guides/vape-shopping-basics`, `/resources`, `/resources/first-visit`, `/privacy`, `/accessibility`, `/tv`, `/tv2`, `/api/menu`, `/robots.txt`, `/sitemap.xml`, `/opengraph-image`, `/icon`, `/apple-icon`.

## Verification

- `npm run check`: PASS
- `npm run lint`: PASS
- `npm test`: 6/6 PASS
- `npm run build`: PASS; 26 generated routes
- `npm audit`: 0 vulnerabilities
- Desktop browser: PASS
- 390×844 home/menu: PASS; no horizontal overflow or console errors
- Old-store identity sweep: PASS across source, docs, tests, configuration and SVG assets
- Menu source: HELD; API correctly returns 503/unconfigured with zero products

## Holds

- Full city/province/postal NAP and map link
- Public hours
- StoreCode, live inventory and on-hand authority
- POD/delivery configuration
- Voice/messaging routing proof
- Analytics/GSC and Command Center registration
- Canonical-domain DNS/TLS and anonymous custom-host read-back

## Release read-back

- Stable Vercel production returned HTTP 200 with the exact Centre Smoke titles and no copied identity on home, menu, visit, FAQ, TV, TV2, robots and sitemap checks.
- Every checked page returned `X-Robots-Tag: noindex, nofollow, noarchive`.
- `/api/menu` returned the expected HTTP 503 with null StoreCode/source and zero products.
- Deployment-scoped error logs were clean for the checked 30-minute window.
- Vercel has both `centresmokeshop.com` and `www.centresmokeshop.com` assigned to this project.
- Namecheap still serves parking DNS: apex `192.64.119.60`, `www` CNAME `parkingpage.namecheap.com`. Registrar access stopped at a fresh login, so DNS was not changed.
- Current Vercel guidance for this project is `A @ 76.76.21.21` and `A www 76.76.21.21`. Preserve mail and nameserver records.

The Command Center receipt is merged in `athenashopvn888/fleet-seo-command-center` PR #140. Canonical-domain live verification remains pending the exact DNS change and subsequent anonymous HTTPS/redirect checks.
