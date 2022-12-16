let slctRaza = document.querySelector("#slctRaza");
let checkBox = document.querySelector("#checkBoxes");

import {
  validarCampoVacio,
  validarString,
  validarPrecio,
  validarNumero,
} from "./validaciones.js";
import Anuncio_Mascota from "./anuncio.js";
import { crearTabla } from "./dinamicas.js";

const URL = "http://localhost:3000/anuncios";

let datos;
var myvar;
const $divTabla = document.getElementById("divTabla");

//const anuncios = JSON.parse(localStorage.getItem("anuncios")) || [];
const anunciosFiltrados = JSON.parse(localStorage.getItem("anunciosFiltrados")) || [];
const divSpinner = document.getElementById("spinner");


let xhr = new XMLHttpRequest();


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
//actualizarTabla();



window.addEventListener("click", (e) => {


  if (e.target.matches("td")) {
    console.log(e.target.parentElement.dataset.id);

    let id = e.target.parentElement.dataset.id;

    ///Primero parcial///
    //let anuncio = getAnuncio(id);
    //cargarFormulario( anuncios.find((anuncio)=> anuncio.id == id));



    ////Segundo parcial//
    getAnuncio(id);

    document.getElementById("btnDelete").style.visibility = "visible";
    document.getElementById("btnCancelar").style.visibility = "visible";

  } else if (e.target.matches("#btnDelete")) {
    handlerDelete(parseInt($formulario.txtId.value));
    deleteAnuncioFetch(parseInt($formulario.txtId.value));
    Spinner();
    $formulario.reset();
    CambiarVisibilidad();

  } else if (e.target.matches("#btnCancelar")) {

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

function cargarFormulario(anuncio) {
  const { txtId, txtTitulo, txtDescripcion, rdoAnimal, txtPrecio, txtRaza, txtFechaNacimiento, vacuna } = $formulario;

  txtId.value = anuncio.id;
  txtTitulo.value = anuncio.titulo;
  txtDescripcion.value = anuncio.descripcion;
  rdoAnimal.value = anuncio.animal;
  txtPrecio.value = anuncio.precio;
  txtRaza.value = anuncio.raza;
  txtFechaNacimiento.value = anuncio.nacimiento;
  vacuna.value = anuncio.vacuna;
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
  const { txtId, txtTitulo, txtDescripcion, rdoAnimal, txtPrecio, txtRaza, txtFechaNacimiento, vacuna } = $formulario;

  const formAnuncio = new Anuncio_Mascota(txtId.value, txtTitulo.value, txtDescripcion.value, rdoAnimal.value, txtPrecio.value, txtRaza.value, txtFechaNacimiento.value, vacuna.value);

  if (formAnuncio.id === '') {
    //alta
    formAnuncio.id = Date.now();
    handlerCreate(formAnuncio);
    createAnuncioFetch(formAnuncio);
    Spinner();
  } else {
    //update
    handlerUpdate(formAnuncio);
    updateAnuncioFetch(formAnuncio);
    Spinner();
    CambiarVisibilidad();
  }


  $formulario.reset();
});



const handlerCreate = (nuevoAnuncio) => {
  console.log(anuncios);
  anuncios.push(nuevoAnuncio);
  actulizarStorage(anuncios);
  //actualizarTabla();
}

const handlerUpdate = (anuncioEditado) => {

  let indice = anuncios.findIndex((anuncio) => {
    return anuncio.id == anuncioEditado.id;
  });

  anuncios.splice(indice, 1);
  anuncios.push(anuncioEditado);
  actulizarStorage(anuncios);
  //actualizarTabla();
}

const handlerDelete = (id) => {
  let indice = anuncios.findIndex((anuncio) => {
    return anuncio.id == id;
  });

  anuncios.splice(indice, 1);
  actulizarStorage(anuncios);
  //actualizarTabla();
}

function actualizarTabla() {
  while ($divTabla.hasChildNodes()) {
    $divTabla.removeChild($divTabla.firstElementChild);
  }
  const data = JSON.parse(localStorage.getItem("anuncios"));
  if (data) {

    $divTabla.appendChild(crearTabla(data))

  }

}

const actulizarStorage = (data) => {
  localStorage.setItem("anuncios", JSON.stringify(data));

}

function Spinner() {
  document.getElementById("divTabla").style.visibility = "hidden";
  //document.getElementById("loader").style.visibility = "visible";
  setSpinner(divSpinner, "./assets/perro.gif");
  myvar = setTimeout(showPage, 2750);

}

function SpinnerFormulario() {
  document.getElementById("divTabla").style.visibility = "hidden";
  //document.getElementById("loader").style.visibility = "visible";
  setSpinner(divSpinner, "./assets/perro.gif");

  const span = document.createElement("span");
  var txt = document.createTextNode("Cargando formulario....");
  span.setAttribute('class', 'fw-bold');

  span.appendChild(txt);
  divSpinner.appendChild(span);
  myvar = setTimeout(showPage, 2750);

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


/////////////////////////////////////////////// SEGUNDO PARCIAL///////////////////////////////////////////////////////////////

slctRaza.addEventListener("click", () => {
  let pMaximo = 0;
  if (slctRaza.value === "todo") {
    refrescarDiv(divTabla, crearTabla(datos));
    promedio();
    porcentajeVacunados();
    maximo();
    minimo
    toggle();
    actulizarStorage(refrescarDiv(divTabla, crearTabla(datos)));
  } else {
    refrescarDiv(divTabla, crearTabla(filtrarRaza(datos, slctRaza.value)));
    promedio();
    porcentajeVacunados();
    maximo();
    minimo
    toggle();
    handlerUpdate(filtrarRaza(datos, slctRaza.value));

  }

})

function toggle() {

  var inputs = $('input[type=checkbox]');

  for (var i = 0; i < inputs.length; i++) {
     
          inputs[i].checked = true;

      
  }
}

function promedio() {
  var price = 0;
  var promedio = 0;
  var contador = 0;
  $('table tbody tr').each(function () {
    var rate = +$(this).find("td:nth-last-child(4)").text();


    price = price + rate;
  })


  datos.forEach((element, index) => {
    contador = contador + 1;

  });
  promedio = price / contador;
  document.getElementById('IPromedio').value = promedio;

  console.log(promedio);
  console.log(contador);
}

function porcentajeVacunados() {
  var promedio = 0;
  var contadorVacunados = 0;
  var contadorPerro = 0;
  var contadorGato = 0;
  var totalAnimales = 0;
  var contadorNoVacunados = 0;
  var contador = 0;
  $('table tbody tr').each(function () {
    
    if($(this).find("td:nth-last-child(1)").text() == "si"){
      contadorVacunados = contadorVacunados +1;
    }else{
      contadorNoVacunados = contadorNoVacunados +1;
    }

    if($(this).find("td:nth-last-child(5)").text() == "PERRO"){
      contadorPerro = contadorPerro +1;
    }else if($(this).find("td:nth-last-child(5)").text() == "GATO"){
      contadorGato = contadorGato +1;
    }
    
    
  })

  

  totalAnimales = contadorGato + contadorPerro;

 
  if(contadorVacunados == 1 && contador == 2 && contadorNoVacunados == 1 && slctRaza == "todos"){
    contador = 1;
  }else if(contadorVacunados == 1 && contador == 2 && contadorNoVacunados == 1 && slctRaza == "PERRO"){
    contador = 2;
  }
  promedio = (contadorVacunados*100) / totalAnimales;
  document.getElementById('IVacunados').value = promedio;

}

function maximo() {

  var pMaximo = 0;
  
  pMaximo = parseInt(precioMaximo(datos));
 
  document.getElementById('IMaximo').value = pMaximo;

  
}

function minimo() {

  var pMinimo = 0;
  
  pMinimo = precioMinimo(datos);
  document.getElementById('IMinimo').value = pMinimo;

  
}
function precioMaximo(array){
 

  return array.reduce((prev, actual) => prev.precio > actual.precio ? prev : actual, { sueldo: 0 
}).precio;
}

function precioMinimo(array){
  
  return array.reduce((prev, actual) => prev.precio < actual.precio ? prev : actual, { sueldo: 0 
}).precio;
}

function filtrarRaza(arr, animal) {
  return arr.filter(p => p.animal === animal);
}



$(document).ready(function () {

  var ids = [];

  let $focusInput = $('.form-check-input');



  $('.form-check-input').click(function () {
    ids = $('input[type=checkbox]:not(:checked)').map(function () {
      return $(this).attr('id');
    }).get();

	
    let valuesNotChecked = $focusInput.filter(':not(:checked)').map((i, el) => el.value).get();
    let valuesChecked = $focusInput.filter(':checked').map((i, el) => el.value).get();

    console.log(valuesNotChecked);


    console.log($(this).attr('id'));

    checkBox.addEventListener("click", (e) => {

      var table = document.getElementById('miTabla');
      var row = table.rows; // Getting the rows

      for (var i = 0; i < row[0].cells.length; i++) {

        // Getting the text of columnName
        var str = row[0].cells[i].innerHTML;
        for (const value of valuesNotChecked) {
          // If 'Geek_id' matches with the columnName 
          if (str.search(value) != -1) {
            for (var j = 0; j < row.length; j++) {

              // Deleting the ith cell of each row
              //row[j].deleteCell(i);
              
                row[j].cells[i].style.display = "none";
              
             
            }
          }
          
        }

        for (const value of valuesChecked) {
          // If 'Geek_id' matches with the columnName 
          if (str.search(value) != -1) {
            for (var j = 0; j < row.length; j++) {

              // Deleting the ith cell of each row
              //row[j].deleteCell(i);
              
                row[j].cells[i].style.display = "table-cell";
              
             
            }
          }
          
        }

      }

      if (e.target.matches( '#' + $(this).attr('id'))) {
        console.log("Hola");
        

      } else {
        console.log("chau");

      }

    })

  });





});





function refrescarDiv(div, tabla) {
  while (div.hasChildNodes()) {
    div.removeChild(div.firstElementChild);
  }
  div.appendChild(tabla);


}



/////////////////////////////////////////////////////////////////////
xhr.onreadystatechange = function () {
  if (this.readyState == 4) {


    if (xhr.status >= 200 && xhr.status < 300) {

      //console.log(xhr);
      let pMaximo = 0;
      datos = JSON.parse(this.responseText);
      console.log(datos);
      //Spinner();
      divTabla.appendChild(crearTabla(datos));
      promedio();
      maximo();
      minimo();
      porcentajeVacunados();


    } else {
      console.error(`Error: ${xhr.status} - ${xhr.statusText}`);
    }
  }
}
xhr.open('get', URL);
xhr.send();


//////////////////////////////////// FETCH //////////////////////////////////////

const createAnuncioFetch = (nuevoAnuncio) => {



  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevoAnuncio),
  })
    .then((res) => {

      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status} - ${res.statusText}`);
      }

    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {

    })


};

const updateAnuncioFetch = (anuncioEditado) => {



  fetch(URL + "/" + anuncioEditado.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(anuncioEditado),
  })
    .then((res) => {

      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status} - ${res.statusText}`);
      }

    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {

    })


};

const deleteAnuncioFetch = (id) => {



  fetch(URL + "/" + id, {
    method: "DELETE",
  })
    .then((res) => {

      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status} - ${res.statusText}`);
      }

    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {

    })


};
////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// AXIOS //////////////////////////////////////
const getAnuncio = (id) => {

  SpinnerFormulario();

  axios(URL + "/" + id)
    .then((res) => {


      console.log(res.data);
      cargarFormulario(res.data);

    })
    .catch((err) => {
      console.error(err.message);
    })
    .finally(() => {

    })


};
////////////////////////////////////////////////////////////////////////////////////////////////////////




