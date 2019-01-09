let cityInput=element(by.css('#city__front-input'));
let selectInput=element(by.css('ul>li:nth-child(1).b-autocomplete-item'));
class YandexLocation {
	async clearInput() {
		  await cityInput.clear();
	};
	async setCity(city) {
          await cityInput.sendKeys(city);
	};
    async selectCity() {
          await selectInput.click();
    };
    async waitForAutocopleteParis() {
          let EC=protractor.ExpectedConditions;
          await browser.wait(EC.textToBePresentInElement(selectInput, "Париж"), 5000);
	};
    async waitForAutocopleteLondon() {
          let EC=protractor.ExpectedConditions;
          await browser.wait(EC.textToBePresentInElement(selectInput, "Лондон"), 5000);
    };
};
module.exports=new YandexLocation();
