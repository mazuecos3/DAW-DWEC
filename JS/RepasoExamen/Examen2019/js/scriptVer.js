let gotUrl = "./got.json";
let personajes = [];



function cargar() {
    var peticion = new XMLHttpRequest();
    peticion.onreadystatechange = function() {
        if (this.readyState == 4) {
            // console.log(JSON.parse(this.responseText).ip);
            personajes = JSON.parse(this.responseText);
            //console.log(personajes);
            mostarPersonajes(personajes);
        }
    };
    peticion.open("GET", gotUrl, true);
    peticion.send();



}

function mostarPersonajes(personajes) {
    console.log(personajes);
    let contenedor = document.getElementById("contenedorFichas");
    personajes.got.forEach(personaje => {
        console.log(personaje);

        let divPrueba = document.createElement("div");
        let imagen = document.createElement("img");

        imagen.src = personaje.imagen;
        divPrueba.innerHTML = `<div class="datos">
        <div class="small cabecera">Nombre</div>
        <div class="medium cabecera">Apellidos</div>
        <div class="small dato">` + personaje.nombre + `</div>
        <div class="medium dato">` + personaje.apellidos + `</div>
        <div class="medium cabecera">Padres</div>
        <div class="small cabecera">Casa</div>
        <div class="medium dato">` + personaje.padres + `</div>
        <div class="small dato">` + personaje.familia + `</div>
        <div class="big cabecera">Título</div>
        <div class="big dato">` + personaje.titulo + `</div>
        </div>`
        divPrueba.appendChild(imagen);
        contenedor.appendChild(divPrueba);
    });

}

function init() {
    console.log("Iniciando...");
    cargar();



}

window.onload = init;