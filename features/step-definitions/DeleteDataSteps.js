const {Given, When, Then } = require('@wdio/cucumber-framework');

const peopleOrgPage = require('../pageobjects/PeopleOrganizationPage');
const personPage = require('../pageobjects/PersonPage');


When(/^user navigates to People and Organization$/,  async() => {
    await  peopleOrgPage.NavigaateToPeopleAndOrganization();
});

Then(/^user should able to delete all added persons$/, async () => {
	await peopleOrgPage.DeleteEntireData();
});


When(/^user clicks on AddTask$/, async() => {
	await peopleOrgPage.NavigateToAddTask();
   
});

Then(/^user is able to add task with following information$/, async(dataTable) => {
    await peopleOrgPage.ADDTask(dataTable);
    await personPage.Logout();
   
});


When(/^user clicks on Calender & Tasks$/, async() => {
	await peopleOrgPage.NavigateToCalenderTask();
});

Then(/^user should be able to delete all Task$/, async () => {
    await browser.pause(3000); 
});

