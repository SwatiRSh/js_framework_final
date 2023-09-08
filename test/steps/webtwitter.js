const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { Builder, By, Key, Options, Capabilities, until, } = require("selenium-webdriver");
const { setDefaultTimeout } = require("@cucumber/cucumber");
setDefaultTimeout(300 * 1000);
const { implicitWait } = require("../supports/utils/wait");
const { ONE_SECOND, TWO_SECOND, ONE_MIN, THIRTY, TEN, } = require("../supports/utils/timeunit");
const driver = require('../supports/driver').getDriver();

// let driver;

var options;
let nextPort; //for example
const commonFunctions = require('../supports/utils/commonFunctions');
const properties = require('../supports/properties');
const application = properties.applicationBasicData;
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { twitter } = require('../page_Locators/twitter-post-messagePage');

let UNAME
let PASSWORD

Given('user launch the application', async function () {
    await driver.sleep(1000);
    return driver.get(application.URL)
});

Then('user clicks on sign in button', async function () {
    await commonFunctions.clickElement(twitter.SIGN_IN_BUTTON)
});


When('user enters username as {string}', async function (uname) {
    if (uname == 'VALID_UNAME') {
        UNAME = application.VALID_UNAME
    }
    else if (uname == 'INVALID_UNAME') {
        UNAME = application.INVALID_UNAME
    }

    else if (uname == 'LOCKED_OUT_UNAME') {
        UNAME = application.LOCKED_OUT_UNAME
    }

    await commonFunctions.sendValue(twitter.UNAME_FIELD, UNAME)
        .then(async function () {
            await driver.sleep(5000);
        });

});

Then('user clicks on next button in login page', async function () {
  await commonFunctions.clickElement(twitter.NEXT_BUTTON)
});

 

When('user enters username again as {string}', async function (pnumber) {
    if (pnumber == 'PHONE_NUMBER') {
        PNUM = application.PHONE_NUMBER
    }

    await commonFunctions.sendValue(twitter.INPUT_PHONE_UNAME, PNUM)
        .then(async function () {
            await driver.sleep(5000);
        });
});

Then('user clicks on next button', async function () {
    await commonFunctions.clickElement(twitter.NX_BUTTON)
});

 
Then('user enters password as {string}', async function (pwd) {
    if (pwd == 'VALID_PWD') {
        PASSWORD = application.VALID_PWD
    }
    else if (pwd == 'INVALID_PWD') {
        PASSWORD = application.INVALID_PWD
    }

    await commonFunctions.sendValue(twitter.INPUT_PASSWORD, PASSWORD)
        .then(async function () {
            await driver.sleep(10000);
        });
});

 

Then('user clicks on log in', async function () {
    await commonFunctions.clickElement(twitter.LOG_IN_BUTTON)
        .then(async function () {
            await driver.sleep(10000);
        });
});

 

Then('verify user is on home', async function () {
    await driver.sleep(1000);
    await commonFunctions.getElementText(twitter.HOME_TITLE).then(function (value) {
        assert.equal(value, "Home", "Home screen has not been launched properly");
    });
});

 
Then('user posts {string}', async function (message) {
    if(message==="message1"){
        message = await commonFunctions.readJSONData(message)
    }else if(message==="message2"){
        message = await commonFunctions.readJSONData(message)
    }else if(message==="message3"){
        message = await commonFunctions.readJSONData(message)
    }
    var elm = commonFunctions.checkVisible(twitter.POST_MSG_INPUT_FIELD);
    await elm.clear();
    await commonFunctions.sendValue(twitter.POST_MSG_INPUT_FIELD, message)
        .then(async function () {
            await driver.sleep(2000);
        });
});

 

Then('user selects {string}', async function (string) {
});

 
Then('user clicks on post', async function () {
    await driver.sleep(3000);
    await commonFunctions.clickElement(twitter.POST_BUTTON)
        .then(async function () {
            await driver.sleep(10000);
        });
});

 

Then('user clicks on profile', async function () {
    await commonFunctions.clickElement(twitter.PROFILE_BUTTON)
        .then(async function () {
            await driver.sleep(10000);
        });
});

 

When('clicks on logout', async function () {
    await commonFunctions.clickElement(twitter.LOGOUT_BUTTON)
        .then(async function () {
          await driver.sleep(3000);
        });

    await commonFunctions.clickElement(twitter.CONFIRM_LOGOUT_BUTTON)
        .then(async function () {
            await driver.sleep(3000);
        });
});

 

 

Then('user click on explore option', async function () {
    await commonFunctions.clickElement(twitter.EXPLORE_OPTION)
        .then(async function () {
            await driver.sleep(3000);
        });
});

 

Then('user search {string}', async function (message) {
    if(message==="message1"){
        message = await commonFunctions.readJSONData(message)
    }else if(message==="message2"){
        message = await commonFunctions.readJSONData(message)
    }else if(message==="message3"){
        message = await commonFunctions.readJSONData(message)
    }
    await commonFunctions.sendValue(twitter.SEARCH_QUERY_FIELD, message)
        .then(async function () {
            await driver.sleep(5000);
        });

    await commonFunctions.clickElement(twitter.SEARCH_FOR_OPTION)
        .then(async function () {
            await driver.sleep(5000);
        });
});

 

Then('take the screenshot of the post and save it', async function () {

    await driver.sleep(5000);

    // const currentDir = __dirname;

    // const directoryPath = path.join(currentDir, 'screenshots');

 

    const currentDir = __dirname;

    const parentDir = path.dirname(currentDir);

    const directoryPath = path.join(parentDir, 'screenshots');

 

    if (!fs.existsSync(directoryPath)) {

        fs.mkdirSync(directoryPath, { recursive: true });

    }

    const screenshot = await driver.takeScreenshot();

    const image = Buffer.from(screenshot, 'base64');

    const timestamp = new Date().toISOString().replace(/:/g, '-');

    const fileName = `screenshot_${timestamp}.png`;

    const filePath = path.join(directoryPath, fileName);

    fs.writeFileSync(filePath, image);

});

 

 

Then('user clicks on post option', async function () {

    await commonFunctions.clickElement(twitter.POST_OPTION)

        .then(async function () {

            await driver.sleep(5000);

        });

});

 

Then('user posts {string} in post option', async function (message) {

    await commonFunctions.sendValue(twitter.POST_OPTION_POST_FIELD, message)

        .then(async function () {

            await driver.sleep(5000);

        });

});

 

Then('user clicks on post in post option', async function () {

    await commonFunctions.clickElement(twitter.POST_OPTION_POST_BUTTON)

        .then(async function () {

            await driver.sleep(5000);

        });

});

 

Then('user clicks on add another tweet button', async function () {

    await commonFunctions.clickElement(twitter.ADD_POST_BUTTON)

        .then(async function () {

            await driver.sleep(5000);

        });

});

 

Then('user posts multiple messages {string} in post option', async function (messages) {

    var messagesArray = messages

    var messagesLength = messagesArray.length;

 

    for (i = 1; i <= messagesLength; i++) {

        var POST_OPTION_POST_FIELD_XPATH = twitter.POST_OPTION_POST_FIELD;

        commonFunctions.sendValue(POST_OPTION_POST_FIELD_XPATH.replace(/%d/gi, i), messages[i]).then(async function () {

            await driver.sleep(4000);

        });

        await commonFunctions.clickElement(twitter.ADD_POST_BUTTON)

            .then(async function () {

                await driver.sleep(5000);
            });
    }
});