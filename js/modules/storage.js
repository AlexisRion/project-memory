export function saveToLocalStorage(userData) {
    // Get [users] or []
    const users = JSON.parse(localStorage.getItem('userData')) ?? []
    users.push(userData)
    // Update
    localStorage.setItem('userData', JSON.stringify(users));
}