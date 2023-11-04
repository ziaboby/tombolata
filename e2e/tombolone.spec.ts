import { test, expect } from "@playwright/test";

test.describe("Tombolone", () => {
  test("home", async ({ page }) => {
    await page.goto("/");
    const newTomboloneButton = await page.getByRole("button", {
      name: "New [TOMBOLONE]",
    });

    await newTomboloneButton.click();

    await expect(page).toHaveScreenshot("tombolone.png");
  });

  test("should extract number", async ({ page }) => {
    await page.goto("/");
    const newTomboloneButton = await page.getByRole("button", {
      name: "New [TOMBOLONE]",
    });

    newTomboloneButton.click();

    await page.getByRole("button", { name: "New number" }).click();
    const lastExtractedNumberStatus = await page.locator("#tombolone_number");
    const lastExtractedNumber = await lastExtractedNumberStatus.innerText();
    expect(lastExtractedNumber).toBeDefined();
    expect(lastExtractedNumber).not.toBeNaN();
    const lastExtractedNumberCell = await page.getByRole("gridcell", {
      name: lastExtractedNumber,
      exact: true,
    });
    await expect(lastExtractedNumberCell).toHaveClass(
      "card__box card__box--selected"
    );
  });

  test("should reset state", async ({ page }) => {
    await page.goto("/");
    const newTomboloneButton = await page.getByRole("button", {
      name: "New [TOMBOLONE]",
    });

    newTomboloneButton.click();

    await page.getByRole("button", { name: "New number" }).click();
    await expect(page.locator(".card__box--selected")).toBeVisible();

    await page.getByRole("button", { name: "Reset" }).click();

    await expect(page.locator(".card__box--selected")).not.toBeVisible();
  });
});
