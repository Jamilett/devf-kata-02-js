function saludar(name) { // Función que se llamará desde el html
    name = prompt("Escribe tu nombre :)");
    if (typeof name !== "string") {
        return alert("Tienes que poner un texto ¬¬");
    } else {
        return alert("¡Hola " + name + "! ¿Cómo estás?");
    }
}
// id: divSum (funcionalidad con EventListener)

var sum = document.getElementById("btnSumar");

function suma() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var resultado = num1 + num2;

    document.getElementById("resultado").innerHTML = resultado; // innerHTML concatena el resultado al parrafo del label, le asigna el valor al contenido de un div
}

sum.addEventListener('click', suma);


// Id: divOperations (funcionalidad con onclick)
function sumar(num1, num2) {
    num1 = Number(prompt("Escribe Num1:"));
    num2 = Number(prompt("Escribe Num2:"));
    return alert("La suma es " + (num1 + num2));
}

function squareArea(side) {
    side = Number(prompt("Vas a sacar el área de un CUADRADO :)" + "\n" + "Escribe la medida del lado en cm:"));
    if (typeof side !== "number" || isNaN(side)) {
        return alert("Tienes que poner un número ¬¬");
    } else {
        return alert("El área de tu cuadrado es --> " + (side * side) + " cm");
    }
}

function rectangleArea(side1, side2) {
    side1 = Number(prompt("Vas a sacar el área de un RECTANGULO :)" + "\n" + "Escribe la medida del lado 1 en cm:"));
    side2 = Number(prompt("Vas a sacar el área de un RECTANGULO :)" + "\n" + "Escribe la medida del lado 2 en cm:"));
    if (typeof side1 !== "number" || typeof side2 !== "number") {
        return alert("Tienes que poner un número ¬¬");
    } else if (side1 === side2) {
        return alert("Eso no es un rectángulo, es un cuadrado :O")
    } else {
        return alert("El área de tu rectángulo es --> " + (side1 * side2) + " cm");
    }
}

function triangleArea(base, altura) {
    base = Number(prompt("Vas a sacar el área de un TRIANGULO :)" + "\n" + "Escribe la medida de la base en cm:"));
    altura = Number(prompt("Vas a sacar el área de un TRIANGULO :)" + "\n" + "Escribe la medida de la altura en cm:"));
    if (typeof base !== "number" || typeof altura !== "number") {
        return alert("Tienes que poner un número ¬¬");
    } else {
        return alert("El área de tu triangulo es --> " + ((base * altura) / 2) + " cm");
    }
}