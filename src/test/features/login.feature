Feature: login

  Background: User is logged in
    Given user visit login page

  @validlogin
  Scenario: login with valid data
    When user enters the <username> and <password>
    And user click on the login button
    Then user check the title of the page

    Examples: 
      | username      | password     |
      | standard_user | secret_sauce |

  @Locked_Userlogin
  Scenario: login with locked_user data
    When user enters the <username> and <password>
    And user click on the login button
    Then user got the error message

    Examples: 
      | username        | password     |
      | locked_out_user | secret_sauce |

  @Problem_userlogin
  Scenario: login with problem_user data
    When user enters the <username> and <password>
    And user click on the login button
    Then user verify the problem swag labs login

    Examples: 
      | username     | password     |
      | problem_user | secret_sauce |
