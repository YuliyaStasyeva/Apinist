var arrowLink=element(by.css('div.geolink__button_size_s'));
var elseLink=element(by.css('a.home-link.dropdown2__switcher'));
var getCityArray=element.all(by.css('a.home-tabs__more-link'));
class YandexMainPage {
	async get() {
		  await browser.waitForAngularEnabled(false);
		  await browser.get('https://yandex.by/');
	};
	async getPageLocation() {
		  await arrowLink.click();
	};
	async elseClick() {
          var EC=protractor.ExpectedConditions;
          await browser.wait(EC.presenceOf(elseLink), 10000);
          await elseLink.click();
	};
	async getMatchLinkLondon() {
		  var londonList=await getCityArray.getText();
		  return londonList;
        };
    async getMatchLinkParis() {
          var parisList=await getCityArray.getText();
          return parisList;
};
};
module.exports= new YandexMainPage();
