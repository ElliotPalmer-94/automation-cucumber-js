const { When } = require('cucumber');
const LoginPage = require('../page_objects/login.page');
const InputsPage = require('../page_objects/inputs.page');

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

When(/^I input the (\w+) arrow key$/, async (key) => {
    await InputsPage.inputArrowKey(key)

});