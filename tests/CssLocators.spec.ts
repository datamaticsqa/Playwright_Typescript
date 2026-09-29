/*CSS - Cascade style sheet

two types - absolute and relative

tagname with ID    --- tag#id  or #id
tagname with class --- tag.class  or .class
tagname with other attribute value -- tag[attributevalue] or [attributevalue]
tag with class and attribute --- tag.class[attributevalue] or c.lass[attributevalue]

*/
import {test, expect, Locator} from '@playwright/test'
test('Verify the css locators', async({page})=>{
    await page.goto('https://demowebshop.tricentis.com/')

    //tag#ID
   //const searchBox:Locator = page.locator("input#small-searchterms");
   //await searchBox.fill('T-shirts');
  // await expect(page.locator("input#small-searchterms")).toBeVisible();

  // await page.locator("#small-searchterms").fill('T-shirts');
   
    

   //Tagwithclassname -input.classname;
   //await page.locator("input.search-box-text").fill('T-shirts');



   //tagWithAttribute=value

   //await page.locator("input[name='q']").fill('T-shirts');


    //tagnamewithclass and Attribute
    //await page.locator("input.search-box-text[name='q']").fill('T-shirts');


   const allBooks:Locator= await page.locator('a[href*="/books"]');
   const firstBNook=await page.locator("a[href*='/books']").first();
   const firstBNook1=await page.locator("a[href*='/books']").last();
   const firstBNook2=await page.locator("a[href*='/books']").nth(2);
   console.log("First copy of the books: "+firstBNook.innerText);
   await page.waitForTimeout(5000);

})
