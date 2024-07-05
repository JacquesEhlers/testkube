// @ts-check
const { test, expect } = require('@playwright/test');

test('Smoke 2 - has title', async ({ page }) => {
  await page.goto('https://ndp.platform.nintextest.io/');

  await expect(page).toHaveTitle(/NDP - Nintex Developer Portal/);

  // Click on the SIGN IN button
  await page.click('text=Sign In'); // or use the appropriate selector for the SIGN IN button

  // Optionally, you can add an assertion to verify that the click action led to the expected result
  // For example, you might expect the URL to change or a specific element to appear
  // await expect(page).toHaveURL(/login/); // Adjust this as per the actual URL or element change

});
