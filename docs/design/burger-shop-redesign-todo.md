# Burger Shop Demo Redesign Todo

## Design Direction

- [x] Make the burger shop demo feel like a real fast-casual ordering page, not a generic portfolio template.
- [x] Push the visual style toward bold, warm, appetite-led design with strong food photography, dark contrast, red accents, and golden offer highlights.
- [x] Keep the page conversion-focused: visitors should understand the best offer, menu highlights, delivery path, hours, and location quickly.
- [x] Avoid overdecorating the page. Use food imagery, offer blocks, price cues, and ordering CTAs as the main visual energy.

## Text And Positioning

- [x] Review current hero headline: `Juicy burgers, sharp ordering flow, and a page built to move lunch traffic.`
- [x] Rewrite the hero headline to sound more like a burger shop customer offer.
- [x] Add a punchy subheadline focused on cravings, quick ordering, and lunch/dinner traffic.
- [x] Replace generic demo text with burger-specific copy across every section.
- [x] Make the primary CTA more direct, such as `Order now`, `View menu`, or `Get the combo`.
- [x] Add a short urgency/offer line around `Smash burger combo from $9.90`.

## Information Architecture

- [x] Hero: burger image, headline, offer, primary order CTA, secondary menu CTA.
- [x] Offer strip: combo price, delivery/pickup note, opening hours.
- [x] Signature burgers: 3-4 menu cards with name, short description, price cue, and spice/popular badges.
- [x] Combo offers: lunch deal, family box, late-night special.
- [x] Trust/social proof: rating, review quote, fresh ingredients, local favorite cue.
- [x] Location/action section: address placeholder, hours, delivery apps, WhatsApp/order button.
- [x] Mavora Labs attribution: keep it present but quieter than the demo brand experience.

## Visual Components

- [x] Create a stronger burger hero composition with dark overlay and visible food detail.
- [x] Add a sticky or repeated mobile CTA for ordering/viewing menu.
- [x] Convert generic structure cards into food/menu cards.
- [x] Add offer badges for `Popular`, `Lunch deal`, and `Delivery ready`.
- [x] Use color swatches from the burger demo data: primary red, golden secondary, dark brown, warm cream.
- [x] Replace generic icon usage where a menu/offer layout would communicate better.

## Motion And Interaction

- [x] Add a subtle hero image scale or parallax on scroll.
- [x] Stagger menu cards into view.
- [x] Add hover movement on burger/menu cards without shifting layout.
- [x] Add a small CTA arrow or button feedback animation.
- [x] Respect reduced-motion preferences.

## Responsive QA

- [x] Check mobile hero text does not cover the burger image awkwardly.
- [x] Ensure menu cards stack cleanly on mobile.
- [x] Make CTA buttons full-width or easy to tap on small screens.
- [x] Ensure price/offer badges do not overflow.
- [x] Check desktop spacing so the page feels like a finished landing page, not stacked template sections.

## Cart Improvement Pass

- [x] Change the cart heading once items are added, so it reads like a review step instead of an empty-cart prompt.
- [x] Clarify the menu estimate note so customers understand the shop confirms the final total on WhatsApp.
- [x] Make quantity controls easier to tap and scan.
- [x] Reduce the custom message box height so checkout actions sit closer to the cart item.
- [x] Re-check the cart flow on desktop and mobile after design tuning.

## Content Details To Add

- [x] Burger names: Classic Stack, Double Smoke, Crispy Heat, Golden Veggie.
- [x] Combo names: Lunch Stack Combo, Family Burger Box, Late Night Smash Deal.
- [x] Proof copy: `Fresh smashed patties`, `Ready for pickup`, `Delivery-friendly menu`.
- [x] Review placeholder: `Best quick burger in the neighborhood. Easy to order and always hot.`
- [x] Hours placeholder: `Open daily, 11 AM - 10 PM`.

## Implementation Notes

- [x] Decide whether burger-specific layout should live in the shared `/portfolio/[slug].astro` template or branch by `demo.slug === "burger-shop"`.
- [x] Prefer a scoped burger-specific branch only if the redesign should be unique from the other demos.
- [x] Keep shared demo data clean and add burger-only fields only if they are useful for the redesigned page.
- [x] Update tests or add a focused check if the burger demo content changes significantly.
- [x] Validate edited files with editor diagnostics; run `corepack pnpm@10.12.1 lint`, `build`, and targeted Playwright checks before launch.