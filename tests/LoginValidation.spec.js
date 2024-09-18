// LoginFeatureValidation.test.js
const { test, expect } = require('@playwright/test');

test.describe('Login Feature Validation', () => {
const testData = require('../dataSet/testData.json');

    test('Valid Login', async ({ page }) => {
    await page.goto(testData.pageLogin, { waitUntil: 'networkidle' });

    await page.fill('input[id="loginEmail"]', testData.username);
    await page.fill('input[id="loginPass"]', testData.password);
    await page.click('button[id="btSignIn"]');

    // Assert login is successful and is home page
    await expect(page).toHaveURL(testData.homePage);
    });
  

    test('Invalid Login - Wrong Password', async ({ page }) => {

    await page.goto(testData.pageLogin, { waitUntil: 'networkidle' });
  
    await page.fill('input[id="loginEmail"]', testData.invalidUsername);
    await page.fill('input[id="loginPass"]', testData.invalidPassword);
    await page.click('button[id="btSignIn"]');
  
    // Assert error message  
    await expect(page.getByRole('banner')).toBeVisible();
    await expect(page.getByText(testData.errorMessage)).toContainText(testData.errorMessage);
  });
  
});



