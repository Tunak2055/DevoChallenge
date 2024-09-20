import { Locator, Page } from "@playwright/test";

export class LoginPage {

 readonly page: Page;
 readonly inputEmail: Locator;
 readonly inputPassword: Locator;
 readonly btnSignIn: Locator;
 readonly homeHeading: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inputEmail = page.locator('input[id="loginEmail"]');
        this.inputPassword = page.locator('input[id="loginPass"]');
        this.btnSignIn = page.locator('button[id="btSignIn"]');
        this.homeHeading = page.getByTestId('undefined__heading');
    }
}