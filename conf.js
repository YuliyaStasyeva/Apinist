exports.config = {
  directConnect: true,
  SELENIUM_PROMISE_MANAGER: false, 
  framework: 'jasmine',

  specs: ['test.js'],
  capabilities:   {browserName: 'chrome'},
  jasmineNodeOpts:   {defaultTimeoutInterval: 100000},
  }