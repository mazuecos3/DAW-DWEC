window.onload = init;
var video;

function init() {

    video = document.querySelector("video");
    console.log("Inicio");
    let controles = document.getElementById("controles").children;

    controles[0].addEventListener("click", mutear);
    controles[1].addEventListener("click", retrocederDiez);
    controles[2].addEventListener("click", playStop);
    controles[3].addEventListener("click", avanzarDiez);
    controles[4].addEventListener("click", reiniciar);
    controles[5].addEventListener("click", subirVolumen);
    controles[6].addEventListener("click", bajarVolumen);

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

    if (video.volume > 0.01 ) {
        video.volume -= 0.1;

    }
}