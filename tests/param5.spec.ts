import { test, expect } from "@playwright/test";
import fs from "fs";
import xlsx from "xlsx";

//Reading the data from excel file

//file --> workbook -->sheet --> rows and columns

const excelPath = "testdata/testdata.xlsx";

//Read the workbook
const workbook = xlsx.readFile(excelPath);

//Read the sheetNames
const sheetNames = workbook.SheetNames[0];

//Reading the active sheet
const workSheet = workbook.Sheets[sheetNames];

//Convert sheet into Json
const loginData: any = xlsx.utils.sheet_to_json(workSheet);

test.describe("Login with multiple sets of data", async () => {
  for (const { email, password, validity } of loginData) {
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
