const { test } = require("@playwright/test");
import { POM } from "./PageObjectModel/POM";


test('Fill all the fields on the page with correct requirements', async({page}) => {
   //create user profile
   const login = new POM(page); 
   await login.gotoUserProfileCreatePage();//open profile creation URL
   await login.enterFields('Louis','Takow','test@123','P@1','P@1',
   '13031995','1111111111','CiteSic','https://www.linkedin.com/in/johnsmith',
   'https://github.com/johnsmith'); //fiil all field and click submit button
   await page.waitForTimeout(2000);
    
});

test('Fill all mandatory the fields on the page with correct requirements', async({page}) => {
   const login = new POM(page);
   await login.gotoUserProfileCreatePage();//open profile creation URL
   await login.enterFields('Louis','Takow','test@123','P@1','P@1','','','','','');//fill only mandatory fields
   //Handle alert
   page.on("assert that alert is visible to user and click OK",async(alert)=>{
      await alert.shouldbevisible().accept();// assert that alert is visible to user and click OK
   })
   await page.waitForTimeout(2000);
   
});

test('Enter alphanumeric characters and/or symbols in "First Name" field', async({page}) => {
   const login = new POM(page);
   await login.gotoUserProfileCreatePage();//open profile creation URL
   await page.locator('#firstName').fill("@@@111");//Enter alphanumeric and/specials characters
   await page.locator("input[type='submit']").click(); //click submit button
   //Handle alert
   page.on("assert that alert is visible to user and click OK",async(alert)=>{
      await alert.shouldbevisible().accept();// assert that alert is visible to user and click OK
   })
});

test('Fill all fields except "First Name" field', async({page}) => {
   const login = new POM(page); 
   await login.gotoUserProfileCreatePage();//open profile creation URL
   await login.enterFields('','Takow','test@123','P@1','P@1',
   '13031995','1111111111','CiteSic','https://www.linkedin.com/in/johnsmith',
   'https://github.com/johnsmith'); //fiil all field EXCEPT first name and click submit button
   await page.waitForTimeout(2000);
    //Handle alert
   page.on("assert that alert is visible to user and click OK",async(alert)=>{
      await alert.shouldbevisible().accept();// assert that alert is visible to user and click OK
   })
});

test('Enter alphanumeric characters and/or symbols in "Last Name" field', async({page}) => {
   const login = new POM(page);
   await login.gotoUserProfileCreatePage();//open profile creation URL
   await page.locator('#lastName').fill("@@@111");//Enter alphanumeric and/specials characters
   await page.locator("input[type='submit']").click(); //click submit button
   //Handle alert
   page.on("assert that alert is visible to user and click OK",async(alert)=>{
      await alert.shouldbevisible().accept();// assert that alert is visible to user and click OK
   })
});

test('Fill all fields except "Last Name" field', async({page}) => {
   const login = new POM(page); 
   await login.gotoUserProfileCreatePage();//open profile creation URL
   await login.enterFields('Louis','','test@123','P@1','P@1',
   '13031995','1111111111','CiteSic','https://www.linkedin.com/in/johnsmith',
   'https://github.com/johnsmith'); //fiil all field EXCEPT last name and click submit button
   await page.waitForTimeout(2000);
    //Handle alert
   page.on("assert that alert is visible to user and click OK",async(alert)=>{
      await alert.shouldbevisible().accept();// assert that alert is visible to user and click OK
   })
});

test('Enter invalid email address', async({page}) => {
   const login = new POM(page);
   await login.gotoUserProfileCreatePage();//open profile creation URL
   await page.locator('#email').fill("test123");//Enter invalid email
   await page.locator("input[type='submit']").click(); //click submit button
   //Handle alert
   page.on("assert that alert is visible to user and click OK",async(alert)=>{
      await alert.shouldbevisible().accept();// assert that alert is visible to user and click OK
   })
});

test('Fill all fields except "Password" field', async({page}) => {
   const login = new POM(page); 
   await login.gotoUserProfileCreatePage();//open profile creation URL
   await login.enterFields('Louis','Takow','test@123','','P@1',
   '13031995','1111111111','CiteSic','https://www.linkedin.com/in/johnsmith',
   'https://github.com/johnsmith'); //fiil all field EXCEPT password and click submit button
   await page.waitForTimeout(2000);
    //Handle alert
   page.on("assert that alert is visible to user and click OK",async(alert)=>{
      await alert.shouldbevisible().accept();// assert that alert is visible to user and click OK
   })
});

test('Fill all fields except Confirm Password field', async({page}) => {
   const login = new POM(page); 
   await login.gotoUserProfileCreatePage();//open profile creation URL
   await login.enterFields('Louis','Takow','test@123','P@1','',
   '13031995','1111111111','CiteSic','https://www.linkedin.com/in/johnsmith',
   'https://github.com/johnsmith'); //fiil all field EXCEPT confirm password and click submit button
   await page.waitForTimeout(2000);
    //Handle alert
   page.on("assert that alert is visible to user and click OK",async(alert)=>{
      await alert.shouldbevisible().accept();// assert that alert is visible to user and click OK
   })
});

test('Enter different values for "Password" and "Confirm Password" Fields', async({page}) => {
   const login = new POM(page); 
   await login.gotoUserProfileCreatePage();//open profile creation URL
   await login.enterFields('Louis','Takow','test@123','P@1','C@2',
   '13031995','1111111111','CiteSic','https://www.linkedin.com/in/johnsmith',
   'https://github.com/johnsmith'); //fiil a password and confirm password that son't match and click submit button
   await page.waitForTimeout(2000);
    //Handle alert
   page.on("assert that alert is visible to user and click OK",async(alert)=>{
      await alert.shouldbevisible().accept();// assert that alert is visible to user and click OK
   })
});