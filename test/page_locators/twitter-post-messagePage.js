var twitterScreen = {
    SIGN_IN_BUTTON: "xpath=//a[@data-testid='loginButton']//div[1]",
    UNAME_FIELD: "xpath=//span[text()='Phone, email, or username']/following::input",
    NEXT_BUTTON: "xpath=(//div[@role='button']//div)[3]",
    PWD_FIELD: 'id=password',
    INPUT_PHONE_UNAME: "xpath=//span[text()='Phone or username']/following::input",
    INPUT_PASSWORD: "xpath=//span[text()='Password']/following::input",
    LOG_IN_BUTTON: "xpath=//div[@data-testid='LoginForm_Login_Button']//div[1]",
    NX_BUTTON: "xpath=//div[@data-testid='ocfEnterTextNextButton']//div[1]",

    HOME_TITLE: "xpath=//span[text()='Home']",
    POST_MSG_INPUT_FIELD: "css=div.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr",
    POST_BUTTON: "xpath=//a[@aria-label='Add post']/following-sibling::div[1]/div/span",

    PROFILE_BUTTON: "xpath=//div[@data-testid='SideNav_AccountSwitcher_Button']",
    LOGOUT_BUTTON: "xpath=//a[@data-testid='AccountSwitcher_Logout_Button']",

    CONFIRM_LOGOUT_BUTTON: "xpath=//div[@data-testid='confirmationSheetConfirm']//div[1]",


    SEARCH_QUERY_FIELD: "xpath=//input[@data-testid='SearchBox_Search_Input']",
    SEARCH_FOR_OPTION: "xpath=//div[@role='progressbar']/following-sibling::div[1]",
    EXPLORE_OPTION: "xpath=(//a[@data-testid='AppTabBar_Explore_Link']//div)[1]",

    POST_OPTION: "xpath=(//a[@data-testid='SideNav_NewTweet_Button']//div)[1]",
    // POST_OPTION_POST_FIELD: "xpath=(//div[@aria-label='Tweet text'])[1]",
    POST_OPTION_POST_FIELD: "xpath=((//div[@aria-label='Tweet text'])[1]//div)[1]",

    POST_OPTION_POST_BUTTON: "xpath=//div[@data-testid='tweetButton']//div[1]",

    ADD_POST_BUTTON: "xpath=//div[@data-testid='addButton']//div[1]",

}

module.exports = {
    'twitter': twitterScreen
};