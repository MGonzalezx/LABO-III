const URL = "http://localhost:3000/personas";

const divSpinner = document.getElementById("spinner");

const getPersonas = () => {
  setSpinner(divSpinner, "./assets/rocket.gif");

  fetch(URL)
    .then((res) =>
      res.ok
        ? res.json()
        : Promise.reject(`Error: ${res.status} - ${res.statusText}`)
    )
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      clearSpinner(divSpinner);
    });
};

const getPersonasAsync = async () => {
  try {
    setSpinner(divSpinner, "./assets/rocket.gif");
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error(`${res.status}-${res.statusText}`);
    }
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  } finally {
    clearSpinner(divSpinner);
  }
};

const getPersona = (id) => {
  setSpinner(divSpinner, "./assets/rocket.gif");

  fetch(URL + `/${id}`)
    .then((res) =>
      res.ok
        ? res.json()
        : Promise.reject(`Error: ${res.status} - ${res.statusText}`)
    )
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      clearSpinner(divSpinner);
    });
};

const updatePersona = (persona) => {
  setSpinner(divSpinner, "./assets/rocket.gif");

  fetch(URL + `/${persona.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(persona),
  })
    .then((res) =>
      res.ok
        ? res.json()
        : Promise.reject(`Error: ${res.status} - ${res.statusText}`)
    )
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      clearSpinner(divSpinner);
    });
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

const deletePersona = (id) => {
  console.log("Inicio");
  setSpinner(divSpinner, "./assets/rocket.gif");

  fetch(URL + `/${id}`, {
    method: "DELETE",
  })
    .then((res) =>
      res.ok
        ? res.json()
        : Promise.reject(`Error: ${res.status} - ${res.statusText}`)
    )
    .then((data) => {
      console.log(data);
      alert("Se cumplio la promesa");
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      clearSpinner(divSpinner);
    });

    console.log("fin");
    alert("freno");
};
