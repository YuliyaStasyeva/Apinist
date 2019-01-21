let variables={
    cityInput:element(by.css('#city__front-input')),
    selectInput:element(by.css('li:nth-child(1).b-autocomplete-item')),
   };
let waitAutocomplete=require ('./waiters');
class YandexLocation {
	async clearInput() {
		  await variables.cityInput.clear();
	};
	async setCity(city) {
          await variables.cityInput.sendKeys(city);
	};
    async selectCity(country) {
          await waitAutocomplete.waitForPresentTextInElement(variables.selectInput,country);
          await variables.selectInput.click();
    };
    };
module.exports=new YandexLocation();
