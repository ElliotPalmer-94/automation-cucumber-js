const { Then } = require('cucumber');
const SecurePage = require('../page_objects/secure.page');
const InputsPage = require('../page_objects/inputs.page');

Then(/^I should see a flash message saying (.*)$/, async (message) => {

    await expect(SecurePage.flashAlert).toBeDisplayed();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

Then(/^The input value should be (.*)$/, async (value) => {

    await expect(InputsPage.inputField).toHaveValue(value);
});
