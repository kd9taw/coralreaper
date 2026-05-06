# Coral Reaper — brand site

Phase 1 brand presence for Coral Reaper. Static Astro site, deployed on Cloudflare Pages, free tier. Phase 2 (Shopify storefront) and Phase 3 (WhatNot live auctions) are additive — see the plan in `/home/srmccall/.claude/plans/we-are-creating-a-linear-cupcake.md`.

## Local development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in /dist
npm run preview  # serves /dist locally
```

## Project layout

```
public/                  static assets served at site root
  logo.png               primary logo (512px)
  apple-touch-icon.png   iOS home-screen icon (180px)
  favicon-16.png / favicon-32.png
  og-image.png           1200×630 social card
  robots.txt
src/
  layouts/BaseLayout.astro    head, OG/Twitter cards, JSON-LD Organization schema
  components/
    Header.astro              sticky nav with active state
    Footer.astro              three-column footer + legal row
    Hero.astro                full-bleed hero with bloom backdrop and email signup
    EmailSignup.astro         Buttondown form (hero and inline variants)
    DropTeaser.astro          three-tile teaser grid
  pages/
    index.astro               home: hero + drops teaser + how-it-works
    about.astro
    drops.astro               coming-soon status card + email signup
    contact.astro             form (Formspree)
    404.astro
  styles/global.css           design tokens, type scale, button styles
scripts/build-assets.mjs      regenerates logo/favicon/og-image from thumbnail.png
thumbnail.png                 source logo (do not delete; rebuilds derive from it)
astro.config.mjs              site URL, sitemap integration
```

## Pre-deploy configuration

A few placeholder values must be set before going live:

1. **Buttondown username** in `src/components/EmailSignup.astro` (constant `BUTTONDOWN_USERNAME`). Sign up at [buttondown.email](https://buttondown.email) (free up to 100 subscribers), then replace `coralreaper` with the actual handle.
2. **Formspree form ID** in `src/pages/contact.astro` (constant `FORMSPREE_ID`). Create a free form at [formspree.io](https://formspree.io), copy the form hash from `https://formspree.io/f/<HASH>`, and paste it in.
3. **Site URL** in `astro.config.mjs` is hard-coded to `https://coralreaper.com`. Adjust if launching on a different domain.

## Regenerate logo derivatives

If the logo source changes, replace `thumbnail.png` and run:

```sh
node scripts/build-assets.mjs
```

This regenerates `public/logo.png`, the favicons, the apple-touch-icon, and the OG image.

## Deploy to Cloudflare Pages

1. Push this repo to GitHub.
2. Go to [Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git](https://dash.cloudflare.com).
3. Pick the repo. Build settings:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version env var**: `NODE_VERSION = 22`
4. First deploy assigns a `*.pages.dev` URL — verify it works before pointing DNS.

## DNS — point coralreaper.com (GoDaddy) at Cloudflare Pages

Keep GoDaddy as registrar and DNS host (no nameserver change needed):

1. In Cloudflare Pages → your project → **Custom domains** → Add `coralreaper.com` and `www.coralreaper.com`.
2. Cloudflare will show you the records to add.
3. In GoDaddy DNS Manager for `coralreaper.com`:
   - Delete any existing parking `A` and `CNAME` records for `@` and `www`.
   - Add `CNAME` `www` → `coral-reaper.pages.dev` (or whatever your project domain is).
   - For the apex (`@`): GoDaddy doesn't support ALIAS/ANAME. Two options:
     - **Recommended**: Add the four `A` records Cloudflare provides for apex pointing.
     - **Alternative**: Migrate nameservers to Cloudflare for full flexibility (longer-term cleaner).
4. Wait ~10 minutes; Cloudflare auto-provisions SSL.
5. Verify: `dig coralreaper.com` returns Cloudflare IPs, `https://coralreaper.com` loads with valid cert.

## Phase 2 — adding Shopify (when inventory is ready)

When you're ready to sell:

1. Subscribe to **Shopify Basic** (~$39/mo).
2. In Shopify settings → Domains → Connect existing domain → enter `shop.coralreaper.com`.
3. In GoDaddy DNS, add `CNAME` `shop` → `shops.myshopify.com`.
4. Update the header/footer nav and the drops page to link to `https://shop.coralreaper.com/`.
5. Optionally embed Shopify Buy Buttons on the home page for hero products (no rebuild required).

## Phase 3 — WhatNot live auctions

When ready: apply for a WhatNot seller account, then add a "Live Sales" link to the header pointing to your channel. No code change to the storefront required.

## What lives where (cheat sheet)

| Asset | Where |
|---|---|
| Site source | this repo |
| Hosting | Cloudflare Pages (free) |
| Domain registrar + DNS | GoDaddy |
| Email list | Buttondown (free → ConvertKit/Klaviyo when bigger) |
| Contact form | Formspree (free tier) |
| Future storefront | Shopify (`shop.coralreaper.com`) |
| Future live auctions | WhatNot |
| Analytics | Cloudflare Web Analytics (turn on in Cloudflare dashboard) |
