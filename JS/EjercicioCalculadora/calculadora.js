var pantalla;

window.onload = function(){

    pantalla = document.getElementById("pantalla");
    var botones = document.getElementsByClassName("boton");

    for(let i = 0; i < botones.length; i++) {

        botones[i].addEventListener("click", mostrar);
        botones[0].addEventListener("click", borrar);
    }
}
 
function mostrar() {
  
    pantalla.value += this.innerText;
    
}

function borrar(){

    
    pantalla.value = "0";
}