# Portfolio Separation Plan

## Goal

Separate portfolio demo code from the main Mavora Labs website code so portfolio demos can evolve independently, stay easier to maintain, and eventually move to a standalone app if needed.

The first target is feature isolation inside the existing Astro project. A full standalone portfolio app can come later after the code is self-contained.

## Current State

- Portfolio routing lives under `src/pages/portfolio/`.
- Burger demo components live under `src/features/portfolio/demos/burger-shop/components/`.
- Burger demo data lives under `src/features/portfolio/demos/burger-shop/data.ts`.
- Generic portfolio demo data lives under `src/features/portfolio/data/portfolioDemos.ts`.
- Burger menu CSS lives under `src/features/portfolio/demos/burger-shop/styles/menu.css`.
- Burger page CSS lives under `src/features/portfolio/demos/burger-shop/styles/`.
- Burger demo GSAP animation lives under `src/features/portfolio/demos/burger-shop/components/BurgerAnimations.astro`.
- The portfolio route delegates Burger rendering through `src/features/portfolio/demos/burger-shop/BurgerDemo.astro`.
- The portfolio route still contains generic non-Burger demo page markup.

## Execution Status

- Phase 1 completed: portfolio and Burger boundaries were identified.
- Phase 2 completed: `src/features/portfolio/` was created with ownership notes.
- Phase 3 partially completed: portfolio demo data was moved into the feature folder and imports were updated.
- Phase 4 partially completed: Burger data, components, behavior, and menu CSS were moved into the Burger demo folder; `BurgerDemo.astro` now owns Burger rendering.
- Phase 5 completed: remaining `.burger-*` styles were moved into `src/features/portfolio/demos/burger-shop/styles/burger.css` and imported by `BurgerDemo.astro`.
- Phase 6 completed: `src/features/portfolio/registry.ts` now registers `burger-shop`, and the route asks the registry which demo component to render.
- Phase 6A completed: Burger demo GSAP animation was added as a demo-owned component with reduced-motion handling.
- Docker remains shared in the current app: the existing website `Dockerfile`, `compose.yaml`, `.dockerignore`, and `.env.example` still apply while portfolio is only a feature folder.

## Target Structure

```txt
src/
  features/
    portfolio/
      data/
        portfolioDemos.ts
      pages/
        PortfolioIndex.astro
        PortfolioDemoPage.astro
      components/
        PortfolioShell.astro
        PortfolioDemoCard.astro
      demos/
        burger-shop/
          BurgerDemo.astro
          data.ts
          components/
            BurgerBehavior.astro
            BurgerAnimations.astro
            BurgerFinalCta.astro
            BurgerHeader.astro
            BurgerHero.astro
            BurgerLandingSections.astro
            BurgerLocation.astro
            BurgerMenu.astro
            BurgerReviews.astro
            BurgerValueCarousel.astro
          styles/
            burger.css
            menu.css
      registry.ts
```

Route files should become thin wrappers:

```txt
src/pages/portfolio/index.astro
src/pages/portfolio/[slug].astro
```

## Phase 1: Inventory and Boundaries

Document what belongs to the portfolio feature and what belongs to the main website.

Deliverables:

- List all files used by portfolio routes.
- Mark each file as `portfolio`, `burger demo`, `shared site`, or `global framework`.
- Identify Burger styles still inside `src/styles/global.css`.
- Identify imports from portfolio code into shared site code.

Acceptance Checks:

- No file is moved yet.
- The migration boundary is clear before editing paths.
- Known shared dependencies are intentionally kept or scheduled for migration.

## Phase 2: Create Portfolio Feature Folder

Create the destination folder structure without changing behavior.

Deliverables:

- Add `src/features/portfolio/`.
- Add `data/`, `components/`, `pages/`, `demos/`, and `demos/burger-shop/` folders.
- Add a short `README.md` inside `src/features/portfolio/` explaining ownership.

Acceptance Checks:

- App still builds/runs with no behavior change.
- No route paths change.

## Phase 3: Move Generic Portfolio Code

Move portfolio-level data and generic portfolio UI into the feature folder.

Deliverables:

- Move `src/data/portfolioDemos.ts` to `src/features/portfolio/data/portfolioDemos.ts`.
- Extract generic portfolio page sections from `src/pages/portfolio/[slug].astro` into `src/features/portfolio/pages/PortfolioDemoPage.astro`.
- Keep `src/pages/portfolio/[slug].astro` as a wrapper around the feature page.

Acceptance Checks:

- `/portfolio/` still loads.
- `/portfolio/burger-shop/` still loads.
- Non-Burger demo pages still render the same content.
- Imports no longer reach into old portfolio data paths.

## Phase 4: Move Burger Demo Code

Move Burger-specific data, components, behavior, and styles under the Burger demo folder.

Deliverables:

- Move `src/data/burgerDemo.ts` to `src/features/portfolio/demos/burger-shop/data.ts`.
- Move `src/components/burger/*.astro` to `src/features/portfolio/demos/burger-shop/components/`.
- Move `src/components/burger/BurgerMenu.css` to `src/features/portfolio/demos/burger-shop/styles/menu.css`.
- Update all Burger imports to local feature paths.
- Add `BurgerDemo.astro` as the Burger demo entry component.

Acceptance Checks:

- Burger demo route renders through `BurgerDemo.astro`.
- Burger components no longer import from shared `src/data`.
- Cart behavior, menu filters, WhatsApp checkout, location, reviews, and final CTA still work.

## Phase 5: Split Burger Styles from Global CSS

Move remaining `.burger-*` styles out of `src/styles/global.css`.

Deliverables:

- Create `src/features/portfolio/demos/burger-shop/styles/burger.css`.
- Move all Burger-only styles from `global.css` into `burger.css`.
- Import Burger styles from the Burger demo entry or layout component.
- Leave only true global site styles in `src/styles/global.css`.

Acceptance Checks:

- `global.css` has no `.burger-*` selectors.
- Burger page visual styling remains intact.
- Non-Burger pages are not affected by Burger CSS.

## Phase 6: Add Demo Registry

Replace route-level demo branching with a registry.

Deliverables:

- Add `src/features/portfolio/registry.ts`.
- Register `burger-shop` with its component and data.
- Route code asks the registry which demo to render.
- Unknown or generic demos fall back to the generic portfolio demo page.

Example shape:

```ts
export const portfolioDemoRegistry = {
  "burger-shop": {
    component: BurgerDemo,
  },
};
```

Acceptance Checks:

- Adding a future demo does not require editing the main route layout heavily.
- Burger-specific logic is no longer hardcoded inside `src/pages/portfolio/[slug].astro`.

## Phase 6A: Add GSAP Animation Layer

Add motion as a demo-owned enhancement instead of placing animation code in global site scripts.

Deliverables:

- Add `BurgerAnimations.astro` inside the Burger demo component folder.
- Use the existing `gsap` and `ScrollTrigger` dependency for hero entrance, scroll reveal, card reveal, and hero image parallax.
- Keep cart, tabs, WhatsApp checkout, and store-hour logic in `BurgerBehavior.astro`.
- Respect `prefers-reduced-motion` and leave all content visible without JavaScript.

Acceptance Checks:

- Burger demo still builds as a static Astro page.
- GSAP is imported only by the Burger demo animation component for Burger-specific motion.
- Reduced-motion users receive the non-animated layout.
- No animation code is added to `src/styles/global.css` or the portfolio route wrapper.

## Phase 7: Test and QA Separation

Organize portfolio tests so they can run independently.

Deliverables:

- Move or group portfolio tests under `tests/e2e/portfolio/`.
- Keep Burger-specific tests in a Burger test file.
- Add checks for menu filter, add-to-cart, WhatsApp checkout link, location section, reviews, and final CTA.

Acceptance Checks:

- Portfolio tests can be run as a focused suite.
- Existing Burger behavior coverage still passes.
- No test depends on unrelated main-site pages unless explicitly intended.

## Phase 8: Docker Boundary

Keep Docker simple while portfolio lives inside the main website app. Split Docker only when portfolio becomes a separate app or deploy target.

Current Feature-Isolation Setup:

- Keep using the website root `Dockerfile`.
- Keep using the website root `compose.yaml` with service name `web`.
- Keep using port `4321` for the Astro app.
- Run portfolio routes through the same container at `/portfolio/` and `/portfolio/<slug>/`.
- Do not create a second Compose service while portfolio is only a source-code feature.

Deliverables:

- Document that portfolio uses the website container during Phase 1 through Phase 7.
- Keep `Dockerfile`, `compose.yaml`, `.dockerignore`, and `.env.example` at the website root.
- Verify Docker Compose config after any Docker file changes.

Acceptance Checks:

- `docker compose -f compose.yaml config` succeeds from the website root.
- `docker compose up --build` serves the main site and portfolio routes through the same `web` service.
- No separate portfolio container exists until the standalone-app phase.

Standalone Docker Split Criteria:

- Portfolio needs its own deployment URL or release cycle.
- Portfolio needs different dependencies from the main website.
- Portfolio should build/test independently in CI.
- Portfolio should be reused outside the Mavora Labs website.

## Phase 9: Optional Standalone App

Only do this after Phase 1 through Phase 8 are stable.

Deliverables:

- Create a separate app at `products/mavora-labs/portfolio/` if standalone deployment is needed.
- Add its own `package.json`, `Dockerfile`, `compose.yaml`, `.dockerignore`, `.env.example`, and README.
- Move `src/features/portfolio/` into the standalone app.
- Keep the main website linking to the standalone portfolio path or deployment URL.

Acceptance Checks:

- Main website and portfolio can be built independently.
- Portfolio has its own Docker Compose workflow.
- No shared source imports remain between apps.

## Recommended Next Step

Continue with Phase 7 test/QA organization, including a quick Burger animation smoke check, while keeping Docker shared. Add a separate Docker setup only if Phase 9 becomes necessary.