



export const crearTabla = (data)=>{
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
    if(key !== "id"){
        const $th = document.createElement("th");
        //a travez de un metodo // largo
        const contenido =  document.createTextNode(key);
        $th.appendChild(contenido);
        $cabecera.appendChild($th);
        
    }
       
   }
   $thead.appendChild($cabecera);
   $tabla.appendChild($thead);

   //cargo el tbody
   data.forEach((element,index) => {
        const $tr = document.createElement("tr");
        for (const key in element) {
            if (key === "id") {
                $tr.setAttribute("data-id",element[key]);
            }else{
                const $td = document.createElement("td");
                //la linea de abajo reemplaza a las siguiente dos:
                // const contenido =  document.createTextNode(key);
                //th.appendChild(contenido);
                $td.textContent = element[key];
                $tr.appendChild($td);
            }
          
        }
        $tbody.appendChild($tr);
   });
   
   $tabla.appendChild($tbody);

    return $tabla; 
}


export const crearTablaConID = (data) => {
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
}

