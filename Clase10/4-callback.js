/**
 * Quiero sumar dos numeros, al resultado le calcula el cuadrado,
 * al resultado lo multiplico por 10 y al producto le resto 5
 * y muestro el resultado por consola
 * 
 */

//Te paso a,b y la función a la que quiero que le pases el resultado
function sumar(a, b, callback) {
    let rdo;
    setTimeout(() => {
        rdo = a + b;
        console.log("La suma es: " + rdo);

        callback(rdo);

    }, 2000);
    //dos segundos


}

function cuadrado(a, callback) {
    let rdo;
    setTimeout(() => {
        rdo = a * a;
        console.log("El cuadrado es: " + rdo);

        callback(rdo);
    }, 1000);


}

function multiplicar(a, b, callback) {
    let rdo;
    setTimeout(() => {
        rdo = a * b;
        console.log("El producto es: " + rdo);

        callback(rdo);
    }, 1500);


}

function restar(a, b, callback) {
    let rdo;
    setTimeout(() => {
        rdo = a - b;
        console.log("La resta es: " + rdo);
        callback(rdo);
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
//el tercer parámetro es una función
sumar(4, 5, (suma) => {

    cuadrado(suma, (cuad) => {

        multiplicar(cuad, 10, (producto) => {

            restar(producto, 5, (resta) => {

                informar(resta);

            });
        });
    });

});
console.log("Fin");

