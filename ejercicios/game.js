// Variables de opciones
/* var piedra = 1;
var papel = 2;
var tijera = 3; */

let opcionUsuario = prompt("Elige una opción: Piedra = 1 , Papel = 2 , Tijera = 3 :D")
opcionUsuario = Number(opcionUsuario); // Convertir String a Number

// Math.floor(Math.random() * 10);     // returns a random integer from 0 to 9
// Math.floor(Math.random() * 101);    // returns a random integer from 0 to 100
// Math.floor(Math.random() * 10) + 1; // returns a random integer from 1 to 10 (both included)

let opcionRandom = Math.floor(Math.random() * 3) + 1; // Genera un numero entre 1 y 3 

if (opcionUsuario === 1) { // Opción PIEDRA
    if (opcionRandom === 1) {
        alert("Tú = piedra" + "\n" + "Máquina = piedra" + "\n" + "¡EMPATE! :)");
    } else if (opcionRandom === 2) {
        alert("Tú = piedra" + "\n" + "Máquina = papel" + "\n" + "¡PERDISTE! :(")
    } else if (opcionRandom === 3) {
        alert("Tú = piedra" + "\n" + "Máquina = tijera" + "\n" + "¡GANASTE! :D")
    }
} else if (opcionUsuario === 2) { // Opción PAPEL
    if (opcionRandom === 1) {
        alert("Tú = papel" + "\n" + "Máquina = piedra" + "\n" + "¡GANASTE! :D");
    } else if (opcionRandom === 2) {
        alert("Tú = papel" + "\n" + "Máquina = papel" + "\n" + "¡EMPATE! :)")
    } else if (opcionRandom === 3) {
        alert("Tú = papel" + "\n" + "Máquina = tijera" + "\n" + "¡PERDISTE! :(")
    }
} else if (opcionUsuario === 3) { // Opción TIJERA
    if (opcionRandom === 1) {
        alert("Tú = tijera" + "\n" + "Máquina = piedra" + "\n" + "¡PERDISTE! :(");
    } else if (opcionRandom === 2) {
        alert("Tú = tijera" + "\n" + "Máquina = papel" + "\n" + "¡GANASTE! :D")
    } else if (opcionRandom === 3) {
        alert("Tú = tijera" + "\n" + "Máquina = tijera" + "\n" + "¡EMPATE! :)")
    }
} else {
    alert("Ingresa un número válido ¬¬")
}