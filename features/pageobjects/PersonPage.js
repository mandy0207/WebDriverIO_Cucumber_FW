const BasePage = require('./Basepage');

class PersonPage extends BasePage{

get PeopleAndOrganization(){
    return $("//*[@aria-label='People & Organisations']")
}

get Title(){
    return $("[class='form-field '] .select-box:nth-child(2)");
}
get AddPersonBtn(){
    return $("*=Add Person");

}
get firstname () {
    return $(".party-form-first-name");
}

get jobtitle(){
    return $(".form-input-text.party-form-job-title");
}


get organization(){
    return $("[placeholder='Find an organisation']");
}

get newOrganization(){
    return $(".search-select__extra ");
}

get savebtn(){
    return $("[data-pendo='save-party']");
}

get ExistedOrganization(){
    return $(".search-select__option-main-text");
}

get MenuBtn(){
    return $(".nav-bar-account-menu");
}

get LogoutBtn(){
    return  $("[data-pendo='account-menu-log-out']");

}

get TitleElementsList(){
    return $$(".select-box.select.title-select .select__dropdown .select-box__options div");
}

get TitleNameforValidation(){
    return $(".party-details__title");
}

get OrganisationforValidation(){
    return $(".party-details__subtitle")
}

get ArrowIcon(){
    return $("//div[@class='select-box__trigger nav-bar-item nav-bar-account-button']");
}

get LogoutBtn(){
    return $("//a[@class='menu-select__option']");
}

async NavigateToAddPerson(){
    await super.ClickElement(this.PeopleAndOrganization);
    await super.ClickElement(this.AddPersonBtn);
    
}

async NavigaateToPeopleAndOrganization(){
    await super.ClickElement(this.PeopleAndOrganization);
}

async FillPersonForm (title, jobtitle, organization,tags) {
    await this.SelectTitleFromDropDown(title);
    let clientName=super.GetUniqueClientName();
     await super.SetTextBox(this.firstname,clientName);
     await super.SetTextBox(this.jobtitle, jobtitle);
    await super.SetTextBox(this.organization, organization);
    try {
     
       await  super.ClickElement(this.ExistedOrganization);

      }
      catch(err) {
       
       await super.ClickElement(this.newOrganization);
      } 
      
      await super.ClickElement(this.savebtn)
     //await browser.pause(3000);
}

   async SelectTitleFromDropDown(title){
    
    await super.ClickElement(this.Title);
    const list= await this.TitleElementsList;
    for (const element of list) {
        const Text = await super.GetElementText(element);
        if (Text.includes(title)) {
          await super.ClickElement(element)
          break;
        }
      }
 }

 async ValidatePerson(title,organization){
  
    await super.TOHaveTextContaining(this.TitleNameforValidation, title);
    await super.TOHaveTextContaining(this.OrganisationforValidation, organization);

 }

async Logout(){
    await super.ClickElement(this.ArrowIcon);
    await super.ClickElement(this.LogoutBtn);
}

}

module.exports = new PersonPage();