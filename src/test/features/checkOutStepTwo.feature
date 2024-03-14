Feature: checkout

  Background: user add the product and go to checkout page Step2
    Given user visit login page
    When user enter the username and password
    And user click on the login button
    Then user check the title of the page
    When user click on the add to cart for specific Sauce Labs Bike Light
    Then user check the added product
    And user click on the cart icon
    Then user check the details.
    When user click on the checkout button
    Then verifies the navigation to checkout page
    And user Enter firstname and lastname and postalcode
    And user click on the continue button

  @checkoutStep2
  Scenario: Swag Labs Checkout Step Two Functionality
    Then user check the product details on checkout page
    And user check the payment details
    When user click on the finish button
    Then user check the message for your order
    And user click on the home button
