let respuesta;



function cargar() {
    let resultado;
    let url = "ejemplo.json";
    var peticion = new XMLHttpRequest();
    peticion.onreadystatechange = function() {
        if (this.readyState == 4) {
            // console.log(JSON.parse(this.responseText).ip);
            respuesta = JSON.parse(this.responseText);
            // console.log(respuesta);
            resultado = respuesta.quiz.maths.q1.options;
            //  console.log(resultado);
            tratardatos(resultado);

        }
    };
    peticion.open("GET", url, true);
    peticion.send();
}

function tratardatos(resultado) {

    console.log(resultado);

    let container = document.getElementById("container");
    resultado.forEach(result => {
        //console.log(result.properties.angulo);

        console.log(result);


    });

}




function init() {

    cargar();

}
window.onload = init;