import  {expect, test} from '@playwright/test';
test('Assertions Demo', async ({ page }) => {
     
     await page.goto("https://demowebshop.tricentis.com/"); 
     
     //1.Auto-retrying assertion
     await expect(page).toHaveURL("https://demowebshop.tricentis.com/"); //auto-retrying assertion//assert the URL of the page 
    

     //Auto-retrying assertion for the element to be visible
     await expect.soft( page.locator(':text("Welcome to our store2")')).toBeVisible(); //wait for the text to be visible for 5 seconds

     await expect(page.locator("div[class='product-grid home-page-product-grid'] strong")).toHaveText('Featured products'); //assert the text of the element
    
     //2.Non-Retrying assertion(executed immediately once)
        const title=await page.title(); 
        expect(title.includes('Demo Web Shop')).toBeTruthy(); //assert the title of the page
        const welcomeText=await page.locator(':text("Welcome to our store")').innerText();
        expect(welcomeText).toContain('Welcome to our store'); //assert the text of the element

    //3. Negating matchers
    await expect(page).not.toHaveURL("https://demowebshop.tricentis.com/"); //assert the URL of the page
    expect(welcomeText).not.toContain('Welcome to our store'); 
    await page.waitForTimeout(3000);
});                                                                