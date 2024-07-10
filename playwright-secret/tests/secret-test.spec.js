// @ts-check
const { test, expect } = require('@playwright/test');

test('Smoke 2 - has title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await expect(page).toHaveTitle(/Swag Labs/);

  // Use environment variables set at the container level
  const username = process.env.USERNAME;
  const password = process.env.PASSWORD;

  await page.fill('input#user-name', username);

  const inputUsername = await page.inputValue('input#user-name');
  expect(inputUsername).toBe('sheep');

  await page.fill('input#password', password);

  const inputPassword = await page.inputValue('input#password');
  expect(inputPassword).toBe('sheeper');

  // // Sleep for 60 seconds
  // await new Promise(resolve => setTimeout(resolve, 60000));
});
