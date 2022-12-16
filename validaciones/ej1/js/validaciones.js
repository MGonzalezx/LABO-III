export const validarCampoVacio = (e) => {
  const input = e.target;
  input.value.trim() ? clearError(input) : setError(input, "Campo requerido");
};

export const validarEmail = (e) => {
  const pattern = /^([a-zA-Z0-9\.]+@+[a-zA-Z]+(\.)+[a-zA-Z]{2,3})$/;
  const input = e.target;
  const email = input.value.trim();

  if (email.length > 6) {
    pattern.test(email) ? clearError(input) : setError(input, "Email Invalido");
  }
};

export const validarPassword = (e) => {
  const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  const input = e.target;
  const password = input.value.trim();

  if (!validarLongitudMinima(input, 8)) {
    setError(input, "Debe tener al menos 8 caracteres");
  } else {
    pattern.test(password)
      ? clearError(input)
      : setError(
          input,
          "Debe contener una mayuscula, una minuscula y algun numero"
        );
  }
};

export const validarExtension = (e) => {
  const extensiones = ["gif", "jpg", "png", "jpeg"];

  const input = e.target;

  const nombre = input.files[0].name;
  const ext = nombre.split(".").pop();
  extensiones.includes(ext)
    ? clearError(input)
    : setError(input, "Archivo invalido");

  //console.log(nombre.split(".").pop());

  /*
    if (email.length > 6) {
      pattern.test(email) ? clearError(input) : setError(input, "Email Invalido");
    }*/
};

const validarLongitudMinima = (input, minimo) =>
  input.value.trim().length >= minimo;

const setError = (input, mensaje) => {
  const $small = input.nextElementSibling;
  $small.textContent = mensaje || `${input.name} requerido`;
  input.classList.add("inputError");
  $small.classList.add("danger");
};
const clearError = (input, mensaje) => {
  const $small = input.nextElementSibling;
  $small.textContent = "";
  input.classList.remove("inputError");
  $small.classList.remove("danger");
};
