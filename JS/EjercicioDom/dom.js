// Redondear el cuadrado y añadir tiempo de transicion de 0.5s
function HacerCirculo(Redondear) {

    Redondear.style.borderRadius = "50%";
    Redondear.style.transitionDuration = "1s";

}

// Quitar el redondeo de el circulo y volver al cuadrado en 0.5s
function QuitarCirculo(cuadrdoADesredondear) {

    cuadrdoADesredondear.style.borderRadius = "0%";
    cuadrdoADesredondear.style.transitionDuration = "1s";


}


// Boton de eliminar

function eliminarCuadrado(boton) {

    boton.parentNode.remove();

}

// Cambiar posicion sombra

function cambiarSombra(sombra) {

    sombra.style.boxShadow = "inset -16px  -20px 15px  -6px rgba(0, 0, 0, 0.75)";


}


// Volver a la sombra
function quitarSombra(sombra) {

    sombra.style.boxShadow = " 0px  0px 0px  0px rgba(0, 0, 0, 0.75)";


}