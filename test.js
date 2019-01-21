const marketYandexPage= require ('./po');

describe('check,/uncheck, scroll, check radio button, select value from dropdown, get attribute class, value', function() {

    it('scroll/check', async function() {
        await marketYandexPage.get();
        await marketYandexPage.checkCheckbox();
        expect(marketYandexPage.checkBox.isSelected()).toBe(true);
    });

    it('scroll/uncheck', async function() {
        await marketYandexPage.uncheckCheckbox();
        expect(marketYandexPage.checkBox.isSelected()).toBe(false);
    });

    it('scroll/check radio button', async function() {
        await marketYandexPage.checkRadioButton();
        expect(marketYandexPage.radioButton.isSelected()).toBe(true);
    });

    it ("select from dropdown", async function () {
        await marketYandexPage.selectFromDropDown();
        expect(marketYandexPage.dropDownValue.isSelected()).toBe(true);
    });

    it ('ввести текст в инпут и получить введенный текст (getAttribute)', async function() {
        await marketYandexPage.verifyInputtext();
        expect (marketYandexPage.inputText.getAttribute('value')).toEqual('1000');
    });

    it ('получить значение аттрибутов class', async function(){
        await marketYandexPage.verifyInputtext();
        expect (marketYandexPage.inputText.getAttribute('class')).toEqual('_2yK7W3SWQ- _1d02bPcWht');
    });

});