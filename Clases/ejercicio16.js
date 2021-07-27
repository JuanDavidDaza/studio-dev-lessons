//variables globales
let datos =document.getElementById("datos");

const nombreUsuario = () =>{
    let nombre=prompt("Ingrese tu nombre");
    alert("tu nombre es "+nombre);
    console.log("tu nombre es "+nombre);
};


// Eventos - Oneclic
datos.onclick=function () {
    nombreUsuario();

}


