Feature: Instagram Posting photos

  @APPIUMTWITTER @CommonTwitter @TC_05
  Scenario:TC-05: Scenario Outline name: Fetch profile information
    # Given mobile is connected with local System
    # When user posts an Instagram post along with screenshot of tweet
    Given User start the appium server
    When user opens the file app and move images to desired folder
    Given user loged into Instagram and sharing the Post
    When user posted the screenshot successfully on Instagram
    When Execution completed - appium server Stoped
