const Waiters= require ("./waiters");
class ChangeLanguagePage {
    constructor() {
        this.languageButton = element(by.css('button.select__button'));
        this.English = element(by.xpath('//span[@class="select__text" and contains (., \'English\')]'));
        this.saveButton= element(by.css('button.form__save'));
    };
    async selectLanguage(language) {
        await Waiters.waitForElementIsVisible(this.languageButton);
        await this.languageButton.click();
        await Waiters.waitForElementIsVisible(language);
        await language.click();
        await Waiters.waitForElementIsVisible(this.saveButton);
        await this.saveButton.click();
    };
    async returnEnglish() {
        let buttonText= await this.languageButton.getText();
        return await buttonText;
    };
};
module.exports= new ChangeLanguagePage();