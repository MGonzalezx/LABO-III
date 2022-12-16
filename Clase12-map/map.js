import { personas } from "./data.js";
const numeros = [3, 7, 6, 8, 9];
const nombres = ["Juan", "Pedro", "Lucia", "Alicia", "Sebastian"];


// el map nos devuelve un nuevo array, con nueva referencia
//quiero afectar de la misma manera a todos los valores del array
/*const vec = numeros.map((valor,indice,array)=>{
    console.log(valor,indice,array);
})*/

/*const vec = numeros.map((valor)=>{
    return valor*2;
})*/

/*const vec = nombres.map((valor)=>{
    return valor.length;
})*/

//mapeo a las personas
//const vec = personas.map((persona)=>( {nombre: persona.nombre,id: persona.id}));



//////////////FILTER/////////////////////////////////////////////////
// El filter me devuelve true o false
/*const vec = numeros.filter((valor) => {
    //si es par
    // el 0 en una condición es false
    //return valor % 2 ? false : true;

    //impares
    return valor % 2 ? true : false;
   /* if (valor % 2) {
        return false;
    } else {
        return true;
    }
})*/

//pares
//const vec = numeros.filter((valor) => !(valor % 2) );

//impares
//const vec = numeros.filter((valor) => valor % 2);

//los que ganan más de 1500 pesos

//const vec = personas.filter((persona) =>  persona.sueldo>=1500);

//quiero los varones
//const vec = personas.filter((persona) =>  persona.gender==="M");

//masculinos mayores de 50 
//const vec = personas.filter((persona) =>  persona.gender==="M" && persona.edad >=50);

//console.log(vec);

////////////REDUCE////////////////////////////////////
//Una función de valor único

//la sumatoria del total de numeros
let total = numeros.reduce((prev, actual, index, array) => {
    //el 0 es el primer prev
    return prev + actual;
}, 0)


//Muestro el numero más grande
let masGrande = numeros.reduce((prev, actual) => prev > actual ? prev : actual);


//Muestro el total de salarios de los varones
//El actual va a ser una persona.
//concateno a los varones con la suma de los salarios salarios
/*const totalSalarios = personas.filter(persona=> persona.gender === "M").reduce((prev,actual)=>prev + actual.sueldo,0);

console.log(totalSalarios);*/

//me muestra los 50 paises pero se repiten
//const paises = personas.map((persona)=>persona.pais);


// el set me permite mostrar todos los paises sin repeticiones
// pero queda tipo set y es una problema
//const set = new Set(paises);


//esto si es un array
//const vector = [...set];


// las tres cosas que hicimos arriba pero en una sola línea.
//const paises = [...(new Set(personas.map((persona)=>persona.pais)))];

//console.log(paises);


//ordenar por sueldo

personas.sort((persona1, persona2) => persona1.sueldo - persona2.sueldo);



//el nombre del varon que más gana
console.log(
     personas
     //agarro a todos los varones
    .filter((persona) => persona.gender === "M")
    //datos que me interesan son el nombre y sueldo para lograr lo pedido
    .map((varon) => ({ nombre: varon.nombre, sueldo: varon.sueldo }))
    //de todos ellos el que tiene el sueldo más grande
    .reduce((prev, actual) => prev.sueldo > actual.sueldo ? prev : actual, { nombre: "", sueldo: 0 
}).nombre
    
)
