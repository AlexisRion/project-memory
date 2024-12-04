export function usernameValidator(username) {
    const usernameRegex = /^[a-zA-Z]{3,}$/;
    return usernameRegex.test(username);
}

export function emailValidator(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function passwordValidator(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^_&*])(?=.{6,})/;
    return passwordRegex.test(password);
}

export function confirmPasswordValidator(confirmPassword, password) {
    if (confirmPassword === password) {
        return true
    }
}