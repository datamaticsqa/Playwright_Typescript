import {test,expect  } from "@playwright/test";
//Advantage of autowaiting
//resude the flaky tests caused by the timing issues
//Makes your tests more readable and easier to maintain
//Imporves the stability of your tests by reducing the likelihood of false negatives caused by timing issues

//timeout - how long a single test is allowed to run.

test('Autowatiing and Timeout Demo', async ({ page }) => {
     test.setTimeout(60000); //set the timeout for the test to 60 seconds
     await page.goto("https://demowebshop.tricentis.com/");    
     const title=await page.title();
     console.log("Page title: " + title);
     expect(title).toContain('Demo Web Shop');

     await expect( page.locator(':text("Welcome to our store")')).toBeVisible({ timeout: 5000 }); //wait for the text to be visible for 5 seconds

     await page.locator('#small-searchterms').fill('laptop',{force:true}); //fill the search box with the text 'laptop' and force the action even if the element is not visible or disabled
     await page.locator('input[type="submit"]').click({force:true});//click on the search button and force the action even if the element is not visible or disabled
     
     await page.waitForTimeout(3000);
});                                                                