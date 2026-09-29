import {test,expect,Locator  } from "@playwright/test";

test('Multi select dropdown',async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //select the value from the dropdown (4 ways)
    //1st select the value using visible text
    //await page.locator('#colors').selectOption(['Red','Blue','Green']);

   
    //2nd using value attribute
    //await page.locator('#colors').selectOption([{value:'yellow'},{value:'red'},{value:'blue'}]);

    //3rd using label
    //await page.locator('#colors').selectOption([{label:'Blue'},{label:'Red'},{label:'Green'}]);

    //4th using index
   //await page.locator('#colors').selectOption([{index:2},{index:5},{index:3}]);
    
 
    //validate the no.of options present in the DD
    const dropdownOptions:Locator= page.locator('#colors>option');
    await  expect(dropdownOptions).toHaveCount(7);

    //check an option is present in the DD
    //const optionText:string[]=await dropdownOptions.allTextContents(); // it will returns values with spaces
    
    const optionText:string[]=(await dropdownOptions.allTextContents()).map(text=>text.trim());
    console.log(optionText);

    expect(optionText).toContain('Red'); 

    //printing the all the values
    for(const option of optionText){
        console.log(option);
    }
 

   await page.waitForTimeout(3000);

})