//URL Api
const API = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

//Obtener los resultados de la API
const getData = (API) => {
  return fetch(API)
    .then((response) => response.json())
    .then((json) => {
      pokedata(json.results), paginacion(json.next, json.previous);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};

// const pokedata
const pokedata = (data) => {
  let html="";
  document.getElementById("datosPersonajes").innerHTML="";
  data.forEach((pj) => {
    const URL = pj.url;
    return fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        llenarDatos(json,html);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  });
};

//Dibujar cards de personajes
const llenarDatos = (data,html) => {

  html += '<div class="col mt-5">';
  html += '<div class="card" style="width: 18rem;">';
  html += ` <img src="${data.sprites.other.dream_world.front_default}" width="300" height="250" class="card-img-top" alt="${data.name}">`;
  html += '<div class="card-body">';
  html += `<h5 class="card-title">Nombre: ${data.name}</h5>`;
  html += `<h5 class="card-title">${data.weight}</h5>`;
  html += `<h5 class="card-title">${data.height}</h5>`;
  html += "</div>";
  html += "</div>";
  html += "</div>";

  document.getElementById("datosPersonajes").innerHTML += html;
};

//Paginación
const paginacion = (datanext, dataprevious) => {
  let prevDisabled = "";
  let nextDisabled = "";

  let html = `<li class="page-item ${
    dataprevious == null ? (prevDisabled = "disabled") : (prevDisabled = "")
  }"><a class="page-link" onclick="getData('${dataprevious}')">Previous</a></li> <li class="page-item ${
    datanext == null ? (nextDisabled = "disabled") : (nextDisabled = "")
  }" ><a class="page-link" onclick="getData('${datanext}')">Next</a></li>`;

  document.getElementById("paginacion").innerHTML = html;
};

//se ejecuta la API
getData(API);
