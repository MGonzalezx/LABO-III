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

export default Person;