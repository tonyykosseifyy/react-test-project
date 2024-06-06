import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  fullyParallel: true,

  reporter: "html",

  /* Configure projects for major browsers */

  use: {
    baseURL: "http://localhost:3000/",
    headless: false,
    launchOptions: {
      slowMo: 1000,
    },
  },

  webServer: {
    command: "npm run start",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: true,
    timeout: 180 * 1000,
  },
});
