import {test,expect,Locator  } from "@playwright/test";

test('Single select dropdown',async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //select the value from the dropdown (4 ways)
    //1st select the value using visible text
    //await page.locator('#country').selectOption('India');

   
    //2nd using value attribute
    //await page.locator('#country').selectOption({value:'uk'});

    //3rd using label
    //await page.locator('#country').selectOption({label:'Japan'});

    //4th using index
   // await page.locator('#country').selectOption({index:8});
    

    //validate the no.of options present in the DD
    const dropdownOptions:Locator= page.locator('#country>option');
    await  expect(dropdownOptions).toHaveCount(10);

    //check an option is present in the DD
    //const optionText:string[]=await dropdownOptions.allTextContents(); // it will returns values with spaces
    
    const optionText:string[]=(await dropdownOptions.allTextContents()).map(text=>text.trim());
    console.log(optionText);

    expect(optionText).toContain('China');

    //printing the all the values
    for(const option of optionText){
        console.log(option);
    }


   await page.waitForTimeout(5000);

})