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

export function passwordStrength() {
    let code = document.getElementById("password");
    let strengthbar = document.getElementById("meter");

    code.addEventListener("cut", function() {
    checkpassword(code.value);
    });
    code.addEventListener("keyup", function() {
    checkpassword(code.value);
    });


    function checkpassword(password) {
        let strength = 0;
        if (password.match(/[0-9]+/)) {
            strength += 1;
        }
        if (password.match(/[$@#&!]+/)) {
            strength += 1;
        }

        if (password.length > 5) {
            switch (strength) {
            case 0:
                strengthbar.value = 33;
                break;

            default:
                strengthbar.value = 66;
                break;
            }
        }

        if (password.length > 8) {
            switch (strength) {
            case 0:
                strengthbar.value = 33;
                break;
            case 2:
                strengthbar.value = 100;
                break;    
            default:
                strengthbar.value = 66;
                break;
            }
        } 
        
        if (password.length < 6 || password.length === 0) {
            strengthbar.value = 0
        }
    }
}