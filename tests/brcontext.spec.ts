import {test,expect, chromium } from "@playwright/test";

test('Browser context Demo', async () => {

    const browser= await chromium.launch();
    const context = await browser.newContext(); //create a new browser context
    const parentPage = await context.newPage();
    await parentPage.goto("https://testautomationpractice.blogspot.com/"); 

    const [childPage]=await Promise.all([context.waitForEvent('page'), parentPage.locator('button:has-text("New Tab")').click()]); //wait for the new page to be opened and click on the button to open a new tab
    console.log("No of pages: " + (await context.pages()).length ); //returns the URL of the child page
   
    // await context.waitForEvent('page'); //wait for the new page to be opened
    //await parentPage.locator('button:has-text("New Tab")').click();//click on the button to open a new tab 
    
    //Swich between the parent and child pages
    const pages=await context.pages(); //returns the array of pages in the context
    console.log("Parent Page URL: " + parentPage.url());
    console.log("Child Page URL: " + childPage.url());

    //validate the title of the child page
    console.log("parent page title: ",await pages[0].title());
    console.log("child page title: ",await  pages[1].title());

    
    //another way to switch between the parent and child pages
    const parentPageTitle=await parentPage.title();
    console.log("Parent Page Title: " + parentPageTitle);
    const childPageTitle=await childPage.title();
    console.log("Child Page Title: " + childPageTitle);

    await parentPage.waitForTimeout(3000);


    /* const page1= await context.newPage();
    //await page1.goto("https://playwright.dev/");  
    
    const page2= await context.newPage();
    //await page2.goto("https://testautomationpractice.blogspot.com/");  

   //returns the URL of the page
    const page3= await context.newPage();
    context.pages(); //returns the array of pages in the context
  
    console.log("No of pages in context: " + (await context.pages()).length); //returns the URL of the page
 */

    /* const page= await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");  */  
    //await page.waitForTimeout(3000); 
})