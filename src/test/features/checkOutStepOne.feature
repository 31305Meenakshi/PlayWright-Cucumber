Feature: checkout

  Background: user add the product and go to checkout page Step1
    Given user visit login page
    When user enter the username and password
    And user click on the login button
    Then user check the title of the page
    When user click on the add to cart for specific Sauce Labs Bike Light
    Then user check the added product
    And user click on the cart icon
    Then user check the details.

  @checkoutStep1
  Scenario: Swag Labs Checkout Step One Functionality
    When user click on the checkout button
    Then verifies the navigation to checkout page
    When user enters <firstname> and <lastname> and <postalcode>
    And user click on the continue button

    Examples: 
      | firstname | lastname | postalcode |
      | anuj      | sharma   |     408010 |
