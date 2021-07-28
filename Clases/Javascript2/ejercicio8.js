//ejercicios con el if
let edad = prompt("ingresa tu edad");
let terminos = prompt("escribe Y para aceptar o N para rechazar");
let resultado = false;

if (terminos === "Y") {
  resultado = true;
} else {
  resultado = false;
}

switch (terminos) {
  case "Y":
    resultado = true;
    break;
  case "N":
    resultado = false;
    break;
  default:
    break;
}

// operador ternario - solo se puede aplicar con dos resultados
terminos === "Y" ? (resultado = true) : (resultado = false);

if (edad >= "18") {
  alert("permiso de ver peliculas violentas");
} else {
  alert("no puedes ver peliculas violentas");
}

edad >= "18" ? alert("permiso de ver peliculas violentas") : alert("no puedes ver peliculas violentas");