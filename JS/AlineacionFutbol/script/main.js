function cargar() {
    document.getElementById("div1").addEventListener("dragover", allowDrop);
    document.getElementById("div2").addEventListener("dragover", allowDrop);
    //document.getElementById("drag").addEventListener("dragstart", drag);
    document.getElementById("div2").addEventListener("drop", drop);
    document.getElementById("div1").addEventListener("drop", drop);
    createJugadores();
    createJugadoresSuplentes();
}

function allowDrop(ev) {

    //Permitir que reciba algún elemento
    ev.preventDefault();

}

var contenedor;


function drag(ev) {

    //Indicamos que valor y tipo de información vamos a arrastrar. En este caso texto e ID del elemento.
    ev.dataTransfer.setData("text", ev.target.id);

    contenedor = document.getElementById(ev.target.id).parentNode;



}

function drop(ev) {

    //Evitamos el comportamiento normal del navegador, que sería abrir el elemento en una nueva pestaña.
    ev.preventDefault();

    //Guardamos el elemento, llamado "text" en una variable.
    var data = ev.dataTransfer.getData("text");

    //Colgamos el elemeto arrastrado y soltado en el nuevo destino.
    // ev.target.firstChild;
    ev.target.appendChild(document.getElementById(data));

}

function createJugadores() {
    let jugadores = document.getElementById("div1");
    console.log(jugadores);
    for (let i = 0; i < 9; i++) {
        let divJugador = document.createElement("div");
        divJugador.classList.add("dragClass");
        divJugador.id = "drag" + i;
        divJugador.setAttribute('draggable', true);
        console.log(divJugador + [i]);
        divJugador.addEventListener("dragover", allowDrop);
        divJugador.addEventListener("dragstart", drag);
        divJugador.addEventListener("drop", drop);
        jugadores.appendChild(divJugador);
    }

}

function createJugadoresSuplentes() {
    let jugadores = document.getElementById("div2");
    console.log(jugadores);
    for (let i = 0; i < 9; i++) {
        let divJugador = document.createElement("div");
        divJugador.classList.add("dragClass1");
        divJugador.id = "drag" + i;
        divJugador.setAttribute('draggable', true);

        divJugador.addEventListener("dragover", allowDrop);
        divJugador.addEventListener("dragstart", drag);
        divJugador.addEventListener("drop", drop);
        jugadores.appendChild(divJugador);
    }

}
window.addEventListener("load", cargar);