const form = document.getElementById("form");
const input = document.getElementById("email");
const mensaje = document.querySelector(".validacion");
const mensajeGracias = document.querySelector(".mensaje");
const dismissButton = document.getElementById("dismiss");
const correoPlaceholder = mensajeGracias.querySelector("span");
const main = document.querySelector(".newsletter");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = input.value.trim();

  // Restablecer estados previos
  input.classList.remove("error");
  mensaje.classList.remove("active");

  if (email === "") {
    mensaje.textContent = "Por favor, ingrese un correo electrónico";
    mensaje.classList.add("active"); // Mostrar el mensaje de validación
    input.classList.add("error"); // Aplicar estilos de error al input
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    mensaje.textContent = "Por favor, ingrese un correo electrónico válido";
    mensaje.classList.add("active");
    input.classList.add("error");
  } else {
    // Mostrar mensaje de agradecimiento
    main.classList.add("newsletter__valido");
    correoPlaceholder.textContent = email;
    mensajeGracias.classList.add("mensaje__active");
    form.style.display = "none"; // Ocultar formulario
  }
});

// Manejar el botón de cerrar el mensaje de agradecimiento
dismissButton.addEventListener("click", () => {
  mensajeGracias.classList.remove("mensaje__active");
  main.classList.remove("newsletter__valido"); // Ocultar mensaje de agradecimiento
  form.style.display = "flex"; // Mostrar formulario nuevamente
  form.reset(); // Restablecer el formulario
});
