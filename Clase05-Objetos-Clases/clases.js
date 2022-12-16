
class Person{
    constructor(nombre,edad,hambre=false){
        this.nombre = nombre;
        this.edad = edad;
        this.hambre = hambre;
    }

    // cuando ponemos set y get se transforman en propiedades
    set Nombre(value){
        this.nombre = value.toUpperCase();;
    }

    get Nombre(){
        return this.nombre;
    }

    saludar(){
        console.log(`Hola me llamo ${this.nombre}`);
    }

    //metodo ESTATICO
    static sumar(a,b){
        return a + b;
    }
}


class Employee extends Person{

    constructor(legajo,nombre,edad,hambre){
        super(nombre,edad,hambre);
        this.legajo = legajo;
    }

    saludar(){
        console.log(`Hola me llamo ${this.nombre} y soy un empleado`);
    }

    cobrarAguinaldo(){
        console.log('Soy feliz con mi aguinaldo!!!');
    }
}



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

//const objFuncional = new Persona("Analia",25,false);
const unaPersona = new Person("Miguel",28,true);
const unEmpleado = new Employee(1234,"Lucia",24,true);
//console.log(objFuncional);
/*console.log(objClase);
console.log(objClase.Nombre);
objClase.Nombre = "Mario";
console.log(objClase.Nombre);*/

//console.log(Person.sumar(5,6));

console.log(unaPersona);
console.log(unEmpleado);

unaPersona.saludar();
unEmpleado.saludar();

//const e1 = new Empleado(1234,"Jorge",30,true);





