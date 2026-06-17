import { expect, test } from "@playwright/test";

test("old request route redirects to the homepage form", async ({ page }) => {
  await page.goto("/quotation/");

  // Wait for the redirect to complete and the homepage to load
  await page.waitForURL(/#project-request$/);
  await page.waitForLoadState("domcontentloaded");

  await expect(page).toHaveURL(/#project-request$/);
  await expect(page.getByRole("heading", { name: /share the scope/i })).toBeVisible();
  // The send to WhatsApp button is on the final step of the multi-step form (in DOM but not yet visible)
  // Use the stable ID selector rather than role+name to avoid hidden-element lookup issues
  await expect(page.locator("#project-request-submit")).toBeAttached();
});
