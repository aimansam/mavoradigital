import { expect, test } from "@playwright/test";

const demoSlugs = ["burger-shop", "coffee-shop", "barber-shop", "carwash-shop", "bakery-shop"];

test("loads the portfolio demo index", async ({ page }) => {
  await page.goto("/portfolio/");
  await page.waitForLoadState("domcontentloaded");

  await expect(page).toHaveTitle(/Portfolio Demos/);
  await expect(page.getByRole("heading", { name: /package-mapped website demos/i })).toBeVisible();
  // Each card has a visible "View package demo" span and an sr-only "{name} package demo" span
  // 7 demos: burger-shop, coffee-shop, barber-shop, carwash-shop, dental-clinic, bakery-shop, fit-studio-booking
  await expect(page.locator("article.portfolio-index-card")).toHaveCount(7);
  await expect(page.getByRole("link", { name: /view .+ package demo/i })).toHaveCount(7);
});

for (const slug of demoSlugs) {
  test(`loads the ${slug} demo landing page`, async ({ page }) => {
    // Burger shop has a loader animation that waits for window.load — use a longer timeout
    test.setTimeout(slug === "burger-shop" ? 60_000 : 30_000);

    await page.goto(`/portfolio/${slug}/`, { waitUntil: "domcontentloaded" });

    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    if (slug === "burger-shop") {
      if ((page.viewportSize()?.width ?? 0) >= 768) {
        await expect(page.getByRole("link", { name: /demo library/i })).toBeVisible();
      }
      await expect(page.getByRole("heading", { name: /hungry now/i })).toBeVisible();
      const hero = page.locator("#top");
      await expect(hero.getByRole("link", { name: /explore our menu/i })).toHaveAttribute("href", "#burger-menu");
      await expect(hero.getByRole("link", { name: /find our location/i })).toHaveAttribute("href", "#burger-location");
      await expect(page.getByRole("heading", { name: /choose a stack/i })).toBeVisible();
      await expect(page.getByRole("heading", { name: /order in 3 easy steps/i })).toBeVisible();
      await expect(page.getByRole("heading", { name: /pick your burger/i })).toBeVisible();
      await expect(page.getByRole("heading", { name: /checkout on whatsapp/i })).toBeVisible();
      await expect(page.getByRole("button", { name: /^top seller$/i })).toHaveAttribute("aria-pressed", "true");
      await expect(page.getByRole("heading", { name: /^top seller$/i })).toBeVisible();
      await expect(page.getByRole("button", { name: /add salted egg crunch to cart/i })).toBeVisible();
      await page.getByRole("button", { name: /^beef$/i }).click();
      await expect(page.getByRole("button", { name: /^beef$/i })).toHaveAttribute("aria-pressed", "true");
      await expect(page.getByRole("heading", { name: /beef burgers/i })).toBeVisible();
      await page.getByRole("button", { name: /^chicken$/i }).click();
      await expect(page.getByRole("button", { name: /^chicken$/i })).toHaveAttribute("aria-pressed", "true");
      await expect(page.getByRole("heading", { name: /chicken burgers/i })).toBeVisible();
      await expect(page.getByRole("heading", { name: /beef burgers/i })).toBeHidden();
      await page.getByRole("button", { name: /add salted egg crunch to cart/i }).click();
      await expect(page.locator("[data-burger-cart-count]")).toHaveText(/1 item/i);
      await expect(page.locator(".burger-cart-panel__eyebrow")).toHaveText(/order details/i);
      await expect(page.locator("[data-burger-cart-heading]")).toHaveText(/review your order/i);
      await expect(page.locator(".burger-cart-options__topline")).toHaveText(/choose how to serve it/i);
      await page.locator("[data-burger-cart-name]").fill("Amin");
      await page.locator("[data-burger-cart-contact]").fill("012-345 6789");
      await expect(page.getByText(/1 x rm24\.90 = rm\s?24\.90/i)).toBeVisible();
      await expect(page.locator(".burger-cart-total__label")).toHaveText(/order total/i);
      await expect(page.locator("[data-burger-cart-submit]")).toHaveText(/order on whatsapp/i);
      await expect(page.locator("[data-burger-cart-submit]")).toHaveAttribute("href", /Salted%20Egg%20Crunch/);
      await expect(page.locator("[data-burger-cart-submit]")).toHaveAttribute("href", /Name%3A%20Amin/);
      await expect(page.locator("[data-burger-cart-submit]")).toHaveAttribute("href", /Contact%3A%20012-345%206789/);
      await expect(page.locator("[data-burger-final-cart-submit]")).toHaveAttribute("href", "#burger-menu");
      await expect(page.locator("[data-burger-mobile-cart-link]")).toHaveAttribute("href", /Salted%20Egg%20Crunch/);
      await expect(page.getByText(/open daily, 11 am - 10 pm/i).first()).toBeVisible();
      await expect(page.getByText(/1 item ready for takeaway\. total confirmed on whatsapp/i)).toBeVisible();
    } else {
      await expect(page.getByRole("link", { name: /built by mavora labs/i })).toBeVisible();
      await expect(page.getByRole("heading", { name: /designed around the first action/i })).toBeVisible();
      // Each non-burger portfolio page has two CTA links with the package label (e.g. "Request Starter Basic", "Request Business Pro")
      await expect(page.getByRole("link", { name: /request .+ (basic|plus|pro|premium|standard)/i }).first()).toBeVisible();
    }
  });
}
