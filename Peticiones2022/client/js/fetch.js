const URL = "http://localhost:3000/personas";

const divSpinner = document.getElementById("spinner");

//lo correcto seria que le llegue la URL como parámetros
const getPersonas = () => {

    setSpinner(divSpinner, "../assets/plant.gif");

    fetch(URL)
    .then((res)=>{
        
        if(res.ok){
            return res.json();
        }else{
            return Promise.reject(`Error: ${res.status} - ${res.statusText}`);
        }

    })
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
       console.error(err);
    })
    .finally(()=>{
        clearSpinner(divSpinner);
    })
    

};


const getPersonasAsync = async() => {

    
    try {
        setSpinner(divSpinner, "../assets/plant.gif");
        const res = await fetch(URL);
        //si ok es false
        if(!res.ok){
            throw new Error(`Error: ${res.status} - ${res.statusText}`)
        }
        const data = await res.json();
        console.log(data);

    } catch (err) {
        console.error(err);
    }finally{
         clearSpinner(divSpinner);
    }


};

const getPersona = (id) => {

    setSpinner(divSpinner, "../assets/plant.gif");

    fetch(URL + "/" + id)
    .then((res)=>{
        
        if(res.ok){
            return res.json();
        }else{
            return Promise.reject(`Error: ${res.status} - ${res.statusText}`);
        }

    })
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
       console.error(err);
    })
    .finally(()=>{
        clearSpinner(divSpinner);
    })
    

};

const updatePersona = (persona) => {

    setSpinner(divSpinner, "../assets/plant.gif");

    fetch(URL + "/" + persona.id,{
        method: "PUT",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(persona),
    })
    .then((res)=>{
        
        if(res.ok){
            return res.json();
        }else{
            return Promise.reject(`Error: ${res.status} - ${res.statusText}`);
        }

    })
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
       console.error(err);
    })
    .finally(()=>{
        clearSpinner(divSpinner);
    })
    

};

const deletePersona = (id) => {

    setSpinner(divSpinner, "../assets/plant.gif");

    fetch(URL + "/" + id,{
        method: "DELETE",
    })
    .then((res)=>{
        
        if(res.ok){
            return res.json();
        }else{
            return Promise.reject(`Error: ${res.status} - ${res.statusText}`);
        }

    })
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
       console.error(err);
    })
    .finally(()=>{
        clearSpinner(divSpinner);
    })
    

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
