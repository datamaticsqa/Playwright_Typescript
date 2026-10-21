import { test, expect } from "@playwright/test";

test("Screenshot on failure", async ({ page, context }) => {
  context.tracing.start({ screenshots: true, snapshots: true });
  await page.goto("https://www.demoblaze.com/index.html");
  await page.getByRole("link", { name: "Log in" }).click();
  await page.locator("#loginusername").fill("admin");
  await page.locator("#loginpassword").fill("admin");
  await page.getByRole("button", { name: "Log in" }).click();
  //wait for 3000 milliseconds
  await page.waitForTimeout(3000);
  await expect(page.getByRole("link", { name: "Welcome admin" })).toBeVisible();
  await page.getByRole("link", { name: "Log out" }).click();
  context.tracing.stop({ path: "tests/screenshots/trace.zip" });
});
