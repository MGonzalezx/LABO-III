/**
 * Quiero sumar dos numeros, al resultado le calcula el cuadrado,
 * al resultado lo multiplico por 10 y al producto le resto 5
 * y muestro el resultado por consola
 * 
 */

// una promesa es un objeto
// las promesas son retornadas por funciones que quieren ser asincronas

/*function esPositivo(numero) {


    //nos ahorramos el try catch 
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (isNaN(numero)) {
                reject("No es un numero");
            } else if (numero >= 0) {
                resolve("Es positivo");
            } else {
                resolve("Es negativo");
            }

        }, 10000);

    });
}*/

function sumarPromise(a, b) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (typeof a === "number" && typeof b === "number") {
                let suma = a + b;
                console.log("La suma es: " + suma);
                resolve(suma);
            }
            reject("Parametros invalidos para la suma");

        }, 1500);
    })

}
function cuadradoPromise(a) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (typeof a === "number") {
                let cuad = a * a;
                console.log("El cuadrado es: " + cuad);
                resolve(cuad);
            }
            reject("Parametros invalidos para el cuadrado");

        }, 1500);
    })

}
function multiplicarPromise(a, b) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (typeof a === "number" && typeof b === "number") {
                let p = a * b;
                console.log("El producto es: " + p);
                resolve(p);
            }
            reject("Parametros invalidos para el producto");

        }, 1500);
    })

}
function restarPromise(a, b) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (typeof a === "number" && typeof b === "number") {
                let resta = a - b;
                console.log("La resta es: " + resta);
                resolve(resta);
            }
            reject("Parametros invalidos para la resta");

        }, 1500);
    })

}

//le digo que es asincrona
async function calcular(a, b) {
    //si o si tiene que haber un try catch
    try {
        //bancame hasta que la promesa se cumpla
        // await solo en funcion async
        let suma = await sumarPromise(a, b);
        let cuadrado = await cuadradoPromise(suma);
        let producto = await multiplicarPromise(cuadrado,10);
        let resta = await restarPromise(producto, 5);
        informar(resta);
    } catch (error) {
        console.error(error);
    }

}

function informar(valor) {
    console.log("El resultado es " + valor);
}

console.log("Inicio");
calcular(4, 5);
console.log("Fin");
