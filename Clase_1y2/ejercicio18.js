//variables globales
let letra = document.getElementById("letra");
let numero = document.getElementById("numero");
let btnA1 = document.getElementById("btnA1");
let btnB2 = document.getElementById("btnB2");

let boton0 = 0;
let boton1 = 0;
let boton2 = 0;
let boton3 = 0;
let boton4 = 0;
let boton5 = 0;
let boton6 = 0;
let boton7 = 0;
let boton8 = 0;
let boton9 = 0;

const fnA1 = () => {
  if (letra.innerHTML === "AB") {
    numero.innerHTML = "1";
  } else {
    if (letra.innerHTML === "") {
      letra.innerHTML = "A";
    } else {
      alert("Ya esta la A");
    }
  }
};

const fnB2 = () => {
  if (letra.innerHTML === "AB") {
    if (numero.innerHTML === "1") {
      numero.innerHTML += "2";
    } else {
      alert("Ingrese el 1");
    }
  } else {
    if (letra.innerHTML === "A") {
      letra.innerHTML += "B";
    } else {
      alert("Ingrese la A");
    }
  }
};

// Eventos - Oneclic
btnA1.onclick = function () {
  fnA1();
};

btnB2.onclick = function () {
  fnB2();
};
