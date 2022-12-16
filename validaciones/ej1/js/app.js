import {
  validarCampoVacio,
  validarEmail,
  validarExtension,
  validarPassword,
} from "./validaciones.js";

const formulario = document.forms[0];
let flag = 1;

const { txtNombre, txtEmail, txtPassword, txtPassword2, ctrlFile } = formulario;

// txtNombre.addEventListener("blur", validarCampoVacio);
// txtEmail.addEventListener("blur", validarCampoVacio);
// txtPassword.addEventListener("blur", validarCampoVacio);
// txtPassword2.addEventListener("blur", validarCampoVacio);

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const controles = e.target.elements;
  for (const control of controles) {
    if (control.classList.contains("inputError")) {
      return;
    }
  }

  console.log("Enviando....");
});

const controles = formulario.elements;

for (let i = 0; i < controles.length; i++) {
  const control = controles.item(i);
  if (control.matches("input")) {
    if (
      control.matches("[type=email]") ||
      control.matches("[type=text]") ||
      control.matches("[type=password]")
    ) {
      control.addEventListener("blur", validarCampoVacio);
      if (control.matches("[type=email]")) {
        control.addEventListener("input", validarEmail);
      } else if (control.matches("[type=password]")) {
        control.addEventListener("input", validarPassword);
      }
    } else if (control.matches("[type=file]")) {
      control.addEventListener("change", validarExtension);
    }
  }
}
