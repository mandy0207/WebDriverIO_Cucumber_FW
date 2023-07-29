const {Given, When, Then } = require('@wdio/cucumber-framework');

const loginPage = require('../pageobjects/LoginPage');
const personPage = require('../pageobjects/PersonPage');




Given(/^user logsIn$/, async () => {
	// await loginPage.open();
});

When(/^user AddPerson with "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, async (title,jobtitle,organization,tags) => {
	
	await personPage.NavigateToAddPerson()
	await personPage.FillPersonForm(title, jobtitle, organization,tags);
	
	
});


Then(/^validate the "([^"]*)" "([^"]*)" "([^"]*)" of added person$/, async (title,jobtitle,organization) => {
	await personPage.ValidatePerson(title, organization);
	await personPage.Logout();

});





