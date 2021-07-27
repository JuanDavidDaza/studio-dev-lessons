//ForEach - solo se utiliza para recorrer un array

let animales = ["perro", "gato", "serpiente", "lobo", "escorpion", "conejo"];

for (let a in animales){
    console.log(animales[a]);
}

//muestra el item
animales.forEach(animal => {
    console.log(animal);
});