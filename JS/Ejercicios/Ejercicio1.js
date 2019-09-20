var tamaño = prompt("Introduce el numero de elementos del array");

var array = [];

var maximo = Number.MIN_VALUE;

for (let i = 0; i < tamaño; i++) {

    array.push( prompt("Introduce un elemento en la pos " + i) );

    maximo = Math.max(array[i], maximo);

}

 

document.write("El numero mas alto es: " + maximo );
