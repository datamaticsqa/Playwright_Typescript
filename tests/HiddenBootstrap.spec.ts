import {test,expect,Locator } from "@playwright/test";
test('Hidden Bootstrap dropdowns',async({page})=>{
     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

     //login to the application
        await page.locator('input[name="username"]').fill('Admin');
        await page.locator('input[name="password"]').fill('admin123');
        await page.locator('button[type="submit"]').click();
        await page.waitForTimeout(3000);

        //click on the PIM tab
        await page.getByText('PIM').click();
        

        await  page.locator('form i').nth(3).click(); // click on the dropdown icon
        await page.waitForTimeout(3000);
    
    
     //capturing the all  auto suggested options
     const options:Locator=page.locator("div[role='listbox'] span");
     const count=await options.count();

     console.log("No of suggested Options:", count);
     
     //capturing the all auto suggested values.
     const AutoOptions:string[]=(await options.allTextContents()).map(text=>text.trim());
     console.log(AutoOptions); 
     //console.log(options.nth(4).innerText());

     for(let i=0;i<count;i++){
        const text=await options.nth(i).innerText(); // it will returns the all the auto suggested options
        //console.log(options.nth(i).textContent()) // it will returns the all the auto suggested options

        //clicking on the required option from the auto suggested options
        if(text==='Sales'){
            await options.nth(i).click();
            break;
        }
        
     }
     
    await page.waitForTimeout(4000);


})