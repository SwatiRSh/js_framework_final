exports.config = {
    runner: 'local',
    framework: 'cucumber',
    cucumberOpts: {
        require: ['./steps/*.js'], // Specify the path to your step definitions
    },
    services: ['appium'],
    appium: {
        // Appium configuration goes here
    },
};