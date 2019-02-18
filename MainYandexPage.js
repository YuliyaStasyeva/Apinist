const Waiters= require ("./waiters");
const ChangeLanguagePage= require ('./ChangeLanguagePage');
class MainYandexPage {
    constructor() {
        this.logInToMail = element(by.css('a.desk-notif-card__login-enter-expanded'));
        this.logIn= element(by.css('div.desk-notif-card__mail-title'));
        this.mail = element(by.css('a[data-statlog=\'notifications.mail.logout.title\']'));
        this.videoLink = element(by.css('a[data-id="video"]'));
        this.pictureLink= element(by.css('a[data-id="images"]'));
        this.newsLink= element(by.css('a[data-id="news"]'));
        this.mapsLink= element(by.css('a[data-id="maps"]'));
        this.marketLink= element(by.css('a[data-id="market"]'));
        this.translateLink= element(by.css('a[data-id="translate"]'));
        this.musicLink= element(by.css('a[data-id="music"]'));
        this.language = element(by.css('div.dropdown2_switcher_link'));
        this.languageElse = element(by.css('a.menu__item.menu__item_type_link[aria-label="ещё"]'));
    };
    async get() {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://yandex.by/');
    };
    async goToMail() {
        await Waiters.waitForElementIsVisible(this.logInToMail);
        await this.logInToMail.click();
    };
    async goToLoginMail() {
        await Waiters.waitForElementIsVisible(this.logIn);
        await this.logIn.click();
    };
    async goToMailLinkAndVerifyLogout() {
        await Waiters.waitForElementIsVisible(this.mail);
        const logout= await this.mail.getText();
        return await logout;
    };
    async openLinkAndVerifyUrl(link,part) {
        await Waiters.waitForElementIsVisible(link);
        await link.click();
        await Waiters.waitForPageLoad(part);
    };
    async openNewTabByLinkAndVerifyUrl() {
        await Waiters.waitForElementIsVisible(this.videoLink);
        await this.videoLink.click();
        await browser.getAllWindowHandles().then(function (handles) {
            var secondWindowHandle = handles[1];
            browser.switchTo().window(secondWindowHandle).then(function() {
                return Waiters.waitForPageLoad('video');
            });
        });
           };
    async changeLanguage() {
        await Waiters.waitForElementIsVisible(this.language);
        await this.language.click();
        await Waiters.waitForElementIsVisible(this.languageElse);
        await this.languageElse.click();
    };
    };
module.exports= new MainYandexPage();