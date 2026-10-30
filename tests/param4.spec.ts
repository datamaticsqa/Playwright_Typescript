import { test, expect } from "@playwright/test";
import fs from "fs";
import { parse } from "csv-parse/sync";

//Reading the data from csv file

const csvPath = "testdata/testdata.csv";
const fileContent = fs.readFileSync(csvPath, "utf-8");

type LoginRecord = {
  email: string;
  password: string;
  validity: string;
};

//Read the records from file content with Keys and values - using parse
const records = parse(fileContent, {
  columns: true,
  skipEmptyLines: true,
}) as LoginRecord[];

console.log(records);

test.describe("Login with multiple sets of data", async () => {
  for (const data of records) {
    test(`Login test for ${data.email} and ${data.password}`, async ({
      page,
    }) => {
      await page.goto("https://demowebshop.tricentis.com/login");

      //fill login form
      await page.locator("#Email").fill(data.email);
      await page.locator("#Password").fill(data.password);
      await page.locator("input[value='Log in']").click();

      if (data.validity.toLowerCase() === "valid") {
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
