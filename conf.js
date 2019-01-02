exports.config = {
  directConnect: true,
  SELENIUM_PROMISE_MANAGER: false, 
  framework: 'jasmine',
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test_script.js'],
  
  capabilities:   {    browserName: 'chrome'  },
  jasmineNodeOpts:   {	  defaultTimeoutInterval: 300000	  },
  
}