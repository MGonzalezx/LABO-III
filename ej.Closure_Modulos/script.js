// Con la palabra reservada import traemos los miembros exportados
// por el módulo (archivo js) referenciado con from
// El export default se asigna directamente y los export
// se desestructuran
import saludar, { sumar, restar, PI } from "./matematicas.js";

saludar();

console.log(sumar(4, 5));
