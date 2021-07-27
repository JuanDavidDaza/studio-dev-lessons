//Ingresar una ciudad y debe responder la app con el departamento
// variable - if/ese
// 4 ciudades o pueblos - 4 departamentos

let ciudad = prompt("Ingresa por favor una ciudad");
ciudad = ciudad.toLowerCase();
//alert(ciudad);

if (ciudad == "cali") {
  alert("el departamento de la Ciudad de Cali es Valle del Cauca");
} else if (ciudad == "medellin" || ciudad == "medellín") {
  alert("el departamento de la Ciudad de Medellín es Antioquia");
} else if (ciudad == "pereira") {
  alert("el departamento de la Ciudad de Pereira es Risaralda");
} else if (ciudad == "ibague" || ciudad == "ibagué") {
  alert("el departamento de la Ciudad de Ibagué es Tolima");
} else {
  alert("Por favor ingrese una ciudad valida");
}
