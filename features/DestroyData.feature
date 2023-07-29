@Reg
Feature: Validate admin is able to delete all added persons

    Scenario: To validate admin is able to delete entire persons
        Given user logsIn
        When user navigates to People and Organization
        Then user should able to delete all added persons