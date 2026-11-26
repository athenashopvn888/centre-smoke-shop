# Route and capability matrix

| Customer journey | Route | Status |
|---|---|---|
| Branded home and category discovery | `/` | Implemented |
| Complete menu | `/menu` and `/api/menu` | Fail-closed until authoritative StoreCode/feed exists |
| Nicotine vape category | `/nicotine-vape` | Evergreen category guidance; no stock claims |
| Cigarette category | `/cigarettes` | Evergreen category guidance; no brand/stock claims |
| Accessories category | `/accessories` | Evergreen category guidance; no stock claims |
| Visit/contact | `/visit`, `/contact` | Confirmed street address and phone only |
| Hours | `/hours` | Held schedule with call-to-confirm path |
| Delivery | `/delivery` | Held operational claims; phone path only |
| FAQ | `/faq` | Visible facts mirrored to FAQ schema |
| Guides/resources | `/guides`, `/guides/vape-shopping-basics`, `/resources`, `/resources/first-visit` | Implemented with non-inventory education |
| TV screens | `/tv`, `/tv2` | Branded informational fallback; no feed simulation |
| Privacy/accessibility | `/privacy`, `/accessibility` | Implemented |
| Search/indexing | robots/sitemap/canonicals | Noindex preview; empty sitemap until release gate |
