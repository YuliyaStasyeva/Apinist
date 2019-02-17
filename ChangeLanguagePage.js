const Waiters= require ("./waiters");
class ChangeLanguagePage {
    constructor() {
        this.languageButton = element(by.css('button.select__button'));
        this.languageListEnglish = element(by.xpath('//span[@class="select__text" and contains (., \'English\')]'));
        this.saveButton= element(by.css('button.form__save'));
    };
    async selectEnglish() {
        await Waiters.waitForElementIsVisible(this.languageButton);
        await this.languageButton.click();
        await Waiters.waitForElementIsVisible(this.languageListEnglish);
        await this.languageListEnglish.click();
        await Waiters.waitForElementIsVisible(this.saveButton);
        await this.saveButton.click();
    };
    async verifyEnglish() {
        let buttonText= await this.languageButton.getText();
        await console.log(buttonText);
        return await buttonText;
    };
};
module.exports= new ChangeLanguagePage();