// Comparaciones

// Comparación Igualdad

if(5 == 5){
    console.log("5 es igual a 5");
}

if(5 === 5){
    console.log("5 es muy igual a 5");
}

let a = 5;
console.log(typeof a);
console.log(a);
let b = "5";
console.log(typeof b);
console.log(b);

// == solo compara el valor

if(a == b){
    console.log("a es igual a b - Débil");
}

// === compara el valor y el tipo

if(a === b){
    console.log("a es igual a b - Fuerte");
}


// Comparación Desigualdad

let c = 4;
let d = "4";

if(c != d){
    console.log("c es diferente a d - Débil");
}

if(c !== d){
    console.log("c es diferente a d - Fuerte");
}

// Comparación mayor que - menor que

let max = 10;
let min = 5;

if(max > min){
    console.log("max es mayor que min");
}

if(max >= min){
    console.log("max es mayor que min");
}

if(min < max) {
    console.log("min es mayor que max");
}

if(100 <= max) {
    console.log("min es menor o igual que max");
}