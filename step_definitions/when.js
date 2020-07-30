const { When } = require('cucumber');
const LoginPage = require('../page_objects/login.page');

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});