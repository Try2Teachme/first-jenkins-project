import {test} from '@playwright/test';
test.describe('Test Group', () => {

    //create before each test
    test.beforeEach(async ({ page }) => {
      await page.goto('https://practice.cydeo.com');

    });
    
  test('Check() method checks the radio buttons and checkboxes if they havent been checked yet', async ({ page }) => {
    
    let checkBoxLink = page.locator('//a[.="Checkboxes"]');
    
    

    await checkBoxLink.click();

    

    let checkBox1 = page.locator('//input[@name="checkbox1"]');

    

    await checkBox1.check();

    
  });

  test('Uncheck() method unchecks the radio buttons and checkboxes if they havent been unchecked yet', async ({ page }) => {
    
    let checkBoxLink = page.locator('//a[.="Checkboxes"]');
    
    
    
    await checkBoxLink.click();
    
    
    
    let checkBox2 = page.locator('//input[@name="checkbox2"]');

    
    
    await checkBox2.uncheck();


  });

  test('selectOption() used for dropdowns', async ({ page }) => {
    
    page.locator('//a[.="Dropdown"]').click();
   

    let simpleDropdown = page.locator('//select[@id="dropdown"]');
    
    //select by value
    //await simpleDropdown.selectOption('1');
    
    
    //select by visible text
    //await simpleDropdown.selectOption( { label: "Option 1" } );
    //OR
    //await simpleDropdown.selectOption("Option 1");

    //select by index
    await simpleDropdown.selectOption( { index: 1 } );

  });

  test('innerText() retrives the visible text', async ({ page }) => {

    //find element
    let headerElement = page.locator("//span[@class='h1y']");

   

    //extracting actual text of this element
    let actualText = await headerElement.innerText();

    await page.waitForTimeout(3000);

    //print out the text on the console
    console.log(actualText);

    
   
 });

 test('inputValue(): only works with <input>, <textarea>, <select>', async ({ page }) => {


  let inputsLink = page.getByText("Inputs");

//  await inputsLink.scrollIntoViewIfNeeded();
//  await page.waitForTimeout(3000);

  await inputsLink.click();

  let inputBox = page.locator("//input[@type='number']");

  


  await inputBox.fill("123");

 

  //display the value user entered before
  let inputValue = await inputBox.inputValue();

  console.log(inputValue);

});


});