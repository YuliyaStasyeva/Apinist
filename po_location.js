var cityInput= element(by.css('#city__front-input'));
var selectInput= element(by.css('body > div.popup.popup_animate_no.popup_theme_ffffff.popup_autoclosable_yes.popup_adaptive_yes.input__popup.input__popup_type_geo.input__popup_fade_yes.i-bem.popup_js_inited.popup_to_bottom.popup_visibility_visible > div.popup__content > ul > li:nth-child(1) > div.b-autocomplete-item__reg'));


class YandexLocation {
	
	
	async clearInput() {
		await cityInput.clear();
	};
	async setCity (city) {
		await cityInput.sendKeys(city);		
		};
	async selectCity(){

		await selectInput.click();
};
};
module.exports=new YandexLocation();