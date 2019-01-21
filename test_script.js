const yandexMainPage= require ('./po_main');
const yandexLocation = require ('./po_location');
const waiters = require ('./waiters');
describe('match tab', function() {
	  it('should match for London and Paris', async function() {
      await yandexMainPage.get();
      await yandexMainPage.getPageLocation();
      await yandexLocation.clearInput();
      await yandexLocation.setCity('Лондон');
      await yandexLocation.selectCity('Великобритания');
      await yandexMainPage.elseClick();
      await yandexMainPage.getMatchLinkLondon();
      await yandexMainPage.getPageLocation();
      await yandexLocation.clearInput();
      await yandexLocation.setCity('Париж');
      await yandexLocation.selectCity('Франция');
      await yandexMainPage.elseClick();
      await yandexMainPage.getMatchLinkParis();
      expect(yandexMainPage.getMatchLinkLondon()).toEqual(yandexMainPage.getMatchLinkParis());
  });
});
