class MarketYandexPage {
    constructor() {
        this.checkBox = element(by.xpath('//div[@class=\'LhMupC0dLR\' and contains (., \'Цена с учётом доставки\')]'));
        this.radioButton = element(by.css('div._2zRi9ex2Rl'));
        this.dropDown=element(by.css('button.button_js_inited'));
        this.dropDownValue= element(by.css('option[value="12"]'));
        this.inputText=element(by.css('#glpricefrom'));
    };
    async get() {
        await browser.waitForAngularEnabled(false);
        await browser.driver.manage().window().maximize();
        await browser.get('https://market.yandex.by/catalog/54726/list?local-offers-first=0&deliveryincluded=0&onstock=1');
    };
    async letsScrollIt(element) {
        await browser.executeScript('arguments[0].scrollIntoView();', element.getWebElement());
    };
    async checkCheckbox() {
        await this.letsScrollIt(this.checkBox);
        await this.checkBox.click();
    };
    async uncheckCheckbox() {
        await this.letsScrollIt(this.checkBox);
        await this.checkBox.click();
    };
    async checkRadioButton() {
        await this.letsScrollIt(this.radioButton);
        await this.radioButton.click();
    };
    async selectFromDropDown() {
        this.letsScrollIt(this.dropDown);
        await this.dropDown.click();
        await browser.executeScript("arguments[0].click();", this.dropDownValue.getWebElement());
    };
    async verifyInputtext() {
        await this.letsScrollIt(this.inputText);
        await this.inputText.sendKeys("1000");
    };
};
module.exports=new MarketYandexPage();
