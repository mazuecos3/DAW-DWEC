var argumento = prompt("Introduce un argumento");

var d = new Date();

if (d.IsDate ) {
    document.write("Este argumento es un objeto Date");
} else {
    document.write("Este argumento NO es un objeto Date");
}



function isDate (argumento) {
    return argumento instanceof Date;
    }