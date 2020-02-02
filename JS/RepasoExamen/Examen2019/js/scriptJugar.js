let gotUrl = "./got.json";
let personajes = [];
let aciertos = 0;
let fallos = 0;



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
    let contenedor = document.getElementById("contenedorFotos");

    personajes.got.forEach(personaje => {

        let divPrueba = document.createElement("div");
        let imagen = document.createElement("img");


        divPrueba.innerHTML = `<div class="col-xs-6 col-sm-3 contenedorJuego">
        <img class="img-thumbnail" id="imagen7" src="` + personaje.imagen + `">
        <select class="form-control">
        <option>Selecciona familia...</option>
        <option value="Casa Lannister">Casa Lannister</option>
        <option value="Casa Targaryen">Casa Targaryen</option>
        <option value="Casa Stark">Casa Stark</option>
        <option value="Casa Bolton">Casa Bolton</option>
        <option value="Casa Tyrell">Casa Tyrell</option>
        <option value="Casa Baratheon">Casa Baratheon</option>
        <option value="Casa Clegane">Casa Clegane</option>
        </select>
        </div>`

        contenedor.appendChild(divPrueba);
    });


}

function comprobar() {
    let btnComprobar = document.getElementById("comprobar");
    let select = document.querySelectorAll("select");
    let personas = [
        "Casa Lannister",
        "Casa Targaryen",
        "Casa Stark",
        "Casa Bolton",
        "Casa Stark",
        "Casa Tyrell",
        "Casa Baratheon",
        "Casa Clegane"
    ];

    for (let i = 0; i < select.length; i++) {

        if (select[i].value == personas[i]) {
            aciertos++;
        }
    }
    console.log("Acertados: " + aciertos + "/8");
    aciertos = 0;
}

function init() {
    console.log("Iniciando...");
    document.getElementById("comprobar").addEventListener("click", comprobar);
    cargar();


}

window.onload = init;