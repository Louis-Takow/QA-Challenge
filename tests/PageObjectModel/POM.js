exports.POM = class POM {

    // All Elements Attributes are stored in constructor to locate them
    constructor(page) {
        this.page = page;
        
    }
    //Methods; for action on Elements
    async gotoUserProfileCreatePage(){
        await this.page.goto('https://qa-assessment.pages.dev/');
    }
    
    async enterFields(firstName,lastName,email,password, confirmPassword, dateofBirth,phoneNumber,address,linkInURL,gitHubURL){
        await this.page.locator('#firstName').fill(firstName);
        await this.page.locator('#lastName').fill(lastName);
        await this.page.locator('#email').fill(email);
        await this.page.locator('#password').fill(password);
        await this.page.locator('#confirmPassword').fill(confirmPassword);
        await this.page.locator('#male').click();
        await this.page.locator('#dob').type(dateofBirth);
        await this.page.locator('#phone').fill(phoneNumber); 
        await this.page.locator('#address').fill(address);
        await this.page.locator('#linkedIn').fill(linkInURL);
        await this.page.locator('#github').fill(gitHubURL);
        await this.page.locator("input[type='submit']").click();
        
    }
    
    
    }