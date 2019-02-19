const Waiters= require ('./waiters');
class LoginForm {
    constructor() {
        this.inputLogin= element(by.css('#passp-field-login'));
        this.inputSubmit= element(by.css('button.passp-form-button'));
        this.inputPass= element(by.css('#passp-field-passwd'));
        this.warningMessagePass= element(by.css("div.passp-form-field__error"));
        this.warningMessageLog= element(by.css('div.passp-form-field__error'));
    };
    async enterLoginAndSubmit(login) {
        await Waiters.waitForElementIsVisible(this.inputLogin);
        await this.inputLogin.sendKeys(login);
        await this.inputSubmit.click();
    };
    async enterPassAndSubmit(password) {
        await Waiters.waitForElementIsVisible(this.inputPass);
        await this.inputPass.sendKeys(password);
        await this.inputSubmit.click();
    };
    async getWarningMessagePass() {
        await Waiters.waitForElementIsVisible(this.warningMessagePass);
               const messagePass= await this.warningMessagePass.getText();
               return await messagePass;
    };
    async getWarningMessageLog() {
        await Waiters.waitForElementIsVisible(this.warningMessageLog);
        const messageLog= await this.warningMessageLog.getText();
        return await messageLog;
    };
};
module.exports=new LoginForm();