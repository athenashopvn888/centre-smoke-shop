# Centre Smoke new-site receipt

- Store: Centre Smoke Vape Shop
- StoreCode: HELD — not supplied
- Repository: `athenashopvn888/centre-smoke-shop`
- Branch: `codex/centre-smoke-new-site-20261126`
- Canonical domain: `https://centresmokeshop.com`
- Redirect domain: `https://www.centresmokeshop.com`
- Vercel project: `centre-smoke-shop` target; creation/deployment pending
- State: `PR_READY` after PR creation

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
- Domain DNS/TLS and anonymous production read-back

PR, commit, deployment and production evidence are appended after each gate is completed.
