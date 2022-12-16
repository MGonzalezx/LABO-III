
import Person from "./persona.js";

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


export default Employee;

