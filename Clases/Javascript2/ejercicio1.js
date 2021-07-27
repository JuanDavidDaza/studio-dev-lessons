//Fechas

//toma la fecha actual del sistema
let fecha = new Date();

let anio = fecha.getFullYear();
let mes = fecha.getMonth() + 1;
let dia = fecha.getDate();
let hora = fecha.getHours()+":"+ fecha.getMinutes();

console.log(fecha);
console.log(anio + "/" + mes + "/" + dia + ": " + hora);
