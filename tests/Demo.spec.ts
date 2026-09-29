import {test, expect} from '@playwright/test';

test('Locators demo test',async({ page })=>{

    //GetByRole
    await page.goto('file:///C:/Users/chavali.chiranjeevi/Desktop/Playwright%20Locator%20Demo.html');
    //const heading=await page.getByRole('heading',{name: 'Playwright Locator Demo'})
    await expect(await page.getByRole('heading',{name: 'Playwright Locator Demo'}).isVisible())
    //await expect(heading.isVisible());

    await page.getByRole('button', { name: 'Login' }).click();

    //GetByText
    await expect(await page.getByText('Automation Training',{exact:true}).isVisible());

    //GetByLabel
    await page.getByLabel('Username').fill("Tester");
    await page.getByLabel('Password').fill("!23434");
    await page.getByRole('button',{name: 'Login'}).click();

    //GetByTestID
    await page.getByTestId('submit-order').click();//attribute data-testid
    await page.getByTestId('submit-order').click();//attribute data-pwd.

   
    
   
})