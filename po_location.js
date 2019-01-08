var cityInput=element(by.css('#city__front-input'));
var selectInput=element(by.css('ul>li:nth-child(1).b-autocomplete-item'));
class YandexLocation {
	async clearInput() {
		  await cityInput.clear();
	};
	async setCity(city) {
          await cityInput.sendKeys(city);
	};
    async selectCity() {
          var EC=protractor.ExpectedConditions;
          await browser.wait(EC.visibilityOf(selectInput, 10000));
		  await selectInput.click();
    };
};
module.exports=new YandexLocation();