/* // --------------- Recorrer del 10 al 1,000 de 250 en 250 -----------
for (var i = 10; i <= 1000; i += 250) {
    console.log(i);
}
// ------------- Recorrer del 0 al -500 de 10 en 10 ----------------
for (var i = 0; i >= -500; i -= 10) {
    console.log(i);
}
// ------------- Recorrer del 1000 al 0 de 50 en 50 -----------------
for (var i = 1000; i >= 0; i -= 50) {
    console.log(i);
} */

// ---------------------- Fizz Buzz ---------------------------
// Recorrer del 1 al 100 , si el numero es divisible entre 3 ---> output = numero + fizz
// Si es divisible entre 5 ---> output = numero + buzz
// Si es divisible entre 3 y 5 ---> output = numero + fizzbuzz

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " fizzbuzz");
    } else if (i % 3 === 0) {
        console.log(i + " fizz");
    } else if (i % 5 === 0) {
        console.log(i + " buzz");
    } else {
        console.log(i);
    }
}