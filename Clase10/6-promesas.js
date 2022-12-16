/**
 * Quiero sumar dos numeros, al resultado le calcula el cuadrado,
 * al resultado lo multiplico por 10 y al producto le resto 5
 * y muestro el resultado por consola
 * 
 */

// una promesa es un objeto
// las promesas son retornadas por funciones que quieren ser asincronas

function esPositivo(numero) {


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
}

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


function calcular(a, b) {
    sumarPromise(a, b)
        .then(suma =>
            cuadradoPromise(suma)
        )
        .then(cuadrado =>
            multiplicarPromise(cuadrado, 10)
        )
        .then(producto =>
            producto > 800 ? restarPromise(producto, 5) : Promise.reject("El producto es mayor a 800")


        )
        .then(resta =>
            informar(resta)
        )
        .catch(err =>
            console.error(err)
        );

}

function informar(valor) {
    console.log("El resultado es " + valor);
}

console.log("Inicio");
calcular(4, 5);
console.log("Fin");
/*esPositivo(-25)
    .then((rta) => {
        console.log(rta);
    })
    .catch((err) => {
        console.error(err)
    })
//console.log(p);
console.log("Fin")*/
//las promesas tienen 2 metodos
// cuando este fullfiled y esta resolve se ejecuta el then
// cuando este fullfiled y esta rechasada se ejecuta el catch
/*p.then((respuesta)=>{
    console.log(respuesta);
    console.log(p);
});
p.catch((error)=>{
    console.log(error);
    console.log(p);
}); */
// estado pending o fullfilled
// resuelta o rechazada

/*
//Te paso a,b y la función a la que quiero que le pases el resultado
function sumar(a, b, callback) {
    let rdo;
    setTimeout(() => {

        try {
            if (typeof a !== "number" || typeof b !== "number" || typeof callback !== "function") {
                throw new Error("Parametros invalidos para la suma");
            }
            rdo = a + b;
            console.log("La suma es: " + rdo);

            callback(rdo);
        } catch (err) {
            console.error(err.message);
        }


    }, 2000);
    //dos segundos


}

function cuadrado(a, callback) {
    let rdo;
    setTimeout(() => {
        try {
            if (typeof a !== "number" || typeof callback !== "function") {
                throw new Error("Parametros invalidos para el cuadrado");
            }
            rdo = a * a;
            console.log("El cuadrado es: " + rdo);

            callback(rdo);
        } catch (err) {
            console.error(err.message);
        }
    }, 1000);


}

function multiplicar(a, b, callback) {
    let rdo;
    setTimeout(() => {
        try {
            if (typeof a !== "number" || typeof b !== "number" || typeof callback !== "function") {
                throw new Error("Parametros invalidos para la multiplicacion");
            }
            rdo = a * b;
            console.log("El producto es: " + rdo);

            callback(rdo);
        } catch (err) {
            console.error(err.message);
        }
    }, 1500);


}

function restar(a, b, callback) {
    let rdo;
    setTimeout(() => {
        try {
            if (typeof a !== "number" || typeof b !== "number" || typeof callback !== "function") {
                throw new Error("Parametros invalidos para la resta");
            }
            rdo = a - b;
            console.log("La resta es: " + rdo);

            callback(rdo);
        } catch (err) {
            console.error(err.message);
        }
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
*/
