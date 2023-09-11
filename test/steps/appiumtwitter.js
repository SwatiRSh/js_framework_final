// const { Given, When, Then,AfterAll } = require("@cucumber/cucumber");
// const { remote } = require('webdriverio');
// const fs = require('fs');
// const Twitterlocators = require("../page_locators/Twitterlocators");
// const { execSync } = require('child_process');

// // let appiumServer;

// // AfterAll(async function () {
// //   if (appiumServer) {
// //     await appiumServer.close();
// //     console.log("---------------------Appium Server Closed-----------------------");
// //   }
// // });
// const appiumCapabilities = {
//     platformName: 'Android',
//     'appium:platformVersion': '12',
//     'appium:automationName': 'UiAutomator2',
//     'appium:deviceName': 'emulator-5554',
//     'appium:appPackage': 'com.instagram.android',
//     'appium:appActivity': 'com.instagram.mainactivity.MainActivity',
// };

// const wdOpts = {
//     hostname: process.env.APPIUM_HOST || Twitterlocators.Host,
//     port: parseInt(process.env.APPIUM_PORT, 3) || 4723,
//     logLevel: 'info',
//     capabilities: appiumCapabilities,
// };

// Given('mobile is connected with local System', { timeout: 2 * 5000 }, async () => {
//     console.log("Mobile is connected with local System: APPIUM ")
//     // const localFolderPath = Twitterlocators.screenshotPath
//     // const remoteFolderPath = Twitterlocators.remoteFilePath;
//     // function pushFolderContents(localFolder, remoteFolder) {
//     //     const files = fs.readdirSync(localFolder);
//     //     for (const file of files) {
//     //         const localFilePath = `${localFolder}/${file}`;
//     //         const remoteFilePath = `${remoteFolder}/${file}`;
//     //         if (fs.statSync(localFilePath).isDirectory()) {
//     //             pushFolderContents(localFilePath, remoteFilePath);
//     //         } else {
//     //             execSync(`adb push "${localFilePath}" "${remoteFilePath}"`);
//     //             console.log('File pushed to the device:', localFilePath, '->', remoteFilePath);
//     //         }
//     //     }
//     // }
//     // pushFolderContents(localFolderPath, remoteFolderPath);
//     // console.log('Folder and its contents pushed to the device:', localFolderPath, '->', remoteFolderPath);
// });

// When('user posts an Instagram post along with screenshot of tweet', { timeout: 2 * 100000 }, async () => {
//     const driver = await remote(wdOpts);
//     try {
//         await driver.waitUntil(async () => {
//             const username = await driver.$(Twitterlocators.username);
//             await username.addValue(Twitterlocators.setusername);
//             const password = await driver.$(Twitterlocators.password);
//             await password.addValue(Twitterlocators.setpassword);
//             const login = await driver.$(Twitterlocators.login);
//             await login.click();
//             const save = await driver.$(Twitterlocators.save);
//             await save.click();
//             const CreationTab = await driver.$(Twitterlocators.CreationTab);
//             await CreationTab.click();
//             const allowinsta = await driver.$(Twitterlocators.allowinsta);
//             await allowinsta.click();
//             const allowinsta_access = await driver.$(Twitterlocators.allowinsta_access);
//             await allowinsta_access.click();
//             await allowinsta_access.click();
//             const selectmulti = await driver.$(Twitterlocators.selectmultiple);
//             await selectmulti.click();
//             const checkboxes = await driver.$$('//android.widget.CheckBox[@content-desc="Photo thumbnail, Added on 15 minutes ago"]');
//             for (const checkbox of checkboxes) {
//                 await checkbox.click();
//             }

//             const SelectNext = await driver.$(Twitterlocators.SelectNext);
//             await SelectNext.click();
//             await driver.pause(3000);
//             await SelectNext.click();

//             const SelectSharePost = await driver.$(Twitterlocators.SelectSharePost);
//             await SelectSharePost.click();
//         })

//     } catch (error) {
//         console.error('Error:', error);
//     } finally {
//     }
// })
//---------------------------New code--------------------------
const { Given, When, BeforeAll, AfterAll } = require("@cucumber/cucumber");
const fs = require('fs');
const Twitterlocators = require("../page_locators/Twitterlocators");
const { execSync } = require('child_process');
const { remote } = require('webdriverio');
const envconfig = require('../supports/utils/envconfig')
const appium = require('appium');
let appiumServer;
let driver;


AfterAll(async function () {
    if (appiumServer) {
        await appiumServer.close();
        console.log("---------------------Appium Server Closed-----------------------");
    }
});
const wdOpts = {
    hostname: process.env.APPIUM_HOST || '192.168.10.10',
    port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
    logLevel: 'info',
    capabilities: {
        platformName: envconfig.PLATFORM_NAME,
        'appium:platformVersion': envconfig.PLATFORM_VERSION,
        'appium:automationName': envconfig.AUTOMATION_NAME,
        'appium:deviceName': envconfig.DEVICE_NAME,
        'appium:appPackage': envconfig.APP_PACKAGE,
        'appium:appActivity': envconfig.APP_ACTIVITY,
        'appium:appPackage': envconfig.APP_PACKAGE_files,
        'appium:appActivity': envconfig.APP_ACTIVITY_files,
    },
};

Given('User start the appium server', { timeout: 2 * 10000 }, async () => {
    const appiumArgs = [
        '--address', '127.0.0.1',
        '--port', '4723',
    ];
    appiumServer = await appium.main({ port: 4723, host: '127.0.0.1', args: appiumArgs });
    console.log("---------------------Appium Server Started-----------------------");
});
When('user opens the file app and move images to desired folder', { timeout: 5 * 100000 }, async () => {

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
    
    const driver = await remote(wdOpts);
    try {
        await driver.waitUntil(async () => {
            const Dashboard = await driver.$(Twitterlocators.Dashboard);
            await Dashboard.waitForExist();
            await Dashboard.click();
            const Phonememory = await driver.$(Twitterlocators.Phonememory);
            await Phonememory.waitForExist();
            await Phonememory.click();
            const Pictures = await driver.$(Twitterlocators.Pictures);
            await Pictures.waitForExist();
            await Pictures.click();
            const Instagramfolder = await driver.$(Twitterlocators.Instagramfolder);
            await Instagramfolder.waitForExist();
            await Instagramfolder.click();
            const moreoptions = await driver.$(Twitterlocators.moreoptions);
            await moreoptions.waitForExist();
            await moreoptions.click();
            await driver.pause(3000);
            const selectall = await driver.$(Twitterlocators.selectall);
            await selectall.click();
            const copymoreoptions = await driver.$(Twitterlocators.movemoreoptions);
            await copymoreoptions.click();
            const Moveto = await driver.$(Twitterlocators.moveto);
            await Moveto.click();
            const copybutton = await driver.$(Twitterlocators.movebutton);
            await copybutton.click();
            // await driver.deleteSession();
        })
    }
    catch (error) {
        console.error('Error:', error);
    }

})

Given('user loged into Instagram and sharing the Post', { timeout:  10*20000 }, async () => {
    const wdOpts = {
        hostname: process.env.APPIUM_HOST || '192.168.10.10',
        port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
        logLevel: 'info',
        capabilities: {
            platformName: envconfig.PLATFORM_NAME,
            'appium:platformVersion': envconfig.PLATFORM_VERSION,
            'appium:automationName': envconfig.AUTOMATION_NAME,
            'appium:deviceName': envconfig.DEVICE_NAME,
            'appium:appPackage': envconfig.APP_PACKAGE,
            'appium:appActivity': envconfig.APP_ACTIVITY,
        },
    };
    const driver = await remote(wdOpts);
    await driver.waitUntil(async () => {

        const username = await driver.$(Twitterlocators.username);
        await username.waitForDisplayed({ timeout: 500000 });
        await username.addValue(Twitterlocators.setusername);

        const password = await driver.$(Twitterlocators.password);
        await password.waitForDisplayed({ timeout: 500000 });
        await password.addValue(Twitterlocators.setpassword);

        const login = await driver.$(Twitterlocators.login);
        await login.waitForDisplayed({ timeout: 500000 });
        await login.click();

        const save = await driver.$(Twitterlocators.save);
        await save.waitForDisplayed({ timeout: 500000 });
        await save.click();

        const CreationTab = await driver.$(Twitterlocators.CreationTab);
        await CreationTab.waitForDisplayed({ timeout: 200000 });
        await CreationTab.click();

        const allowinsta = await driver.$(Twitterlocators.allowinsta);
        await allowinsta.click();

        const allowinsta_access = await driver.$(Twitterlocators.allowinsta_access);
        await allowinsta_access.click();
        await allowinsta_access.click();

        const selectmulti = await driver.$(Twitterlocators.selectmultiple);
        await selectmulti.waitForDisplayed({ timeout: 500000 });
        await selectmulti.click();

        const checkboxes = await driver.$$(Twitterlocators.Multiplecheckboxes);
        for (const checkbox of checkboxes) {
            await checkbox.click();
        }
        const SelectNext = await driver.$(Twitterlocators.SelectNext);
        await SelectNext.click();
        await SelectNext.click();

        const SelectSharePost = await driver.$(Twitterlocators.SelectSharePost);
        await SelectSharePost.click();
    })
})
When('user posted the screenshot successfully on Instagram', { timeout: 5 * 100000 }, async () => {
})

When('Execution completed - appium server Stoped', { timeout: 2 * 10000 }, async () => {

})