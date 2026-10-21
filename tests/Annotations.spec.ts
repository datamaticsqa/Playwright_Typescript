import { test, expect, chromium } from "@playwright/test";
//Annotations -- only, fail, skip, fixme and slow

test.fail("test1", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await expect(page).toHaveTitle("Google"); /*  */
});
test("test2", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await expect(page).toHaveURL("https://www.google.com/");
});
test("test3", async ({ page, browserName }) => {
  test.skip(browserName === "firefox");
  await page.goto("https://www.google.com/");
  await expect(page).toHaveURL("https://www.google.com/");
});
test.fixme("test4", async ({ page, browserName }) => {
  await page.goto("https://www.google.com/");
  //No assertions added as of now , I will be adding those in future.
});
test("test5", async ({ page, browserName }) => {
  test.skip(browserName === "firefox");
  await page.goto("https://www.google.com/");
  await expect(page).toHaveURL("https://www.google.com/");
});
