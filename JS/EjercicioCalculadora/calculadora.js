var pantalla;
var Comprobaroperacion;

//Funcion onload, le decimos que cargue todo al iniciar el documento
window.onload = function() {

    pantalla = document.getElementById("pantalla");
    var botones = document.getElementsByClassName("boton");

    var resultadoEval;

    for (let i = 0; i < botones.length; i++) {
        //Al clickar el raton 
        botones[i].addEventListener("click", ComprobarOperacion);
        //Al mantener el raotn 
        botones[i].addEventListener("mousedown", sombraInterior);
        //Al parar de mantener (soltar) el raton
        botones[i].addEventListener("mouseup", quitarSombra);



    }


}

// Añadimos la clase para que se pongo la sombra intrior 
function sombraInterior() {
    this.classList.add("sombraInterior");
}
// Quitamos la clase para que se pongo la sombra intrior 
function quitarSombra() {

    this.classList.remove("sombraInterior");

}

// Comprobamos si es numero u  operacion
function ComprobarOperacion() {

    var escribir = this.innerText;

    if (isNaN(escribir)) {
        Operacion(escribir);
    } else {
        mostrar(escribir);
    }



}
// funcionescribir en la pantalla
function mostrar(escribir) {

    // Averiguar coma
    /*
        if (pantalla.value == 0) {
            pantalla.value = '0.';
        } else if (pantalla.value.indexOf('.') == -1) {
            pantalla.value += '.';
        }

    */

    if (pantalla.value != 0) {
        pantalla.value += escribir;
    } else {
        pantalla.value = escribir;
    }

    if (pantalla.value == "") {

        pantalla.value = "0"

    }

    this.resultadoEval = pantalla.value;

}

// Funcion asignar operación 
function Operacion(escribir) {

    let operacion = "";

    switch (escribir) {
        case "C":
            borrar();

            break;

        case "%":
            porcentaje();
            operacion = "%";
            break;

        case "«":
            borrarFlecha();
            break;

        case "/":

            operacion = "/";
            break;

        case "x":

            operacion = "*";
            break;

        case "-":

            operacion = "-";
            break;

        case "+":

            operacion = "+";
            break;

        case "()":

            operacion = "()";
            parentesis();
            break;

        case "=":

            calcular();
            break;

    }


    if (!isNaN(pantalla.value.substring(pantalla.value.length - 1, pantalla.value.length))) {

        mostrar(operacion);
    }

}

//funcion borrar pantalla, la iguala a 0
function borrar() {

    pantalla.value = "0";
}

//funcion porcentaje

function porcentaje() {


}

//funcion que borra de derecha a izquierda y de uno en uno
function borrarFlecha() {

    pantalla.value = pantalla.value.substring(0, pantalla.value.length - 1);

    if (pantalla.value == "") {

        pantalla.value = "0"

    }
}

// funcion calcular donde muestra el resultado
function calcular() {

    let resultado = eval(this.resultadoEval);

    pantalla.value = resultado;

}

// funcion para añadir parentesis 

function parentesis() {

    if (!pantalla.value.includes("(")) {
        pantalla.value = "(" + pantalla.value + ")";
    }


}



// funcion para el teclado 
document.addEventListener('keydown', function(event) {

    let teclaPulsada = event.key;


    switch (teclaPulsada) {
        case "c":
            borrar();
            break;
        case "Backspace":
            borrarFlecha();
            break;
        case "/":
            Operacion("/");
            break;
        case "*":
            Operacion("x");
            break;
        case "-":
            Operacion("-");
            break;
        case "+":
            Operacion("+");
            break;
        case "Enter":
            Operacion("=");
            break;
        case "p":
            parentesis();
            break;
    }

});

//Falta añadir teclas númericas también.