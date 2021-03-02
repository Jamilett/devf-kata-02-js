// Tipos de variables

var numerico = 10;
var cadena = "Cadena de Texto";
var booleano = true;

// Console log nos muestra output en consola
console.log("Tipo de variables");
console.log("numerico", numerico, typeof numerico);
console.log("cadena", cadena, typeof cadena);
console.log("booleano", booleano, typeof booleano);

var num1 = 100;
var num2 = 200;

var suma = num1 + num2;

console.log("Hola, yo estoy en consola");
console.log("El resultado de la suma es: ", suma);
console.error("El resultado de la suma es: ", suma); // Resultado en ROJO
console.warn("El resultado de la suma es: ", suma); // Resultado en AMARILLO
alert("Hola yo me pondré en un cuadro de alerta") // Cuadro de dialogo

var nombre = prompt("Cual es tu nombre?")
console.log("nombre", nombre)

var numero = "45";
console.log("valor", numero, typeof numero);
numero = Number(numero);
console.log("valor", numero, typeof numero);