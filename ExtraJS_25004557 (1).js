
var jugar = true;

while (jugar) {
    var numeroComputadora = Math.floor(Math.random() * 9) + 1;
    var numeroUsuario = parseInt(prompt("Escribe un número entre 3 y 6:"));

    while (numeroUsuario < 3 || numeroUsuario > 6) {
        alert("El número debe estar entre 3 y 6.");
        numeroUsuario = parseInt(prompt("Escribe un número entre 3 y 6:"));
    }

    if (numeroUsuario > numeroComputadora) {
        alert("La computadora eligió " + numeroComputadora + ", tú elegiste " + numeroUsuario + ". Tu número es mayor.");
    } else if (numeroUsuario < numeroComputadora) {
        alert("La computadora eligió " + numeroComputadora + ", tú elegiste " + numeroUsuario + ". Tu número es menor.");
    } else {
        alert("¡Adivinaste! La computadora eligió " + numeroComputadora + ", y tú también elegiste " + numeroUsuario + ".");
    }

    var respuesta = prompt("¿Quieres jugar otra vez? Escribe SI o NO:").toUpperCase();
    if (respuesta !== "SI") {
        jugar = false;
    }
}

alert("Gracias por jugar. ¡Hasta la próxima!");
