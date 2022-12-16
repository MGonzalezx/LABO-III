/**
 *  Closures
 * Antes de la incorporación de los módulos en JS para generar un scope
 *  donde poder encapsular un conjunto de funciones y que no hubiera conflicto
 *  con otros archivos que expusieran funciones o variables con los mismos nombres
 *  se utilizaban (closures) que es una función que retorna referencias a funciones
 *  o variables declaradas de manera local. Al asignar este retorno (puede ser una
 *  funcion o un objeto que tenga como miembros atributos y métodos declarados
 *  dentro del closure ) a una variable podemos acceder a esos atributos o métodos
 *  a traves de la variable en cuestión.
 *  Similar a generar un namespace en otros lenguajes.
 *  Es muy común asignar esta variable por medio de tranformar a la función closure
 *  en una IIFE (Immediately Invoked Function Expression) o Expresión de función
 *  ejecutada inmediatamente.
 *  Al encerrar la propia función entre parentesis y ejecutarla colocandole otro juego
 *  de parentesis a continuación esta se ejecuta en el momento en que el script es
 *  cargado y el retorno se asigna a una variable.
 *
 *  let variable = (cuerpo_función)();
 *
 */

let mat = (function () {
  let PI = 3.14;

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

  return {
    sumar,
    restar,
    multiplicar,
    dividir,
    PI,
  };
})();
