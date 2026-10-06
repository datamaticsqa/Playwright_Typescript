import { test,expect,Locator, Page } from "@playwright/test";

async function selectDate(targetMonth:string, targetYear:string, targetDate:string,page:Page,isFuture:boolean){
     while (true) {
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();
        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        
        //match the current month and year with the target month and year
        if(currentMonth===targetMonth && currentYear===targetYear){
            break;
        }
       if(isFuture){ //if the target date is in future then click on next button
        await page.locator('.ui-datepicker-next').click();
        
       }else{//if the target date is in past then click on previous button
        await page.locator('.ui-datepicker-prev').click();
       
       }
     }
       await page.waitForTimeout(3000);
        //select the date from the datepicker
        const allDates=await page.locator('.ui-datepicker-calendar td').all();
       
        for(let dt of allDates){
            const dateText=await dt.innerText();
            if(dateText===targetDate){
                await dt.click();
                break;
            }
        }
     
     
}
test('Jquery Datepicker', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //click on the datepicker text box
    const datepicker = await page.locator('#datepicker');
    await expect(datepicker).toBeVisible();
    await datepicker.click();
    
    //target date to select
    const targetDate = '18';
    const targetMonth = 'November';
    const targetYear = '2024';
    const isFuture=false; //set to true if the target date is in future, false if in past  
    await selectDate(targetMonth, targetYear, targetDate,page,isFuture);
      
    await page.waitForTimeout(5000);
});
    