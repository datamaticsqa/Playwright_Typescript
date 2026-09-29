import {test,expect,Locator } from "@playwright/test";
test('Auto suggested dropdowns',async({page})=>{
     await page.goto('https://www.flipkart.com/');
     await page.locator('input:visible').fill('smart');//
     page.waitForTimeout(3000);

     //capturing the all  auto suggested options
     const options:Locator=page.locator('ul>li');
     const count=await options.count();

     console.log("No of suggested Options:", count);
        options.allTextContents(); // capturing the all auto suggested values.
     console.log(options.nth(4).innerText());

     //print all the auto suggested options
     for(let i=0;i<count;i++){
        console.log(options.nth(i).innerText()) // it will returns the all the auto suggested options
        console.log(options.nth(i).textContent()) // it will returns the all the auto suggested options
     }
     page.waitForTimeout(4000);


})
