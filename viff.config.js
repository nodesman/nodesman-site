// build_prod.config.js
'use strict'

module.exports = {
  seleniumHost: 'http://localhost:4444/wd/hub',
  browsers: ['firefox'/*, 'chrome', 'safari', 'opera'*/],
  envHosts: {
    build: 'http://localhost:4000',
    prod: 'http://www.ishouldbeageek.me'
  },
  paths: [
    '/404.html',
    '/',
    '/page2',
    '/page3',
    '/page4',
    '/page5',
    '/strict-mode',
    ['/', function clickLink(browser) {
      // need to return a promise
      return browser.elementByPartialLinkText('viff').click();
    }],
    ['/', '#main-content'/*, function (browser) { } */],
    { 'this is a testcase description' : ['/', '#main-content', function(browser) {
      return browser.maximize();
    }]}
  ],
  maxInstance: 3
};
