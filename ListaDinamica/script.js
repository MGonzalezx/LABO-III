import { Persona } from "./personas.js";
import {crearTabla} from  "./dinamicas.js";

//localStorage.setItem("personas",JSON.stringify(people));

const $divTabla = document.getElementById("divTabla");
//si tenes algo guardado en el localstorage llamado personas, traemelo. Sino, dame un array vacio
const personas = JSON.parse(localStorage.getItem("personas")) || [];
actualizarTabla();



window.addEventListener("click", (e)=>{

    if(e.target.matches("td")){
        console.log(e.target.parentElement.dataset.id);

       let id = e.target.parentElement.dataset.id

        cargarFormulario( personas.find((persona)=> persona.id == id));
    }else if(e.target.matches("#btnDelete")){
        handlerDelete(parseInt($formulario.txtId.value));
        $formulario.reset();
    }

});

function cargarFormulario(persona){
    const {txtId,txtNombre,txtEdad,txtEmail,rdoGenero} = $formulario;

    txtId.value = persona.id;
    txtNombre.value = persona.nombre;
    txtEdad.value = persona.edad;
    txtEmail.value = persona.email;
    rdoGenero.value = persona.genero;
}
const $formulario = document.forms[0];

$formulario.addEventListener("submit",(e)=>{
    e.preventDefault();

    console.log("Enviando...")

    const {txtId,txtNombre,txtEdad,txtEmail,rdoGenero} = $formulario;

    const formPersona = new Persona(txtId.value,txtNombre.value,txtEdad.value,txtEmail.value,rdoGenero.value);

    if(formPersona.id === ''){
        //alta
        formPersona.id = Date.now();
        handlerCreate(formPersona);
    }else{
        //update
        handlerUpdate(formPersona);
    }


    $formulario.reset();

})

const handlerCreate = (nuevaPersona)=>{
    console.log(personas);
    personas.push(nuevaPersona);
    actulizarStorage(personas);
    actualizarTabla();
}

const handlerUpdate = (personaEditada)=>{
    
    let indice = personas.findIndex((persona)=>{
        return persona.id == personaEditada.id;
    });

    personas.splice(indice,1);
    personas.push(personaEditada);
    actulizarStorage(personas);
    actualizarTabla();
}

const handlerDelete = (id)=>{
    let indice = personas.findIndex((persona)=>{
        return persona.id == id;
    });

    personas.splice(indice,1);
    actulizarStorage(personas);
    actualizarTabla();
}



function actualizarTabla (){
    while ($divTabla.hasChildNodes()) {
        $divTabla.removeChild($divTabla.firstElementChild   )
    }
    const data = JSON.parse(localStorage.getItem("personas"));
    if (data) {
        $divTabla.appendChild(crearTabla(data))
    }
   
}

const actulizarStorage = (data)=>{
   localStorage.setItem("personas",JSON.stringify(data));
  
}

//actualizarTabla(personas);


