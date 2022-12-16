import { crearTablaConID } from "./dinamicas.js";

let datos;
var divTabla = document.getElementById('divTabla');



const URL = "http://localhost:3000/anuncios";
const divSpinner = document.getElementById("spinner");
var myvar;
let xhr = new XMLHttpRequest();





window.addEventListener("click", (e) => {
    let d = document.getElementById("slctRaza").value;

    if (e.target.matches("#cbId")) {

        if (!e.target.checked && d === 'todo') {
            toggle("id");
            console.log(d);
            refrescarDiv(divTabla, crearTablaConID(datos.map(e => ({ titulo: e.titulo, descripcion: e.descripcion, animal: e.animal, precio: e.precio, raza: e.raza, nacimiento: e.nacimiento, vacuna: e.vacuna }))
            ));

        } else if (!e.target.checked && (d === 'GATO' || d === 'PERRO')) {
            toggle("id");
            console.log(d);
            refrescarDiv(divTabla, crearTablaConID(datos.filter((p) => p.animal === d)
                .map(e => ({ titulo: e.titulo, descripcion: e.descripcion, animal: e.animal, precio: e.precio, raza: e.raza, nacimiento: e.nacimiento, vacuna: e.vacuna }))
            ));
        } else if (e.target.checked && (d === 'GATO' || d === 'PERRO')) {

            console.log(d);
            refrescarDiv(divTabla, crearTablaConID(filterNecesario(datos,d)));
        }
        else {
            refrescarDiv(divTabla, crearTablaConID(datos));
        }

    } else if (e.target.matches("#cbTitulo")) {
        if (!e.target.checked && d === 'todo') {
            toggle("titulo");
            refrescarDiv(divTabla, crearTablaConID(datos.map(e => ({ id: e.id, descripcion: e.descripcion, animal: e.animal, precio: e.precio, raza: e.raza, nacimiento: e.nacimiento, vacuna: e.vacuna }))
            ));

        } else if (!e.target.checked  && (d === 'GATO' || d === 'PERRO')) {
            toggle("titulo");
            console.log(d);
            refrescarDiv(divTabla, crearTablaConID(datos.filter((p) => p.animal === d)
                .map(e => ({ id: e.id, descripcion: e.descripcion, animal: e.animal, precio: e.precio, raza: e.raza, nacimiento: e.nacimiento, vacuna: e.vacuna }))
            ));
        } else if (e.target.checked && (d === 'GATO' || d === 'PERRO')) {

            console.log(d);
            refrescarDiv(divTabla, crearTablaConID(filterNecesario(datos,d)));
        }
        else {
            refrescarDiv(divTabla, crearTablaConID(datos));
        }
    } else if (e.target.matches("#cbDescripcion")) {
        if (!e.target.checked && d === 'todo') {
            toggle("descripcion");
            refrescarDiv(divTabla, crearTablaConID(datos.map(e => ({ id: e.id, titulo: e.titulo, animal: e.animal, precio: e.precio, raza: e.raza, nacimiento: e.nacimiento, vacuna: e.vacuna }))
            ));

        } else if (!e.target.checked  && (d === 'GATO' || d === 'PERRO')) {
            toggle("descripcion");
            console.log(d);
            refrescarDiv(divTabla, crearTablaConID(datos.filter((p) => p.animal === d)
                .map(e => ({ id: e.id, titulo: e.titulo, animal: e.animal, precio: e.precio, raza: e.raza, nacimiento: e.nacimiento, vacuna: e.vacuna }))
            ));
        } else if (e.target.checked && (d === 'GATO' || d === 'PERRO')) {

            console.log(d);
            refrescarDiv(divTabla, crearTablaConID(filterNecesario(datos,d)));
        }
        else {
            refrescarDiv(divTabla, crearTablaConID(datos));
        }
    } else if (e.target.matches("#cbAnimal")) {
        if (!e.target.checked && d === 'todo') {
            toggle("animal");
            refrescarDiv(divTabla, crearTablaConID(datos.map(e => ({ id: e.id, titulo: e.titulo, descripcion: e.descripcion, precio: e.precio, raza: e.raza, nacimiento: e.nacimiento, vacuna: e.vacuna }))
            ));

        } else if (!e.target.checked  && (d === 'GATO' || d === 'PERRO')) {
            toggle("animal");
            console.log(d);
            refrescarDiv(divTabla, crearTablaConID(datos.filter((p) => p.animal === d)
                .map(e => ({ id: e.id, titulo: e.titulo, descripcion: e.descripcion, precio: e.precio, raza: e.raza, nacimiento: e.nacimiento, vacuna: e.vacuna }))
            ));
        } else if (e.target.checked && (d === 'GATO' || d === 'PERRO')) {

            console.log(d);
            refrescarDiv(divTabla, crearTablaConID(filterNecesario(datos,d)));
        }
        else {
            refrescarDiv(divTabla, crearTablaConID(datos));
        }
    } else if (e.target.matches("#cbPrecio")) {
        if (!e.target.checked && d === 'todo') {
            toggle("precio");
            refrescarDiv(divTabla, crearTablaConID(datos.map(e => ({ id: e.id, titulo: e.titulo, descripcion: e.descripcion, animal: e.animal, raza: e.raza, nacimiento: e.nacimiento, vacuna: e.vacuna }))
            ));

        } else if (!e.target.checked  && (d === 'GATO' || d === 'PERRO')) {
            toggle("precio");
            console.log(d);
            refrescarDiv(divTabla, crearTablaConID(datos.filter((p) => p.animal === d)
                .map(e => ({ id: e.id, titulo: e.titulo, descripcion: e.descripcion, animal: e.animal, raza: e.raza, nacimiento: e.nacimiento, vacuna: e.vacuna }))
            ));
        } else if (e.target.checked && (d === 'GATO' || d === 'PERRO')) {

            console.log(d);
            refrescarDiv(divTabla, crearTablaConID(filterNecesario(datos,d)));
        }
        else {
            refrescarDiv(divTabla, crearTablaConID(datos));
        }
    } else if (e.target.matches("#cbRaza")) {
        if (!e.target.checked && d === 'todo') {
            toggle("raza");
            refrescarDiv(divTabla, crearTablaConID(datos.map(e => ({ id: e.id, titulo: e.titulo, descripcion: e.descripcion, animal: e.animal, precio: e.precio, nacimiento: e.nacimiento, vacuna: e.vacuna }))
            ));

        } else if (!e.target.checked  && (d === 'GATO' || d === 'PERRO')) {
            toggle("raza");
            console.log(d);
            refrescarDiv(divTabla, crearTablaConID(datos.filter((p) => p.animal === d)
                .map(e => ({ id: e.id, titulo: e.titulo, descripcion: e.descripcion, animal: e.animal, precio: e.precio, nacimiento: e.nacimiento, vacuna: e.vacuna }))
            ));
        } else if (e.target.checked && (d === 'GATO' || d === 'PERRO')) {

            console.log(d);
            refrescarDiv(divTabla, crearTablaConID(filterNecesario(datos,d)));
        }
        else {
            refrescarDiv(divTabla, crearTablaConID(datos));
        }
    }
    else if (e.target.matches("#cbNacimiento")) {
        if (!e.target.checked && d === 'todo') {
            toggle("nacimiento");
            refrescarDiv(divTabla, crearTablaConID(datos.map(e => ({ id: e.id, titulo: e.titulo, descripcion: e.descripcion, animal: e.animal, precio: e.precio, raza: e.raza, vacuna: e.vacuna }))
            ));

        } else if (!e.target.checked  && (d === 'GATO' || d === 'PERRO')) {
            toggle("nacimiento");
            console.log(d);
            refrescarDiv(divTabla, crearTablaConID(datos.filter((p) => p.animal === d)
                .map(e => ({ id: e.id, titulo: e.titulo, descripcion: e.descripcion, animal: e.animal, precio: e.precio, raza: e.raza, vacuna: e.vacuna }))
            ));
        } else if (e.target.checked && (d === 'GATO' || d === 'PERRO')) {

            console.log(d);
            refrescarDiv(divTabla, crearTablaConID(filterNecesario(datos,d)));
        }
        else {
            refrescarDiv(divTabla, crearTablaConID(datos));
        }
    }
    else if (e.target.matches("#cbVacuna")) {
        if (!e.target.checked && d === 'todo') {
            toggle("vacuna");
            refrescarDiv(divTabla, crearTablaConID(datos.map(e => ({ id: e.id, titulo: e.titulo, descripcion: e.descripcion, animal: e.animal, precio: e.precio, raza: e.raza, nacimiento: e.nacimiento }))
            ));

        } else if (!e.target.checked  && (d === 'GATO' || d === 'PERRO')) {
            toggle("vacuna");
            console.log(d);
            refrescarDiv(divTabla, crearTablaConID(datos.filter((p) => p.animal === d)
                .map(e => ({ id: e.id, titulo: e.titulo, descripcion: e.descripcion, animal: e.animal, precio: e.precio, raza: e.raza, nacimiento: e.nacimiento }))
            ));
        } else if (e.target.checked && (d === 'GATO' || d === 'PERRO')) {

            console.log(d);
            refrescarDiv(divTabla, crearTablaConID(filterNecesario(datos,d)));
        }
        else {
            refrescarDiv(divTabla, crearTablaConID(datos));
        }
    }
    promedio();

})

function filterNecesario(arr,animal){

    return  arr.filter(p => p.animal === animal)
    .map(e => ({ id: e.id, titulo: e.titulo, descripcion: e.descripcion, animal: e.animal, precio: e.precio, raza: e.raza, nacimiento: e.nacimiento, vacuna: e.vacuna }));
}

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



xhr.onreadystatechange = function () {
    if (this.readyState == 4) {


        if (xhr.status >= 200 && xhr.status < 300) {

            //console.log(xhr);

            datos = JSON.parse(this.responseText);
            console.log(datos);
            Spinner();
            divTabla.appendChild(crearTablaConID(datos));
            promedio();


        } else {
            console.error(`Error: ${xhr.status} - ${xhr.statusText}`);
        }
    }
}
xhr.open('get', URL);
xhr.send();


function promedio() {
    var price = 0;
    var promedio = 0;
    var contador = 0;
    $('table tbody tr').each(function () {
        var rate = +$(this).find("td:nth-last-child(4)").text();


        price = price + rate;
    })

    //cargo el tbody
    datos.forEach((element, index) => {
        contador = contador + 1;

    });
    promedio = price / contador;
    document.getElementById('IPromedio').value = promedio;

    console.log(promedio);
    console.log(contador);
}

/*const crearTablaConID = (data) => {
    const $tabla = document.createElement("table");
    const $thead = document.createElement("thead");
    const $tbody = document.createElement("tbody");

    $tabla.classList.add("table");
    $tabla.classList.add("table-striped");
    $tabla.classList.add("table-dark");
    $tabla.classList.add("table-hover");
    $tabla.classList.add("table-bordered");
    $tabla.classList.add("table-responsive-md");
    $tabla.classList.add("text-center");
    $tabla.id = "miTabla";


    $thead.classList.add("thead-dark");
    $thead.classList.add("text-capitalize");
    const $cabecera = document.createElement("tr");
    //agarro el primer elemento del array y lo recorro para obtener el nombre de las llaves
    //cargo el thead
    for (const key in data[0]) {
        //me salteo el id
        // if (key !== "id") {
        const $th = document.createElement("th");
        //a travez de un metodo // largo
        const contenido = document.createTextNode(key);
        //const checkBox = document.createElement("input");
        //checkBox.type = "checkbox";
        //checkBox.id = key;
        //checkBox.classList.add("ml-2")
        //checkBox.checked = true;
        $th.appendChild(contenido);
        //$th.appendChild(checkBox);
        $cabecera.appendChild($th);

        //}

    }
    $thead.appendChild($cabecera);
    $tabla.appendChild($thead);

    //cargo el tbody
    data.forEach((element, index) => {
        const $tr = document.createElement("tr");
        for (const key in element) {
            //if (key === "id") {
            //$tr.setAttribute("data-id", element[key]);
            //} else {
            const $td = document.createElement("td");
            //la linea de abajo reemplaza a las siguiente dos:
            // const contenido =  document.createTextNode(key);
            //th.appendChild(contenido);
            $td.textContent = element[key];
            $tr.appendChild($td);
            //}

        }
        $tbody.appendChild($tr);
    });

    $tabla.appendChild($tbody);

    return $tabla;
}*/

function filtrarRaza(arr, animal) {
    return arr.filter(p => p.animal === animal);
}



function refrescarDiv(div, tabla) {
    while (div.hasChildNodes()) {
        div.removeChild(div.firstElementChild);
    }
    div.appendChild(tabla);

}


//hace que todos los checkboxs menos el pasado por parámetro
//queden en true
function toggle(checkBox) {

    var inputs = document.getElementsByTagName('input');

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type == 'checkbox' && inputs[i].name != checkBox) {
            inputs[i].checked = true;

        }
    }
}


function filterRaza() {
    const d = document.getElementById("slctRaza").value;
    console.log(d);
    if (d == 'todo') {
        refrescarDiv(divTabla, crearTablaConID(datos));
    } else {
        refrescarDiv(divTabla, crearTablaConID(filtrarRaza(datos, d)));
    }

}





