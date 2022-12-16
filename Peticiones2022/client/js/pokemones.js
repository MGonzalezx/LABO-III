const URL = "https://pokeapi.co/api/v2/pokemon/";

const divSpinner = document.getElementById("spinner");
const imgPokemon = document.getElementById("imgPokemon");



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

};

const getPersonasAsync= async()=>{
    let nombre = document.getElementById("nombre").value;
    try {
        divSpinner.classList.add("ball");
        //rellenamos el nombre y parte final de la URL con el nombre
        // que nos llega del imput.
        fetch(URL + nombre).then((res)=>(res.ok?res.json():Promise.reject(res.status)))
        .then((data)=>{
            //console.log(data);
            imgPokemon.setAttribute("src", data.sprites.front_default);

        })
    } catch (error) {
        
    }finally{
        setTimeout(() => {
            divSpinner.classList.remove("ball");
        }, 1000);
       
    }
}


