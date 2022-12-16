
//declaración del array
//lenght del array
// función concat()
//función push
// función pop
// función shift
// función unshift
// función foreach
// función map
// función filter
// función reduce
// función splice
// función reverse




//---------------------------------------------------------------------------------
// array literal
/*const vec = [23,4,7,8];
const vec2 = [];



//poner un nuevo elemento al final del array
//vec.push(28);

//le paso todos los elementos de vec a vec2
for(let i=0; i < vec.length; i++){
    vec2.push(vec[i]);
}

console.log("vec",vec);
console.log("vec2",vec2);

*/


//const vec = [23,4,7,8];
//me devuelve un array completamente desvinculado del original
//const vec2 = vec.concat();

//const vec2 = [...vec]; //spread operator, operador de propagación. Tiramos el contenido de vec, dentro de vec2 como un array nuevo. 



/*vec.push(28);
vec2.push(45);

console.log("vec",vec);
console.log("vec2",vec2);*/

//remueve el último valor y lo devuelve
//console.log(vec.pop());
//devuelve el primero
//console.log(vec.shift());
//console.log(vec);
// es como un push pero lo hace adelante
//console.log(vec.unshift(10));
//console.log(vec);

// ()=> arroy function función anonima reducida

//el for each va a iterar sobre vec y a cada elemento se lo va a tirar a la función. 
/*
vec.forEach((elemento, indice, array)=>{

})
*/

/*vec.forEach((elemento)=>{
    console.log(elemento)
});*/

// VAMOS A USAR BASTANTE

//const vec = [23,4,7,8];
// quiero que todos los valores de vec, sean el doble en duplicados
// la función map me devuelve un nuevo array con los retornos de su callback
/*const duplicados = vec.map((elemento)=>{

    if (elemento % 2) {
        return elemento;
    } else {
        return elemento*2;
    }
    
});*/

// Hacer lo mismo pero con un operador ternario
/*const duplicados = vec.map((elemento)=>{

   return elemento % 2?elemento:elemento*2;
    
});*/

//const duplicados = vec.map(elemento => elemento % 2?elemento:elemento*2);
 
//nos devuelve un array nuevo cuando llamamos al callback y retorna true.
/*const pares = vec.filter((elemento)=>{
    if (elemento % 2 === 0) {
        return true;
    } else {
        return false;
    }
});*/

//const pares = vec.filter((elemento)=>!(elemento%2));
//console.log(duplicados);
//console.log(pares);
//const vec = [23,4,7,8];

// función reduce me devuelve un único elemento, valor, objeto, numero. NO UN ARRAY
/*const total = vec.reduce((prev,actual,index,array)=>{

});*/

/*const total = vec.reduce((prev,actual)=>{
    return prev+actual;
    // prev + actual
    // como segundo parámetro le pasamos 0, por lo tanto 0 es el primer prev para la primera iteración
    // 0 + 23
    // si no estuviera el 0, funcionaría igual en este caso
    // 23 + 4
    // 27 + 7
    // 34+8
    //42 lo que nos retorna.
},0);*/

/*const vec2 = ["h","o","l","a"];
const palabra = vec2.reduce((prev,actual)=>{
    return prev+actual;
    
}); */

//const vec2 = ["juan","pepe","teto","arro"];
//const palabra = vec2.reduce((prev,actual)=>prev+actual.length,0);

//filtrar nombres que tengan más de 4 letras todo en una línea
//const vec3 = ["juan","pepesf","teto","arro"].filter((elemento)=>elemento.length > 4).reduce((prev,actual)=>prev+actual.length,0);

// o tambien puedo hacer

/*const vec3 = ["juan","pepesf","teto","arro"]
.map((elemento)=>elemento.toUpperCase())
.filter((elemento)=>elemento.length > 4)
.reduce((prev,actual)=>prev+actual.length,0);


console.log(vec);
console.log(total);
console.log(vec3);*/


//let posicion = vec.indexOf(23);
//splice recibe un indice y la cantidad a eliminar.
// a partir del indice 2 quiero eliminar solo 1
//vec.splice(posicion,1);

//muentras todos los elementos menos el 4
// no modifique vec, obtuve un nuevo array.
//const vec2 = vec.filter(el=> el !== 4);

//revierte los elementos del array
//vec.reverse();


const vec = [23,4,7,8];
const nombres = ["Martin","Juan","Lusiana","Federica"];
//ordena de mayor a menor
vec.sort((a,b)=>{

    return b - a;

});
console.log(vec);
//menor a mayor
nombres.sort((a,b)=>{

    return a.length - b.length;

});
console.log(nombres);

//si quiero saber si se cumple una condición para todos los elementos del array
//si son todos pares me devuelve true el console log
console.log(vec.every((elemento)=>elemento % 2 === 0));
// si alguno cumple con la condición
console.log(vec.some((elemento)=>elemento % 2 === 0));

// devuelve un array de los elemento desde una posicion hasta la otra
console.log(vec.slice(0,3));


let cadena = "Juan Carlos";
const x = [...cadena]

console.log(x);






//------------------------------------------------------------
