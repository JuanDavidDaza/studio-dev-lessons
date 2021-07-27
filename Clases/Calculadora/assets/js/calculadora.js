
let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");

let borrar = document.getElementById("btn<=");

let pantalla = document.getElementById("pantalla");

let op = prompt("ingrese \n 1 para sumar \n 2 para restar \n 3 para multiplicar \n 4 para dividir \n 5 para valor absoluto |x|");

while (op !== "1" && op !== "2" && op !== "3" && op !== "4" && op !== "5") {
    alert("Favor ingrese una opción valida entre 1 al 5");
    op = prompt("ingrese 1 para sumar \n 2 para restar \n 3 para multiplicar \n 4 para dividir \n 5 para valor absoluto |x|");
}


// numeros

const fnA0 = () => {
  pantalla.innerHTML += "0";
};

const fnA1 = () => {
  pantalla.innerHTML += "1";
};

const fnA2 = () => {
  pantalla.innerHTML += "2";
};

const fnA3 = () => {
  pantalla.innerHTML += "3";
};

const fnA4 = () => {
  pantalla.innerHTML += "4";
};

const fnA5 = () => {
  pantalla.innerHTML += "5";
};

const fnA6 = () => {
  pantalla.innerHTML += "6";
};

const fnA7 = () => {
  pantalla.innerHTML += "7";
};

const fnA8 = () => {
  pantalla.innerHTML += "8";
};

const fnA9 = () => {
  pantalla.innerHTML += "9";
};

const fnborrar = () => {
  pantalla.innerHTML = "";
};

// Eventos - Oneclic

btn0.onclick = function () {
  fnA0();
};

btn1.onclick = function () {
  fnA1();
};

btn2.onclick = function () {
  fnA2();
};

btn3.onclick = function () {
  fnA3();
};

btn4.onclick = function () {
  fnA4();
};

btn5.onclick = function () {
  fnA5();
};

btn6.onclick = function () {
  fnA6();
};

btn7.onclick = function () {
  fnA7();
};

btn8.onclick = function () {
  fnA8();
};

btn9.onclick = function () {
  fnA9();
};

borrar.onclick = function () {
  fnborrar();
};