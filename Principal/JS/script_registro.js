
const registerButton = document.querySelector('.register');
registerButton.addEventListener('click', () => {
    window.location.href = 'registro.html';
});

// Redireccion a login
const loginButton = document.querySelector('.login');
loginButton.addEventListener('click', () => {
    window.location.href = 'login.html';
});


document.addEventListener("DOMContentLoaded", () => {
    const nombresInput = document.getElementById("nombres");
    const apellidosInput = document.getElementById("apellidos");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const submitButton = document.querySelector(".submit-btn");
    const form = document.querySelector(".register-form");

    // Crear contenedores de mensajes de error
    const nombresError = document.createElement("p");
    nombresError.className = "error-message";
    nombresInput.parentNode.appendChild(nombresError);

    const apellidosError = document.createElement("p");
    apellidosError.className = "error-message";
    apellidosInput.parentNode.appendChild(apellidosError);

    const emailError = document.createElement("p");
    emailError.className = "error-message";
    emailInput.parentNode.appendChild(emailError);

    const passwordError = document.createElement("p");
    passwordError.className = "error-message";
    passwordInput.parentNode.appendChild(passwordError);

    const confirmPasswordError = document.createElement("p");
    confirmPasswordError.className = "error-message";
    confirmPasswordInput.parentNode.appendChild(confirmPasswordError);

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevenir el envío del formulario

        let isValid = true;

        // Validación de nombres
        if (!validateName(nombresInput.value)) {
            nombresError.textContent = "Por favor, ingresa un nombre válido.";
            isValid = false;
        } else {
            nombresError.textContent = "";
        }

        // Validación de apellidos
        if (!validateName(apellidosInput.value)) {
            apellidosError.textContent = "Por favor, ingresa un apellido válido.";
            isValid = false;
        } else {
            apellidosError.textContent = "";
        }

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

        // Validación de confirmación de contraseña
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordError.textContent = "Las contraseñas no coinciden.";
            isValid = false;
        } else {
            confirmPasswordError.textContent = "";
        }

        // Redirigir si el formulario es válido
        if (isValid) {
            window.location.href = 'login.html';
        }
    });

    // Función para validar nombres y apellidos (solo letras)
    function validateName(name) {
        const namePattern = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
        return namePattern.test(name);
    }
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
