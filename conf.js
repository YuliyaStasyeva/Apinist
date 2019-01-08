exports.config = {
  directConnect: true,
  SELENIUM_PROMISE_MANAGER: false, 
  framework: 'jasmine',
  specs: ['test_script.js'],
  capabilities:   {browserName: 'chrome'},
  jasmineNodeOpts:   {defaultTimeoutInterval: 300000},
  }