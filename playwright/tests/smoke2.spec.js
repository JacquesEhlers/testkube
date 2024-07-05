// @ts-check
const { test, expect } = require('@playwright/test');

test('Smoke 2 - has title and handles sign-in popup', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://ndp.nintex.com/');

  // Check if the page has the expected title
  await expect(page).toHaveTitle(/NDP - Nintex Developer Portal/);

  // Click on the SIGN IN button
  const [popup] = await Promise.all([
    context.waitForEvent('page'),
    page.click('text=Sing In') // Adjust the selector as necessary
  ]);

  // Wait for the popup to load
  await popup.waitForLoadState('domcontentloaded');

  // Interact with the popup
  await popup.fill('input[name="loginfmt"]', 'your-email@example.com'); // Adjust selector and fill value as necessary
  await popup.click('input[type="submit"]');

  // Add more interactions as needed
});
