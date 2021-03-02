// var numero = 10;

// //=== Compara caracteres y tipo de dato como equals

// if (numero < 10) {
//     console.log("es verdad");
// } else {
//     console.log("es falso");
// }

var num1 = prompt("Escribe un numero");
num1 = Number(num1);

if (num1 >= 0 || num1 <= 0) {
    if (num1 % 2 == 0) {
        console.log(num1 + ": es par");
    } else {
        console.log(num1 + ": es impar");
    }
} else {
    console.error("Error, ingresa un número valido")
}