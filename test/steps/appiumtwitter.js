const { Given, When, Then } = require("@cucumber/cucumber");
const { remote } = require('webdriverio');
const fs = require('fs');
const Twitterlocators = require("../page_locators/Twitterlocators");
const { execSync } = require('child_process');


const appiumCapabilities = {
    platformName: 'Android',
    'appium:platformVersion': '12',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'emulator-5554',
    'appium:appPackage': 'com.instagram.android',
    'appium:appActivity': 'com.instagram.mainactivity.MainActivity',
};

const wdOpts = {
    hostname: process.env.APPIUM_HOST || Twitterlocators.Host,
    port: parseInt(process.env.APPIUM_PORT, 11) || 4723,
    logLevel: 'info',
    capabilities: appiumCapabilities,
};

Given('mobile is connected with local System', { timeout: 2 * 5000 }, async () => {
    console.log("Mobile is connected with local System: APPIUM ")
    const localFolderPath = Twitterlocators.screenshotPath
    const remoteFolderPath = Twitterlocators.remoteFilePath;
    function pushFolderContents(localFolder, remoteFolder) {
        const files = fs.readdirSync(localFolder);
        for (const file of files) {
            const localFilePath = `${localFolder}/${file}`;
            const remoteFilePath = `${remoteFolder}/${file}`;
            if (fs.statSync(localFilePath).isDirectory()) {
                pushFolderContents(localFilePath, remoteFilePath);
            } else {
                execSync(`adb push "${localFilePath}" "${remoteFilePath}"`);
                console.log('File pushed to the device:', localFilePath, '->', remoteFilePath);
            }
        }
    }
    pushFolderContents(localFolderPath, remoteFolderPath);
    console.log('Folder and its contents pushed to the device:', localFolderPath, '->', remoteFolderPath);
});
When('user posts an Instagram post along with screenshot of tweet', { timeout: 2 * 100000 }, async () => {
    const driver = await remote(wdOpts);
    try {
        await driver.waitUntil(async () => {
            const username = await driver.$(Twitterlocators.username);
            await username.addValue(Twitterlocators.setusername);
            const password = await driver.$(Twitterlocators.password);
            await password.addValue(Twitterlocators.setpassword);
            const login = await driver.$(Twitterlocators.login);
            await login.click();
            const save = await driver.$(Twitterlocators.save);
            await save.click();
            const CreationTab = await driver.$(Twitterlocators.CreationTab);
            await CreationTab.click();
            const allowinsta = await driver.$(Twitterlocators.allowinsta);
            await allowinsta.click();
            const allowinsta_access = await driver.$(Twitterlocators.allowinsta_access);
            await allowinsta_access.click();
            await allowinsta_access.click();
            const selectmulti = await driver.$(Twitterlocators.selectmultiple);
            await selectmulti.click();
            const checkboxes = await driver.$$('//android.widget.CheckBox[@content-desc="Photo thumbnail, Added on 3 hour ago"]');
            for (const checkbox of checkboxes) {
            await checkbox.click();
            }
            const ToggleSqure = await driver.$(Twitterlocators.ToggleSqure);
            await ToggleSqure.click();
            const SelectNext = await driver.$(Twitterlocators.SelectNext);
            await SelectNext.click();
            await SelectNext.click();
            const rimikphoto = await driver.$(Twitterlocators.rimikphoto);
            await rimikphoto.click();
            const SelectSharePost = await driver.$(Twitterlocators.SelectSharePost);
            await SelectSharePost.click();
        })

    } catch (error) {
        console.error('Error:', error);
    } finally {
    }
})

