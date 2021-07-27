//Array

let personas = [];
let animales = ["perro", "gato", "serpiente", "lobo", "escorpion", "conejo"];
console.log(animales.length);
animales[6] = "dragon";
animales.push("ardilla");
animales.unshift("tigre");

//eliminar item
animales.aplice(5, 1);

for (let i = 0; i < animales.length; i++) {
  console.log(animales[i]);
}
