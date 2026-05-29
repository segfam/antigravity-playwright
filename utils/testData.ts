// Central place for all test credentials and data
// In a real project these come from env vars or test-data/users.json

export const TestUsers = {
    validUser: {
        username: 'standard_user',
        password: 'secret_sauce',
    },
    lockedUser: {
        username: 'locked_out_user',
        password: 'secret_sauce',
    },
    invalidUser: {
        username: 'wrong_user',
        password: 'wrong_pass',
    },
};

export const ErrorMessages = {
    invalidCredentials: 'Username and password do not match',
    lockedOut: 'Sorry, this user has been locked out',
    emptyUsername: 'Username is required',
    emptyPassword: 'Password is required',
};