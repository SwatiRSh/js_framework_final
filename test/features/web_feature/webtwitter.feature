Feature: TWitter Application

    @WEBTWITTER @CommonTwitter @TC_02
    Scenario:TC-02: Twitter post Functionality
        Given user launch the application
        Then user clicks on sign in button
        When user enters username as "VALID_UNAME"
        Then user clicks on next button in login page
        # When user enters username again as "PHONE_NUMBER"
        # Then user clicks on next button
        Then user enters password as "VALID_PWD"
        Then user clicks on log in
        Then verify user is on home
        Then user posts "message1"
        Then user clicks on post
        Then user posts "message2"
        Then user clicks on post
        Then user posts "message3"
        Then user clicks on post
        Then user clicks on profile
        When clicks on logout
        # Examples:
        #     | message1                                                                                                                                                                                           | message2                                                                                                                                        | message3                                                                                                      | visibility                        |
        #     | .Supper happy to participate in  #TRISTHAAUTOTHON2023 organised by @tester82584 in partnership with @tester82584. This event is running in paraller with #tristhasummit2023 - TRISTHAD_AUTO1_TEST1 | .The participation is amazing and about 35 teams are participating in this #TRISTHAAUTOTHON2023 TRISTHAD_AUTO2_TEST1 @tester82584 @tester82584. | .My team TRISTHAD_AUTO3_TEST1 is doing great & we are sure towin the event TRISTHA @tester82584 @tester82584. | Only people you mention can reply |

    @WEBTWITTER @CommonTwitter @TC_03
    Scenario:TC-03: search functionality
        Given user launch the application
        Then user clicks on sign in button
        When user enters username as "VALID_UNAME"
        Then user clicks on next button in login page
        # When user enters username again as "PHONE_NUMBER"
        # Then user clicks on next button
        Then user enters password as "VALID_PWD"
        Then user clicks on log in
        Then verify user is on home
        Then user click on explore option
        Then user search "message1"
        Then take the screenshot of the post and save it
        Then user click on explore option
        Then user search "message2"
        Then take the screenshot of the post and save it
        Then user click on explore option
        Then user search "message3"
        Then take the screenshot of the post and save it
        Then user clicks on profile
        When clicks on logout

        # Examples:
        #     | message1             | message2             | message3             |
        #     | TRISTHAD_AUTO1_TEST1 | TRISTHAD_AUTO2_TEST1 | TRISTHAD_AUTO3_TEST1 |
