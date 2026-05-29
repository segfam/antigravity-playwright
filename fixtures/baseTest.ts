import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

// Extend the base test with pre-built page objects
// Every test gets loginPage for free — no manual instantiation
type MyFixtures = {
    loginPage: LoginPage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
});

export { expect } from '@playwright/test';