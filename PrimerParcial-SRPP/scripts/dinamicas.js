



export const crearTabla = (data)=>{
    const $tabla = document.createElement("table");
    const $thead = document.createElement("thead");
    const $tbody = document.createElement("tbody");

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