/**
 * Quiero sumar dos numeros, al resultado le calcula el cuadrado,
 * al resultado lo multiplico por 10 y al producto le resto 5
 * y muestro el resultado por consola
 * 
 */

function sumar(a, b) {
    let rdo;
    setTimeout(() => {
        rdo = a + b;
        console.log("La suma es: " + rdo);

        cuadrado(rdo);

    }, 2000);
    //dos segundos

    
}

function cuadrado(a) {
    let rdo;
    setTimeout(() => {
        rdo = a * a;
        console.log("El cuadrado es: " + rdo);

        multiplicar(rdo,10);
    }, 1000);

    
}

function multiplicar(a, b) {
    let rdo;
    setTimeout(() => {
        rdo = a * b;
        console.log("El producto es: " + rdo);

        restar(rdo,5);
    }, 1500);

    
}

function restar(a, b) {
    let rdo;
    setTimeout(() => {
        rdo = a - b;
        console.log("La resta es: " + rdo);
        informar(rdo);
    }, 1800);

}

function informar(valor) {
    console.log("El resultado es " + valor);
}

// console.log("Inicio");
// let suma = sumar(4, 5);
// let cuad = cuadrado(suma);
// let producto = multiplicar(cuad, 10);
// let resta = restar(producto, 5);
// informar(resta);
// console.log("Fin");

console.log("Inicio");
sumar(4, 5);
console.log("Fin");