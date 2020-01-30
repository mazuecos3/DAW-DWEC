const fuentesUrl = "https://api.chess.com/pub/player/aberlanas/games";



function buscar() {
    // Obtenemos el JSON que esta definido.
    const fetchPromesa = fetch(fuentesUrl);
    let resultadoJSON;
    // Cuando se resuelva la promesa.
    fetchPromesa.then(response => {
        // la pasamos a JSON.
        return response.json();
        // Y entonces.

    }).then(respuesta => {
        // resultadoJSONs.
        resultadoJSON = respuesta.games;
        console.log(respuesta.games);
        resultadoJSON.forEach(resultado => {

            let urls = document.getElementById("urls");
            let rankeds = document.getElementById("ranked");
            let jugador1 = document.getElementById("jugador1");
            let jugador2 = document.getElementById("jugador2");
            let movminetos = document.getElementById("movimientos");

            //Sacamos los ids(urls)
            let texto = document.createElement("p");
            texto.innerText = resultado.url;
            urls.appendChild(texto);

            /*  //Movimientos
             let mov = document.createElement("p");
             mov.innerText = resultado.pgn;
             movimientos.appendChild(mov); */
            //RANKEDS
            let ranked = document.createElement("p");
            ranked.innerText = resultado.rated;
            rankeds.appendChild(ranked);
            //JUGADOR1
            let j1 = document.createElement("p");
            let j1Text = resultado.white;
            let FinalText1 = j1Text.slice(33, j1Text.lenght);
            j1.innerText = FinalText1;
            jugador1.appendChild(j1);
            //JUGADOR2
            let j2 = document.createElement("p");
            let j2Text = resultado.black;
            let FinalText2 = j2Text.slice(33, j2Text.lenght);
            j2.innerText = FinalText2;
            jugador2.appendChild(j2);

            /*   console.log(resultado.move_by);
              console.log(resultado.white);
              console.log(resultado.black); */

        });


    });

}

function crearContenido() {


}

//Funcion inicial
function init() {


    //buscar();

}
//Funcion inicial al cargar la pagina.
window.onload = init;