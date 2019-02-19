const Waiters= require ('./waiters');
class MailYandexPage {
    constructor() {
        this.userName=element(by.css('div.mail-User-Name'));
        this.subMenuButton=element(by.css('#recipient-1'));
        this.dropDownOption=element(by.css('#nb-4 > div > div > div:nth-child(7) > a'))
    };
    async returnUserName() {
        await Waiters.waitForElementIsVisible(this.userName) ;
        let login =await this.userName.getText();
        return await login;
    };
    async selectLogout() {
        await Waiters.waitForElementIsVisible(this.subMenuButton);
        await this.subMenuButton.click();
        await Waiters.waitForElementIsVisible(this.dropDownOption);
        await this.dropDownOption.click();
    };
    };
module.exports=new MailYandexPage();

