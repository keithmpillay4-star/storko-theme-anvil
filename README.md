# Anvil

A spec-led Shopify theme for manufacturers, wholesalers and trade suppliers.

![License: MIT](https://img.shields.io/badge/license-MIT-green)
![Online Store 2.0](https://img.shields.io/badge/Shopify-Online%20Store%202.0-5a863e)

**Live demo:** https://storko.co.za/demo/anvil (a working storefront with sample products; checkout is disabled)

Built for manufacturers, wholesalers, B2B and trade suppliers. Part of the free Storko theme family: [Ember](https://github.com/keithmpillay4-star/storko-theme-ember), [Loom](https://github.com/keithmpillay4-star/storko-theme-loom) and [Anvil](https://github.com/keithmpillay4-star/storko-theme-anvil).

## What you get

- Product specifications table (variant data plus your own metafields)
- Bulk-order grid: enter quantities for every variant and add them in one click
- Downloads block (datasheets, certificates) and a Request a quote button
- Stats, certifications and capabilities sections; optional call-to-action button in the header

Shared by all three themes:

- Cart drawer with free-shipping progress, keyboard focus trap and screen-reader announcements
- Predictive search, product filtering and sorting (Shopify's storefront filtering)
- Variant picker, image gallery, quantity selector, dynamic checkout buttons
- Announcement bar, header with dropdown menus and a mobile menu, footer with newsletter and payment icons
- Blog and articles, contact form, 404, password page, gift card and customer account templates
- Theme editor friendly: JSON templates, sections with presets, and section-level settings for colours, fonts, spacing and radii
- Structured data for products and articles, Open Graph tags, no dependencies and no build step

## Install

**Upload a ZIP:** click **Code > Download ZIP** on GitHub, then in your Shopify admin go to **Online Store > Themes > Add theme > Upload zip file**.

**Shopify CLI:**

```bash
git clone https://github.com/keithmpillay4-star/storko-theme-anvil.git
cd storko-theme-anvil
shopify theme push --unpublished --store your-store.myshopify.com
```

**Develop locally:** `shopify theme dev --store your-store.myshopify.com`

Customise colours, fonts, page width, corner radii and cart type under **Theme settings** in the theme editor.

## Setting up the quote flow and specifications

- **Quote page:** create a page with the handle `quote` and choose the **page.quote** template. The "Request a quote" button on product pages links to it, passing the product name and SKU in the URL.
- **Specifications:** the table always shows SKU, manufacturer, weight and your product options. To add rows, create product metafield definitions in the **specs** namespace (for example `specs.grade`, `specs.finish`); every metafield in that namespace appears as a row.

## Quality and limits

- `shopify theme check` reports no offenses, and the theme has been uploaded to and tested on a real Shopify development store: variant switching, cart drawer, search, filters and page templates.
- Lighthouse accessibility and performance scores have not been formally measured yet.
- The customer account templates apply to stores using classic customer accounts; stores on Shopify's new customer accounts use Shopify-hosted pages instead.
- Demo photography on storko.co.za is not included in this repository.

## Contributing

Issues and pull requests are welcome. Please run `shopify theme check` before opening a pull request.

## Licence

MIT. See [LICENSE](LICENSE). Copyright (c) 2026 Storko. All theme code is original.
