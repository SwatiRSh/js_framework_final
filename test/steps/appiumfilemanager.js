// const { Given, When, BeforeAll, AfterAll } = require("@cucumber/cucumber");
// const fs = require('fs');
// const Twitterlocators = require("../page_locators/Twitterlocators");
// const { execSync } = require('child_process');
// const { remote } = require('webdriverio');
// const envconfig = require('../supports/utils/envconfig')
// const appium = require('appium');

// const wdOpts = {
//     hostname: process.env.APPIUM_HOST || '192.168.10.10',
//     port: parseInt(process.env.APPIUM_PORT, 1) || 4723,
//     logLevel: 'info',

//     capabilities: {
//         platformName: envconfig.PLATFORM_NAME,
//         'appium:platformVersion': envconfig.PLATFORM_VERSION,
//         'appium:automationName': envconfig.AUTOMATION_NAME,
//         'appium:deviceName': envconfig.DEVICE_NAME,
//         'appium:appPackage': envconfig.APP_PACKAGE,
//         'appium:appActivity': envconfig.APP_ACTIVITY,
//         'appium:appPackage': envconfig.APP_PACKAGE_files,
//         'appium:appActivity': envconfig.APP_ACTIVITY_files,
//     },

// };

// Given('User start the appium server', { timeout: 2 * 10000 }, async () => {
//     // const appiumArgs = [
//     //     '--address', '127.0.0.1',
//     //     '--port', '4723',
//     // ];
//     // appiumServer = await appium.main({ port: 4723, host: '127.0.0.1', args: appiumArgs });
//     // console.log("---------------------Appium Server Started-----------------------");
// });

// When('user opens the file app and copy images to desired folder', { timeout: 5 * 100000 }, async () => {
//     console.log("Mobile is connected with local System: APPIUM ")
//     const localFolderPath = Twitterlocators.screenshotPath
//     const remoteFolderPath = Twitterlocators.remoteFilePath;
//     function pushFolderContents(localFolder, remoteFolder) {
//         const files = fs.readdirSync(localFolder);
//         for (const file of files) {
//             const localFilePath = `${localFolder}/${file}`;
//             const remoteFilePath = `${remoteFolder}/${file}`;
//             if (fs.statSync(localFilePath).isDirectory()) {
//                 pushFolderContents(localFilePath, remoteFilePath);
//             } else {
//                 execSync(`adb push "${localFilePath}" "${remoteFilePath}"`);
//                 console.log('File pushed to the device:', localFilePath, '->', remoteFilePath);
//             }
//         }
//     }
//     pushFolderContents(localFolderPath, remoteFolderPath);
//     console.log('Folder and its contents pushed to the device:', localFolderPath, '->', remoteFolderPath);
//     const driver = await remote(wdOpts);
//     try {
//         await driver.waitUntil(async () => {
//             const Dashboard = await driver.$(Twitterlocators.Dashboard);
//             await Dashboard.waitForExist();
//             await Dashboard.click();
//             const Phonememory = await driver.$(Twitterlocators.Phonememory);
//             await Phonememory.waitForExist();
//             await Phonememory.click();
//             const Pictures = await driver.$(Twitterlocators.Pictures);
//             await Pictures.waitForExist();
//             await Pictures.click();
//             const Instagramfolder = await driver.$(Twitterlocators.Instagramfolder);
//             await Instagramfolder.waitForExist();
//             await Instagramfolder.click();
//             const moreoptions = await driver.$(Twitterlocators.moreoptions);
//             await moreoptions.waitForExist();
//             await moreoptions.click();
//             const selectall = await driver.$(Twitterlocators.selectall)
//             await selectall.click();
//             driver.pause(5000)
//             const copymoreoptions = await driver.$(Twitterlocators.copymoreoptions);
//             await copymoreoptions.click();
//             // const copyto = await driver.$(Twitterlocators.copyto);
//             // await copyto.click();
//             const moveto = await driver.$(Twitterlocators.moveto);
//             await moveto.click();
//             // const copybutton = await driver.$(Twitterlocators.copybutton);
//             // await copybutton.waitForExist();
//             // await copybutton.click();
//             const movebutton = await driver.$(Twitterlocators.movebutton);
//             await movebutton.waitForExist();
//             await movebutton.click();
//         })
//     }
//     catch (error) {
//         console.error('Error:', error);
//     }
// })