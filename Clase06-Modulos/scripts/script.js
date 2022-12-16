import Person from "./persona.js";
import Employee from "./empleado.js";


const unEmpleado = new Employee(1234,"Alicia", 23, true);
const unaPersona = new Person("Miguel",28,true);

unEmpleado.cobrarAguinaldo();
unaPersona.saludar();

