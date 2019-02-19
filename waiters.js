let EC=protractor.ExpectedConditions;
class Waiters {
    async waitForElementIsVisible(element) {
        await browser.wait(EC.visibilityOf(element), 5000);
	};
	async waitForPageLoad(part) {
    	  await browser.wait(EC.urlContains(part), 5000);
    };
};
module.exports=new Waiters();