import { test, expect } from '../fixtures/baseTest';
import { TestUsers, ErrorMessages } from '../utils/testData';

test.describe('Login functionality', () => {

    test('should login successfully with valid credentials',
        async ({ loginPage, page }) => {
            await loginPage.login(
                TestUsers.validUser.username,
                TestUsers.validUser.password
            );
            const loggedIn = await loginPage.isLoggedIn();
            expect(loggedIn).toBe(true);
        }
    );

    test('should show error for invalid password',
        async ({ loginPage }) => {
            await loginPage.login(
                TestUsers.validUser.username,
                TestUsers.invalidUser.password
            );
            const error = await loginPage.getErrorMessage();
            expect(error).toContain(ErrorMessages.invalidCredentials);
        }
    );

    test('should show error for invalid userName',
        async ({ loginPage }) => {
            await loginPage.login(
                TestUsers.invalidUser.username,
                TestUsers.validUser.password
            );
            const error = await loginPage.getErrorMessage();
            expect(error).toContain(ErrorMessages.invalidCredentials);
        }
    );

    test('should show error for locked out user',
        async ({ loginPage }) => {
            await loginPage.login(
                TestUsers.lockedUser.username,
                TestUsers.lockedUser.password
            );
            const error = await loginPage.getErrorMessage();
            expect(error).toContain(ErrorMessages.lockedOut);
        }
    );

    test('should show error when username is empty',
        async ({ loginPage }) => {
            await loginPage.login('', TestUsers.validUser.password);
            const error = await loginPage.getErrorMessage();
            expect(error).toContain(ErrorMessages.emptyUsername);
        }
    );

});