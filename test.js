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
        await LoginForm.enterLogin("AutotestUser");
        await LoginForm.enterPass('NoAutotestUser123');
        await LoginForm.getWarningMessagePass();
        await expect(await LoginForm.getWarningMessagePass()).toBe(true);
    });
    it ("Yandex почта - невалидный логин", async function () {
        await MainYandexPage.goToMail();
        await LoginForm.enterLogin("NoAutotestUser");
        await LoginForm.getWarningMessageLog();
        await expect(await LoginForm.getWarningMessageLog()).toBe(true);
    });
    it('Логин на yandex почту', async function() {
        await MainYandexPage.goToMail();
        await LoginForm.enterLogin("AutotestUser");
        await LoginForm.enterPass('AutotestUser123');
        await MailYandexPage.verifyUserName();
        await expect(await MailYandexPage.verifyUserName()).toEqual('AutotestUser');
    });
    it('Yandex почта логаут', async function() {
       await MainYandexPage.goToLoginMail();
       await MailYandexPage.selectLogout();
       await MainYandexPage.verifyLogout();
       await expect(await MainYandexPage.verifyLogout()).toEqual('Почта');
    });
    it ('Yandex-навигация', async function() {
        await MainYandexPage.getLinks(MainYandexPage.pictureLink, 'images');
        await expect (await browser.getCurrentUrl()).toBe('https://yandex.by/images/');
        await MainYandexPage.get();
        await MainYandexPage.getLinks(MainYandexPage.newsLink, 'news');
        await expect (await browser.getCurrentUrl()).toBe('https://news.yandex.by/');
        await MainYandexPage.get();
        await MainYandexPage.getLinks(MainYandexPage.mapsLink, 'maps');
        await expect (await browser.getCurrentUrl()).toContain("https://yandex.by/maps");
        await MainYandexPage.get();
        await MainYandexPage.getLinks(MainYandexPage.marketLink, 'market');
        await expect (await browser.getCurrentUrl()).toContain("https://market.yandex.by/");
        await MainYandexPage.get();
        await MainYandexPage.getLinks(MainYandexPage.translateLink, 'translate');
        await expect (await browser.getCurrentUrl()).toBe("https://translate.yandex.by/");
        await MainYandexPage.get();
        await MainYandexPage.getLinks(MainYandexPage.musicLink, 'music');
        await expect (await browser.getCurrentUrl()).toBe("https://music.yandex.by/home");
        await MainYandexPage.get();
        await MainYandexPage.switchToSecondTabAndGetLinkVideo();
        await expect (await browser.getCurrentUrl()).toBe("https://yandex.by/video/");
    });
    it ('Yandex- переключение языка на английский', async function() {
        await MainYandexPage.get();
        await MainYandexPage.changeLanguage();
        await ChangeLanguagePage.selectEnglish();
        await MainYandexPage.changeLanguage();
        await ChangeLanguagePage.verifyEnglish();
        await expect ( await ChangeLanguagePage.verifyEnglish()).toEqual('English');
});
});