Feature: To Validate Login Functionality

    Scenario Outline: To Validate that we are able to add person in CRM

        Given user logsIn
        When user AddPerson with "<Title>" "<JobTitle>" "<Organization>" "<Tags>"
        Then validate the "<Title>" "<JobTitle>" "<Organization>" of added person

        Examples:
            | Title | JobTitle  | Organization | Tags               |
            | Mrs   | Developer | Plato        | Learn SpringBoot   |
            | Mr    | Tester    |   Wipro      |  Learn Cypress     |
           


