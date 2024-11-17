// Redirección a registro
const registerButton = document.querySelector('.register');
registerButton.addEventListener('click', () => {
    window.location.href = 'registro.html';
});

// Redirección a login
const loginButton = document.querySelector('.login');
loginButton.addEventListener('click', () => {
    window.location.href = 'login.html';
});

document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const submitButton = document.querySelector(".submit-btn");
    const form = document.querySelector(".login-form");

    // Crear contenedores de mensajes de error
    const emailError = document.createElement("p");
    emailError.className = "error-message";
    emailInput.parentNode.appendChild(emailError);

    const passwordError = document.createElement("p");
    passwordError.className = "error-message";
    passwordInput.parentNode.appendChild(passwordError);

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevenir el envío del formulario

        let isValid = true;

        // Validación de correo
        if (!validateEmail(emailInput.value)) {
            emailError.textContent = "Por favor, ingresa un correo válido (ejemplo@dominio.com).";
            isValid = false;
        } else {
            emailError.textContent = "";
        }

        // Validación de contraseña
        if (!validatePassword(passwordInput.value)) {
            passwordError.textContent = "La contraseña debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas, números y caracteres especiales.";
            isValid = false;
        } else {
            passwordError.textContent = "";
        }

        // Redirigir si el formulario es válido
        if (isValid) {
            window.location.href = 'nutricion/';
        }
    });

    // Función para validar el correo
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        return emailPattern.test(email);
    }

    // Función para validar la contraseña
    function validatePassword(password) {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.,_-])[A-Za-z\d@$!%*?&.,_-]{8,}$/;
        return passwordPattern.test(password);
    }

});
