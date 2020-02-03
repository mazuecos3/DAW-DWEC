let respuesta;



function cargar() {
    let resultado;
    let url = "http://mapas.valencia.es/lanzadera/opendata/Tra-camaras/JSON";
    var peticion = new XMLHttpRequest();
    peticion.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // console.log(JSON.parse(this.responseText).ip);
            respuesta = JSON.parse(this.responseText);
            console.log(respuesta.features);
            resultado = respuesta.features;

            tratardatos(resultado);

        }
    };
    peticion.open("GET", url, true);
    peticion.send();
}

function tratardatos(resultado) {


    let container = document.getElementById("container");
    resultado.forEach(result => {
        //console.log(result.properties.angulo);
        let angulo = result.properties.angulo;
        let idCamara = result.properties.idcamara;
        let tipoCamara = result.properties.tipocamara;
        let descripcion = result.properties.descripcio;

        container.innerHTML +=
            `
        <div class="rojo">` + angulo + `</div>
        <div class="rojo">` + idCamara + `</div>
        <div class="rojo">` + tipoCamara + `</div>
        <div class="rojo">` + descripcion + `</div>
        `;

    });

}




function init() {

    cargar();

}
window.onload = init;