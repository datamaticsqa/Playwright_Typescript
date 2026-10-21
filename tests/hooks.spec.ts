import { test, expect, Page } from "@playwright/test";
import config from "../reporting-labs.config";
//hooks: BeforeAll, AfterAll, BeforeEach, AfterEach
//BeforeAll: This hook runs once before all the tests in the test suite. It is typically used for setup tasks that need to be performed before any tests are executed, such as initializing resources or setting up a test environment.
//AfterAll: This hook runs once after all the tests in the test suite have completed. It is typically used for cleanup tasks, such as releasing resources or performing any necessary teardown operations.
//BeforeEach: This hook runs before each individual test in the test suite. It is commonly used to set up preconditions or perform any necessary setup steps that need to be executed before each test case.
//AfterEach: This hook runs after each individual test in the test suite. It is commonly used for cleanup tasks that need to be performed after each test case, such as resetting state or releasing resources specific to that test.

//open app -- beforeAll
//login --> find products
//logout
//login --> add products to cart
//logout
//close app -- afterAll

let page: Page;
test.beforeAll("Open App", async ({ browser }) => {
  page = await browser.newPage();
  await page.goto("https://www.demoblaze.com/index.html");
  console.log("Open App");
});
test.afterAll("Close App", async () => {
  await page.close();
  console.log("Close App");
});

//Login
test.beforeEach("Login", async () => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.getByRole("link", { name: "Log in" }).click();
  await page.locator("#loginusername").fill("admin");
  await page.locator("#loginpassword").fill("admin");
  await page.getByRole("button", { name: "Log in" }).click();
});
//Logout
test.afterEach("Logout", async () => {
  await page.getByRole("link", { name: "Log out" }).click();
});

//main test starts

test.describe("Mygroup", async () => {
  test("Find no.of products", async () => {
    const products = page.locator("#tbodyid .card-img-top");
    const count = await products.count();
    console.log("Number of products:", count);
    await expect(products).toHaveCount(9);
  });

  test("Add the product to cart", async () => {
    //await page.getByText("Samsung galaxy s6").click();
    await page.locator("text='Samsung galaxy s6'").click();
    //Handle alert popups
    page.on("dialog", async (dialog) => {
      (expect(dialog.message).toContain("Product added"),
        await dialog.accept());
    });
    await page.locator("a.btn.btn-success.btn-lg").click();
  });
});
