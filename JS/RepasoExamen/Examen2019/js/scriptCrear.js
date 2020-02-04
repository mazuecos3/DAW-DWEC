function cogerDatos() {

}

function addEventListeners() {
    let contenedorForm = document.querySelectorAll("input");
    contenedorForm.forEach(caja => {
        caja.addEventListener("blur", controlarErrores);

    });
}

function controlarErrores() {
    let contenedorForm = document.querySelectorAll("input");
    let error = document.querySelectorAll(".error");
    let contador = 0;
    //console.log(contenedorForm);
    contenedorForm.forEach(caja => {

        if (caja.value == "") {
            console.log(caja);
            caja.parentNode.classList.add("bordeError");
            error[contador].style.visibility = "visible";
        } else {
            caja.parentNode.classList.remove("bordeError");
            error[contador].style.visibility = "hidden";
        }

        contador++;
    });
}

function crear() {
    console.log("Creando");
    let contenedor = document.getElementById("contenedorFichas");


    contenedor.innerHTML = "";

    let divPrueba = document.createElement("div");

    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let casa = document.getElementById("casa").value;
    let padres = document.getElementById("padres").value;
    let titulo = document.getElementById("titulo").value;
    let rutaImagen = document.getElementById("imagen").value;
    let imagen = document.createElement("img");


    imagen.src = rutaImagen;


    divPrueba.innerHTML = `<div class="datos">
        <div class="small cabecera">Nombre</div>
        <div class="medium cabecera">Apellidos</div>
        <div class="small dato">` + nombre + `</div>
        <div class="medium dato">` + apellidos + `</div>
        <div class="medium cabecera">Padres</div>
        <div class="small cabecera">Casa</div>
        <div class="medium dato">` + padres + `</div>
        <div class="small dato">` + casa + `</div>
        <div class="big cabecera">Título</div>
        <div class="big dato">` + titulo + `</div>
        </div>`
    divPrueba.appendChild(imagen);
    contenedor.appendChild(divPrueba);

}


function init() {
    console.log("Iniciando...");
    document.querySelector(".btn").addEventListener("click", crear);
    addEventListeners();
    cogerDatos();

}

window.onload = init;