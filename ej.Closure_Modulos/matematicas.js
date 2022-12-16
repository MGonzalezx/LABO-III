let PI = 3.14;

// Un módulo ES6 puede exponer solo un miembro por default
export default function saludar() {
  console.log("Hola modulos!!!");
}

function sumar(a, b) {
  return a + b;
}
function restar(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}
function dividir(a, b) {
  if (!validarCero(b)) {
    return a / b;
  }
  return NaN;
}

function validarCero(a) {
  return a == 0;
}

// los miembros de un módulo se pueden exportar uno a uno anteponiendo
// palabra reservada export delante o al final del módulo agregandolos
// a un objeto
export { sumar, restar, PI };
