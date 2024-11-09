// cSpell:ignore codigo redireccion verificacion ÁÉÍÓ Úáéíóú vprm xbsn
import emailjs from "../@emailjs/browser";

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
  const codigoVerificacionInput = document.getElementById(
    "codigo-verificacion"
  );
  const codigoVerificacionDiv = document.getElementById(
    "codigo-verificacion-div"
  );
  const submitButton = document.querySelector(".submit-btn");
  const form = document.querySelector(".register-form");
  const enviarCodigoButton = document.getElementById("btn-enviar-codigo");
  const verificarCodigoButton = document.getElementById("btn-verificar-codigo");

  let verificationCode = "";

  // Inicializar emailjs con manejo de errores
  emailjs
    .init({
      publicKey: "vzW7xbsnXJCwSe8_6", // Reemplaza con tu Public Key real
      blockHeadless: false,
      limitRate: {
        throttle: 10000, // 10s entre envíos
      },
    })
    .then(function () {
      console.log("EmailJS inicializado correctamente");
    })
    .catch(function (error) {
      console.error("Error al inicializar EmailJS:", error);
    });

  // Genera un código aleatorio de 6 dígitos
  function generateVerificationCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  // Función mejorada para enviar el correo de verificación
  function enviarCorreo(codigo) {
    console.log("Iniciando envío de correo...");

    emailjs.send("service_lgnkush", "template_13qu4es", {
      to_name: nombresInput.value + " " + apellidosInput.value,
      from_name: "Correo de verificación FitUMB",
      message: codigo,
    });
  }

  // Envía el código de verificación por correo electrónico
  enviarCodigoButton.addEventListener("click", () => {
    if (validateEmail(emailInput.value)) {
      verificationCode = generateVerificationCode();
      console.log("Código generado:", verificationCode);
      enviarCorreo(verificationCode);
    } else {
      alert("Por favor, ingresa un correo electrónico válido.");
    }
  });

  // Verifica el código ingresado por el usuario
  verificarCodigoButton.addEventListener("click", () => {
    if (codigoVerificacionInput.value === verificationCode) {
      alert("Código verificado correctamente.");
      codigoVerificacionInput.setCustomValidity("");
      submitButton.disabled = false; // Habilita el botón de envío
    } else {
      alert("Código incorrecto. Por favor, inténtalo de nuevo.");
      codigoVerificacionInput.setCustomValidity("Código incorrecto.");
      submitButton.disabled = true; // Mantiene el botón deshabilitado
    }
  });

  // Crear contenedores de mensajes de error
  const nombresError = document.createElement("p");
  nombresError.className = "error-message";
  nombresInput.parentNode.appendChild(nombresError);

  const apellidosError = document.createElement("p");
  apellidosError.className = "error-message";
  apellidosInput.parentNode.appendChild(apellidosError);

  const emailError = document.createElement("p");
  emailError.className = "error-message";
  emailDiv.parentNode.appendChild(emailError);

  const passwordError = document.createElement("p");
  passwordError.className = "error-message";
  passwordInput.parentNode.appendChild(passwordError);

  const confirmPasswordError = document.createElement("p");
  confirmPasswordError.className = "error-message";
  confirmPasswordInput.parentNode.appendChild(confirmPasswordError);

  const objetivoError = document.createElement("p");
  objetivoError.className = "error-message";
  objetivoSelect.parentNode.appendChild(objetivoError);

  const codigoVerificacionError = document.createElement("p");
  codigoVerificacionError.className = "error-message";
  codigoVerificacionDiv.parentNode.appendChild(codigoVerificacionError);

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

    // Validación de código de verificación
    if (codigoVerificacionInput.value !== verificationCode) {
      codigoVerificacionError.textContent =
        "Por favor, verifica el código enviado a tu correo.";
      isValid = false;
    } else {
      codigoVerificacionError.textContent = "";
    }

    // Redirigir si el formulario es válido
    if (isValid) {
      // Aquí podrías agregar el código para guardar los datos del usuario
      alert("Registro exitoso!");
      window.location.href = "login.html";
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

  // Deshabilitar el botón de envío inicialmente
  submitButton.disabled = true;
});
