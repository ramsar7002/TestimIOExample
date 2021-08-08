"use strict";

const { go, resize, click, type, waitForText, test, l, Locator } = require('testim');

Locator.set(require('./locators/locators.js'));

test('untitled test', async () => {
  await go("http://demo.testim.io");
  await resize({
    width: 1024, 
    height: 680
  });
  await click(l("LOG_IN"));
  await type(l("[tabindex='1']"), 'john@yourapp.com');
  await click(l("[type='password']"));
  await type(l("[type='password']"), 'hau@8f!@#hD');
  await click(l("[form='login']"));
  await waitForText(l("HELLO,_JOHN"), 'Hello, John');

}); // end of test
