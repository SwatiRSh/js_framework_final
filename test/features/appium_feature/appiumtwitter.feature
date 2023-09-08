Feature: APPIUM

  @APPIUMTWITTER @CommonTwitter @TC_04
  Scenario:TC-04: Scenario Outline name: Fetch profile information
    Given mobile is connected with local System
    When user posts an Instagram post along with screenshot of tweet

    Examples:
      | Post1  |
      | Appium |
