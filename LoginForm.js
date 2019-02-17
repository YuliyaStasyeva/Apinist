const Waiters= require ('./waiters');
class LoginForm {
    constructor() {
        this.inputLogin= element(by.css('#passp-field-login'));
        this.inputSubmit= element(by.css('button.passp-form-button'));
        this.inputPass= element(by.css('#passp-field-passwd'));
        this.warningMessagePass= element(by.css("div.passp-form-field__error"));
        this.warningMessageLog= element(by.css('div.passp-form-field_filled'));
    };
    async enterLogin(login) {
        await Waiters.waitForElementIsVisible(this.inputLogin);
        await this.inputLogin.sendKeys(login);
        await this.inputSubmit.click();
    };
    async enterPass(password) {
        await Waiters.waitForElementIsVisible(this.inputPass);
        await this.inputPass.sendKeys(password);
        await this.inputSubmit.click();
    };
    async getWarningMessagePass() {
        await Waiters.waitForElementIsVisible(this.warningMessagePass);
               const messagePass= await this.warningMessagePass.isPresent();
               await console.log(messagePass);
               return await messagePass;
    };
    async getWarningMessageLog() {
        await Waiters.waitForElementIsVisible(this.warningMessageLog);
        const messageLog= await this.warningMessageLog.isPresent();
        await console.log(messageLog);
        return await messageLog;
    };
};
module.exports=new LoginForm();