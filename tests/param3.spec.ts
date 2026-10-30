import { test, expect } from "@playwright/test";
import fs from "fs";

//Reading the data from json file

const jsonPath = "testdata/testdata.json";
const loginTestData = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
console.log(loginTestData);

test.describe("Login with multiple sets of data", async () => {
  for (const { email, password, validity } of loginTestData) {
    test(`Login test for ${email} and ${password}`, async ({ page }) => {
      await page.goto("https://demowebshop.tricentis.com/login");

      //fill login form
      await page.locator("#Email").fill(email);
      await page.locator("#Password").fill(password);
      await page.locator("input[value='Log in']").click();

      if (validity.toLowerCase() === "valid") {
        //Assert logout link is visible -- indicates successful login
        const logOutLink = page.locator("a[href='/logout']");
        await expect(logOutLink).toBeVisible({ timeout: 5000 });
      } else {
        //Asserting for error message is visible
        const errorMessage = page.locator(".validation-summary-errors");
        await expect(errorMessage).toBeVisible({ timeout: 3000 });
      }
    });
  }
});
