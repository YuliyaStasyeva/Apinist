const MailYandexPage= require ('./MailYandexPage');
const MainYandexPage= require('./MainYandexPage');
const LoginForm= require('./LoginForm');
const ChangeLanguagePage= require('./ChangeLanguagePage');

describe('пулл тестов', function() {
    beforeEach(function() {
        MainYandexPage.get();
    });
    it('Yandex почта - невалидный пароль', async function() {
        await MainYandexPage.goToMail();
        await LoginForm.enterLoginAndSubmit("AutotestUser");
        await LoginForm.enterPassAndSubmit('NoAutotestUser123');
        await LoginForm.getWarningMessagePass();
        await expect(await LoginForm.getWarningMessagePass()).toBe('Неверный пароль');
    });
    it ("Yandex почта - невалидный логин", async function () {
        await MainYandexPage.goToMail();
        await LoginForm.enterLoginAndSubmit("NoAutotestUser");
        await LoginForm.getWarningMessageLog();
        await expect(await LoginForm.getWarningMessageLog()).toBe('Такого аккаунта нет');
    });
    it('Логин на yandex почту', async function() {
        await MainYandexPage.goToMail();
        await LoginForm.enterLoginAndSubmit("AutotestUser");
        await LoginForm.enterPassAndSubmit('AutotestUser123');
        await MailYandexPage.returnUserName();
        await expect(await MailYandexPage.returnUserName()).toEqual('AutotestUser');
    });
    it('Yandex почта логаут', async function() {
       await MainYandexPage.goToLoginMail();
       await MailYandexPage.selectLogout();
       await MainYandexPage.returnLogout();
       await expect(await MainYandexPage.returnLogout()).toEqual('Почта');
    });
    it ('Yandex-навигация', async function() {
        await MainYandexPage.clickOnLinkAndVerifyUrl(MainYandexPage.pictureLink, 'images');
        await expect (await browser.getCurrentUrl()).toBe('https://yandex.by/images/');
        await MainYandexPage.get();
        await MainYandexPage.clickOnLinkAndVerifyUrl(MainYandexPage.newsLink, 'news');
        await expect (await browser.getCurrentUrl()).toBe('https://news.yandex.by/');
        await MainYandexPage.get();
        await MainYandexPage.clickOnLinkAndVerifyUrl(MainYandexPage.mapsLink, 'maps');
        await expect (await browser.getCurrentUrl()).toContain("https://yandex.by/maps");
        await MainYandexPage.get();
        await MainYandexPage.clickOnLinkAndVerifyUrl(MainYandexPage.marketLink, 'market');
        await expect (await browser.getCurrentUrl()).toContain("https://market.yandex.by/");
        await MainYandexPage.get();
        await MainYandexPage.clickOnLinkAndVerifyUrl(MainYandexPage.translateLink, 'translate');
        await expect (await browser.getCurrentUrl()).toBe("https://translate.yandex.by/");
        await MainYandexPage.get();
        await MainYandexPage.clickOnLinkAndVerifyUrl(MainYandexPage.musicLink, 'music');
        await expect (await browser.getCurrentUrl()).toBe("https://music.yandex.by/home");
        await MainYandexPage.get();
        await MainYandexPage.openNewTabByLinkAndVerifyUrl();
        await expect (await browser.getCurrentUrl()).toBe("https://yandex.by/video/");
    });
    it ('Yandex- переключение языка на английский', async function() {
        await MainYandexPage.get();
        await MainYandexPage.changeLanguage();
        await ChangeLanguagePage.selectLanguage(ChangeLanguagePage.English);
        await MainYandexPage.changeLanguage();
        await ChangeLanguagePage.returnEnglish();
        await expect ( await ChangeLanguagePage.verifyEnglish()).toEqual('English');
});
});