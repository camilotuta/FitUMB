//cSpell:ignore igno redirección ÁÉÍÓ Úáéíóú
// Botones de redirección
const registerButton = document.querySelector(".register");
registerButton.addEventListener("click", () => {
  window.location.href = "registro.html";
});

const loginButton = document.querySelector(".login");
loginButton.addEventListener("click", () => {
  window.location.href = "login.html";
});

document.addEventListener("DOMContentLoaded", () => {
  // Elementos del formulario
  const nombresInput = document.getElementById("nombres");
  const apellidosInput = document.getElementById("apellidos");
  const emailInput = document.getElementById("email");
  const emailDiv = document.getElementById("email-div");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");
  const objetivoSelect = document.getElementById("objetivo");
  const submitButton = document.querySelector(".submit-btn");
  const form = document.querySelector(".register-form");

  // Crear contenedores de mensajes de error
  const nombresError = crearError(nombresInput);
  const apellidosError = crearError(apellidosInput);
  const emailError = crearError(emailDiv);
  const passwordError = crearError(passwordInput);
  const confirmPasswordError = crearError(confirmPasswordInput);
  const objetivoError = crearError(objetivoSelect);

  // Evento de envío del formulario
  form.addEventListener("submit", (event) => {
    event.preventDefault();
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
      emailError.textContent =
        "Por favor, ingresa un correo válido (ejemplo@dominio.com).";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    // Validación de contraseña
    if (!validatePassword(passwordInput.value)) {
      passwordError.textContent =
        "La contraseña debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas, números y caracteres especiales.";
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

    // Validación de objetivo
    if (!validateObjective(objetivoSelect.value)) {
      objetivoError.textContent = "Por favor, selecciona un objetivo.";
      isValid = false;
    } else {
      objetivoError.textContent = "";
    }

    // Redirigir si el formulario es válido
    if (isValid) {
      alert("Registro exitoso!");
      window.location.href = "login/";
    }
  });

  // Funciones de validación
  function validateName(name) {
    const namePattern = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return namePattern.test(name) && name.trim().length > 0;
  }

  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailPattern.test(email);
  }

  function validatePassword(password) {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.,_-])[A-Za-z\d@$!%*?&.,_-]{8,}$/;
    return passwordPattern.test(password);
  }

  function validateObjective(objetivo) {
    return objetivo !== "seleccionar";
  }

  // Función para crear contenedores de mensajes de error
  function crearError(elemento) {
    const errorElement = document.createElement("p");
    errorElement.className = "error-message";
    elemento.parentNode.appendChild(errorElement);
    return errorElement;
  }
});