import { test, expect } from "@playwright/test";

test("Ensure title is correct", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("React App");
});

test("Ensure the existence of the logo", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("img")).toBeVisible();
});

test("Ensure link exists", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link")).toContainText("Learn React");
});
