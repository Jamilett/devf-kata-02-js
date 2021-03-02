// Arreglos

var colores = ["morado", "verde", "amarillo", "azul", "rojo"];
console.log(colores);
console.log(colores[1]);

// Métodos
// .push() // Arega un nuevo elemento al arreglo a la última posición

colores.push("negro");
colores.push("rosa");
console.log(colores);

// .pop() // Elimina el último valor del arreglo
colores.pop();
console.log(colores);
// .slice(start, end)
// The slice() method returns the selected elements in an array, as a new array object.
// The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
// Note: The original array will not be changed.
var coloresFrios = colores.slice(0, 2);
console.log(coloresFrios);
// .splice(index que indica la posición para agregar o eliminar items, howmany, item1, ..., itemX)
/* The splice() method adds/removes items to/from an array, and returns the removed item(s).
Note: This method changes the original array. */
coloresFrios.splice(2, 0, "gris", "negro");
console.log(coloresFrios);


// ----------------------------- OBJECTS -------------------------
var persona = {
    nombre: "Ricardo",
    edad: 22, // Edades tipo num
    cel: "56727887", // Tel tipo String
    musica: {
        rock: "Kiss",
        pop: "Miley",
        indie: {
            alternativo: "Tame Impala",
        }
    },
    peliculas: ["RF1", "RF2", "RF3"],
};
// Acceder a atributos
console.log(persona.edad);
console.log(persona.nombre);
console.log(persona.musica.pop);
console.log(persona.musica.indie.alternativo);
console.log(persona.peliculas[1]);

// Arreglos de objetos
var animales = [{ // Un objeto se representa con {}
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