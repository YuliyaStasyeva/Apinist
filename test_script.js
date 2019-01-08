var yandexMainPage= require ('./po_main');
var yandexLocation = require ('./po_location')
describe('match tab', function() {
	  it('should match for London and Paris', async function() {
      await yandexMainPage.get();
      await yandexMainPage.getPageLocation();
      await yandexLocation.clearInput();
      await yandexLocation.setCity('Лондон');
      await yandexLocation.selectCity();
      await yandexMainPage.elseClick();
      await yandexMainPage.getMatchLinkLondon();
      await yandexMainPage.getPageLocation();
      await yandexLocation.clearInput();
      await yandexLocation.setCity('Париж');
      await yandexLocation.selectCity();
      await yandexMainPage.elseClick();
      await yandexMainPage.getMatchLinkParis();
      expect(yandexMainPage.getMatchLinkLondon()).toEqual(yandexMainPage.getMatchLinkParis());
  });
});