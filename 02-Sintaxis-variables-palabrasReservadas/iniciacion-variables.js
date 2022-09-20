var variable;
let variableLetInit;
/* const constante; */

const constante = "Hola soy una constante";

console.log(constante);

var a = 1;
console.log(a);

a = 4;
console.log(a);


//no se puede reasignar valores por lo que muestra error
// constante = "Adios"; 

//con let si se puede reasignar un valor a una variable
let b = 3;
console.log(b);

b = 5;
console.log(b);

// var afecta todo el código, mientras que let solo afecta el bloque de código donde vive
var variable = "Hola, soy una variable var"

for(var i = 0; i < 3; i++){
    var variable = "Soy la segunda variable"
}

console.log(variable);

//ahora con let
let variableLet = "Hola, soy una variable LET"

for(var i = 0; i < 3; i++){
    let variableLet = "Soy la segunda variable LET"
}

console.log(variableLet);

//Para identificar el tipo de dato de la variable que pasemos
console.log(typeof variableLet);

var num = 4;
num = "hola";
console.log(typeof num);

let hola;
console.log(hola);