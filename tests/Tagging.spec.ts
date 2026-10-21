//Tagging -- It is also a one kind grouping

// test1, test2, test3 test4 and test5
// smoke -- test2 and test5  -- @smoke
//regression --test1, test4 and test3  -- @regression
//sanity -- test4 ,test2 -- @sanity
import { test, expect } from "@playwright/test";

//Approach 1
/* test(`@sanity @regression check tittle of the homepage`, async ({ page }) => {
  await page.goto("https://www.google.com/");
  await expect(page).toHaveTitle("Google");
}); */

//another Approach
test("check tittle of the homepage", { tag: "@sanity" }, async ({ page }) => {
  await page.goto("https://www.google.com/");
  await expect(page).toHaveTitle("Google");
});
test(
  "check navigation to store page",
  { tag: "@regression" },
  async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.locator("text='Store'").click();
    await expect(page.locator("text='Popular on the Google Store'")).toHaveText(
      "Popular on the Google Store",
    );
  },
);
test(
  "check Popular on the Google Store ",
  { tag: ["@sanity", "@regression"] },
  async ({ page }) => {
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
  },
);

test.describe.configure({ mode: "serial" });
