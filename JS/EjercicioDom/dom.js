// Redondear el cuadrado y añadir tiempo de transicion de 0.5s
function HacerCirculo(Redondear) {


    Redondear.style.borderRadius = "50%";

    Redondear.style.transitionDuration = "0.5s";
}

// Quitar el redondeo de el circulo y volver al cuadrado en 0.5s
function QuitarCirculo(cuadrdoADesredondear) {


    cuadrdoADesredondear.style.borderRadius = "0%";


    cuadrdoADesredondear.style.transitionDuration = "0.5s";
}

// Eliminar cuadrado seleccionado
function eliminarCuadrado(Cuadrado) {


    var elementoCuadrado = document.getElementsByClassName("Cuadrado");


    var padreCuadrados = document.getElementsByClassName("general");


    padreCuadrados.removeChild(elementoCuadrado[0]);

}