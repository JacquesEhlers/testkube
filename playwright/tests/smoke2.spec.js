// @ts-check
const { test, expect } = require('@playwright/test');

test('Smoke 2 - has title', async ({ page }) => {
  await page.goto('https://testing-playground.com//');

  await expect(page).toHaveTitle(/Testing Playground/);

  await page.fill('input#email"]', 'whatever@what.com');

  const value = await page.inputValue('input#email');
  expect(value).toBe('whatever@what.com');

});
