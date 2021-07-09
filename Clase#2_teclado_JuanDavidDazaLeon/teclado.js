//Variables
let entrada = document.getElementById("entrada");

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

let borrar = document.getElementById("borrar");

let btnq = document.getElementById("btnq");
let btnw = document.getElementById("btnw");
let btne = document.getElementById("btne");
let btnr = document.getElementById("btnr");
let btnt = document.getElementById("btnt");
let btny = document.getElementById("btny");
let btnu = document.getElementById("btnu");
let btni = document.getElementById("btni");
let btno = document.getElementById("btno");
let btnp = document.getElementById("btnp");

let enter = document.getElementById("enter");

let btna = document.getElementById("btna");
let btns = document.getElementById("btns");
let btnd = document.getElementById("btnd");
let btnf = document.getElementById("btnf");
let btng = document.getElementById("btng");
let btnh = document.getElementById("btnh");
let btnj = document.getElementById("btnj");
let btnk = document.getElementById("btnk");
let btnl = document.getElementById("btnl");
let btnñ = document.getElementById("btnñ");

let btnz = document.getElementById("btnz");
let btnx = document.getElementById("btnx");
let btnc = document.getElementById("btnc");
let btnv = document.getElementById("btnv");
let btnb = document.getElementById("btnb");
let btnn = document.getElementById("btnn");
let btnm = document.getElementById("btnm");

let espacio = document.getElementById("espacio");

//let buttons = document.querySelectorAll(".btn-dark");

const Agregar = (btn) => {
  if (btn == enter) {
    entrada.innerHTML += "<br>";
  } else if (btn === espacio) {
    entrada.innerHTML += "   ";
  } else {
    let tecla = $(btn).val();
    entrada.innerHTML += tecla;
  }
};

btn1.onclick = function () {
  Agregar(btn1);
};

espacio.onclick = function () {
  Agregar(espacio);
};

enter.onclick = function () {
  Agregar(enter);
};

btn1.onclick = function () {
  Agregar(btn1);
};

btn2.onclick = function () {
  Agregar(btn2);
};

btn3.onclick = function () {
  Agregar(btn3);
};

btn4.onclick = function () {
  Agregar(btn4);
};

btn5.onclick = function () {
  Agregar(btn5);
};

btn6.onclick = function () {
  Agregar(btn6);
};

btn8.onclick = function () {
  Agregar(btn8);
};

btn9.onclick = function () {
  Agregar(btn9);
};

btn0.onclick = function () {
  Agregar(btn0);
};

btnq.onclick = function () {
  Agregar(btnq);
};

btnw.onclick = function () {
  Agregar(btnw);
};

btne.onclick = function () {
  Agregar(btne);
};

btnr.onclick = function () {
  Agregar(btnr);
};

btnt.onclick = function () {
  Agregar(btnt);
};

btny.onclick = function () {
  Agregar(btny);
};

btnu.onclick = function () {
  Agregar(btnu);
};

btni.onclick = function () {
  Agregar(btni);
};

btno.onclick = function () {
  Agregar(btno);
};

btnp.onclick = function () {
  Agregar(btnp);
};

btna.onclick = function () {
  Agregar(btna);
};

btns.onclick = function () {
  Agregar(btns);
};

btnd.onclick = function () {
  Agregar(btnd);
};

btnf.onclick = function () {
  Agregar(btnf);
};
btng.onclick = function () {
  Agregar(btng);
};

btnh.onclick = function () {
  Agregar(btnh);
};
btnj.onclick = function () {
  Agregar(btnj);
};
btnk.onclick = function () {
  Agregar(btnk);
};
btnl.onclick = function () {
  Agregar(btnl);
};
btnñ.onclick = function () {
  Agregar(btnñ);
};
btnz.onclick = function () {
  Agregar(btnz);
};
btnx.onclick = function () {
  Agregar(btnx);
};
btnc.onclick = function () {
  Agregar(btnc);
};
btnv.onclick = function () {
  Agregar(btnv);
};
btnb.onclick = function () {
  Agregar(btnb);
};
btnn.onclick = function () {
  Agregar(btnn);
};
btnm.onclick = function () {
  Agregar(btnm);
};
