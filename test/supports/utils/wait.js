//const { until, By } = require("selenium-webdriver");
//const driver = require("../support/driver").getDriver();
//const { LONG_TIME_OUT,TWO_SECOND,ONE_SECOND,FIVE_SECOND,} = require("./timeunit");
//const rpmCmnFunctions = require("./rpmCmnFunctions");

var implicitWait = async function (milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
};

module.exports = {
  implicitWait: implicitWait,
  //'waitUntilElementIsInvisible': waitUntilElementIsInvisible,
  //'waitUntilPageIsLoad': waitUntilPageIsLoad,
};
