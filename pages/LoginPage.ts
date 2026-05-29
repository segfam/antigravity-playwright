import { Page } from '@playwright/test';
import { LoginLocators } from '../locators/loginLocators';
export class LoginPage {
    constructor(private page: Page) { }
    async goto() {
        await this.page.goto('/')
    }
    async fillUsername(username: string) {
        await this.page
            .locator(LoginLocators.usernameInput)
            .fill(username);
    }
    async fillPassword(password: string) {
        await this.page
            .locator(LoginLocators.passwordInput)
            .fill(password);
    }
    async clickLogin() {
        await this.page
            .locator(LoginLocators.loginButton)
            .click();
    }
    async login(username: string, password: string) {
        await this.goto();
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.clickLogin();
    }

    async getErrorMessage(): Promise<string> {
        return this.page
            .locator(LoginLocators.errorMessage)
            .innerText();
    }
    async isLoggedIn(): Promise<boolean> {
        return this.page
            .locator(LoginLocators.welcomeHeader)
            .isVisible();
    }
}