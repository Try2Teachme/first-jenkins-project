import { expect, test } from '@playwright/test';

test("Getting the title of the page", async ({ page }) => {
  //goto https://practice.cydeo.com/
  await page.goto('https://practice.cydeo.com/');
  
  let actualTitle = await page.title();

  //expect(actualTitle).toBe('Practice');

  console.log(actualTitle);

  
  

});

test("Getting the current URL of the page", async ({ page }) => {
  await page.goto('https://practice.cydeo.com');

  let currentUrl = page.url();

  console.log(currentUrl);

  
  

});

test("Set the window size", async ({ page }) => {
    
    await page.goto('https://practice.cydeo.com');

   await page.setViewportSize({ width: 1920, height: 1080 });

  
  

});