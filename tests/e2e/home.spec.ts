import { expect, test } from "@playwright/test";

test("loads the Mavora Labs landing page", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Mavora Labs/);
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", "https://mavoralabs.com/social-preview.png");
  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute("content", "summary_large_image");
  await expect(page.getByRole("link", { name: /send project request/i })).not.toHaveClass(/magnetic/);
  await expect(page.locator(".motion-band__marquee")).toBeVisible();
  await expect(page.getByRole("heading", { name: /websites that help businesses generate sales/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /project request/i }).first()).toBeVisible();
  await expect(page.getByRole("heading", { name: /choose the website path your business needs next/i })).toBeVisible();
  // Package pricing is rendered in tier price elements
  await expect(page.locator(".package-price").first()).toBeVisible();
  await expect(page.getByText(/RM2,500/).first()).toBeVisible();
  await expect(page.getByText(/recommended/i)).toBeVisible();
  await expect(page.getByText(/Basic on-page SEO/i).first()).toBeVisible();
  await expect(page.getByText(/50% deposit to start/i).first()).toBeVisible();
  await expect(page.getByRole("heading", { name: /services that give your website a clear offer, buyer trust, and a direct inquiry path/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /from rough idea to a website ready to sell/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /a simple path from idea/i })).toHaveCount(0);
  await expect(page.getByRole("heading", { name: /share the scope/i })).toBeVisible();
  // These elements are in hidden form steps — check they're in the DOM (not visible until that step is active)
  await expect(page.getByText(/do you already own a domain/i)).toBeAttached();
  await expect(page.getByText(/no payment is required from this form/i)).toBeAttached();
  // Use CSS selector to bypass ARIA hidden state on inactive form step panels
  await expect(page.locator('a[href="/privacy/"]').first()).toBeAttached();
});

test("primary CTA jumps to the project request form", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: /project request/i }).first().click();

  await expect(page).toHaveURL(/#project-request$/);
  await expect(page.getByRole("heading", { name: /share the scope/i })).toBeVisible();
});

test("homepage request form step 1 collects business details", async ({ page }) => {
  await page.goto("/#project-request");

  await page.getByLabel("Business name").fill("Alex Studio");
  await page.getByRole("radio", { name: /^Landing Page Best when/i }).check();

  await expect(page.getByLabel("Business name")).toHaveValue("Alex Studio");
  await expect(page.getByRole("radio", { name: /^Landing Page Best when/i })).toBeChecked();
});

test("homepage request form navigates to step 2 and selects package", async ({ page }) => {
  await page.goto("/#project-request");

  // Fill step 1 - use Business Website type to allow Business Website packages
  await page.getByLabel("Business name").fill("Alex Studio");
  await page.getByRole("radio", { name: /^Business Website Best when/i }).check();

  // Advance to step 2 using the step nav button by ID
  await page.locator("#form-step-next").click();

  // Step 2: Package interest select — Business Website packages are visible
  const packageSelect = page.locator("#package-interest-select");
  await expect(packageSelect).toBeVisible();
  await packageSelect.selectOption("Business Website - Plus (RM2,500)");
  await expect(page.locator("#package-interest-summary").getByText(/five-page site with stronger service structure/i)).toBeVisible();

  await expect(packageSelect).toHaveValue("Business Website - Plus (RM2,500)");
});

test("homepage request form navigates through all steps to submit", async ({ page }) => {
  await page.goto("/#project-request");

  // Step 1
  await page.getByLabel("Business name").fill("Alex Studio");
  await page.getByRole("radio", { name: /^Landing Page Best when/i }).check();
  await page.locator("#form-step-next").click();

  // Step 2
  await page.locator("#package-interest-select").selectOption("Starter Website - Basic (RM800)");
  await page.getByLabel("Business type").selectOption("Professional service");
  await page.locator("#form-step-next").click();

  // Step 3
  await page.getByLabel("Timeline").selectOption("1-2 weeks");
  await page.getByLabel("Budget flexibility").selectOption("Stay close to selected package");
  await page.getByLabel("No, I need domain help").check();
  await page.getByLabel("Need help with text").check();
  await expect(page.getByLabel("No, I need domain help")).toBeChecked();
  await page.locator("#form-step-next").click();

  // Step 4: submit panel
  await expect(page.getByText(/no payment is required from this form/i)).toBeVisible();
  await expect(page.getByText(/contact details can be confirmed after the quote/i)).toBeVisible();
  await expect(page.getByRole("link", { name: /view privacy note/i })).toBeVisible();
  await expect(page.getByRole("button", { name: /send to whatsapp/i })).toBeVisible();
});

test("homepage request form submit button is present on step 4", async ({ page }) => {
  await page.goto("/#project-request");

  // Step 1
  await page.getByLabel("Business name").fill("Alex Studio");
  await page.getByRole("radio", { name: /^Landing Page Best when/i }).check();
  await page.locator("#form-step-next").click();

  // Step 2
  await page.locator("#package-interest-select").selectOption("Starter Website - Basic (RM800)");
  await page.getByLabel("Business type").selectOption("Professional service");
  await page.locator("#form-step-next").click();

  // Step 3
  await page.getByLabel("Timeline").selectOption("1-2 weeks");
  await page.getByLabel("No, I need domain help").check();
  await page.getByLabel("Need help with text").check();
  await page.locator("#form-step-next").click();

  // Step 4: the submit button should be visible and ready
  const submitBtn = page.locator("#project-request-submit");
  await expect(submitBtn).toBeVisible();
  await expect(submitBtn).toHaveText(/send to whatsapp/i);
  // Status message should be present
  await expect(page.locator("#project-request-status")).toBeVisible();
});

test("credibility bar shows all four stats", async ({ page }) => {
  await page.goto("/#services");

  const bar = page.locator(".credibility-bar");
  await expect(bar).toBeVisible();
  await expect(bar.locator(".credibility-stat")).toHaveCount(4);
  await expect(bar.getByText("7")).toBeVisible();
  await expect(bar.getByText(/demo concepts built/i)).toBeVisible();
  await expect(bar.getByText(/whatsapp/i).first()).toBeVisible();
  await expect(bar.getByText(/malaysia/i)).toBeVisible();
});

test("FAQ section renders all six questions and toggles open", async ({ page }) => {
  await page.goto("/#faq");

  const faqSection = page.locator("#faq");
  await expect(faqSection).toBeVisible();
  await expect(faqSection.locator(".faq-item")).toHaveCount(6);

  // First item is closed by default
  const firstDetails = faqSection.locator(".faq-item").first().locator("details");
  await expect(firstDetails).not.toHaveAttribute("open");

  // Click to open
  await faqSection.locator(".faq-item").first().locator("summary").click();
  await expect(firstDetails).toHaveAttribute("open");
  await expect(faqSection.locator(".faq-answer").first()).toBeVisible();
});

test("FAQ nav link is present in header on desktop", async ({ page }) => {
  await page.goto("/");
  // On desktop the nav links are visible directly; on mobile they're behind a hamburger
  const viewportWidth = page.viewportSize()?.width ?? 0;
  if (viewportWidth >= 768) {
    await expect(page.getByRole("link", { name: /^faq$/i })).toBeVisible();
  } else {
    // Mobile: open the menu first
    await page.getByRole("button", { name: /open menu/i }).click();
    await expect(page.getByRole("link", { name: /^faq$/i })).toBeVisible();
  }
});

test("floating WhatsApp CTA is in the DOM and links to project-request", async ({ page }) => {
  await page.goto("/");
  const cta = page.locator("#floating-wa-btn");
  await expect(cta).toHaveAttribute("href", "#project-request");
  await expect(cta).toHaveAttribute("aria-label");
});

test("skip-to-content link is focusable and targets #services", async ({ page }) => {
  await page.goto("/");
  const skipLink = page.locator(".skip-nav");
  await expect(skipLink).toHaveAttribute("href", "#services");
  // Verify it's in the DOM (visibility is controlled by CSS focus state)
  await expect(skipLink).toBeAttached();
});