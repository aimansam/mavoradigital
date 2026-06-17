# Mavora Labs Website

Single-page landing page for Mavora Labs, an owned freelance web design and development service.

## Project Shape

- Location: `products/mavora-labs/website/`
- Style: landing page
- Stack: Astro, TypeScript, Tailwind CSS, pnpm
- Primary CTA: send a website project request through WhatsApp from `/#project-request`
- WhatsApp: used for project requests and active project support after onboarding
- Domain: `https://mavoralabs.com`
- Logo: `public/logo-transparent.png` generated from `public/logo.png`
- Portfolio demos: `/portfolio/` plus package-mapped sample landing pages
- Project request form: `/#project-request`
- Local workflow: Docker Compose

## Local Development

Copy the environment example if local values are needed:

```bash
cp .env.example .env
```

Start the site through Docker Compose:

```bash
docker compose up --build
```

The site runs at `http://localhost:4321`.

## Useful Commands

```bash
docker compose run --rm web pnpm install
docker compose run --rm web pnpm lint
docker compose run --rm web pnpm build
docker compose down
```

For local host-based development without Docker:

```bash
pnpm install
pnpm dev
pnpm build
```

## Portfolio Demo Maintenance

Add portfolio concepts in `src/data/portfolioDemos.ts`. Every demo must include package metadata so the homepage cards, `/portfolio/` filters, detail-page package panels, and request form handoff stay connected:

- `packageFit`
- `tier`
- `packagePrice`
- `valueProof`
- `includedScope`
- `bestFor`
- `upgradePath`

Package request links use `/?package=<Package Fit - Tier>#project-request`; the homepage request form reads that query value and preselects the matching package tier before sending the WhatsApp message.

## Launch Notes

- Confirm `site` in `astro.config.mjs` matches the production domain.
- Set `PUBLIC_WHATSAPP_NUMBER` before launch so the homepage request form can open WhatsApp with the client request.
- Update `/#project-request` and `docs/business-quotation.md` if the request fields or process changes.
- Replace or rename placeholder portfolio demos if different niches are preferred.
- Add Plausible or another analytics provider if desired.
- Add real portfolio examples, testimonials, or project snapshots when available.
- Check mobile, desktop, SEO metadata, social preview, favicon, and all links before launch.
