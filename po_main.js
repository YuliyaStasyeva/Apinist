let variables={
	arrowLink:element(by.css('div.geolink__button_size_s')),
    elseLink:element(by.css('a.home-link.dropdown2__switcher')),
    getCityArray:element.all(by.css('a.home-tabs__more-link'))
};
let waitLink=require ('./waiters');
class YandexMainPage {
	async get() {
		  await browser.waitForAngularEnabled(false);
		  await browser.get('https://yandex.by/');
	};
	async getPageLocation() {
		  await variables.arrowLink.click();
	};
	async elseClick() {
		await  waitLink.waitForElse(variables.elseLink);
          await variables.elseLink.click();
	};
	async getMatchLinkLondon() {
		  let londonList=await variables.getCityArray.getText();
		  return londonList;
	};
    async getMatchLinkParis() {
          let parisList=await variables.getCityArray.getText();
          return parisList;
    };
};
module.exports= new YandexMainPage();

