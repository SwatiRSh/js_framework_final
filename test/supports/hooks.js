var { BeforeAll, Before, AfterAll, After, Status, BeforeStep, AfterStep } = require('@cucumber/cucumber');
const { By, until, Key, } = require('selenium-webdriver');
const driver = require('./driver').getDriver();
const commonFunctions = require('./utils/commonFunctions');
const properties = require('../supports/properties');
const application = properties.applicationBasicData;
var test_data = new Map();
// const { dashboard } = require('../page_Locators/demo-cyclos-dashboard');
const { twitter } = require('../page_Locators/twitter-post-messagePage');

BeforeAll(async function () {
    await driver.manage().window().maximize();
    await driver.manage().deleteAllCookies();
    // return driver.get(application.URL);
});
Before(function (scenario) {
    console.log("*****STARTING SCENARIO : " + scenario.pickle.name);
    test_data.clear();
    // scenarioId = ((scenario.pickle.name).split(/[:.\s]/)[0])
    const scenarioName = scenario.pickle.name;
    scId = (scenario.pickle.name).replace(/:.*/, '');
    test_data.set('SCENARIO_ID', scId)
    console.log("Hooks scenario id: ", test_data.get('SCENARIO_ID'))
    start = Date.now();
});

//---------Report Steps start --------

BeforeStep(async function (scenario) {
    var scenarioStep = scenario.pickleStep.text;
    console.log('<--Scenario Step:', scenarioStep + ' ---------->')
    strResult = "";
});

 

 

// AfterStep(async function (scenario) {

//     var world = this;

//     if (scenario.result.status === Status.FAILED) {

//         return driver.takeScreenshot().then(function (screenshot) {

//             const image = Buffer.from(screenshot, 'base64');

//             world.attach(image, 'image/png');

//         }).then(async function () {

//             console.log("AfterStep-Scenario step failed")

//             // await driver.get(application.URL);

//         }).then(async function () {

//             await commonFunctions.clickElement(dashboard.LOGOUT_OPTION);

//         });

//     }

// });

 
After(async function (scenario) {
    var world = this;
    if (scenario.result.status === Status.FAILED) {
        return driver.takeScreenshot().then(function (screenshot) {
            const image = Buffer.from(screenshot, 'base64');
            world.attach(image, 'image/png');
        }).then(async function () {
            console.log("After-Scenario step failed")
            await driver.get(application.URL);
        }).then(async function () {
            // await commonFunctions.clickElement(twitter.LOGOUT_BUTTON);
        });

    }

});

 

 

 

 

AfterAll(function () {

    driver.close();

    driver.quit();

});
module.exports = {
    test_data: test_data,

}