import { movies } from "./peliculas.js";

//console.log(movies);

const $lista = document.getElementById("lista");




const crearItem =(lista)=>{
    const $fragmento = document.createDocumentFragment();

    lista.forEach((movie)=>{
        const $li = document.createElement("li");
        const $texto = document.createTextNode(movie.titulo);
    
        $li.appendChild($texto);
        $li.setAttribute("data-id",movie.id);
        $fragmento.appendChild($li);
    })
    
    return $fragmento;
}

$lista.appendChild( crearItem(movies));