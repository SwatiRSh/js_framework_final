Feature: Twitter Profile and Posting
  @APITWITTER @CommonTwitter @TC_01
  Scenario:TC-01:Accessing and Posting on Twitter
    Given user has a Twitter access token "API" for Tweet
    When user tweet post using Oauth1.0 "MyText1"
    When user tweet post using twitter-api-v2 "MyText2"

    # Examples:
    #   | MyText1  | MyText2   | API |
    #   | My Tweet | My tweet2 |     |