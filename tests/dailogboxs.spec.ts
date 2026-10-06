//Playwright can interact with the web page dialogs such as alert, confirm, prompt as well as beforeunload confirmation. For print dialogs, see Print.

//alert(), confirm(), prompt() dialogs
//By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. However, you can register a dialog handler before the action that triggers the dialog to either dialog.accept() or dialog.dismiss() it.//


import { test,expect} from "@playwright/test";
test('Simple alert Boxes', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");  
    
    //alert dialog -- Register a dialog handler before the action that triggers the dialog
    page.on('dialog', async (dialog) => {
        console.log(`Dialog Type: ${dialog.type()}`);//returns the type of dialog (alert, confirm, prompt)
        expect(dialog.type()).toContain('alert');
        console.log(`Dialog Message: ${dialog.message()}`); //returns the message displayed in the dialog
        expect(dialog.message()).toContain('I am an alert box!');

        await dialog.accept(); //accept the dialog
      });

     await page.locator("#alertBtn").click(); //click on the button to trigger the alert dialog
     await page.waitForTimeout(3000);


});
test('Confirm dialog Boxes', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");  
    
    //confirm dialog -- Register a dialog handler before the action that triggers the dialog
    page.on('dialog', async dialog => {
        console.log(`Dialog Type: ${dialog.type()}`);//returns the type of dialog (alert, confirm, prompt)
        expect(dialog.type()).toContain('confirm');
        console.log(`Dialog Message: ${dialog.message()}`); //returns the message displayed in the dialog
        expect(dialog.message()).toContain('Press a button!');   

        //await dialog.accept(); //accept the dialog
        await dialog.dismiss(); //dismiss the dialog
      });

     await page.locator("#confirmBtn").click(); //click on the button to trigger the confirm dialog
     const text:string=await page.locator("#demo").innerText();

     console.log(`Text after dismissing the confirm dialog: ${text}`);
     expect(text).toContain('You pressed Cancel!'); //verify the text after dismissing the confirm dialog
     await page.waitForTimeout(3000);


});
test.only('prompt dialog Boxes', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");  
    
    //prompt dialog -- Register a dialog handler before the action that triggers the dialog
    page.on('dialog', async dialog => {
        console.log(`Dialog Type: ${dialog.type()}`);//returns the type of dialog (alert, confirm, prompt)
        expect(dialog.type()).toContain('prompt');
        console.log(`Dialog Message: ${dialog.message()}`); //returns the message displayed in the dialog
        
        expect(dialog.message()).toContain('Please enter your name:');   
        expect(dialog.defaultValue()).toContain('Harry Potter'); //returns the default value of the prompt dialog

        await dialog.accept("Automation"); //accept the dialog
       // await dialog.dismiss(); //dismiss the dialog
      });

     await page.locator("#promptBtn").click(); //click on the button to trigger the prompt dialog
     const text:string=await page.locator("#demo").innerText();

     console.log(`Text after dismissing the prompt dialog: ${text}`);
     expect(text).toContain('Hello Automation! How are you today?'); //verify the text after accepting the prompt dialog
     await page.waitForTimeout(3000);


});