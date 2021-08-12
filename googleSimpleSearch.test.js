'use strict';


const { go, text, test, l, Locator, resize, click, type } = require('testim');


const { expect } = require('chai');
Locator.set(require('./locators/locators.js'));

test('My first text validation', async () => {
  await go('google.com');
  await resize({
    width: 1024,
    height: 768,
  });
  await type('.gLFyf', 'car');
  await click('.gNO89b');
});
