const webDriver = require('selenium-webdriver');
const chrome= require("selenium-webdriver/chrome")


let options = new chrome.Options();
options.setAcceptInsecureCerts(true);
options.addArguments("--ignore-certificate-errors");
options.addArguments("--disable-dev-shm-usage");
options.addArguments("--disable-cache");
options.addArguments("--start-maximized");
options.addArguments("--private");
options.addArguments("--disk-cache-size=0");

var func = (function(){
    //var driver = new webDriver.Builder().forBrowser('firefox').usingServer('http://selenium-ff:4444/wd/hub').build();
    var driver = new webDriver.Builder().withCapabilities(options).forBrowser('chrome').build();//.usingServer('http://selenium-ch:4444/wd/hub')
    return {'getDriver': function(){
        return driver;
    }}
})();

module.exports = func;
