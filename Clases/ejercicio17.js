//variables globales
let datos =document.getElementById("datos");
let nombre = document.getElementById("nombre");


const nombreUsuario = () =>{
    let nombreUsuario=prompt("Ingrese tu nombre");
    nombre.innerHTML="Bienvenido/a "+nombreUsuario;
    
    console.log("tu nombre es "+nombre);
};


// Eventos - Oneclic
datos.onclick=function () {
    nombreUsuario();

}
