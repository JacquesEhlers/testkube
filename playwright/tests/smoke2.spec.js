// @ts-check
const { test, expect } = require('@playwright/test');

test('Smoke 2 - has title', async ({ page }) => {
  await page.goto('https://ndp.platform.nintextest.io/');

  await expect(page).toHaveTitle(/NDP - Nintex Developer Portal/);
});
