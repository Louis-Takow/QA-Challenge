exports.ProfilePage = class ProfilePage {

    // All Elements Attributes are stored in constructor to locate them
    constructor(page) {
        this.page = page;
        
    }
    //variables
    async gotoUserProfileCreatePage(){
        await this.page.goto('https://qa-assessment.pages.dev/');
    }
    
    async enterFirstName(firstName){
        await this.page.locator('#firstName').fill(firstName);
        
    }
   
    async enterLasttName(lastName){
        await this.page.locator('#lastName').fill(lastName);
        
    }
    async enterEmail(email){
        await this.page.locator('#email').fill(email);
        
    }
    async enterPassword(password){
        await this.page.locator('#password').fill(password);
        
    }
    async enterConfirmPassword(confirmPassword){
        await this.page.locator('#confirmPassword').fill(confirmPassword);
    }

    async selectGender(gender){
        await this.page.locator('#'+ gender).click();
    }

    async enterDateofBirth(dateofBirth){
        await this.page.locator('#dob').type(dateofBirth);
    }

    async enterPhoneNumber(phoneNumber){
        await this.page.locator('#phone').fill(phoneNumber); 
    }

    async enteraddress(address){
        await this.page.locator('#address').fill(address);
    }

    async enterLinkinURL(linkInURL){
        await this.page.locator('#linkedIn').fill(linkInURL);
    }

    async enterLinkinURL(linkInURL){
        await this.page.locator('#linkedIn').fill(linkInURL);
    }

    async enterGithubURL(gitHubURL){
        await this.page.locator('#github').fill(gitHubURL);
    }
   
    async clickSubmitButton(){
        await this.page.locator("input[type='submit']").click();
    }
    }