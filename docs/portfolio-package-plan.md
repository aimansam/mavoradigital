# Portfolio Package Value Plan

## Purpose

Build the portfolio around package value proof, not only visual demos. Each portfolio item should answer which package it represents, what the buyer gets for that package, and why that package is worth the price.

## Portfolio Strategy

- Primary audience: freelancers, local businesses, and service businesses comparing website package value before sending a WhatsApp request.
- Primary action: view a relevant package demo, then request that package through the project request form.
- Portfolio role: make `Starter Website`, `Business Website`, and `Custom Build` feel concrete through demo examples.
- Success metric: more qualified WhatsApp requests with a selected package tier.

## Phase 1: Data Foundation

Goal: make every demo package-aware before changing layouts.

Status: completed in `src/features/portfolio/data/portfolioDemos.ts` with package metadata for all demos and one Custom Build proof concept.

Update `src/features/portfolio/data/portfolioDemos.ts` with package value fields:

```ts
packageFit: "Starter Website" | "Business Website" | "Custom Build";
tier: "Basic" | "Plus" | "Pro";
packagePrice: string;
valueProof: string[];
includedScope: string[];
bestFor: string;
upgradePath?: string;
```

Implemented demo mapping:

| Demo | Package Fit | Tier | Value Angle |
| --- | --- | --- | --- |
| Burger Shop | Starter Website | Plus | One-page sales flow with menu, offer, and order CTA |
| Coffee Shop | Starter Website | Basic | Atmosphere, menu preview, location, and visit path |
| Bakery Shop | Starter Website | Plus | Preorder flow, daily specials, and product photography |
| Barber Shop | Business Website | Plus | Services, pricing, booking, and trust |
| Carwash Shop | Business Website | Pro | Package comparison, membership upsell, and directions |
| Dental Clinic | Business Website | Basic | Multi-page credibility, appointment CTA, and service category structure |
| Fit Studio Booking | Custom Build | Plus | Booking flow, class packages, lead capture, and custom journey planning |

Deliverables:

- Add package metadata to all existing demos.
- Keep existing visual fields such as `primary`, `secondary`, `dark`, and `light`.
- Added the `fit-studio-booking` Custom Build demo entry so every package has at least one proof point.

## Phase 2: Homepage Portfolio Cards

Goal: make the homepage demo cards immediately communicate package value.

Status: completed in `src/pages/index.astro` using package badges, price cues, and `valueProof` metrics while keeping the existing ScrollStack interaction.

Update the homepage portfolio section in `src/pages/index.astro`:

- Add a package badge, such as `Starter - Plus` or `Business - Pro`.
- Add a price cue, such as `Example from RM1,200`.
- Replace generic demo metrics with package-value metrics from `valueProof`.
- Keep the existing ScrollStack interaction.

Card content order:

1. Image.
2. Business type.
3. Demo name.
4. Package badge and price cue.
5. Short value headline.
6. Two value proof pills.
7. `View package demo` CTA.

Deliverables:

- Homepage cards explain package fit without needing to open the detail page.
- Mobile cards keep badge and price readable without relying on hover.

## Phase 3: Portfolio Index

Goal: make `/portfolio/` a package comparison and proof library.

Status: completed in `src/pages/portfolio/index.astro` with package filter buttons, package-value cards, and an empty state.

Update `src/pages/portfolio/index.astro` with package filters:

- `All`
- `Starter Website`
- `Business Website`
- `Custom Build`

Each index card should show:

- Demo image.
- Business type.
- Demo name.
- Package fit and tier.
- Starting price cue.
- Three value proof bullets.
- CTA: `View package demo`.

States:

- Default state: show all demos.
- Filtered state: show only demos matching the selected package.
- Empty state: if a future package filter has no demos, show a short coming-soon message with a CTA to request a custom scope.

Deliverables:

- Package filters work with links or accessible buttons.
- Cards are scannable on mobile and desktop.
- Custom Build is represented by the `fit-studio-booking` demo.

## Phase 4: Portfolio Detail Package Value Section

Goal: show why each demo belongs to a package and what is included.

Status: completed in `src/pages/portfolio/[slug].astro` with package fit, price cue, best-for copy, included scope, value proof, upgrade path, and request CTA.

Update `src/pages/portfolio/[slug].astro` with a package value section near the top, after the hero or metrics strip.

Section content:

- `Best package fit`: package name and tier.
- `Example price`: package price cue.
- `Best for`: who should choose this package.
- `Included in this demo`: checklist from `includedScope`.
- `Value proof`: short bullets from `valueProof`.
- `Upgrade path`: what the next tier adds.
- CTA: `Request this package`.

Deliverables:

- Every detail page explains package value before long demo content.
- The CTA should send users to `/#project-request` with clear package intent.

## Phase 5: Request Form Connection

Goal: reduce friction between viewing a demo and requesting the matching package.

Status: completed with package detail CTAs using `?package=` and homepage form logic that preselects matching package tiers from the URL.

Update package CTAs so they can preselect or hint package interest.

Preferred behavior:

- Use URL parameters such as `/?package=Starter%20Website%20-%20Plus#project-request` so the form can read the package before scrolling to the request section.
- Otherwise link to `/#project-request` and include CTA text that names the package.

Form copy updates:

- Change default helper text from generic package preview to package-demo language.
- Add support for package names already shown in portfolio demos.

Deliverables:

- Users can move from demo to request form with package context preserved.
- WhatsApp message includes package interest clearly.

## Phase 6: Custom Build Proof

Goal: make the highest-value package credible.

Status: completed with the `fit-studio-booking` Custom Build demo and a Custom Build-only flow planning section on detail pages.

Add at least one Custom Build demo because the current set mainly proves Starter and Business packages.

Recommended Custom Build demo options:

| Demo Idea | Package Fit | Value Proof |
| --- | --- | --- |
| Fit Studio Booking | Custom Build - Plus | Booking flow, class packages, lead capture |
| Clinic Appointment Page | Custom Build - Plus | Service categories, appointment CTA, trust layout |
| Auto Detailing Membership | Custom Build - Pro | Membership pricing, booking logic, upsell sections |

Deliverables:

- Add one Custom Build demo to `portfolioDemos.ts`.
- Add a richer detail layout section that shows integrations or custom flow planning.
- Ensure Custom Build pricing starts from `RM4,000` and supports higher scoped work.

## Phase 7: Visual And Content QA

Goal: make package proof feel polished, clear, and conversion-focused.

Status: completed by static QA. Diagnostics are clean, package badges have mobile wrapping safeguards, stale `/quotation/` detail CTAs were replaced with package-aware request links, and browser screenshot QA remains the only residual visual check.

Checklist:

- Package badges are readable on dark and light backgrounds.
- Price cues do not look like final fixed quotes.
- `Starter`, `Business`, and `Custom` have distinct but controlled visual badges.
- No important package value is hidden behind hover-only behavior.
- Cards do not overflow on mobile.
- Detail pages keep headings in a sensible hierarchy.
- CTAs have clear accessible names.
- Form and WhatsApp message still work after any CTA changes.

## Token Direction

Keep the current dark green Mavora Labs brand direction.

Suggested package badge accents:

- Starter Website: moss green.
- Business Website: gold or olive accent.
- Custom Build: deep emerald with brighter green highlight.

Do not introduce a separate loud palette for each demo. The portfolio should feel like one Mavora Labs sales system.

## Implementation Order

1. Add package metadata to `src/features/portfolio/data/portfolioDemos.ts`.
2. Update homepage portfolio cards in `src/pages/index.astro`.
3. Update `/portfolio/` index cards and package filters.
4. Add package value section to `/portfolio/[slug]/`.
5. Connect package CTAs to `/#project-request`.
6. Add one Custom Build demo.
7. QA mobile, desktop, accessibility, and WhatsApp flow.

## Next Todo Plan

Use this as the next working list after the package-value portfolio foundation.

Status: implementation todos completed except live browser screenshot QA, which still needs a running dev server and browser pass.

### Todo 1: Browser Visual QA

Priority: high.

Status: pending live browser pass. Static diagnostics and content checks are clean, but screenshots still need a running dev server and browser tooling.

Goal: confirm the package portfolio works visually in real viewports, especially with ScrollStack and long package labels.

Pages to check:

- `/`
- `/portfolio/`
- `/portfolio/burger-shop/`
- `/portfolio/fit-studio-booking/`
- `/?package=Starter%20Website%20-%20Plus#project-request`

Acceptance checks:

- Homepage portfolio cards do not clip package badges or price pills.
- ScrollStack remains smooth after the added package content.
- Portfolio filters work on desktop and mobile.
- Package value sections appear high enough on detail pages.
- Package request links preselect the correct package tier in the form.
- WhatsApp message includes the selected package interest.

Target files if fixes are needed:

- `src/pages/index.astro`
- `src/pages/portfolio/index.astro`
- `src/pages/portfolio/[slug].astro`
- `src/styles/global.css`

### Todo 2: Portfolio Detail CTA Cleanup

Priority: high.

Status: completed. Detail CTAs use package-led language such as `Request Starter Plus`, and portfolio links no longer point to `/quotation/`.

Goal: make all portfolio CTAs feel consistent and package-led.

Recommended CTA language:

- `Request Starter Plus`
- `Request Starter Basic`
- `Request Business Plus`
- `Request Business Pro`
- `Request Custom Plus`

Acceptance checks:

- No detail-page CTA uses generic `Request this style` language.
- No portfolio CTA links to `/quotation/`.
- Package labels remain readable when inserted into button text.

Target files:

- `src/pages/portfolio/[slug].astro`
- `src/styles/global.css`

### Todo 3: Custom Build Demo Upgrade

Priority: medium.

Status: completed. The Custom Build detail page now includes journey planning, class package comparison, lead-capture preview, and integration planning panels.

Goal: make the Custom Build demo feel clearly more valuable than Starter and Business demos.

Recommended improvements:

- Add a booking-flow preview block.
- Add package comparison cards for studio class packs.
- Add a lead-capture section with fields shown visually, not as a real form.
- Add an integration planning note for booking, CRM, or analytics.

Acceptance checks:

- `fit-studio-booking` feels like a custom journey, not a generic landing page.
- Custom Build value connects to `RM5,500` pricing.
- The page shows why Custom Build is above Business Website.

Target files:

- `src/pages/portfolio/[slug].astro`
- `src/features/portfolio/data/portfolioDemos.ts`
- `src/styles/global.css`

### Todo 4: Add One More Business Website Demo

Priority: medium.

Status: completed. Added the `dental-clinic` demo mapped to `Business Website - Basic`.

Goal: strengthen the Business Website package with another service-business proof point.

Recommended demo options:

- Dental clinic.
- Renovation contractor.
- Tuition center.
- Auto workshop.

Acceptance checks:

- New demo maps to `Business Website - Basic` or `Business Website - Plus`.
- It proves multi-page credibility, not just a one-page offer.
- Portfolio filters still work after the new data entry.

Target files:

- `src/features/portfolio/data/portfolioDemos.ts`
- `src/pages/portfolio/[slug].astro`

### Todo 5: Replace Placeholder Pricing Currency In Demo Content

Priority: low.

Status: completed. Demo offer examples and burger menu examples now use `RM`.

Goal: align demo offers with Mavora Labs Malaysia package context.

Current demo offer content uses `$` examples for fictional businesses. Decide whether to keep these as generic demo placeholders or convert them to `RM` for consistency.

Acceptance checks:

- Package pricing remains in `RM`.
- Demo business offer pricing is either consistently fictional or consistently localized.
- No buyer confuses demo offer prices with Mavora Labs service prices.

Target files:

- `src/features/portfolio/data/portfolioDemos.ts`
- `src/pages/portfolio/[slug].astro`

### Todo 6: Update Handoff Notes

Priority: low.

Status: completed. `README.md` and `docs/content-plan.md` document required demo metadata and package query preselection.

Goal: make the package portfolio system easier to maintain later.

Acceptance checks:

- Document how to add a new portfolio demo.
- Document required package metadata fields.
- Document how package CTA preselection works with `?package=`.

Target files:

- `docs/content-plan.md`
- `docs/portfolio-package-plan.md`
- `README.md`

## New Planning Roadmap

This roadmap starts after the package-value portfolio foundation. Use it to move the Mavora Labs site from working implementation to launch-ready sales asset.

### Stage 1: Live Visual QA And Fix Pass

Goal: confirm the site works in real browser conditions before adding more features.

Priority pages:

- Homepage: `/`
- Portfolio index: `/portfolio/`
- Starter demo: `/portfolio/burger-shop/`
- Business demo: `/portfolio/dental-clinic/`
- Custom demo: `/portfolio/fit-studio-booking/`
- Package preselect route: `/?package=Business%20Website%20-%20Basic#project-request`

Checks:

- ScrollStack cards are not clipped or cramped.
- Portfolio filters work with mouse, keyboard, and touch.
- Package badges wrap cleanly on small screens.
- Detail-page package panels appear before users scroll too far.
- Custom Build section feels more premium than Starter and Business examples.
- Package query preselects the correct request form option.
- WhatsApp message includes package interest.

Output:

- Fix list grouped by page.
- Screenshots for desktop and mobile.
- Final pass/fail note in this doc.

### Stage 2: Portfolio Conversion Polish

Goal: make package demos easier to compare and easier to request.

Planned improvements:

- Add a small `Best for` line to homepage portfolio cards if space allows.
- Add package-count summary near `/portfolio/` filters, such as `3 Starter`, `3 Business`, `1 Custom`.
- Add stronger CTA copy on package panels, such as `Request Business Basic`.
- Add a short note beside the form summary when a package is preselected from a portfolio demo.

Acceptance checks:

- Visitors can understand package differences without reading every detail page.
- CTAs remain concise on mobile.
- No card becomes visually overloaded.

### Stage 3: Demo Quality Expansion

Goal: improve demo credibility before showing the site publicly.

Recommended demo work:

- Add one richer `Business Website - Plus` demo for a contractor, tuition center, or auto workshop.
- Add one `Custom Build - Pro` concept only if the Custom package needs stronger high-end proof.
- Replace placeholder images if any Unsplash image feels too generic or overused.
- Create demo-specific proof blocks instead of reusing generic descriptions too often.

Acceptance checks:

- Starter, Business, and Custom packages each have distinct proof.
- Business Website has both Basic and Plus examples.
- Custom Build has at least one clearly advanced flow.

### Stage 4: Lead Capture And Analytics Planning

Goal: make the site measurable after launch.

Planned work:

- Decide analytics provider, such as Plausible or another privacy-friendly option.
- Track primary CTA clicks: hero CTA, portfolio demo CTA, package request CTA, WhatsApp submit.
- Track package preselect source from portfolio pages.
- Add a launch note for checking analytics events after deployment.

Acceptance checks:

- Analytics does not block the WhatsApp flow.
- Events are named clearly enough to compare package interest.
- No real secrets or private keys are committed.

### Stage 5: Launch Readiness

Goal: prepare the site for production review.

Checklist:

- Confirm `PUBLIC_WHATSAPP_NUMBER` is set in deployment environment.
- Confirm `astro.config.mjs` site URL is `https://mavoralabs.com`.
- Check favicon, Open Graph image, Twitter preview, and social title/description.
- Check `/privacy/` still matches the form behavior.
- Check `/quotation/` is either intentionally retained or redirected/removed from navigation flow.
- Run build through Docker Compose.
- Review mobile layout on at least one narrow viewport and one desktop viewport.

Acceptance checks:

- Homepage request form opens WhatsApp correctly.
- Package interest appears in the generated WhatsApp message.
- Portfolio routes build successfully for all demo slugs.
- No stale placeholder copy appears in launch-critical sections.

### Stage 6: Post-Launch Iteration

Goal: improve the portfolio after early traffic and real inquiries.

Review after launch:

- Which package gets the most form interest?
- Which portfolio demos get clicked most often?
- Do users ask for package clarification in WhatsApp?
- Are visitors choosing budget flexibility or staying close to selected packages?

Potential improvements:

- Reorder demos based on demand.
- Add real client work when available.
- Add testimonials or proof points.
- Split high-performing package demos into stronger standalone case studies.

## Immediate Next Recommendation

Start with Stage 1 live visual QA. Do not add more visual complexity until the current package portfolio is verified in-browser on mobile and desktop.

## Burger Shop Design Polish Plan

Purpose: make `/portfolio/burger-shop/` a stronger `Starter Website - Plus` proof piece. The demo should feel like a polished one-page food offer that sells fast ordering, menu clarity, and mobile action.

### Design Direction

- Keep the burger page energetic, direct, and appetite-led.
- Make the food offer the visual hero, not generic brand decoration.
- Use strong contrast, warm food accents, and bold menu hierarchy.
- Keep the page clearly smaller than a Business Website demo: it should prove a premium landing page, not a full multi-page site.
- Keep CTAs focused on order/menu/request action.

### Phase 1: Hero Polish - Completed

Goal: make the first viewport feel more like a real food landing page.

Planned improvements:

- Keep the hero focused on the operational eyebrow, headline, proof chips, and CTAs without an extra offer badge.
- Add a short trust/action row under the hero copy: `Pickup ready`, `Delivery links`, `Open daily`.
- Improve the right offer card so it looks like a featured order card, not a generic info panel.
- Make the hero secondary CTA point back to the package request flow instead of only `Built by Mavora Labs` if conversion feels weak.

Acceptance checks:

- The first screen communicates food, price, and order path immediately.
- CTA text fits on mobile.
- The Mavora package context remains visible below the hero through the package value section.

Target files:

- `src/pages/portfolio/[slug].astro`
- `src/styles/global.css`

Completed updates:

- Added burger-brand navigation with menu, combos, hours, order links, and a secondary demo-library link.
- Removed the extra hero offer badge so the first viewport is cleaner.
- Added open-now, pickup, and rating trust cues under the hero copy.
- Reworked the hero offer card into an order ticket with WhatsApp/order readiness.
- Changed the primary hero CTA to the order path and the secondary CTA to the menu.

### Phase 2: Menu Card Polish - Completed

Goal: make menu cards easier to scan and more appetizing.

Planned improvements:

- Add small visual labels for `Popular`, `Big bite`, `Spicy`, and `Veggie` with stronger color differences.
- Add a simple ingredient hierarchy: title, description, price, badge.
- Consider adding one subtle food texture or warm background band behind the menu section.
- Keep cards stable in size so the grid does not feel uneven.

Acceptance checks:

- Prices stand out without overpowering product names.
- Badges are readable and not decorative noise.
- Mobile grid stays comfortable and does not feel cramped.

Target files:

- `src/pages/portfolio/[slug].astro`
- `src/styles/global.css`

Completed updates:

- Added distinct badge tones for `Popular`, `Big bite`, `Spicy`, and `Veggie`.
- Added menu metadata for made-to-order and pickup-ready cues.
- Improved badge, price, title, and description hierarchy.
- Kept the four-card menu grid stable across desktop and mobile breakpoints.

### Phase 3: Social Proof Polish - Completed

Goal: make reviews and ratings create trust before visitors reach location and order details.

Planned improvements:

- Add visible star ratings.
- Add short testimonials from satisfied customers.
- Add an average local rating summary.
- Keep proof close to the menu so visitors see trust after the food offer.

Acceptance checks:

- Reviews are scannable on mobile and desktop.
- Star ratings are visible but do not overpower the quotes.
- The section reads like real customer proof, not generic filler.

Target files:

- `src/pages/portfolio/[slug].astro`
- `src/styles/global.css`

Completed updates:

- Added three customer review cards with five-star ratings.
- Added a `4.8` average local rating summary.
- Placed social proof immediately after the featured menu.
- Styled the reviews as a strong dark section for contrast and trust.

### Phase 4: Proof And Location Polish - Completed

Goal: make the bottom proof area support trust and local action.

Planned improvements:

- Add a stronger testimonial/source label, such as `Regular customer note`.
- Add a mini operating-hours block with clearer visual hierarchy.
- Keep business CTAs focused on ordering while keeping the demo-library link secondary.
- Make location/delivery details scan as quick facts.

Acceptance checks:

- Proof block feels credible, not filler.
- Local action details are readable on mobile.
- Order and contact CTAs are still clear and accessible.

Target files:

- `src/pages/portfolio/[slug].astro`
- `src/styles/global.css`

Completed updates:

- Added a `Regular customer note` label to the testimonial.
- Added clearer hours for weekday, weekend, and Sunday service.
- Reworked the location/proof area into a real contact section with map, hours, phone, directions, and order details.
- Added order, pickup, delivery, and location details in quick-scan blocks.

### Phase 5: Mobile Sticky CTA Review - Completed

Goal: make the mobile sticky CTA useful without blocking content.

Planned improvements:

- Confirm `Order now` is the best mobile sticky CTA.
- Keep the sticky CTA pointed to the final order section.
- Ensure it does not cover the final order banner at the bottom.
- Add enough bottom spacing before footer/end content if needed.

Acceptance checks:

- Sticky CTA does not overlap important text.
- Button text stays short.
- Mobile users can still reach the order path.

Target files:

- `src/pages/portfolio/[slug].astro`
- `src/styles/global.css`

Completed updates:

- Changed the sticky mobile CTA from `View menu` to `Order now`.
- Pointed the sticky CTA to the new order section.
- Added extra bottom spacing in the final proof section so the sticky CTA has room.
- Kept button text short for small screens.

### Phase 6: Burger Demo QA - Static QA Completed

Goal: verify the polished burger demo as a package sales asset.

Checks:

- Desktop hero is not too dark or cropped.
- Mobile hero leaves the burger/product visible enough.
- Menu and combo sections have clear scan order.
- Value proposition, menu, reviews, and contact sections follow the requested real-business landing page order.
- The final CTA drives WhatsApp and phone orders instead of package requests.
- No food demo price can be confused with Mavora service pricing.

Immediate recommendation: run live browser QA next, then tune spacing or crop behavior based on actual desktop and mobile screenshots.

Static QA result:

- Astro diagnostics passed for the burger portfolio route.
- CSS diagnostics passed for the new burger landing page styles.
- Live browser screenshot QA is still pending because this pass used editor diagnostics only.

### Real Business Landing Page Structure - Implemented

User-directed section flow:

- Hero section with headline, subheadline, burger image, and primary order CTA.
- Value proposition section explaining fresh beef, house sauces, and baked buns.
- Featured menu section with four best-selling burgers, descriptions, labels, and pricing.
- Social proof section with star ratings and customer testimonials.
- Location, hours, and contact section with embedded Google Map, phone number, and operating hours.
- Final CTA banner focused on WhatsApp orders and phone orders.

Implementation notes:

- The Burger Shop demo now reads as a standalone restaurant landing page first.
- Package proof content was removed from the visible burger business flow so the page feels like a real business site instead of a portfolio explanation page.
- The demo-library link remains secondary in the header for workspace navigation.

### Burger Shop Next Polish Todo

Status: completed from design and copywriting review.

Priority order:

1. Hero image crop and appetite check
	- Shift the hero image crop so more cheese, patty, and full burger stack are visible.
	- Reduce the oversized bun dominance in the first viewport.
	- Check desktop and mobile hero framing after the crop change.
	- Completed: adjusted hero image object position and transform origin to show more of the burger stack.

2. Hero headline tightening
	- Replace `Hot smash burgers, fast pickup, no waiting around.` with a shorter line.
	- Preferred option: `Fresh smash burgers, fast pickup, serious flavor.`
	- Backup option: `Smash burgers made hot. Pickup without the wait.`
	- Completed: changed the demo headline to the preferred option.

3. Hero subheadline rewrite
	- Replace the current strategy-sounding line with more restaurant-focused copy.
	- Suggested copy: `Fresh smashed burgers, house sauces, toasted buns, and pickup-ready combos for lunch, dinner, and late cravings.`
	- Completed: replaced the hero subheadline with the suggested restaurant-focused copy.

4. Eyebrow and proof chip polish
	- Change the hero eyebrow from repeated brand text to an operational hook.
	- Suggested eyebrow: `Open daily in Downtown`.
	- Shorten proof chips to `Open until 10 PM`, `Pickup in 25 min`, and `4.8 rating`.
	- Completed: updated the eyebrow and shortened all three proof chips.

5. Offer card copy polish
	- Change offer card heading from `Smash burger combo from RM9.90` to `Lunch combo from RM9.90`.
	- Keep the supporting copy focused on pickup speed and freshness.
	- Completed: changed the offer heading through the burger demo data source.

6. Header demo-link polish
	- Keep `Demo library` available, but make it visually quieter than the restaurant navigation.
	- Confirm the first impression still feels like a real Mavora Burgers site.
	- Completed: reduced the demo-library link weight, size, color strength, and visual priority.

Acceptance checks:

- Hero communicates food, price, and order action within three seconds.
- Copy sounds like a restaurant, not a website strategy note.
- The burger photo is appetizing on both desktop and mobile.
- Primary and secondary CTAs remain visible without crowding the proof chips.

Acceptance result:

- Static implementation completed for all todo items.
- Astro, CSS, data, and docs diagnostics passed after implementation.
- Live browser screenshot QA remains the only follow-up check because this pass used editor validation only.

### Burger Shop Live Status Todo - Completed

Request: change the offer-card status badge from static `Fresh batch live` to open/closed text based on business hours.

Implementation:

- Replaced the static status badge with a `data-burger-status` live region.
- Added a client-side status updater using `Asia/Kuala_Lumpur` business time.
- Uses burger hours from the page: Monday to Thursday 11 AM - 10 PM, Friday to Saturday 11 AM - 11 PM, Sunday 12 PM - 9 PM.
- Displays `Open now` during operating hours and `Closed now` outside operating hours.
- Added a softer closed-state style for the badge.

### Burger Shop Focus Word Highlights - Completed

Request: add text highlights to focus words.

Implementation:

- Added burger-specific focus word styling using warm food colors.
- Highlighted key hero words: `Fresh smash burgers`, `serious flavor`, `house sauces`, and `pickup-ready combos`.
- Highlighted major section focus phrases such as `Better burgers`, `Best sellers`, `Happy, full customers`, `call ahead`, and `Order your Mavora burger`.
- Kept highlights scoped to the Burger Shop page so other portfolio demos are not affected.

### Burger Shop CTA Copywriting Polish - Completed

Request: change copywriting to attract CTA.

Implementation:

- Reworked the hero headline from a general brand promise into a direct hunger hook: `Hungry now? Get a hot smash burger in 25 min.`
- Changed the hero body copy to point visitors toward WhatsApp ordering and pickup.
- Updated the primary hero CTA to `Order on WhatsApp` and the secondary CTA to `See best sellers`.
- Rewrote the offer-card support copy to explain the action: pick combo, send WhatsApp order, pick up hot.
- Changed the offer-card CTA to `Claim this combo`.
- Reworked the final CTA section around `Your burger is one tap away` and `Order now on WhatsApp`.

### Burger Shop Palette Review - Completed

Request: review color palette and change.

Review findings:

- The previous palette leaned too brown/green in supporting sections.
- Large yellow highlights competed with the food image and CTA.
- The burger page needed a more focused restaurant palette: charred base, tomato CTA, cheddar accent, and toasted-bun backgrounds.

Implemented palette:

- Charred dark: `#190f0c`
- Tomato CTA: `#d9431f`
- Cheddar accent: `#ffbf2e`
- Toasted bun background: `#fff3e2`

Implementation notes:

- Updated the Burger Shop demo color tokens in `src/features/portfolio/data/portfolioDemos.ts`.
- Replaced green-tinted burger section backgrounds with warm toasted-bun tones.
- Refined highlight colors so cheddar is used as a focused accent instead of dominating every word.
- Updated dark review/final CTA bands to a richer charred gradient.

### Burger Shop Value Section Review - Completed

Request: review design and copywriting, also add image.

Review findings:

- The `Why Mavora Burgers` section had clear content but felt too much like generic feature cards.
- The copy explained quality but did not create enough appetite or ordering emotion.
- The section needed real food imagery to support trust and cravings before the menu.

Implementation:

- Rewrote the heading to `Built for cravings, not just quick orders.`
- Reworked the intro copy around hot patties, bold sauces, toasted buns, and easy pickup.
- Added one food image to each value card.
- Rewrote card copy to be more sensory and benefit-led.
- Added image styling with stable aspect ratio, rounded corners, and subtle hover scale.
- Centered the section intro so the headline and proof copy sit balanced above the three image cards.
- Replaced the failed sauce image URL and tightened the card text style with shorter titles, smaller headings, and proof labels.
- Added a styled image fallback so failed external images no longer expose broken alt text inside the card.
- Refined the text hierarchy again by moving labels into the image area, reducing card heading weight, and rewriting the proof copy to sound more natural for a restaurant landing page.
- Added a centered feature image under the headline so the section orientation is unmistakably centered before the three proof cards.

### Burger Shop Menu Rewrite - Completed

Request: change competitor/example menus into our menu.

Implementation:

- Replaced the four generic demo menu cards with a nine-item original `Mavora menu`.
- Added Angus beef, chicken, vegetarian, sides, loaded fries, and shake options.
- Avoided competitor item names while keeping the Malaysian burger cues the user liked.
- Updated the menu headline to `Signature burgers, sides, and shakes.`
- Changed the menu grid to three columns on wide screens so the expanded menu reads evenly.
- Added badge colors for premium, chicken, side, and shake categories.

### Burger Shop Strong Palette Update - Completed

Request: change color palette from pastel to strong color.

Implementation:

- Replaced the soft bun/pastel palette with stronger charred black, tomato red, and vivid cheddar gold.
- Changed the burger demo `light` token from a pale surface to a deep strong surface.
- Converted value, menu, location, strip, and order backgrounds from cream gradients to dark restaurant bands.
- Updated proof cards, menu cards, map/contact cards, badges, and meta chips for high-contrast dark surfaces.
- Adjusted section text from dark ink to white/gold so the stronger palette stays readable.

### Burger Shop Palette Rebalance - Completed

Request: the color is not matching, change color palette.

Implementation:

- Rebalanced the palette away from muddy brown/orange into cleaner charcoal black, flame red, and amber.
- Updated burger tokens to `#050505`, `#121212`, `#e82712`, and `#ffb000`.
- Reworked section gradients so dark surfaces read charcoal instead of brown.
- Fixed invalid Tailwind opacity classes like `text-white/72`, `text-white/66`, and `text-white/82` that caused dark paragraph text on dark backgrounds.
- Normalized the remaining invalid `text-white/*` opacity classes across the portfolio detail page to standard Tailwind values.
- Normalized invalid `text-ink/*` opacity classes in the fallback portfolio demo layout as well.

### Burger Shop Value Carousel - Completed

Request: make carousel.

Implementation:

- Replaced the static value-section feature image with a four-slide food carousel.
- Reused the pickup, grill, sauce, and pickup proof visuals as carousel slides.
- Added previous/next icon controls, dot navigation, pause-on-hover, pause-on-focus, and reduced-motion support.
- Removed the three proof cards below the carousel so the section focuses on one visual experience.
- Added mobile spacing so carousel controls sit below the image instead of crowding the caption.
- Resized the carousel as a centered feature card with a stable 16:9 aspect ratio.

### Burger Shop Carousel Design Fix - Completed

Request: fix this design.

Implementation:

- Reduced the carousel max width so it reads as a designed feature card instead of an oversized banner.
- Changed the frame from `16:9` to `16:10` for better food image cropping.
- Moved carousel controls below the image so they no longer compete with the caption.
- Reduced caption type size and lifted the caption away from the bottom edge to prevent clipping.

### Burger Shop Carousel Crop Fix - Completed

Request: how to fix this.

Implementation:

- Added per-slide image focus positions so each carousel photo frames the burger instead of empty dark space.
- Adjusted the carousel frame ratio slightly for better food visibility.
- Turned the caption into a subtle glass label so it stays readable on dark photos.
- Reduced the overlay darkness so food remains visible while caption contrast stays strong.

### Burger Shop Carousel Final Polish - Completed

Request: how to get perfect carousel, review the design and continue.

Implementation:

- Reframed the carousel as a product-gallery card instead of image text overlay.
- Moved the active slide label/title into a footer below the photo, beside the controls.
- Updated carousel JavaScript so the footer label/title changes with the active slide.
- Replaced the weak low-cropped pickup image with a better food-focused burger image.
- Reduced overlay darkness because the caption no longer needs to sit on top of the photo.

### Burger Shop Component Split - Completed

Request: review code structure and break it into components.

Implementation:

- Moved Burger Shop menu, carousel slide, value, and review data into `src/features/portfolio/demos/burger-shop/data.ts`.
- Created `BurgerHeader.astro` for the restaurant header/navigation.
- Created `BurgerLandingSections.astro` for the Burger Shop page sections.
- Created `BurgerBehavior.astro` for live status, carousel behavior, and reveal animation JavaScript.
- Reduced `src/pages/portfolio/[slug].astro` so it routes between the Burger demo component set and the generic portfolio demo layout.

Review notes:

- This keeps future Burger Shop design edits out of the shared portfolio route.
- Follow-up completed: `BurgerLandingSections.astro` was split into focused section components.

### Burger Shop Section Component TODO - In Progress

- [x] Keep `BurgerLandingSections.astro` as the page composer.
- [x] Extract `BurgerHero.astro` for hero and offer card markup.
- [x] Extract `BurgerValueCarousel.astro` for carousel markup and controls.
- [x] Extract `BurgerMenu.astro` for menu cards.
- [x] Extract `BurgerReviews.astro` for review cards and rating summary.
- [x] Extract `BurgerLocation.astro` for map, hours, and contact actions.
- [x] Extract `BurgerFinalCta.astro` for final WhatsApp CTA and mobile sticky CTA.
- [x] Export lightweight Burger data item types from `burgerDemo.ts`.
- [x] Validate all Burger components after the split.

### Burger Shop Copy And Design Review TODO - In Progress

- [x] Replace review quotes so they match the current Mavora Burgers menu items.
- [x] Replace the reviews headline with a more natural customer-facing line.
- [x] Add proof context chips to review cards and reduce excess card height.
- [x] Make menu headline more action-oriented for ordering.
- [x] Fix map/address mismatch with a Kuala Lumpur placeholder location.
- [x] Validate Burger page files after copy/design polish.

### Burger Shop Next Improvement TODO - In Progress

- [x] Add a centralized `burgerBusiness` data object for address, phone, WhatsApp, map, hours, rating, and pickup details.
- [x] Pass `burgerBusiness` through the Burger page composer.
- [x] Replace hardcoded business details in Hero, Location, Final CTA, and live status behavior.
- [x] Validate Burger business data extraction.
- [x] Diagnose carousel click issue and convert Burger client behavior to browser-safe JavaScript.
- [x] Add carousel interaction coverage to the portfolio E2E spec.
- [x] Remove unused Burger reveal script and CSS so content no longer depends on scroll observers.
- [ ] Run visual QA on desktop and mobile.
- [ ] Run the Playwright portfolio suite.

### Burger Shop Review Section Polish TODO - In Progress

Goal: make the review section feel more premium and easier to scan after the typography pass.

- [x] Add a focused TODO list for the review-section improvement pass.
- [x] Sharpen the support copy so it sounds more like customer proof.
- [x] Make the `4.8` rating summary more compact so it does not split the section vertically.
- [x] Fill the star icons so reviews feel more polished and visible.
- [x] Soften quote typography so it supports the headline instead of competing with it.
- [x] Anchor the review context and customer name at the bottom of each card.
- [ ] Run visual QA on desktop and mobile.

### Burger Shop Menu Card CTA TODO - In Progress

Goal: make every menu card actionable so visitors can move from browsing to WhatsApp ordering without hunting for the final CTA.

- [x] Add a focused TODO list for the menu-card CTA pass.
- [x] Pass business WhatsApp details into the menu component.
- [x] Add a menu-card CTA that feeds the cart flow.
- [x] Move the card meta and CTA into a bottom action area for consistent alignment.
- [x] Add hover/focus motion to the menu-card CTA without shifting card layout.
- [ ] Run visual QA on desktop and mobile.

### Burger Shop Add To Cart TODO - In Progress

Goal: let visitors build a simple order from the menu before sending it to WhatsApp.

- [x] Add a focused TODO list for the add-to-cart pass.
- [x] Change menu-card CTA from direct WhatsApp order to `Add to cart`.
- [x] Add a cart summary panel below the menu groups.
- [x] Track item quantity, line totals, and cart total in browser JavaScript.
- [x] Generate a WhatsApp checkout message from the cart contents.
- [x] Add clear-cart and item quantity controls.
- [ ] Run visual QA on desktop and mobile.

### Burger Shop Menu Card UX TODO - In Progress

Goal: make menu cards easier to scan and make cart state visible directly on the card.

- [x] Add a focused TODO list for menu-card UX improvements.
- [x] Move price beside the product name so the main decision info is grouped.
- [x] Reduce image height slightly so cards feel less tall.
- [x] Reserve steadier description height so card footers align better.
- [x] Add per-card `In cart` quantity feedback.
- [x] Soften the default card border and keep the warm hover border.
- [ ] Run visual QA on desktop and mobile.

### Burger Shop Cart-Aware CTA TODO - In Progress

Goal: connect the final CTA and mobile sticky CTA to the cart so the full page feels like one ordering flow.

- [x] Add a focused TODO list for cart-aware CTA improvements.
- [x] Change final CTA copy so it references reviewing the cart.
- [x] Make the final primary CTA send the cart to WhatsApp when items exist.
- [x] Make the final primary CTA return users to the menu when the cart is empty.
- [x] Update mobile sticky CTA text based on cart state.
- [x] Add E2E coverage for the cart-aware final CTA.
- [ ] Run visual QA on desktop and mobile.