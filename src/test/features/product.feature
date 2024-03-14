Feature: Product

  Background: user logged in and go to Product page
    Given user visit login page
    When user enter the username and password
    And user click on the login button
    Then user check the title of the page

  @Product
  Scenario: Add one product to the cart page
    When user click on the add to cart for specific <productName>
    Then user check the added product
    And user click on the cart icon
    Then user check the details.

    Examples: 
      | productName           |
      | Sauce Labs Bike Light |
