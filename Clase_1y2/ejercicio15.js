// opereaciones - suma de dos numeros

const suma = () => {
  let num1 = parseFloat(prompt("Ingrese numero 1"));
  let num2 = parseFloat(prompt("Ingrese numero 2"));
  let resultado = num1 + num2;
  alert(resultado);
  console.log(resultado);
};

const resta = () => {
  let num1 = parseFloat(prompt("Ingrese numero 1"));
  let num2 = parseFloat(prompt("Ingrese numero 2"));
  let resultado = num1 - num2;
  alert(resultado);
  console.log(resultado);
};

const multiplicacion = () => {
  let num1 = parseFloat(prompt("Ingrese numero 1"));
  let num2 = parseFloat(prompt("Ingrese numero 2"));
  let resultado = num1 * num2;
  alert(resultado);
  console.log(resultado);
};

const division = () => {
  let num1 = parseFloat(prompt("Ingrese numero 1"));
  let num2 = parseFloat(prompt("Ingrese numero 2"));
  if (num2 === 0) {
    alert("no es posible dividir por 0");
  } else {
    let resultado = num1 / num2;
    alert(resultado);
    console.log(resultado);
  }
};
