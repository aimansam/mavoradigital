# Hero Section — Improvement Plan (Single-Image Layout)

**Current state (post-redesign)**
- Left 55 %: Headline → proof stats → CTA buttons
- Right 45 %: One full-bleed featured image with scroll parallax + frosted badge
- Mobile: image card below text block
- Eyebrow chip and supporting paragraph removed

---

## Round 1 — Visual impact & typography

| # | Issue | Fix |
|---|-------|-----|
| 1 | Headline is all one weight/style — visually flat | Add a mixed-weight treatment: last word or key phrase rendered in italic serif (`font-[IM_Fell_French_Canon]` or `Cormorant Infant italic`) for editorial contrast |
| 2 | Headline size caps too early on xl+ screens | Increase `clamp` max from `5rem` → `6rem` on `2xl` breakpoint |
| 3 | Proof stats bar feels small after removing supporting text | Increase text size from `text-sm` → `text-[0.875rem]` and add slightly more vertical padding |
| 4 | CTAs lack visual hierarchy on mobile (both full-width stack) | On mobile, make primary CTA full-width and secondary smaller/text-link style |

---

## Round 2 — Image & right column

| # | Issue | Fix |
|---|-------|-----|
| 5 | `products[0]` thumbnail is a generic analytics chart photo — off-brand | Replace with a curated workspace/laptop/design-process image that better reflects the studio's aesthetic. Update `index.astro` products list first entry. |
| 6 | Image parallax uses `scale: 1.1` inline style — causes layout shift on Safari | Move scale into a `motion.img` `initial` prop or use `transform: scale(1.1)` in CSS class to avoid SSR mismatch |
| 7 | Right column has no right-side boundary treatment | Add a subtle rounded corner on the right edge (`border-radius: 0 1.5rem 1.5rem 0`) clipped by the `overflow-hidden` parent for a "window" framing feel |
| 8 | Floating badge position is hardcoded (`bottom-20 left-10`) — clips on short viewports | Change to `bottom-[max(4rem,6vh)] left-8` so it scales with viewport height |
| 9 | Badge shows only "Average launch · 3 weeks" — missed opportunity | Expand to 2 micro-stats inside the badge: **3 weeks** avg launch + **WhatsApp-first** handoff, separated by a thin vertical divider |

---

## Round 3 — Motion & polish

| # | Issue | Fix |
|---|-------|-----|
| 10 | GSAP timeline in `index.astro` still targets `.hero-kicker` (removed element) | Remove the `.hero-kicker` fromTo line from the GSAP timeline in `index.astro` |
| 11 | Primary CTA has no hover/active state beyond the global `ui-button` GSAP tilt | Add a CSS `hover:` shimmer sweep (pseudo-element `::after` with gradient moving left-to-right on hover) |
| 12 | Image has no entrance animation — appears static on load | Add a framer-motion `initial={{ opacity: 0, scale: 1.06 }}` → `animate={{ opacity: 1, scale: 1.1 }}` transition on the image wrapper (duration 1.2s, ease "easeOut") |
| 13 | Scroll indicator overlaps the floating badge on short/compact viewports | Conditionally hide scroll indicator when `window.innerHeight < 680` or increase the `bottom` offset |

---

## Round 4 — Mobile experience

| # | Issue | Fix |
|---|-------|-----|
| 14 | Mobile shows image as a short rounded card (220px) below text — feels tacked on | Redesign mobile to use the image as a full-bleed background with a dark overlay, and place text + CTAs on top of it (full viewport height). Eliminates the stacked feel entirely. |
| 15 | Proof stats bar wraps awkwardly on 375px screens with 4 stats | Truncate to 2 most-important stats on mobile (`hidden sm:flex` the separators, wrap gracefully) |
| 16 | CTAs on mobile have too much top padding from the `.pt-36` parent | Reduce mobile top padding to `pt-28` so content sits better at mid-viewport |

---

## Round 5 — Accessibility & performance

| # | Issue | Fix |
|---|-------|-----|
| 17 | Featured image has no `width`/`height` attributes — causes CLS | Add explicit `width="1200" height="800"` to avoid layout shift before image loads |
| 18 | `loading="eager"` + no `fetchpriority` — browser doesn't know it's LCP | Add `fetchpriority="high"` to the hero image |
| 19 | Frosted badge uses `backdropFilter` without `@supports` fallback | Wrap in `@supports (backdrop-filter: blur(1px))` or supply a solid fallback `background` |

---

## Priority order

1. **Round 1** (typography/sizing) — highest visual return, low risk
2. **Round 3, item 10** (GSAP cleanup) — dead code cleanup
3. **Round 2, items 5 & 9** (image + badge) — brand relevance
4. **Round 3, items 11–12** (motion polish) — premium feel
5. **Round 4, item 14** (mobile full-bleed) — biggest UX lift on mobile
6. **Round 5** (a11y/perf) — always worth doing before launch
