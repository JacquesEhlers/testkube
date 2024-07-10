// @ts-check
const { test, expect } = require('@playwright/test');

test('Smoke 2 - has title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await expect(page).toHaveTitle(/Swag Labs/);

  await page.fill('input#user-name', "$USERNAME");

  const username = await page.inputValue('input#user-name');
  expect(username).toBe('sheep');

  await page.fill('input#password', "$PASSWORD");

  const password = await page.inputValue('input#password');
  expect(password).toBe('sheeper');


  // // Sleep for 60 seconds
  // await new Promise(resolve => setTimeout(resolve, 6000000));
});
