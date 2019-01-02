var yandexMainPage= require ('./po_main');
var yandexLocation = require ('./po_location')
describe('match tab', function() {
	 
  it('should match for London and Paris', async function() {
      //await browser.waitForAngularEnabled(false);
      //await browser.get('https://yandex.by/');
      await yandexMainPage.get();

      await yandexMainPage.getPageLocation();
      await yandexLocation.clearInput();
      await yandexLocation.setCity('Лондон');
      await browser.sleep(5000);
      await yandexLocation.selectCity();
      await browser.sleep(5000);

      await yandexMainPage.elseClick();
      await browser.sleep(5000);
      await yandexMainPage.getMatchLinkLondon();

      await yandexMainPage.getPageLocation();
      await yandexLocation.clearInput();
      await yandexLocation.setCity('Париж');
      await browser.sleep(5000);
      await yandexLocation.selectCity();
      await browser.sleep(5000);
      await yandexMainPage.elseClick();
      await browser.sleep(5000);
      await yandexMainPage.getMatchLinkParis();


      expect(yandexMainPage.getMatchLinkLondon()).toEqual(yandexMainPage.getMatchLinkParis());


  });
});