
var arrowLink = element(by.css('body > div.container.rows > div.row.rows__row.rows__row_first > div > div.container.headline > div > div.col.headline__item.headline__leftcorner > a > div'));
var elseLink = element(by.xpath('/html/body/div[1]/div[3]/div[2]/div[2]/div/div[2]/div/div[1]/div/a[8]'));
var getCityArray = element.all(by.css('a.home-tabs__more-link'));
	
class YandexMainPage {
	
	
	async get  () {
		await browser.waitForAngularEnabled(false);
		await browser.get('https://yandex.by/');
	};
	
	async getPageLocation() {
		await arrowLink.click();
	};
	async elseClick () {
		await elseLink.click();
	};

	
	async getMatchLinkLondon () {
		var lo =await getCityArray.getText();
		return lo;
        };

    async getMatchLinkParis () {
    var pa =await getCityArray.getText();
    return pa;
};
};






module.exports= new YandexMainPage();
