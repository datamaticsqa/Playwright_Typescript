import {test, expect, Locator} from '@playwright/test'
test('Dynamic element handles', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    //await page.goto("http://127.0.0.1:5500/tests/DemoWebsite.html");

    //xpath dynamic element handle
    for(let i=1; i<=5;i++){
        let button:Locator=page.locator('/button[text()="STOP" or text()="START"]')
        await button.click();
        await page.waitForTimeout(3000);
    }

    //css locators
     for(let i=1; i<=5;i++){
        let button:Locator=page.locator('button[name="stop"],button[name="start"]')
        await button.click();
        await page.waitForTimeout(3000);
    }

    //playwright specipic locators
    for(let i=1; i<=5;i++){
            let button:Locator=page.getByRole('button', { name: /START | STOP /});
            await button.click();
            await page.waitForTimeout(3000);
        }



})