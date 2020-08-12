const { Given } = require('cucumber');
const LoginPage = require('../page_objects/login.page');
const InputsPage = require('../page_objects/inputs.page');

const pages = {
    login: LoginPage,
    inputs: InputsPage

}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});
