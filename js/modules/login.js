function check() {

    // stored data from the register-form
    const storedName = localStorage.getItem('username');
    const storedPw = localStorage.getItem('password');

    // entered data from the login-form
    const username = document.getElementById('username');
    const userPw = document.getElementById('password');

    // check if stored data from register-form is equal to data from login form
    if(username.value === storedName && userPw.value === storedPw) {
        alert('You are loged in.');
    }else {
        alert('ERROR.');
    }
}