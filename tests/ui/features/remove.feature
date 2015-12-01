Feature: Removing a contact

Scenario: Remove a contact
  Given The list of contacts is correctly displayed
  When I click on the first Delete Button
  Then The first contact is deleted
