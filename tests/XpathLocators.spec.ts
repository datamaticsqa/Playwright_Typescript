/* Xpath - Absolute and Relative
Abosulte - / - from root node to target node
Relative Xpath -- // -- near or same node

Syntax === //tagName[@Attribute=value]
//xpath syntax: //tagName[@Attribute=value], //*[@attribute=value],//tagname[@class=value],//tagname[contains(text(),'value')]
 //tagname[@attribute=value and @attribute=value]
*/

import {test, expect, Locator} from '@playwright/test'


test('Verify Xpath Locators ', async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/')
 await page.locator('//input[@id="small-searchterms"]').fill('T-shirts');


 
 const allComputers:Locator=page.locator('//a[contains(@href,"computer")]');

  let prodTitles:string[]=await allComputers.allTextContents();
  console.log("All computer values:",allComputers)
  for(let pt of prodTitles){
    console.log(pt);
  }
  console.log("First value: ", await allComputers.first().textContent());
  console.log("Second value: ", await allComputers.last().textContent())
  console.log("nth value",await allComputers.nth(10).textContent())

 await page.waitForTimeout(4000);

})