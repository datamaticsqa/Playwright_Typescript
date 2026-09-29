/*
   Actions: Input fields /textboxes, radio buttons, checkboxes, dropdowns,upload file, mouse opertions
*/

import {test, expect, Locator} from '@playwright/test'

//1.input field /textboxes
test('Verify input actions', async({page})=>{
    await page.goto('https://demowebshop.tricentis.com/');
    const textbox:Locator=page.locator("#small-searchterms");
    await expect(textbox).toBeVisible();
    await expect(textbox).toBeEnabled();

    await textbox.fill("Computers");

    
   const nameValue=textbox.getAttribute("name");
   expect(nameValue).not.toBe(2);

   console.log("Text content of the Entered values : ",await textbox.inputValue());
   expect(await textbox.inputValue()).toBe("Computers");
  

    await page.waitForTimeout(2000);

})
//2.Radio buttons
test('Verify radio buttons actions',async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/register");
    let maleRadio:Locator=await page.locator('#gender-male');
    await expect(maleRadio).toBeVisible();
    await expect(maleRadio).toBeEnabled();

    //checking already cheched or not
    expect(await maleRadio.isChecked()).toBe(false); //true or false

    //check the radio button
    await maleRadio.check();

    //checking already cheched or not
    expect(await maleRadio.isChecked()).toBe(true); //true or false

    await page.waitForTimeout(3000);

})
test('Verify radio buttons',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    let maleRadio:Locator=await page.locator('#male');
    await expect(maleRadio).toBeVisible();
    await expect(maleRadio).toBeEnabled();

   //checking already cheched or not
    expect(await maleRadio.isChecked()).toBe(false); //true or false

    //check the radio button
    await maleRadio.check();

    //checking already cheched or not
    expect(await maleRadio.isChecked()).toBe(true); //true or false

    await page.waitForTimeout(3000);

})
//3.Check boxes
test.only('Verify checkboxes options',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
   //select the specific checkboxes using the getBylabel and assertion

   const sundayCheckbox:Locator=page.getByLabel('Sunday');
   await sundayCheckbox.check();

   //verify the checkbox has checked or not
   await expect(sundayCheckbox).toBeChecked();

   //selet all checkboxes and assert each is checked
   const days:string[]=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

   //mapping 
   const checkboxes:Locator[]=days.map(index=>page.getByLabel(index));
   expect(checkboxes.length).toBe(7);

  /*  //select all the checkboxes
   for(let checkbox of checkboxes){
    await checkbox.check();
    await expect(checkbox).toBeChecked();
   } */

   //select last 3 checkboxes
   for(let checkbox of checkboxes.slice(-3)){
    await checkbox.check();
    await expect(checkbox).toBeChecked();
   }
   //uncheck last 3 checkboxes
   for(let checkbox of checkboxes.slice(-3)){
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
   }

   for(let checkbox of checkboxes){
    //if check is not checked
    await checkbox.check();
    await expect(checkbox).toBeChecked();

    //only if checkbox is checked
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();

   }

    await page.waitForTimeout(3000);

})
test('validating checkboxes operations',async({page})=>{
    await page.goto("https://demoqa.com/checkbox");

    const homeCheckbox:Locator=await page.locator('span.rc-tree-switcher.rc-tree-switcher_close');
    homeCheckbox.click();

    //get the all checkboxes

    const allCheckboxes:Locator=await page.locator('div.rc-tree-treenode.rc-tree-treenode-switcher-close');

   
    

})
