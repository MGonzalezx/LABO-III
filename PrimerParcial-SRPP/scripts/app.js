import {
    validarCampoVacio,
    validarString,
    validarPrecio,
    validarNumero,
  } from "./validaciones.js";
  import Anuncio_Mascota from "./anuncio.js";
  import {crearTabla} from  "./dinamicas.js";
 

var myvar;
const $divTabla = document.getElementById("divTabla");

const anuncios = JSON.parse(localStorage.getItem("anuncios")) || [];
const divSpinner = document.getElementById("spinner");



const setSpinner = (div, src) => {
  const img = document.createElement("img");
  img.setAttribute("src", src);
  img.setAttribute("alt", "spinner");
  div.appendChild(img);


};


const clearSpinner = (div) => {

  //me devuelve un booleano
  while (div.hasChildNodes()) {
      div.removeChild(div.firstElementChild);
  }

}

Spinner();
actualizarTabla();


window.addEventListener("click", (e)=>{

  
  if(e.target.matches("td")){ 
      console.log(e.target.parentElement.dataset.id);

      let id = e.target.parentElement.dataset.id;

      cargarFormulario( anuncios.find((anuncio)=> anuncio.id == id));
      
      document.getElementById("btnDelete").style.visibility = "visible";
      document.getElementById("btnCancelar").style.visibility = "visible";
   
  }else if(e.target.matches("#btnDelete")){
      handlerDelete(parseInt($formulario.txtId.value));
      CrearAlertaBaja();
      Spinner();
      $formulario.reset();
      CambiarVisibilidad();
      
  }else if(e.target.matches("#btnCancelar")){
    
    $formulario.reset();
    CambiarVisibilidad();
    
    
}

});

function CrearAlertaAlta(){
  var alerta = document.getElementById("alerta");
  alerta.setAttribute("class","alert");
  var div = document.createElement("div");
  div.setAttribute("class","alertaAlta");
  var span = document.createElement("span");
  span.setAttribute("class","closebtn");
  span.setAttribute("onclick", "this.parentElement.style.display='none';");
  span.innerHTML="X";
  div.innerHTML = "Anuncio dado de alta";

  div.appendChild(span);
  alerta.appendChild(div);
}

function CrearAlertaBaja(){
  var alerta = document.getElementById("alerta");
  alerta.setAttribute("class","alert");
  var div = document.createElement("div");
  div.setAttribute("class","alertaBaja");
  var span = document.createElement("span");
  span.setAttribute("class","closebtn");
  span.setAttribute("onclick", "this.parentElement.style.display='none';");
  span.innerHTML="X";
  div.innerHTML = "Anuncio Eliminado";

  
  div.appendChild(span);
  alerta.appendChild(div);
}

function CrearAlertaModificacion(){
  var alerta = document.getElementById("alerta");
  alerta.setAttribute("class","alert");
  var div = document.createElement("div");
  div.setAttribute("class","alertaModificacion");
  var span = document.createElement("span");
  span.setAttribute("class","closebtn");
  span.setAttribute("onclick", "this.parentElement.style.display='none';");
  span.innerHTML="X";
  div.innerHTML = "Anuncio Modificado";

  div.appendChild(span);
  alerta.appendChild(div);
}

function CambiarVisibilidad() {
  var x = document.getElementById("btnDelete");
  var y = document.getElementById("btnCancelar");
  if (x.style.visibility === "visible" && y.style.visibility === "visible") {
    x.style.visibility = "hidden";
    y.style.visibility = "hidden";

  } else {
    y.style.visibility = "visible";
    x.style.visibility = "visible";
  }
}

function cargarFormulario(anuncio){
  const {txtId,txtTitulo,txtDescripcion,rdoAnimal,txtPrecio,txtRaza,txtFechaNacimiento,vacuna,alimentado} = $formulario;

  txtId.value = anuncio.id;
  txtTitulo.value = anuncio.titulo;
  txtDescripcion.value = anuncio.descripcion;
  rdoAnimal.value = anuncio.animal;
  txtPrecio.value = anuncio.precio;
  txtRaza.value = anuncio.raza;
  txtFechaNacimiento.value = anuncio.nacimiento;
  vacuna.value = anuncio.vacuna;

  if(anuncio.alimentado == "no"){
    alimentado.checked = false;
  }else{
    alimentado.checked = true;
  }
  //alimentado.checked = anuncio.alimentado;
}
const $formulario = document.forms[0];
 
  $formulario.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const controles = e.target.elements;
    for (const control of controles) {
      if (control.classList.contains("inputError")) {
        return;
      }
    }
  
    console.log("Enviando....");
    const {txtId,txtTitulo,txtDescripcion,rdoAnimal,txtPrecio,txtRaza,txtFechaNacimiento,vacuna,alimentado} = $formulario;

    var alimentadoTexto = "";

    if(alimentado.checked){
      alimentadoTexto = "si";
    }else{
      alimentadoTexto = "no";
    }

    const formAnuncio = new Anuncio_Mascota(txtId.value,txtTitulo.value,txtDescripcion.value,rdoAnimal.value,txtPrecio.value,txtRaza.value,txtFechaNacimiento.value,vacuna.value,alimentadoTexto);

    

    if(formAnuncio.id === ''){
        //alta
        formAnuncio.id = Date.now();
        handlerCreate(formAnuncio);
        CrearAlertaAlta();
        Spinner();
    }else{
        //update
        handlerUpdate(formAnuncio);
        CrearAlertaModificacion();
        Spinner();
        CambiarVisibilidad();
    }


    $formulario.reset();
  });



  const handlerCreate = (nuevoAnuncio)=>{
    console.log(anuncios);
    anuncios.push(nuevoAnuncio);
    actulizarStorage(anuncios);
    actualizarTabla();
}

const handlerUpdate = (anuncioEditado)=>{
    
    let indice = anuncios.findIndex((anuncio)=>{
        return anuncio.id == anuncioEditado.id;
    });

    anuncios.splice(indice,1);
    anuncios.push(anuncioEditado);
    actulizarStorage(anuncios);
    actualizarTabla();
}

const handlerDelete = (id)=>{
    let indice = anuncios.findIndex((anuncio)=>{
        return anuncio.id == id;
    });

    anuncios.splice(indice,1);
    actulizarStorage(anuncios);
    actualizarTabla();
}

function actualizarTabla (){
  while ($divTabla.hasChildNodes()) {
      $divTabla.removeChild($divTabla.firstElementChild);
  }
  const data = JSON.parse(localStorage.getItem("anuncios"));
  if (data) {
   
      $divTabla.appendChild(crearTabla(data))
      
  }
 
}

const actulizarStorage = (data)=>{
 localStorage.setItem("anuncios",JSON.stringify(data));

}

function Spinner() {
  document.getElementById("divTabla").style.visibility = "hidden";
  //document.getElementById("loader").style.visibility = "visible";
  setSpinner(divSpinner, "./assets/perro.gif");
  myvar = setTimeout(showPage, 1750);
  
}

function showPage() {
  //document.getElementById("loader").style.visibility = "hidden";
  document.getElementById("divTabla").style.visibility = "visible";
  clearSpinner(divSpinner);
}


  
  const controles = $formulario.elements;
  
  for (let i = 0; i < controles.length; i++) {
    const control = controles.item(i);
    if (control.matches("input")) {
      if (
        control.matches("[type=titulo]") ||
        control.matches("[type=descripcion]") ||
        control.matches("[type=precio]") ||
        control.matches("[type=raza]")  


      ) {
        control.addEventListener("blur", validarCampoVacio);
        if (control.matches("[type=titulo]")) {
          control.addEventListener("input", validarString);
        } else if (control.matches("[type=precio]")) {
          control.addEventListener("input", validarPrecio);
        } else if (control.matches("[type=descripcion]")) {
            control.addEventListener("input", validarString);
        } else if (control.matches("[type=raza]")) {
            control.addEventListener("input", validarString);
        }
      } 
    }
  }
  

 

