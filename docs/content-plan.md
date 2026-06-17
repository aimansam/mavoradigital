# Mavora Labs Content Plan

## Positioning

- Primary offer: fast, polished websites for freelancers, local businesses, and growing teams.
- Primary audience: service businesses that need a credible web presence without agency overhead.
- Conversion action: send a website project request through WhatsApp.
- Success metric: qualified WhatsApp project requests and project inquiries.

## Pages

| Page | Purpose | Owner | Status |
| --- | --- | --- | --- |
| Home landing page | Main positioning, services, process, packages, WhatsApp request form, and CTA | Mavora Labs | Draft |
| Portfolio demos | Sample landing pages for local business niches | Mavora Labs | Draft |
| Privacy | Explain how website request details are used | Mavora Labs | Draft |
| 404 | Simple fallback page | Mavora Labs | Not started |

## Home Sections

- Hero: clear offer, business-focused promise, primary CTA.
- Trust strip: speed, responsive layout, handoff notes.
- About: practical studio positioning.
- Services: landing pages, business websites, redesigns and support.
- Portfolio demos: burger shop, coffee shop, barber shop, carwash shop, dental clinic, bakery shop, and fit studio booking.
- Packages: Starter Website, Business Website, Custom Build with Basic, Plus, and Pro pricing tiers plus free included features for Malaysia.
- Process: scope, design, build, launch.
- Request explainer: share quote scope, send on WhatsApp, confirm the next step.
- Project request form: collect quote-first business details, package interest, budget flexibility, content readiness, current website/social link, domain ownership, broad business category, and send the request through WhatsApp.

## Project Request Content

- Web route: `/#project-request`
- Editable source: `docs/business-quotation.md`
- Configure before launch: `PUBLIC_WHATSAPP_NUMBER`.
- Form sends selected project details, package tier, business category, domain status, and quote-relevant scope notes to WhatsApp. Personal contact, email, phone, and onboarding details are handled after quotation.
- Privacy page: `/privacy/`

## Portfolio Demo Notes

- Demo index: `/portfolio/`
- Demo detail route pattern: `/portfolio/<slug>/`
- Current demos: burger shop, coffee shop, barber shop, carwash shop, dental clinic, bakery shop, and fit studio booking.
- The bakery, dental clinic, and fit studio demos are placeholder concepts and can be renamed later.
- Package value plan: `docs/portfolio-package-plan.md`
- New demos must include package metadata: `packageFit`, `tier`, `packagePrice`, `valueProof`, `includedScope`, `bestFor`, and `upgradePath`.
- Detail-page package CTAs use `/?package=<Package Fit - Tier>#project-request` so the homepage form can preselect package interest.

## Assets Needed

- Logo or wordmark refinement
- Real project screenshots or capability examples
- Testimonials or proof points when available
- WhatsApp number for project requests and active client support
- Social preview image: `public/social-preview.png`
- Optional founder photo

## SEO Notes

- Primary keyword/theme: freelance website builder, web design and development services.
- Local SEO requirements: decide after target region is known.
- Redirects from old site: none yet.
- Social preview image: `public/social-preview.png` is used in Open Graph and Twitter metadata. The editable source is `public/social-preview.svg`.
