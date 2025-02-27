import { 
    emailValidator, 
    passwordValidator,
    confirmPasswordValidator,
    usernameValidator,
    passwordStrength,
    newUserCheckEmail,
    newUserCheckName
} from './modules/validators.js';
import { saveToLocalStorage } from './modules/storage.js';
import { displayFieldError, clearFieldErrors } from './modules/errorDisplay.js';
import { playAudio } from "./modules/soundPlayer.js";
function handleSubmit(event) {
    event.preventDefault();
    // Remove Old Errors
    clearFieldErrors();

    // Get Datas
    const formData = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        confirmPassword: document.getElementById('confirmPassword').value
    };

    // Track Error
    let hasError = false;

    // Validations Tests
    if (!usernameValidator(formData.username)) {
        displayFieldError('username', "Nom d'utilisateur invalide");
        hasError = true;
    }

    if (!emailValidator(formData.email)) {
        displayFieldError('email', "Email invalide");
        hasError = true;
    }

    if (!passwordValidator(formData.password)) {
        displayFieldError('password', "Le mot de passe doit contenir au moins 6 caractères, une majuscule, une minuscule , un chiffre et un caractère spécial");
        hasError = true;
    }


    if (!confirmPasswordValidator(formData.confirmPassword, formData.password)) {
        displayFieldError('confirmPassword', "Le mot de passe doit être identique");
        hasError = true;
    }

    if (newUserCheckName(formData.username)) {
        displayFieldError('username', "Utilisateur déjà existant")
        hasError = true
    }

    if (newUserCheckEmail(formData.email)) {
        displayFieldError('email', "Utilisateur déjà existant")
        hasError = true
    }

    // Check Errors match
    if (hasError) {
        playAudio(errorSound)
        return;
    }

    // Save Process
    saveToLocalStorage(formData);
    alert('Inscription réussie !');
    window.location.replace("../project-memory/login.html")
    event.currentTarget.reset();
}

document.getElementById('userForm').addEventListener('submit', handleSubmit);
document.getElementById('password').addEventListener('focus', passwordStrength)