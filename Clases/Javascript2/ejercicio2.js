//Insertar variables en texto "la hora es (variable)"

//toma la fecha actual del sistema
let fecha = new Date();

let anio = fecha.getFullYear();
let mes = fecha.getMonth() + 1;
let dia = fecha.getDate();
let hora = fecha.getHours() + ":" + fecha.getMinutes();

//let formatoFecha=anio + "/" + mes + "/" + dia + ": " + hora;
let formatoFecha = `El día es: ${dia} del ${mes} del año ${anio} y la hora actual es ${hora}`;



console.log(fecha);
console.log(formatoFecha);
