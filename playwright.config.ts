import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 30_000,
  expect: {
    timeout: 5_000,
  },
  use: {
    baseURL: "http://localhost:4321",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium-desktop",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "mobile-chrome",
      use: { ...devices["Pixel 5"] },
    },
  ],
  webServer: {
    command: "COREPACK_ENABLE_DOWNLOAD_PROMPT=0 corepack pnpm@10.12.1 dev --host 0.0.0.0",
    url: "http://localhost:4321",
    reuseExistingServer: true,
    timeout: 120_000,
  },
});