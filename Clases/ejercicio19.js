//menu

let op = document.getElementById("op");
const operaciones = () => {
  let op = prompt(
    "Escribe: \n 1 - Suma \n 2 - Resta \n 3 - Multiplicación \n 4 - División "
  );
  if (op !== "1" && op !== "2" && op !== "3" && op !== "4") {
    alert("Por favor ingresar una opción del 1 al 4");
  } else {
    let num1 = parseFloat(prompt("Ingrese numero 1"));
    let num2 = parseFloat(prompt("Ingrese numero 2"));
    let resultado = 0; // null - undefine - non

    if (op === "1") {
      resultado = num1 + num2;
    }
    if (op === "2") {
      resultado = num1 - num2;
    }
    if (op === "3") {
      resultado = num1 * num2;
    }
    if (op === "4") {
      if (num2 === 0) {
        return alert("No se puede divir por Cero");
      } else {
        resultado = num1 / num2;
      }
    }
    return alert("El resultado es: " + resultado);
  }
};
op.onclick= function () {
    operaciones();
}


