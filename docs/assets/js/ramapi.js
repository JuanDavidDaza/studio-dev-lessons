//URL Api
const API = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

//Obtener los resultados de la API
const getData = (API) => {
  return fetch(API)
    .then((response) => response.json())
    .then((json) => {
      llenarDatos(json.results), paginacion(json.next,json.previous);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};

//Dibujar cards de personajes
const llenarDatos = (data) => {
  let html = "";
  data.forEach((pj) => {
    html += '<div class="col mt-5">';
    html += '<div class="card" style="width: 18rem;">';
    //html += ` <img src="${pj.image}" class="card-img-top" alt="${pj.name}">`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${pj.name}</h5>`;
    html += ` <p class="card-text">URL: ${pj.url}</p>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });
  document.getElementById("datosPersonajes").innerHTML = html;
};

//Paginación
const paginacion = (datanext,dataprevious) => {
  let prevDisabled = "";
  let nextDisabled = "";

  let html = `<li class="page-item ${dataprevious == null?prevDisabled = "disabled":prevDisabled = ""}"><a class="page-link" onclick="getData('${dataprevious}')">Previous</a></li> <li class="page-item ${ datanext == null?nextDisabled = "disabled":nextDisabled = ""}" ><a class="page-link" onclick="getData('${datanext}')">Next</a></li>`;
 

  document.getElementById("paginacion").innerHTML = html;

};


//se ejecuta la API
getData(API);
