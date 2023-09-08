const { By, until, Key, Builder } = require('selenium-webdriver');
const assert = require('assert');
const driver = require('../../supports/driver').getDriver();
const { test_data } = require("../hooks");
const fs = require('fs');
const path = require('path')
const LONG_TIME_OUT = 100 * 1000;
const EODSTAGE_TIME_OUT = 600 * 1000;
// ----------------------------------------------------------------------------------------------------------------------------
var common = {

}
var filename = "tweetinput.json";

// ----------------------------------------------------------------------------------------------------------------------------
var sendValue = async function (id, value) {
    var elm = checkVisible(id);
    var valueToSend = value;
    if (value == null) {
        valueToSend = '';
    }
    await elm.clear();
    await elm.sendKeys(valueToSend);
}

var checkVisible = function (id) {
    var elm = getElement(id);
    return driver.wait(until.elementIsVisible(elm), LONG_TIME_OUT);
}

var readJSONData = async function (key) {
    // var path = '/usr/src/app/test/supports/tweetinput.json';
    var filepath = path.join(__dirname,'jsoninput',filename)
    var scenarioid = await test_data.get('SCENARIO_ID');
    let jsonRead;
    try {
        jsonRead = fs.readFileSync(filepath,'utf-8');
        jsonRead = JSON.parse(jsonRead);
    } catch (err) {
        console.log(err);
        return null; // Return a default value or handle the error appropriately
    }

    var value = jsonRead.test_data_sc[scenarioid][key];
    return value;
}


var clickElement = function (id) {
    var elm = checkVisible(id);
    return elm.click();
}

var getElementText = function (path) {
    var elm = checkVisible(path);
    return elm.getText();
}

var getElementInnerText = function (path) {
    var elm = checkVisible(path);
    return elm.innerText();
}

var getElementAttribute = function (path, attribute) {
    var elm = checkVisible(path);
    return elm.getAttribute(attribute);
}

var getElementValue = function (path) {
    var elm = checkVisible(path);
    return elm.value;
}

var getElement = function (elementId) {
    if (elementId.startsWith("id=")) {
        var elm = elementId.replace("id=", "");
        return driver.wait(until.elementLocated(By.id(elm)), LONG_TIME_OUT);
    }
    if (elementId.startsWith("xpath=")) {
        var elm = elementId.replace("xpath=", "");
        return driver.wait(until.elementLocated(By.xpath(elm)), LONG_TIME_OUT);
    }
    if (elementId.startsWith("css=")) {
        var elm = elementId.replace("css=", "");
        return driver.wait(until.elementLocated(By.css(elm)), LONG_TIME_OUT);

    }
}

// -----------dropdown -----------------

// CommonFunctions.js

// Function to select an option from a dropdown by its visible text
async function selectDropdownOptionByText(driver, dropdownLocator, optionText) {
    const dropdown = await driver.findElement(dropdownLocator);
    await dropdown.click();

    const optionLocator = By.xpath(`//option[text()="${optionText}"]`);
    const option = await dropdown.findElement(optionLocator);
    await option.click();
}

// Function to select an option from a dropdown by its value attribute
    async function selectDropdownOptionByValue(driver, dropdownLocator, optionValue) {
    const dropdown = await driver.findElement(dropdownLocator);
    await dropdown.click();

    const optionLocator = By.xpath(`//option[@value="${optionValue}"]`);
    const option = await dropdown.findElement(optionLocator);
    await option.click();
}





module.exports = {
    'common': common,
    'sendValue': sendValue,
    'checkVisible': checkVisible,
    'clickElement': clickElement,
    'getElementText': getElementText,
    'getElementInnerText': getElementInnerText,
    'getElementAttribute': getElementAttribute,
    'getElementValue': getElementValue,
    'getElement': getElement,
    'selectDropdownOptionByText': selectDropdownOptionByText,
    'selectDropdownOptionByValue': selectDropdownOptionByValue,
    'readJSONData':readJSONData
}