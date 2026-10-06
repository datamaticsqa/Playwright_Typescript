import {test,expect  } from "@playwright/test";

test('Frame Demo', async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");

    //count the number of frames in the page
    const frames = page.frames();
    console.log(`Number of frames: ${frames.length}`); //returns the number of frames in the page

    /* //Approach 1: Switch to the frame method -- name and URL attributes are used to identify the frame
    const frame1 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1'});// returns the frame object based on the url of the frame
    
    //if the frame is found, then perform the actions on the frame
    if(frame1){
        const frame1Input = await frame1.locator("[name='mytext1']");
        await frame1Input.fill("Frame 1 Input");
    }else{
        console.log("Frame 1 not found");
    }
    await page.waitForTimeout(3000);
 */

    //Approach 2: Using frameLocator method 
   page.frameLocator("[src='frame_1.html']").locator("[name='mytext1']").fill("Frame 1 Input using frameLocator method");
   await page.waitForTimeout(3000);
});
test.only('Inner/child frames Demo', async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");

     const frame3 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3'});

     if(frame3) {
        const frame3Input = await frame3.locator("[name='mytext3']");
        await frame3Input.fill("Frame 3 Input");

        //count the number of child frames in the frame3
     const childFrames = frame3.childFrames();
     console.log(`Number of child frames in frame 3: ${childFrames.length}`); //returns the number of child frames in the frame3   

     const radio=childFrames[0].getByLabel("I am a humna");
     radio.check();//select the radio button in the child frame
     await expect(radio).toBeChecked(); //verify the radio button is selected
     }else{
        console.log("Frame 3 not found");
     }

     
        await page.waitForTimeout(3000);
  
});