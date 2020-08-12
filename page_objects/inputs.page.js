const Page = require('./page');

class InputPage extends Page {

    get inputField() {
        return $('input[type="number"]')
    }

    async inputArrowKey(key) {
        await (await this.inputField).click()

        if (key === 'up') {
            await browser.keys("\uE013");
        }

        if (key === 'down') {
            await browser.keys("\uE015");
        }
    }

    open() {
        super.open('inputs')
    }
}

module.exports = new InputPage();
