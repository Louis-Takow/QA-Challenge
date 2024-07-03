const { test } = require("@playwright/test");
import { ProfilePage } from "./PageObjectModel/ProfilePage";


test('Fill all the fields on the page with VALID requirements', async({page}) => {
   //create user profile
   const User = new ProfilePage(page); 
   await User.gotoUserProfileCreatePage();//open profile creation URL
   await User.enterFirstName('John');
   await User.enterLasttName('Takow');
   await User.enterEmail('test@123');
   await User.enterPassword('Password@123');
   await User.enterConfirmPassword('Password@123');
   await User.selectGender('male');
   await User.enterDateofBirth('13081900');
   await User.enterPhoneNumber('0123456789');
   await User.enteraddress('CiteSic');
   await User.enterLinkinURL('https://www.linkedin.com/in/johnsmith');
   await User.enterGithubURL('https://github.com/johnsmith');
   await User.clickSubmitButton();

});

test('Fill ONLY mandatory the fields on the page with correct requirements', async({page}) => {
   const User = new ProfilePage(page); 
   await User.gotoUserProfileCreatePage();//open profile creation URL
   await User.enterFirstName('John');
   await User.enterLasttName('Takow');
   await User.enterEmail('test@123');
   await User.enterPassword('Password@123');
   await User.enterConfirmPassword('Password@123');
   await User.selectGender('male');
   await User.clickSubmitButton();
   page.on("assert that alert message is visible to user and click OK",async(alert)=>{
   await alert.shouldbevisible().should('contian.text','LinkedIn must be filled out')// assert that alert to fill OPTIONAL linkinURL is visible to user
      .accept(); //click OK to close alert
   })

});

test('Enter alphanumeric characters and/or symbols in "First Name" field', async({page}) => {
   const User = new ProfilePage(page); 
   await User.gotoUserProfileCreatePage();//open profile creation URL
   await User.enterFirstName('@#$John123');//Enter alphanumeric and/specials characters
   await User.clickSubmitButton(); //click submit button
   page.on("assert that alert message is visible to user and click OK",async(alert)=>{
      await alert.shouldbevisible().should('contain.text','First name must contain alphabetical characters only') //assert that alert with message "First name must contain alphabetical characters only "is visible to user
      .accept();// click OK to close alert
   })
   
});

test('Fill all fields EXCEPT "First Name" field', async({page}) => {
   //create user profile
   const User = new ProfilePage(page); 
   await User.gotoUserProfileCreatePage();//open profile creation URL
   await User.enterLasttName('Takow');
   await User.enterEmail('test@123');
   await User.enterPassword('Password@123');
   await User.enterConfirmPassword('Password@123');
   await User.selectGender('male');
   await User.enterDateofBirth('13081900');
   await User.enterPhoneNumber('0123456789');
   await User.enteraddress('CiteSic');
   await User.enterLinkinURL('https://www.linkedin.com/in/johnsmith');
   await User.enterGithubURL('https://github.com/johnsmith');
   await User.clickSubmitButton();
   page.on("assert that alert mesasge is visible to user and click OK",async(alert)=>{
      await alert.shouldbevisible().should('contain.text','First name must be filled out')//assert that alert with message "First name must be filled out "is visible to user
      .accept();//click OK to close alert
   })
});

test('Enter alphanumeric characters and/or symbols in "Last Name" field', async({page}) => {
   const User = new ProfilePage(page); 
   await User.gotoUserProfileCreatePage();//open profile creation URL
   await User.enterLasttName('@#$Deo123');//Enter alphanumeric and/specials characters
   await User.clickSubmitButton(); //click submit button
   page.on("assert that alert message is visible to user and click OK",async(alert)=>{
    await alert.shouldbevisible().should('contain.text','Last name must contain alphabetical characters only') //assert that alert with message "Last name must contain alphabetical characters only "is visible to user
    .accept();// click OK to close alert
   })
});

test('Fill all fields EXCEPT "Last Name" field', async({page}) => {
    //create user profile
    const User = new ProfilePage(page); 
    await User.gotoUserProfileCreatePage();//open profile creation URL
    await User.enterFirstName('Louis');
    await User.enterEmail('test@123');
    await User.enterPassword('Password@123');
    await User.enterConfirmPassword('Password@123');
    await User.selectGender('male');
    await User.enterDateofBirth('13081900');
    await User.enterPhoneNumber('0123456789');
    await User.enteraddress('CiteSic');
    await User.enterLinkinURL('https://www.linkedin.com/in/johnsmith');
    await User.enterGithubURL('https://github.com/johnsmith');
    await User.clickSubmitButton();
    page.on("assert that alert mesasge is visible to user and click OK",async(alert)=>{
       await alert.shouldbevisible().should('contain.text','Last name must be filled out')//assert that alert with message "Last name must be filled out "is visible to user
       .accept();//click OK to close alert
    })
});

test('Enter invalid email address', async({page}) => {
   const User = new ProfilePage(page); 
   await User.gotoUserProfileCreatePage();//open profile creation URL
   await User.enterFirstName('Test123@G');//Enter INVALID email
   await User.clickSubmitButton(); //click submit button
   page.on("assert that alert message is visible to user and click OK",async(alert)=>{
      await alert.shouldbevisible().should('contain.text','Email must be a valid email address')//assert that alert with message "Email must be a valid email address "is visible to user
      .accept();//click OK to close alert
   })
});

test('Fill all fields EXCEPT "Password" field', async({page}) => {
   const User = new ProfilePage(page); 
   await User.gotoUserProfileCreatePage();//open profile creation URL
   await User.enterFirstName('John');
   await User.enterLasttName('Doe');
   await User.enterEmail('test@123');
   await User.enterConfirmPassword('Password@123');
   await User.selectGender('male');
   await User.enterDateofBirth('13081900');
   await User.enterPhoneNumber('0123456789');
   await User.enteraddress('CiteSic');
   await User.enterLinkinURL('https://www.linkedin.com/in/johnsmith');
   await User.enterGithubURL('https://github.com/johnsmith');
   await User.clickSubmitButton();
   page.on("assert that alert is visible to user and click OK",async(alert)=>{
      await alert.shouldbevisible().should('contain.text','Passwords do not match')//assert that alert with message "Passwords do not match"is visible to user
      .accept();//click OK to close alert
   })
});

test('Fill all fields EXCEPT "Confirm Password" field', async({page}) => {
   const User = new ProfilePage(page); 
   await User.gotoUserProfileCreatePage();//open profile creation URL
   await User.enterFirstName('John');
   await User.enterLasttName('Doe');
   await User.enterEmail('test@123');
   await User.enterPassword('Password@123');
   await User.selectGender('male');
   await User.enterDateofBirth('13081900');
   await User.enterPhoneNumber('0123456789');
   await User.enteraddress('CiteSic');
   await User.enterLinkinURL('https://www.linkedin.com/in/johnsmith');
   await User.enterGithubURL('https://github.com/johnsmith');
   await User.clickSubmitButton();
   page.on("assert that alert message is visible to user and click OK",async(alert)=>{
      await alert.shouldbevisible().should('contain.text','Confirm password must be filled out')//assert that alert with message "Confirm password must be filled out"is visible to user
      .accept();//click OK to close alert
   })
});

test('Enter different values for "Password" and "Confirm Password" Fields', async({page}) => {
   const User = new ProfilePage(page); 
   await User.gotoUserProfileCreatePage();//open profile creation URL
   await User.enterFirstName('John');
   await User.enterLasttName('Doe');
   await User.enterEmail('test@123');
   await User.enterPassword('Password@123');
   await User.enterConfirmPassword('Password@456');
   await User.selectGender('male');
   await User.enterDateofBirth('13081900');
   await User.enterPhoneNumber('0123456789');
   await User.enteraddress('CiteSic');
   await User.enterLinkinURL('https://www.linkedin.com/in/johnsmith');
   await User.enterGithubURL('https://github.com/johnsmith');
   await User.clickSubmitButton();
   page.on("assert that alert is visible to user and click OK",async(alert)=>{
      await alert.shouldbevisible().should('contain.text','Passwords do not match')//assert that alert with message "Passwords do not match"is visible to user
      .accept();//click OK to close alert
   })
});