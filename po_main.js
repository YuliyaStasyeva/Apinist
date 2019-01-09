let arrowLink=element(by.css('div.geolink__button_size_s'));
let elseLink=element(by.css('a.home-link.dropdown2__switcher'));
let getCityArray=element.all(by.css('a.home-tabs__more-link'));
class YandexMainPage {
	async get() {
		  await browser.waitForAngularEnabled(false);
		  await browser.get('https://yandex.by/');
	};
	async getPageLocation() {
		  await arrowLink.click();
	};
	async elseClick() {
          await elseLink.click();
	};
	async getMatchLinkLondon() {
		  let londonList=await getCityArray.getText();
		  return londonList;
	};
    async getMatchLinkParis() {
          let parisList=await getCityArray.getText();
          return parisList;
    };
    async waitForElse() {
    	  let EC=protractor.ExpectedConditions;
          await browser.wait(EC.visibilityOf(elseLink), 5000);
    }
};
module.exports= new YandexMainPage();

