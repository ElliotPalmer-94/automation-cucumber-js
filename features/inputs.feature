Feature: The Internet Guinea Pig Website
  Scenario Outline: As a user, I can change the value within the input field with the arrow keys

    Given I am on the inputs page
    When I input the <key> arrow key
    Then The input value should be <value>

    Examples:
      | key  | value |
      | up   | 1     |
      | down | -1    |
