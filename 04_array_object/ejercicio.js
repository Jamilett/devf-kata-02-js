// Recorrer un arreglo e imprimir sus elementos

var animales = [{
        nombre: "Vaca",
        comestible: true,
    },
    {
        nombre: "Aguila",
        comestible: false,
    },
    {
        nombre: "Murcielago",
        comestible: true,
    }
];

for (var i = 0; i < animales.length; i++) {
    console.log(animales[i]);
}

animales.forEach(i => console.log(i)); // Ciclo forEach