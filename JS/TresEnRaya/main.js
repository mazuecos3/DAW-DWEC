let turno = true;


mapa = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

window.onload = function() {
    listo();
};

function listo() {
    dibujarMapa();
    ponerFicha();
}
//PINTAMOS EL MAPA DE EL TRES EN RAYA  UN 3 x 3
function dibujarMapa() {
   
    document.querySelector("#mapa").innerHTML = "";
    console.log(document.querySelector("#mapa"));
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let newDiv = document.createElement("div");
            //asignamos atributos fila y columna para i y j
            newDiv.dataset.fila = i;
            newDiv.dataset.columna = j;

            if (mapa[i][j] == 0) {
               
                newDiv.classList.add("cuadrado");              
                mapa[i][j] = newDiv;
            }
            document.querySelector("#mapa").appendChild(newDiv);
        }
    }

}

function ponerFicha() {
  
    let teclas = document.querySelectorAll(".cuadrado");
    for (let i = 0; i < teclas.length; i++) { 
      teclas[i].addEventListener("click",comprobarTurno);
    
     // console.log(teclas[i]);
  
    }
  
  
}

function comprobarTurno() {
 
    if (turno) {
      
        if (this.classList.contains("cuadrado")) {
            this.classList.replace("cuadrado","j1");
       
        } else if(this.classList.contains("j2")){
            this.classList.replace("j2","j1");
        }
       
        turno= false;
        
    } else{
        
        if (this.classList.contains("cuadrado")) {
            this.classList.replace("cuadrado","j2");
       
        } else if(this.classList.contains("j1")){
            this.classList.replace("j1","j2");
        }
        turno= true;
    }

       comprobarFilas();
}
function comprobarFilas() {
    
    let teclas = document.querySelectorAll(".cuadrado");
   //console.log(teclas);
      if (teclas[0].classList.contains("j1") ) {
          console.log("prueba");
      }
        
   
   
}