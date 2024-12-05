function checkUserLogin() {

    // stored data from the register-form
    const userData = JSON.parse(localStorage.getItem('userData'));

    // entered data from the login-form
    const username = document.getElementById('username');
    const userPw = document.getElementById('password');

    // check if stored data from register-form is equal to data from login form
    let storedName = userData[0].username
    let storedPw 
    
    for (const element of userData) {
        storedName = element.username
        storedPw = element.password
        if(username.value === storedName && userPw.value === storedPw) {
            //export const rightName = storedName
            alert('You are logged in.');
            window.location.replace("../project-memory/profile.html")
        }
    }
}

function handleSubmit(event) {
    event.preventDefault();

    checkUserLogin()
}

document.getElementById('userForm').addEventListener('submit', handleSubmit);