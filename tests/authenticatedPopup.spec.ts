import {test,expect  } from "@playwright/test";

test('Handle Popups and Windows', async ({ browser }) => {

    const context = await browser.newContext({httpCredentials: {username: 'admin', password: 'admin'}}); //create a new browser context
    const page = await context.newPage();

    //Along with the username and password, you can also specify the domain name in the URL. The format is: https://username:password@hostname. For example, if your username is "admin", your password is "admin123", and the hostname is "example.com", you would use the following URL: https://admin:
    //https://username:password@hostname
    //await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");

    await page.goto("https://the-internet.herokuapp.com/basic_auth");
    //validate the text on the page after successful authentication
    const text=await page.locator('p').innerText();
    console.log("Text after successful authentication: " + text);
    expect(text).toContain('Congratulations! You must have the proper credentials.');

    await page.waitForTimeout(5000);

    //
})