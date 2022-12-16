import {
    validarCampoVacio,
    validarString,
    validarPrecio,
    validarNumero,
  } from "./validaciones.js";
  import Anuncio from "./anuncio.js";
  import {crearTabla} from  "./dinamicas.js";

var myvar;
const $divTabla = document.getElementById("divTabla");

const anuncios = JSON.parse(localStorage.getItem("anuncios")) || [];
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
      Spinner();
      $formulario.reset();
      CambiarVisibilidad();
      
  }else if(e.target.matches("#btnCancelar")){
    
    $formulario.reset();
    CambiarVisibilidad();
    
    
}

});


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
  const {txtId,txtTitulo,rdoTransaccion,txtDescripcion,txtPrecio,txtCantbanios,txtCantAutos,txtCantDormitorios} = $formulario;

  txtId.value = anuncio.id;
  txtTitulo.value = anuncio.titulo;
  rdoTransaccion.value = anuncio.transaccion;
  txtDescripcion.value = anuncio.descripcion;
  txtPrecio.value = anuncio.precio;
  txtCantbanios.value = anuncio.cantBanios;
  txtCantAutos.value = anuncio.cantAutos;
  txtCantDormitorios.value = anuncio.cantDormitorios;
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
    const {txtId,txtTitulo,rdoTransaccion,txtDescripcion,txtPrecio,txtCantbanios,txtCantAutos,txtCantDormitorios} = $formulario;

    const formAnuncio = new Anuncio(txtId.value,txtTitulo.value,rdoTransaccion.value,txtDescripcion.value,txtPrecio.value,txtCantbanios.value,txtCantAutos.value,txtCantDormitorios.value);

    if(formAnuncio.id === ''){
        //alta
        formAnuncio.id = Date.now();
        handlerCreate(formAnuncio);
        Spinner();
    }else{
        //update
        handlerUpdate(formAnuncio);
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
  document.getElementById("loader").style.visibility = "visible";
  myvar = setTimeout(showPage, 1750);
}

function showPage() {
  document.getElementById("loader").style.visibility = "hidden";
  document.getElementById("divTabla").style.visibility = "visible";
}

  
  const controles = $formulario.elements;
  
  for (let i = 0; i < controles.length; i++) {
    const control = controles.item(i);
    if (control.matches("input")) {
      if (
        control.matches("[type=titulo]") ||
        control.matches("[type=descripcion]") ||
        control.matches("[type=precio]") ||
        control.matches("[type=cantbaños]") ||
        control.matches("[type=cantautos]") ||
        control.matches("[type=cantdormitorios]") 


      ) {
        control.addEventListener("blur", validarCampoVacio);
        if (control.matches("[type=titulo]")) {
          control.addEventListener("input", validarString);
        } else if (control.matches("[type=precio]")) {
          control.addEventListener("input", validarPrecio);
        } else if (control.matches("[type=cantbaños]")) {
            control.addEventListener("input", validarNumero);
        } else if (control.matches("[type=cantautos]")) {
            control.addEventListener("input", validarNumero);
        } else if (control.matches("[type=cantdormitorios]")) {
            control.addEventListener("input", validarNumero);
        } 
      } 
    }
  }
  