// @ts-check
const { test, expect } = require('@playwright/test');

test('Smoke 2 - has title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await expect(page).toHaveTitle(/Swag Labs/);

  await page.fill('input#user-name', "$USERNAME");

  const value = await page.inputValue('input#user-name');
  expect(value).toBe('sheep');

  await page.fill('input#password', "$PASSWORD");

  const value = await page.inputValue('input#password');
  expect(value).toBe('sheeper');


  // // Sleep for 60 seconds
  // await new Promise(resolve => setTimeout(resolve, 6000000));
});
