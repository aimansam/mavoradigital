import { expect, test } from "@playwright/test";

test("loads the privacy page", async ({ page }) => {
  await page.goto("/privacy/");

  await expect(page).toHaveTitle(/Privacy/);
  await expect(page.getByRole("heading", { name: /your request details stay focused/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /what is collected/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /how it is used/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /back to request form/i })).toBeVisible();
});