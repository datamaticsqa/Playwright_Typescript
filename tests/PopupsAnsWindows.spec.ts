import {test,expect  } from "@playwright/test";

test('Handle Popups and Windows', async ({ browser }) => {

    const context = await browser.newContext(); //create a new browser context
    const page = await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Handle  popup
    await Promise.all([page.waitForEvent('popup'), page.locator('#PopUp').click()]); //wait for the popup to be opened and click on the button to trigger the popup
    //await page.waitForEvent('popup');
   // await page.locator('#PopUp').click(); //click on the button to trigger the popup

   //count of pages in the context
   const pages=await context.pages();
   console.log("No of pages/popups in context: " + pages.length); //returns the number of pages in the context 
   
   //switch to the popup window
   console.log("Popup window URL: " + pages[0].url()); //returns the URL of the popup window
   console.log("Popup window URL: " + pages[1].url()); //returns the URL of the popup window

   for(const pw of pages){
    const title=await pw.title();
    console
    if(title.includes("Selenium")){
        await pw.locator('span:has-text("Downloads")').click(); //click on the Downloads link in the popup window
        await pw.close(); //close the popup window
    }
   }
   await page.waitForTimeout(3000);

});