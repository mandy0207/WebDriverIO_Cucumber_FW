const BasePage = require('./Basepage');
class PeopleAndOrganization extends BasePage{

    get PeopleAndOrganization(){
        return $("//*[@aria-label='People & Organisations']")
    }

    get CheckBoxesList(){
        return $$(".ember-view.form-checkbox");
    }

    get AddPersonBtn(){
        return $("*=Add Person");
    
    }

    get DeleteBtn(){
        return $("//*[@aria-label ='Delete contacts']");
    }

    get CheckUnderstandBtn(){
        return $("[class*='delete-modal__checkbox']");
    }

    get FinalDeletebtn(){
        return $("//*[@class='form-actions']//*[@type='submit']");
    }

    get CalenderTaskBtn(){
        return $("[aria-label='Calendar & Tasks']");
    }

    get ADDTaskBtn(){
        return $("//button[normalize-space()='Add Task']");
    }

    get Description(){
      return $("//*[@aria-label='Description']");
    }

    get Category(){
        return $(".select-box.select.category-select [role='combobox']");

    }

    get ViewTaskList(){
        return $("=View all tasks")
    }

    get Date(){
        return $("//input[@placeholder='dd/mm/yy']");
    }

    get cancelBtn(){
        return $("//button[normalize-space()='Cancel']");

    }

    get DisabledElement(){
        return $("//div[contains(@class,'select-box select minutes-select')]");
    }

    get saveBtn(){
        return $("//button[@type='submit']");
    }
    get ListofCategoryItems(){
        return $$("(//*[@class='select-box__options'])[3]//div");
    }

    async NavigaateToPeopleAndOrganization(){
        await super.ClickElement(this.PeopleAndOrganization);
      
    }

    async NavigateToAddTask(){
        await super.ClickElement(this.ADDTaskBtn);
    }


    async DeleteEntireData(){
        await super.WaitUntilDislplayed(this.DeleteBtn)
        const list= await this.CheckBoxesList;
        console.log("Lenghth= "+list.length)
        for (const element of list) {
            await element.click();

        }
        await this.AddPersonBtn.scrollIntoView();
        await this.DeleteBtn.waitForClickable();
        await  super.ClickElement(this.DeleteBtn);
        await super.ClickElement(this.CheckUnderstandBtn);
        await super.ClickElement(this.FinalDeletebtn);
    
    
    }

    async ADDTask(dataTable){
        const taskRows = dataTable.rows();

        for (const taskRow of taskRows) {

           await super.SetTextBox(this.Description, taskRow[0]);
           await super.SetTextBox(this.Date, "07/08/2023");
           await super.ClickElement(this.DisabledElement);
           await super.ClickElement(this.Category);
           await this.SelectFromDropDown(taskRow[1]);
           await super.ClickElement(this.saveBtn);
           await super.ClickElement(this.ADDTaskBtn);
        }    
           await super.ClickElement(this.cancelBtn);
           await browser.refresh();
           await super.ClickElement(this.ViewTaskList);

         
    }

    async SelectFromDropDown(item){
      const list = await this.ListofCategoryItems;
      for (const element of list) {
        const Text = await super.GetElementText(element);
        if (Text.includes(item)) {
          await super.ClickElement(element)
          break;
        }
      }
    }

    async NavigateToCalenderTask(){
        await super.ClickElement(this.CalenderTaskBtn);
    }
}

module.exports = new PeopleAndOrganization();

