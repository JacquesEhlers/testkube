// @ts-check
const { test, expect } = require('@playwright/test');

test('Smoke 2 - has title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await expect(page).toHaveTitle(/Swag Labs/);

  await page.fill('input#user-name', 'standard_user');

  const value = await page.inputValue('input#user-name');
  expect(value).toBe('standard_user');

  // Sleep for 60 seconds
  await new Promise(resolve => setTimeout(resolve, 6000000));
});
