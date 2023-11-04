import { test, expect } from "@playwright/test";

test.describe("cards", () => {
  test("home", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveScreenshot("home.png");
  });

  test("should go to cell", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("button", { name: "New Cards" }).click();
    await page.getByPlaceholder("1 - 90").click();
    await page.getByPlaceholder("1 - 90").fill("5");
    await page.getByRole("button", { name: "Go to its cell" }).click();
    await expect(
      page.getByRole("button", { name: "5", exact: true })
    ).toBeFocused();
  });

  test("should select cell", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("button", { name: "New Cards" }).click();

    await page.getByRole("button", { name: "57" }).click();
    await expect(
      page.getByRole("button", { name: "57", exact: true })
    ).toHaveClass("card__number card__number--selected");
  });

  test("should reset state", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "New Cards" }).click();
    await page.getByRole("button", { name: "57" }).click();

    await page.getByRole("button", { name: "Reset" }).click();
    await expect(
      page.getByRole("button", { name: "57", exact: true })
    ).not.toHaveClass("card__number--selected");
  });
});
