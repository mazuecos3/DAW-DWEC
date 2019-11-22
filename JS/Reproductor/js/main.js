window.onload = init;
var video;
var totalTime = 10;
var limpiarContador;


function init() {
    contador();
    iniciarVideos();
    controles();
    anuncio();

}
//Elegimos el video que queremos pponer de el menu de la derecha
//Y ponemos anuncio con el contaodr y ocultmaos los controles hasta que el anuncio se quite
function videoPrincipal() {

    insertarAnuncio();
    insertarContador();
    controles();

    var videoPrincipal = this.src;
    this.src = video.src;
    video.src = videoPrincipal;

}
// al hacer click muteamos y desmuteamos el video, lo establecemos a 
//el mínimo de nivel de audio y maximo en caso de que este muteado
function mutear() {
    if (video.volume != 0.0) {
        video.volume = 0.0;
    } else {
        video.volume = 1.0;
    }
}
// al hacer click retrodecmeos 10 segundos en el  vídeo
function retrocederDiez() {
    video.currentTime -= 10;
}
//al hacer click una vez si el vidoe esta parado, comenzara a funcionar 
//y si esta funcionando y le damos se va a parar.
function playStop() {
    if (video.paused) {
        video.play();

    } else {
        video.pause();
    }
}
// al hacer click avanzamos 10 segundos en el vídeo
function avanzarDiez() {
    video.currentTime += 10;
}
// al hacer click reiniciamos el video, lo que hacemos es establecer el 
//timepo de video en 0 es decir, al principio y lo volvemos a lanzar.
function reiniciar() {
    video.currentTime = 0;
    video.play();
}
//al hacer click que suba  el volumen en 0.2 entre 0.0 --> "minimo" y 1.0 --->"maximo"
function subirVolumen() {
    console.log(video.volume);
    if (video.volume < 1) {
        video.volume += 0.2;
    }

}

//al hacer click que baje el volumen en 0.2 entre 0.01(porque si pongo 0.0 peta) --> "minimo" y 1.0 --->"maximo"
function bajarVolumen() {
    console.log(video.volume);

    if (video.volume > 0.01) {
        video.volume -= 0.1;

    }
}

//hacemos el anuncio visible
function insertarAnuncio() {

    let publicidad = document.getElementById("publi");
    publicidad.style.visibility = "visible";
}
//ocultamos el anuncio
function quitarAnuncio() {
    //ocultamos la "X" de cerrar ventana
    let quitarAnuncioX = document.getElementById("quitarAnuncio");
    quitarAnuncioX.style.visibility = "hidden";
    //ocultamos div de la publicidad
    let publicidad = document.getElementById("publi");
    publicidad.style.visibility = "hidden";
    //al quitar el anuncio, que el video se ejecute
    if (publicidad.style.visibility = "hidden") {
        video.play();
    }
    //cuando se quite el anuncio aparece menu controles
    let divControles = document.getElementById("controles");
    divControles.style.visibility = "visible";
}
//insertamos contador de tiempo, primero limpiamos el timeout para que vuelva a su tiempo
// y lo igualamos a 10 segundos y llamamos a la función que realiza el timeout
function insertarContador() {
    clearTimeout(limpiarContador);
    totalTime = 10;
    contador();

}

//Aqui hacmeos la cuenta atrás de 10 a 0, cuando llegue a 0 ocultamos el contador 
//y habilitamos el boton de cerrar ventana "X"
function contador() {
    let cuentaAtras = document.getElementById("quitarAnuncio");
    document.getElementById('number').innerHTML = totalTime;
    if (totalTime == 0) {
        //habilitamos la X para poder cerrar anuncio depsues de 10s
        cuentaAtras.style.visibility = "visible";
        //deshabilitar contador si es igual a 0
        document.getElementById('number').innerHTML = "";

    } else {
        totalTime -= 1;
        limpiarContador = setTimeout("contador()", 1000);
    }
}

function controles() {
    //Hasta que no se quite el anuncio no aparecen controles
    let divControles = document.getElementById("controles");
    divControles.style.visibility = "hidden";
    //Funcionalidad de cada boton
    let controles = document.getElementById("controles").children;
    controles[0].addEventListener("click", mutear);
    controles[1].addEventListener("click", retrocederDiez);
    controles[2].addEventListener("click", playStop);
    controles[3].addEventListener("click", avanzarDiez);
    controles[4].addEventListener("click", reiniciar);
    controles[5].addEventListener("click", subirVolumen);
    controles[6].addEventListener("click", bajarVolumen);
}
//asignamos a cada video la funcion que al hacer click se ponga como video principal
function iniciarVideos() {
    video = document.querySelector("video");
    let videos = document.getElementById("videos").children;
    videos[0].addEventListener("click", videoPrincipal);
    videos[1].addEventListener("click", videoPrincipal);
    videos[2].addEventListener("click", videoPrincipal);
    videos[3].addEventListener("click", videoPrincipal);
}
//funcion para quitar el anuncio
function anuncio() {
    let botonQuitarAnuncio = document.getElementById("quitarAnuncio");
    botonQuitarAnuncio.addEventListener("click", quitarAnuncio);

}