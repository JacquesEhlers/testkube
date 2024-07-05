// @ts-check
const { test, expect } = require('@playwright/test');

test('Smoke 2 - has title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com//');

  await expect(page).toHaveTitle(/Swag Labs/);

  await page.fill('input#user-name', 'whatever@what.com');

  const value = await page.inputValue('input#user-name');
  expect(value).toBe('whatever@what.com');

});
