"use strict";

const { go, resize, click, test, l, Locator } = require('testim');



Locator.set(require('./locators/locators.js'));

test("yad2 - test", async () => {
  await go("https://www.yad2.co.il/");
  await resize({width: 1024, height: 680});
  await click(l("[class^='width'],_[class*='_width']"));
  await click(l("_"));
  await click(l("[data-test-id='desktop_datalist_man"));
  await click(l("[placeholder='_']"));
  await click(l("C-HR"));
  await click(l("[placeholder='']"));
  await click(l("2018"));
  await click(l("[placeholder='_']"));
  await click(l("2019"));
  await click(l("___________.________.__"));
  await click(l(".tooltip_button"));
  await click(l("[data-test-id='searchButton']_.butt"));
  await click(l("[id='price_only']_span"));
  await click(l("[class$='img'],_[class*='img_']"));
  await click(l("_C-HR"));
  await click(l("[class$='phone_signal'],_[class*='p"));

}); // end of test
