import { test, expect } from "@playwright/test";
test("screenshot test", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  const timestamp = Date.now();
  //capture screenshot of the page
  /*  await page.screenshot({
    path: `tests/screenshots/homepage_${timestamp}.png`,
    fullPage: true,
  }); */

  await page
    .locator("div.list-group")
    .screenshot({ path: `tests/screenshots/homepage_${timestamp}.png` });
  await page.waitForTimeout(3000);
});
