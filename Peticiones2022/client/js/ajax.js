const URL = "http://localhost:3000/personas";

const divSpinner = document.getElementById("spinner");

//lo correcto seria que le llegue la URL como parámetros
const getPersonas = () => {

    setSpinner(divSpinner, "../assets/basketball.gif");


    //mi peticion
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", () => {
        //programamos el callback


        //cuando tenga una respuesta a mi peticion
        if (xhr.readyState == 4) {


            if (xhr.status >= 200 && xhr.status < 300) {

                //console.log(xhr);

                const data = JSON.parse(xhr.responseText);

                console.log(data);

            } else {
                console.error(`Error: ${xhr.status} - ${xhr.statusText}`);
            }

            clearSpinner(divSpinner);
        }




    });

    //en que método y a donde
    xhr.open("GET", URL);

    xhr.send();

};

const getPersona = (id) => {

    setSpinner(divSpinner, "../assets/basketball.gif");


    //mi peticion
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", () => {
        //programamos el callback


        //cuando tenga una respuesta a mi peticion
        if (xhr.readyState == 4) {


            if (xhr.status >= 200 && xhr.status < 300) {

                //console.log(xhr);

                const data = JSON.parse(xhr.responseText);

                console.log(data);

            } else {
                console.error(`Error: ${xhr.status} - ${xhr.statusText}`);
            }

            clearSpinner(divSpinner);
        }




    });

    //en que método y a donde
    xhr.open("GET", URL + "/" + id);

    xhr.send();

};


const createPersona = () => {


    const nuevaPersona = {
        nombre: "Julio",
        sexo: "Hombre"
    };

    setSpinner(divSpinner, "../assets/basketball.gif");


    //mi peticion
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", () => {
        //programamos el callback


        //cuando tenga una respuesta a mi peticion
        if (xhr.readyState == 4) {


            if (xhr.status >= 200 && xhr.status < 300) {

                //console.log(xhr);

                const data = JSON.parse(xhr.responseText);
                alert(data.nombre,data.sexo);
                console.log(data);

            } else {
                console.error(`Error: ${xhr.status} - ${xhr.statusText}`);
            }

            clearSpinner(divSpinner);
        }




    });

    //en que método y a donde
    xhr.open("POST", URL);
    xhr.setRequestHeader("Content-Type", "application/json");
     xhr.send(JSON.stringify(nuevaPersona));

};

const updatePersona = () => {


    const persona = {
        id: 31,
        nombre: "Julia",
        sexo: "Mujer"
    };

    setSpinner(divSpinner, "../assets/basketball.gif");


    //mi peticion
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", () => {
        //programamos el callback


        //cuando tenga una respuesta a mi peticion
        if (xhr.readyState == 4) {


            if (xhr.status >= 200 && xhr.status < 300) {

                //console.log(xhr);

                const data = JSON.parse(xhr.responseText);
                alert(data.nombre,data.sexo);
                console.log(data);

            } else {
                console.error(`Error: ${xhr.status} - ${xhr.statusText}`);
            }

            clearSpinner(divSpinner);
        }




    });

    //en que método y a donde
    xhr.open("PUT", URL + "/" + persona.id);
    xhr.setRequestHeader("Content-Type", "application/json");
     xhr.send(JSON.stringify(persona));

};

const deletePersona = (id) => {

    setSpinner(divSpinner, "../assets/basketball.gif");


    //mi peticion
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", () => {
        //programamos el callback


        //cuando tenga una respuesta a mi peticion
        if (xhr.readyState == 4) {


            if (xhr.status >= 200 && xhr.status < 300) {

                //console.log(xhr);

                const data = JSON.parse(xhr.responseText);

                console.log(data);

            } else {
                console.error(`Error: ${xhr.status} - ${xhr.statusText}`);
            }

            clearSpinner(divSpinner);
        }




    });

    //en que método y a donde
    xhr.open("DELETE", URL + "/" + id);

    xhr.send();

};



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
