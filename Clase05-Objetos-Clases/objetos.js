//const obj1 = new Object();
//const obj2 = {};

// los objetos son una lista de clave valor, un array asosiativo
const obj3 = {
    nombre: "Juan",
    edad: 30,
    hambre: true
};

//me permite iterar un objeto
/*for (const key in obj3) {
   
        //console.log(key);
        console.log(key,obj3[key]);

        
    
}*/

//console.log(obj1);
//console.log(obj2);
//console.log(obj3);
//console.log(obj3.nombre);
//console.log(obj3["nombre"]);

//console.log(Object.keys(obj3));
//console.log(Object.values(obj3));

//const obj = {...obj3};

//obj3.nombre = "Fede";
//obj3.apellido = "Perez"

//console.log(obj);
//console.log(obj3);

//función constructora, declaramos una instancia de un objeto

function Persona(nombre,edad,hambre){
    
    let _nombre = nombre;
    this.edad = edad;
    this.hambre = hambre;

    //para acceder al _nombre si lo tengo en privado
    this.setNombre = function(value){
        _nombre = value;
    }

    this.getNombre = function(value){
        return _nombre;
    }

    
}

Persona.prototype.saludar = function (){
    console.log(`Hola me llamo ${this.getNombre()}`);
}


//Empleado que erede de Persona

function Empleado(legajo,nombre,edad,hambre){
    //legajo tambien privado
    _legajo = legajo;

    Persona.call(this, nombre, edad, hambre);

    this.setLegajo = function(value){
        _legajo = value;
    }

    this.getLegajo = function(value){
        return _legajo;
    }
}

//le agrego el prototipo de persona al del empleado, asi podemos usar el saludar
Object.setPrototypeOf(Empleado.prototype,Persona.prototype);

const p1 = new Persona("Analia",25,false);
const p2 = new Persona("Miguel",28,true);
const e1 = new Empleado(1234,"Jorge",30,true);


/*console.log(p1);
console.log(p2);
console.log(e1);
p1.saludar();
p2.saludar();
e1.saludar();*/
//console.log(p1.getNombre());


//// CALL, APPLY, BIND //////////////////////////////////////////////////////////////////////////////////////////////////////////////

const obj = {
    nombre: "Raul",
    edad: 45
}

const mascota = {
    nombre: "pichi",
    edad: 5,
    tipo: "perro"
}


const obj1 = {
    nombre: "Juan",
    edad: 30,
    saludar: function(){
        console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años`);
        
    },
    sumar: function(valor){
        return this.edad+valor;
    }
}

//const metodo = obj1.sumar;

// el call: El primer parámetro que le voy a pasar va a ser el this que quiero yo que sea el this de la función
// le estoy decieindo cual va a ser el this dentro de ese método
//metodo.call(obj);
//aun aunque mascota tenga nombre, edad y tipo. Mientras tenga nombre y edad, lo va a mostrar. Va a saludar.
//metodo.call(mascota);
//obj1.saludar();

//console.log(obj1.sumar(7));
//console.log(metodo.call(obj,5));


// el metodo apply hace los mismo, el primer parámetro va a ser el this puer envés de pasarle los siguientes parámetros normalmente,
//lo vamos a pasar por array.
//console.log(metodo.apply(obj,[5]));

// el metodo bind me devuelve una función nueva pero que tiene ese scope enganchado.
const metodo = obj1.sumar.bind(obj);
// el this pasa a ser el this de obj.

console.log(metodo(6));

//Vdeo Clase 6 32:59
