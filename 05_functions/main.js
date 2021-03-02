// function nombreFuncion([parametros]){
// instrucciones
//}
// nombreFuncion() : Así se manda llamar :)

function saludar(name, lastName) {
    if (typeof name !== "string" || typeof lastName !== "string") {
        return console.log("Tienes que poner un string");
    } else {
        return console.log("hola", name + " " + lastName);
    }
}

saludar("Jam", "Samperio")
saludar(2, "jam")
saludar("Jam", "2")

function sumar(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return console.error("Tienes que poner un number");
    } else {
        var resultado = num1 + num2;
        return console.log("La suma es: " + resultado);
    }
}
sumar(1, 3)

function restar(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return console.error("Tienes que poner un number");
    } else {
        // var resultado = num1 - num2;
        return console.log("La resta es: " + (num1 - num2));
    }
}
restar(5, 3)

function validarEdad(edad) {
    if (typeof edad !== "number") {
        return console.error("Tienes que poner un number");
    } else if (edad >= 18) {
        console.log("Eres mayor de edad :(");
    } else {
        console.warn("Eres menor de edad :)");
    }
}
validarEdad(18)

function validarSigno(numero) {
    if (typeof numero !== "number") {
        return console.error("Tienes que poner un number");
    } else if (Math.sign(numero) === 1) {
        return console.log(numero + " es positivo");
    } else if (Math.sign(numero) === -1) {
        return console.log(numero + " es negativo");
    } else {
        return console.log(numero + " es CERO");
    }
}
validarSigno(0)

function sign(numero) {
    if (typeof numero !== "number") {
        return console.error("Tienes que poner un number");
    } else if (numero > 0) {
        return console.log(numero + " es positivo");
    } else if (numero < 0) {
        return console.log(numero + " es negativo");
    } else {
        return console.log(numero + " es CERO");
    }
}

function isVocal(letra) {
    letra = letra.toLowerCase();
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        return console.log(letra + " es VOCAL");
    } else {
        return console.log(letra + " es CONSONANTE");
    }
}