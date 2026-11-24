# budget website

The storefront for the budget sheets and the budget app. It's a plain website (HTML, CSS and a little JavaScript), hosted on Cloudflare.

## What's where

| File | What it is |
|---|---|
| `public/index.html` | Home page |
| `public/sheets.html` | All budget sheets + comparison table |
| `public/sheets/*.html` | One page per product (starter, complete, ultimate, bundle) |
| `public/app.html` | Budget app page (Free vs Pro) |
| `public/about.html`, `support.html` | About and Support/FAQ |
| `public/privacy.html`, `terms.html`, `refunds.html` | Legal pages (drafts) |
| `public/assets/products.js` | **Product names, prices, features and checkout links. Edit prices here.** |
| `public/assets/site.js` | Shared header, footer and product cards |
| `public/assets/styles.css` | All the styling |

## Changing the brand name

The name "budget website" is set at the top of `public/assets/site.js` (header and footer) and in each page's `<title>`.

## Turning on checkout later

Each product in `products.js` has a `checkout: ""` line. Paste a Stripe payment link there and that product's button changes from "Coming soon" to "Buy now".

## Hosting

Cloudflare builds the site from this GitHub repo. Every push to `main` updates the live site automatically.
