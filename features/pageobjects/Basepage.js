/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class BasePage {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
   async open () {
        await browser.url(`https://automationdemo.capsulecrm.com/`)
        await browser.maximizeWindow();
    }


    async ClickElement(element){
        await element.click();
    }

    async SetTextBox(element ,value){
        await element.setValue(value);
    }

    async SelectStaticDropDown(dropdownElement, value){
        await dropdownElement.selectByVisibleText(value);

    }

    async GetElementText(element){
      return await element.getText();
    }


    GetUniqueClientName(){
        let str = "Client"
        const currentDate = new Date();
        const dateString = currentDate.toLocaleDateString();
        const timeString = currentDate.toLocaleTimeString();
        
        // Append date and time to the string
        const result = `${str}:${dateString}:${timeString}`;
        
        return result; 
    }

    async TOHaveTextContaining(element, text){
        await expect(element).toHaveTextContaining(text);
    }
    

    async WaitUntilDislplayed(element){
        await browser.waitUntil(async function () {
            return (await element.isDisplayed())
          }, {
            timeout: 5000,
            timeoutMsg: 'Element is not displayed'
          })
    
    }

}
