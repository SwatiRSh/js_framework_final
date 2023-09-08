const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const {
    Builder,
    By,
    Key,
    Options,
    Capabilities,
    until,
} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const webdriver = require("selenium-webdriver");
// const { setDefaultTimeout } = require("@cucumber/cucumber");
// setDefaultTimeout(300 * 1000);
const { implicitWait } = require("../supports/utils/wait");
const axios = require('axios');
const chai = require('chai');
const fs = require('fs');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
const { TwitterApi } = require("twitter-api-v2");


const {
    ONE_SECOND,
    TWO_SECOND,
    ONE_MIN,
    THIRTY,
    TEN,
} = require("../supports/utils/timeunit");
const commonFunctions = require("../supports/utils/commonFunctions");

var driver;
var options;

// -------api
Given('user has a Twitter access token {string}', function (api) {
    console.log("My Access token stored in json with GET method")
});

When('user tweet post using Oauth1.0 {string}', async function (MyText1) {
    console.log("My test is going to post...", MyText1);
    if(MyText1==="MyText1"){
        console.log("My test is going to post1", MyText1);
        MyText1 = await commonFunctions.readJSONData("MyText1")
        console.log("My test is going to post2", MyText1);
    }
    console.log("My test is going to postmmmmm", MyText1);
    const Oauth1 = (input) => {
        console.log("My test is going to post3",MyText1);
        const OAuth = require('oauth-1.0a')
        const crypto = require('crypto')
        const { default: axios } = require('axios');
        const _ = require('lodash');
        const oauth = OAuth({
            consumer: input.oauth1.consumer,
            signature_method: input.oauth1.signature_method,
            hash_function(base_string, key) {
                return crypto
                    .createHmac(input.oauth1.signature_algorithm, key)
                    .update(base_string)
                    .digest('base64')
            },
        })
        _.invoke(axios, input.method,
            input.url,
            input.data,
            {
                headers: {
                    ...input.headers || {},
                    ...oauth.toHeader(
                        oauth.authorize(
                            {
                                url: input.url,
                                method: input.method
                            },
                            input.oauth1.token
                        )
                    )
                },
                maxBodyLength: Infinity
            }
        ).then((res) => {
            console.log('success', res.data)
        }).catch((res) => {
            console.log(res.message);
            console.error('response data->', res?.response?.data)
        })
    }
    Oauth1({
        method: 'post',
        url: 'https://api.twitter.com/2/tweets',
        oauth1: {
            consumer: {
                key: 'BCPzrI2yaAEkr78wBBE9jbHph',
                secret: 'OIUZ0QL8R6njB1uHSZ7svDclhNYdsr8XEE3wmKW9FSYhoyHTrc'
            },
            token: {
                key: '1694209710604328960-imvrq4xXxE0ukGmwUfUkNRIf7VJc4a',
                secret: 'DnR6RYTAzadbztPjXh5wth876NFM1Ybq1kKCmcTbJO3RV',
            },
            signature_method: 'HMAC-SHA1',
            signature_algorithm: 'sha1'
        },
        data: JSON.stringify({
            "text": MyText1
        }),
        headers: { 'Content-Type': 'application/json' }
    })
});

Given('user has a Twitter access token {string} for Tweet', function (api) {
    console.log("My Access token stored in json with GET method")
});
When('user tweet post using twitter-api-v2 {string}', async function (MyText2) {
    if(MyText2==="message1"){
        MyText2 = await commonFunctions.readJSONData("message1")
    }
const client = new TwitterApi({
    appKey: "BCPzrI2yaAEkr78wBBE9jbHph",
        appSecret: "OIUZ0QL8R6njB1uHSZ7svDclhNYdsr8XEE3wmKW9FSYhoyHTrc",
        accessToken: "1694209710604328960-imvrq4xXxE0ukGmwUfUkNRIf7VJc4a",
        accessSecret: "DnR6RYTAzadbztPjXh5wth876NFM1Ybq1kKCmcTbJO3RV",
        bearerToken: "AAAAAAAAAAAAAAAAAAAAAOYzpgEAAAAA4dtnBLl1O4uF5gUjEDQzxwFDhKI%3DRuzyTTaFFa1GFuNQYzjGXWTs0tU2c2oZ3h0NIvzbHkvv5uBHg4", // Optional
});
const twClient = client.readWrite;
const postTweet = async (text) => {
    try {
        await twClient.v2.tweet(text);
        console.log("Tweet posted successfully:", text);
    } catch (error) {
        console.log("Error posting tweet:", error);
    }
};
for (let i = 1; i <= 1; i++) {
    const tweetText = MyText2;
    postTweet(tweetText);
}
});
 