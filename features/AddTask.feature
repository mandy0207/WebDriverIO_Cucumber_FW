Feature: To Validate Task Features of CRM

@Smoke
Scenario: To validate user is able to Add Task
Given user logsIn
When user clicks on AddTask
Then user is able to add task with following information
|  Description          |        Category      |
|  Learn Cypress        |        Email         |
|  Learn WebDriverIo    |        Meeting       |
|  Learn Selenium       |        Call          |


@Reg
Scenario: To validate user is able to delete all Tasks
Given user logsIn
When user clicks on Calender & Tasks
Then user should be able to delete all Task