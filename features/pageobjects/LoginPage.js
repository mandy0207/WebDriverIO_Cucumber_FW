

const BasePage = require('./Basepage');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends BasePage {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $("//input[@id='login:usernameDecorate:username']");
    }

    get inputPassword () {
        return $("//input[@id='login:passwordDecorate:password']");
    }

    get btnSubmit () {
        return $("//input[@id='login:login']");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async Login (username, password) {
       await  super.SetTextBox(this.inputUsername, username)
       await  super.SetTextBox(this.inputPassword, password)
       await  super.ClickElement(this.btnSubmit);
    }



    /**
     * overwrite specific options to adapt it to page object
     */
    async open () {
         super.open();
         await this.Login("mscoding24", "AutomationDemo24");
    }
}

module.exports = new LoginPage();
