//variables globales
let letra = document.getElementById("letra");
let numero = document.getElementById("numero");
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

const fnA1 = () => {
  if (letra.innerHTML === "ABCDEFGHIJ") {
    numero.innerHTML = "1";
  } else {
    if (letra.innerHTML === "") {
      letra.innerHTML = "A";
    } else {
      alert("Faltan letras");
    }
  }
};

const fnA2 = () => {
  if (letra.innerHTML === "ABCDEFGHIJ") {
    if (numero.innerHTML === "1") {
      numero.innerHTML += "2";
    } else {
      alert("Faltan numeros");
    }
  } else {
    if (letra.innerHTML === "A") {
      letra.innerHTML += "B";
    } else {
      alert("Faltan letras");
    }
  }
};

const fnA3 = () => {
  if (letra.innerHTML === "ABCDEFGHIJ") {
    if (numero.innerHTML === "12") {
      numero.innerHTML += "3";
    } else {
      alert("Faltan numeros");
    }
  } else {
    if (letra.innerHTML === "AB") {
      letra.innerHTML += "C";
    } else {
      alert("Faltan letras");
    }
  }
};

const fnA4 = () => {
  if (letra.innerHTML === "ABCDEFGHIJ") {
    if (numero.innerHTML === "123") {
      numero.innerHTML += "4";
    } else {
      alert("Faltan numeros");
    }
  } else {
    if (letra.innerHTML === "ABC") {
      letra.innerHTML += "D";
    } else {
      alert("Faltan letras");
    }
  }
};

const fnA5 = () => {
  if (letra.innerHTML === "ABCDEFGHIJ") {
    if (numero.innerHTML === "1234") {
      numero.innerHTML += "5";
    } else {
      alert("Faltan numeros");
    }
  } else {
    if (letra.innerHTML === "ABCD") {
      letra.innerHTML += "E";
    } else {
      alert("Faltan letras");
    }
  }
};

const fnA6 = () => {
  if (letra.innerHTML === "ABCDEFGHIJ") {
    if (numero.innerHTML === "12345") {
      numero.innerHTML += "6";
    } else {
      alert("Faltan numeros");
    }
  } else {
    if (letra.innerHTML === "ABCDE") {
      letra.innerHTML += "F";
    } else {
      alert("Faltan letras");
    }
  }
};

const fnA7 = () => {
  if (letra.innerHTML === "ABCDEFGHIJ") {
    if (numero.innerHTML === "123456") {
      numero.innerHTML += "7";
    } else {
      alert("Faltan numeros");
    }
  } else {
    if (letra.innerHTML === "ABCDEF") {
      letra.innerHTML += "G";
    } else {
      alert("Faltan letras");
    }
  }
};

const fnA8 = () => {
  if (letra.innerHTML === "ABCDEFGHIJ") {
    if (numero.innerHTML === "1234567") {
      numero.innerHTML += "8";
    } else {
      alert("Faltan numeros");
    }
  } else {
    if (letra.innerHTML === "ABCDEFG") {
      letra.innerHTML += "H";
    } else {
      alert("Faltan letras");
    }
  }
};

const fnA9 = () => {
  if (letra.innerHTML === "ABCDEFGHIJ") {
    if (numero.innerHTML === "12345678") {
      numero.innerHTML += "9";
    } else {
      alert("Faltan numeros");
    }
  } else {
    if (letra.innerHTML === "ABCDEFGH") {
      letra.innerHTML += "I";
    } else {
      alert("Faltan letras");
    }
  }
};
const fnA0 = () => {
  if (letra.innerHTML === "ABCDEFGHIJ") {
    if (numero.innerHTML === "123456789") {
      numero.innerHTML += "0";
    } else {
      alert("Faltan numeros");
    }
  } else {
    if (letra.innerHTML === "ABCDEFGHI") {
      letra.innerHTML += "J";
    } else {
      alert("Faltan letras");
    }
  }
};

// Eventos - Oneclic
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

btn0.onclick = function () {
  fnA0();
};
