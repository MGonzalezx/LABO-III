let datos;
let divTabla = document.getElementById('divTabla');
let btnSexo = document.querySelector("#btnSexo");
let btnMap = document.querySelector("#btnMap");
/*const cbId = document.getElementById('id');
const cbNombre = document.querySelector('#nombre');
const cbApellido = document.querySelector('#apellido');
const cbEmail = document.querySelector('#email');
const cbSexo = document.querySelector('#sexo');
const cbSueldo = document.querySelector('#sueldo');*/


let xhr = new XMLHttpRequest();



btnSexo.addEventListener("click", () => {

    refrescarDiv(divTabla, crearTablaConID(filtrarSexo(datos, 'Male')));
})

btnMap.addEventListener("click", () => {

    refrescarDiv(divTabla, crearTablaConID(mapearMails(datos)));
})

window.addEventListener("click", (e) => {

    if (e.target.matches("#cbId")) {
       
       if(!e.target.checked){
        toggle("id");
        refrescarDiv(divTabla, crearTablaConID(datos.map(e => ({nombre: e.nombre, apellido: e.apellido, email: e.email, sexo: e.sexo, sueldo: e.sueldo }))));
       
       }else{
        refrescarDiv(divTabla, crearTablaConID(datos));
       }
       
    } else if (e.target.matches("#cbNombre")) {
        if(!e.target.checked){
            toggle("nombre");
            refrescarDiv(divTabla, crearTablaConID(datos.map(e => ({id: e.id, apellido: e.apellido, email: e.email, sexo: e.sexo, sueldo: e.sueldo }))));
           
           }else{
            refrescarDiv(divTabla, crearTablaConID(datos));
           }
    } else if (e.target.matches("#cbApellido")) {
        if(!e.target.checked){
            toggle("apellido");
            refrescarDiv(divTabla, crearTablaConID(datos.map(e => ({id: e.id, nombre: e.nombre, email: e.email, sexo: e.sexo, sueldo: e.sueldo }))));
           
           }else{
            refrescarDiv(divTabla, crearTablaConID(datos));
           }
    } else if (e.target.matches("#cbEmail")) {
        if(!e.target.checked){
            toggle("email");
            refrescarDiv(divTabla, crearTablaConID(datos.map(e => ({id: e.id, nombre: e.nombre, apellido: e.apellido, sexo: e.sexo, sueldo: e.sueldo }))));
           
           }else{
            refrescarDiv(divTabla, crearTablaConID(datos));
           }
    } else if (e.target.matches("#cbSexo")) {
        if(!e.target.checked){
            toggle("sexo");
            refrescarDiv(divTabla, crearTablaConID(datos.map(e => ({id: e.id, nombre: e.nombre, apellido: e.apellido, email: e.email, sueldo: e.sueldo }))));
           
           }else{
            refrescarDiv(divTabla, crearTablaConID(datos));
           }
    } else if (e.target.matches("#cbSueldo")) {
        if(!e.target.checked){
            toggle("sueldo");
            refrescarDiv(divTabla, crearTablaConID(datos.map(e => ({id: e.id, nombre: e.nombre, apellido: e.apellido, email: e.email, sexo: e.sexo }))));
           
           }else{
            refrescarDiv(divTabla, crearTablaConID(datos));
           }
    }
})


xhr.onreadystatechange = function () {
    if (this.readyState == 4) {


        if (xhr.status >= 200 && xhr.status < 300) {

            //console.log(xhr);

            datos = JSON.parse(this.responseText);
            console.log(datos);
            divTabla.appendChild(crearTablaConID(datos));

        } else {
            console.error(`Error: ${xhr.status} - ${xhr.statusText}`);
        }
    }
}
xhr.open('get', './js/data.json');
xhr.send();



const crearTablaConID = (data) => {
    const $tabla = document.createElement("table");
    const $thead = document.createElement("thead");
    const $tbody = document.createElement("tbody");

    $tabla.classList.add("table");
    $tabla.classList.add("table-striped");
    $tabla.classList.add("table-hover");
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
}

function filtrarSexo(arr, sexo) {
    return arr.filter(p => p.sexo === sexo);
}

function mapearMails(arr) {
    return arr.map(e => ({ email: e.email, sueldo: e.sueldo }));
}



function refrescarDiv(div, tabla) {
    while (div.hasChildNodes()) {
        div.removeChild(div.firstElementChild);
    }
    div.appendChild(tabla);

}



function toggle(checkBox) {

    var inputs = document.getElementsByTagName('input');

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type == 'checkbox' && inputs[i].name != checkBox) {
            inputs[i].checked = true;

        }
    }
}


