import { test, expect } from "@playwright/test";

test.describe("Group1", async () => {
  test("test1", async ({ page }) => {
    console.log("test1 started");
  });
  test("test2", async ({ page }) => {
    console.log("test2 started");
  });
});

test.describe("Group2", async () => {
  test("test3", async ({ page }) => {
    console.log("test3 started");
  });
  test("test4", async ({ page }) => {
    console.log("test4 started");
  });
});
