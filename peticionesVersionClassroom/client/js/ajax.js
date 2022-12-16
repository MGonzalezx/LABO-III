const URL = "http://localhost:3000/personas";

const divSpinner = document.getElementById("spinner");

const getPersonas = () => {
  setSpinner(divSpinner, "./assets/ghost.gif");

  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState == 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
      } else {
        console.error(`Error: ${xhr.status} - ${xhr.statusText}`);
      }
      clearSpinner(divSpinner);
    }
  });

  xhr.open("GET", URL);

  xhr.send();
};

const createPersona = () => {
  const nuevaPersona = {
    nombre: "Julio",
    sexo: "hombre",
  };

  setSpinner(divSpinner, "./assets/ghost.gif");

  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState == 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.responseText);
        alert(data.nombre, data.sexo);
        console.log(data);
      } else {
        console.error(`Error: ${xhr.status} - ${xhr.statusText}`);
      }
      clearSpinner(divSpinner);
    }
  });

  xhr.open("POST", URL);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(nuevaPersona));
};

const getPersona = (id) => {
  setSpinner(divSpinner, "./assets/ghost.gif");

  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState == 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
      } else {
        console.error(`Error: ${xhr.status} - ${xhr.statusText}`);
      }
      clearSpinner(divSpinner);
    }
  });

  xhr.open("GET", URL + "/" + id);

  xhr.send();
};

const deletePersona = (id) => {
    setSpinner(divSpinner, "./assets/ghost.gif");
  
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () => {
      if (xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          const data = JSON.parse(xhr.responseText);
          console.log(data);
        } else {
          console.error(`Error: ${xhr.status} - ${xhr.statusText}`);
        }
        clearSpinner(divSpinner);
      }
    });
  
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
  while (div.hasChildNodes()) {
    div.removeChild(div.firstElementChild);
  }
};
const updatePersona = () => {
    const persona = {
      id:31,
      nombre: "Julia",
      sexo: "mujer",
    };
  
    setSpinner(divSpinner, "./assets/ghost.gif");
  
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () => {
      if (xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          const data = JSON.parse(xhr.responseText);
          alert(data.nombre, data.sexo);
          console.log(data);
        } else {
          console.error(`Error: ${xhr.status} - ${xhr.statusText}`);
        }
        clearSpinner(divSpinner);
      }
    });
  
    xhr.open("PUT", URL + "/" + persona.id);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(persona));
  };