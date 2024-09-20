const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login-page.ts');
const { RolesManagement } = require('../pages/roles-management');
require('dotenv').config({ path: '.env.test' });


test.describe('Clone Role Feature Validation', () => {
    const testData = require('../dataSet/testData.json');
    const username = process.env.APP_USERNAME;
    const password = process.env.APP_UPASSWORD;

    test('Clone Role Functionality', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const rolesManagement = new RolesManagement(page);
        const roleName = "Admin"; // ,"TestAdmin","No privileges"

        await test.step('Navigate to Home Page', async () => {
            await page.goto(testData.homePage, { waitUntil: 'networkidle' });
        });

        await test.step('Login with valid credentials', async () => {
            await loginPage.inputEmail.fill(username);
            await loginPage.inputPassword.fill(password);
            await loginPage.btnSignIn.click();
        });

        await test.step('Assert is on the Home Page', async () => {
            await expect(page).toHaveURL(testData.homePage, { timeout: 10000 });
        });

        await test.step('Access Roles Management', async () => {
            await rolesManagement.adminMenuBtn.click();
            await rolesManagement.rolesBtn.click();
            await rolesManagement.titleTxt.click();
        });

        await test.step('Assert is on the Administration Roles Page', async () => {
            await expect(page).toHaveURL(testData.AdminRolesPage, { timeout: 1000 });
        });

        await test.step('Select Role to Clone', async () => {
            await rolesManagement.roleList.filter({ hasText: roleName }).first().click();
        });

        await test.step('Clone the Role', async () => {
            await rolesManagement.cloneRoleBtn.click();
        });

        await test.step('Validate Cloned Role', async () => {
            await rolesManagement.validateClonedRole(page, roleName);
        });
    });
});
