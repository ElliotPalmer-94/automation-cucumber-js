const { Given } = require('cucumber');
const LoginPage = require('../page_objects/login.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});
