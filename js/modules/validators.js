export function emailValidator(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function passwordValidator(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^_&*])(?=.{8,})/;
    return passwordRegex.test(password);
}

export function dateValidator(date) {
    // Convert to JS Date
    const birthDate = new Date(date);
    // Get Today
    const currentDate = new Date();
    // Only past date
    return birthDate && birthDate < currentDate;
}

export function systemValidator(system) {
    const validSystems = ['Windob', 'Mac', 'Linux'];
    return validSystems.includes(system);
}

export function numberValidator(number) {
    return number !== '' && !isNaN(number);
}