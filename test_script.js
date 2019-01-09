const yandexMainPage= require ('./po_main');
const yandexLocation = require ('./po_location')
describe('match tab', function() {
	  it('should match for London and Paris', async function() {
      await yandexMainPage.get();
      await yandexMainPage.getPageLocation();
      await yandexLocation.clearInput();
      await yandexLocation.setCity('Лондон');
      await yandexLocation.waitForAutocopleteLondon();
      await yandexLocation.selectCity();
      await yandexMainPage.waitForElse();
      await yandexMainPage.elseClick();
      await yandexMainPage.getMatchLinkLondon();
      await yandexMainPage.getPageLocation();
      await yandexLocation.clearInput();
      await yandexLocation.setCity('Париж');
      await yandexLocation.waitForAutocopleteParis();
      await yandexLocation.selectCity();
      await yandexMainPage.waitForElse();
      await yandexMainPage.elseClick();
      await yandexMainPage.getMatchLinkParis();
      expect(yandexMainPage.getMatchLinkLondon()).toEqual(yandexMainPage.getMatchLinkParis());
  });
});
