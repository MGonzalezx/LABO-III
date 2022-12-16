
const anuncios = JSON.parse(localStorage.getItem("anuncios")) || [];

/* <h2>Casa terminados de lujo</h2>
    <p>Casa con diseño moderno, asi como tecnologia inteligente y amueblada</p>
    <p>u$s275.000</p>
    <ul>
        <li><img src="./images/raza.png" alt="raza"> <span>3</span> </li>
        <li><img src="./images/cigueña.png" alt="nacimiento"> <span>3</span> </li>
        <li><img src="./images/vacuna.png" alt="vacuna"> <span>4</span> </li>
    </ul>
    <br></br>
    <a href="#"></a><button>Ver Mascota</button>*/

/*anuncios.forEach(anuncio => {
    var contador = 65;
    contador++;
    crearArticulo(anuncio,contador)
    
});*/

var contador = 1;

for (let i = 0; i < anuncios.length; i++) {
    crearArticulo(anuncios[i], contador);
    contador++;
    
  }


function crearArticulo(anuncio, contador) {
    
    //var stringVar = String.fromCharCode(contador);
    var div = document.getElementById("articulo");
    var x = document.createElement("ARTICLE");
    x.setAttribute("class", "miArticulo" + contador);
   
    div.appendChild(x);
   
    var heading = document.createElement("H2");
    var txt1 = document.createTextNode(anuncio.titulo);
    heading.appendChild(txt1);
    document.getElementsByClassName("miArticulo" + contador)[0].appendChild(heading);

    var para = document.createElement("P");
    var txt2 = document.createTextNode(anuncio.descripcion);
    para.appendChild(txt2);
    document.getElementsByClassName("miArticulo"+contador)[0].appendChild(para);

    var para2 = document.createElement("P");
    var txt3 = document.createTextNode("$" + anuncio.precio);
    para2.appendChild(txt3);
    document.getElementsByClassName("miArticulo"+contador)[0].appendChild(para2);

    var ul = document.createElement("UL");
    ul.setAttribute('id', 'lista');

    var li = document.createElement('li');
    li.setAttribute('class', 'item');

    const img = document.createElement("img");
    img.setAttribute("src", "./images/raza.png");
    img.setAttribute("alt", "raza");
    const span = document.createElement("span");
    var txt4 = document.createTextNode("  " + anuncio.raza);
    span.appendChild(txt4);
    li.appendChild(img);
    li.appendChild(span);
    ul.appendChild(li);

    var li2 = document.createElement('li');
    li2.setAttribute('class', 'item');
    const img2 = document.createElement("img");
    img2.setAttribute("src", "./images/cigueña.png");
    img2.setAttribute("alt", "cigueña");
    const span2 = document.createElement("span");
    var txt5 = document.createTextNode("  " + anuncio.nacimiento);
    span2.appendChild(txt5);
    li2.appendChild(img2);
    li2.appendChild(span2);
    ul.appendChild(li2);

    var li3 = document.createElement('li');
    li3.setAttribute('class', 'item');
    const img3 = document.createElement("img");
    img3.setAttribute("src", "./images/vacuna.png");
    img3.setAttribute("alt", "vacuna");
    const span3 = document.createElement("span");
    var txt6 = document.createTextNode("  " + anuncio.vacuna);
    span3.appendChild(txt6);
    li3.appendChild(img3);
    li3.appendChild(span3);
    ul.appendChild(li3);

    document.getElementsByClassName("miArticulo"+contador)[0].appendChild(ul);

    var boton = document.createElement("BUTTON");
    boton.innerHTML = "Ver Mascota";
    boton.setAttribute("id", "boton");


    document.getElementsByClassName("miArticulo"+contador)[0].appendChild(boton);

    

}

window.addEventListener("click", (e) => {
    if (e.target.matches("button")) {
        window.open(
            "https://loremflickr.com/320/240",
            '_blank' // <- This is what makes it open in a new window.
          );
        
        

    }
});