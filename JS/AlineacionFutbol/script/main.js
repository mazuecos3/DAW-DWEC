var cuentamierda = 0;

function cargar() {

    createJugadores();
    createJugadoresSuplentes();
}

function allowDrop(ev) {

    //Permitir que reciba algún elemento
    ev.preventDefault();
    //console.log(ev);

}

var contenedor;


function drag(ev) {

    //Indicamos que valor y tipo de información vamos a arrastrar. En este caso texto e ID del elemento.
    ev.dataTransfer.setData("text", ev.target.id);

    contenedor = document.getElementById(ev.target.id).parentNode;
    console.log(contenedor);

}

function drop(ev) {

    //Evitamos el comportamiento normal del navegador, que sería abrir el elemento en una nueva pestaña.
    ev.preventDefault();
    console.log(ev);
    //Guardamos el elemento, llamado "text" en una variable.
    var data = ev.dataTransfer.getData("text");

    //Colgamos el elemeto arrastrado y soltado en el nuevo destino.
    // ev.target.firstChild;
    ev.target.appendChild(document.getElementById(data));
    //console.log(ev.target);

    if (ev.target.classList == "dragClass") {
        ev.target.classList.remove("dragClass");
        ev.target.classList.add("dragClassJugador");
        console.log(ev.target);
    }

}

//CREAMOS JUGADORES (2 equipos)
function createJugadores() {

    let arrayEquipos = document.getElementById("container").children;
    // console.log(arrayEquipos.length);
    //console.log(jugadores);
    for (let j = 0; j < arrayEquipos.length; j++) {

        let jugadores = arrayEquipos[j];
        for (let i = 1; i < 7; i++) {

            let divJugador = document.createElement("div");
            divJugador.classList.add("dragClass");
            divJugador.id = "drag" + cuentamierda + i;
            //divJugador.setAttribute('draggable', true);
            console.log(divJugador + [i]);
            //divJugador.addEventListener("dragstart", drag);
            divJugador.addEventListener("dragover", allowDrop);
            divJugador.addEventListener("drop", drop);
            jugadores.appendChild(divJugador);
            console.log(i);
        }
    }

    cuentamierda++;
}

//CREAMOS SUPLENTES
function createJugadoresSuplentes() {
    let jugadores = document.getElementById("div3");
    // console.log(jugadores);
    for (let i = 1; i < 13; i++) {
        let divJugador = document.createElement("div");
        divJugador.classList.add("dragClass1");
        divJugador.innerText = "Jugador" + i;
        divJugador.id = "drag" + i;
        divJugador.setAttribute('draggable', true);
        divJugador.addEventListener("dragstart", drag);
        divJugador.addEventListener("dragover", allowDrop);
        divJugador.addEventListener("drop", drop);
        jugadores.appendChild(divJugador);
    }

}
window.addEventListener("load", cargar);