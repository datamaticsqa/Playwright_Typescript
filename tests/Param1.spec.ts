import { test, expect } from "@playwright/test";

const searchItems: string[] = ["Laptop", "Gift card", "smartphone", "monitor"];

test.describe("Search for items", async () => {
  //for (const item of searchItems) {
  searchItems.forEach((item) => {
    test(`Search test for ${item}`, async ({ page }) => {
      await page.goto("https://demowebshop.tricentis.com/");
      await page.locator("#small-searchterms").fill(item);
      await page
        .locator("//input[@class='button-1 search-box-button']")
        .click();
      await expect(page.locator("h2 a").nth(0)).toContainText(item);
    });
  });
});
