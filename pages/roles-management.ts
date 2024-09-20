import { Locator, Page, expect } from "@playwright/test";

export class RolesManagement {

 readonly page: Page;
 readonly adminMenuBtn: Locator;
 readonly rolesBtn: Locator;
 readonly cloneRoleBtn: Locator;
 readonly roleList: Locator;
 readonly titleTxt: Locator;

    constructor(page: Page) {
        this.page = page;
        this.adminMenuBtn = page.locator('//*[@id="menu.administration"]/a/span');
        this.rolesBtn = page.getByLabel('Roles');
        this.cloneRoleBtn = page.getByTestId('roles-button-clone');
        this.roleList = page.locator('a');
        this.titleTxt = page.locator("[class='panel__title']");
    }

    async validateClonedRole(page, roleName: string) {
        const banner = page.locator('[class="toast__title"]');

        // Wait for the banner to be visible
        await banner.waitFor({ state: 'visible' });

        // Get the text content of the banner
        const bannerText = await banner.textContent();

        // Check the banner text and assert accordingly
        if (bannerText.includes('Well done!')) {
        // Assert success
        console.log('Success: Banner displays "Well done!"');
        await expect(banner).toHaveText('Well done!'); 
        } else {
        // Assert failure
        await expect(banner).toHaveText('Ooops!'); 
        }

    }
      
}