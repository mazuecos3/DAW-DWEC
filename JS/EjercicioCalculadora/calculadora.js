var pantalla;



var Comprobaroperacion;






window.onload = function() {

    pantalla = document.getElementById("pantalla");
    var botones = document.getElementsByClassName("boton");

    var resultadoEval;

    for (let i = 0; i < botones.length; i++) {

        botones[i].addEventListener("click", ComprobarOperacion);
        botones[i].addEventListener("mousedown", sombraInterior);
        botones[i].addEventListener("mouseup", quitarSombra);



    }


}


function sombraInterior() {
    this.classList.add("sombraInterior");
}

function quitarSombra() {

    this.classList.remove("sombraInterior");

}


function ComprobarOperacion() {

    var escribir = this.innerText;



    if (isNaN(escribir)) {
        Operacion(escribir);
    } else {
        mostrar(escribir);
    }



}

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


function borrar() {

    pantalla.value = "0";
}



function porcentaje() {


}

function borrarFlecha() {

    pantalla.value = pantalla.value.substring(0, pantalla.value.length - 1);

    if (pantalla.value == "") {

        pantalla.value = "0"

    }
}


function calcular() {

    let resultado = eval(this.resultadoEval);

    pantalla.value = resultado;

}

function parentesis() {

    if (!pantalla.value.includes("(")) {
        pantalla.value = "(" + pantalla.value + ")";
    }


}