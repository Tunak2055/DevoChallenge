const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login-page.ts');
require('dotenv').config({ path: '.env.test' });

test.describe('Login Feature Validation', () => {
    const testData = require('../dataSet/testData.json');
    const username = process.env.APP_USERNAME;
    const password = process.env.APP_UPASSWORD;

    test('Valid Login', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await test.step('Navigate to Login Page', async () => {
            await page.goto(testData.pageLogin, { waitUntil: 'networkidle' });
        });

        await test.step('Fill in Login Credentials', async () => {
            await loginPage.inputEmail.fill(username);
            await loginPage.inputPassword.fill(password);
            await loginPage.btnSignIn.click();
        });

        await test.step('Assert Successful Login', async () => {
            await page.waitForTimeout(5000);
            await expect(loginPage.homeHeading).toHaveText('Home', { timeout: 10000 });
            await expect(page).toHaveURL(testData.homePage);
        });
    });

    test('Invalid Login - Wrong Username and Password', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await test.step('Navigate to Login Page', async () => {
            await page.goto(testData.pageLogin, { waitUntil: 'networkidle' });
        });

        await test.step('Fill in Invalid Credentials', async () => {
            await loginPage.inputEmail.fill(testData.invalidUsername);
            await loginPage.inputPassword.fill(testData.invalidPassword);
            await loginPage.btnSignIn.click();
        });

        await test.step('Assert Error Message', async () => {
            await expect(page.getByRole('banner')).toBeVisible();
            await expect(page.getByText(testData.errorMessage)).toContainText(testData.errorMessage);
        });
    });
});
