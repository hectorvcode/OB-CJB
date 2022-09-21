// Bucle For

/* 
* i = i + 1
* i += 1
* i++
*/

for(let i = 0; i < 10; i++) {
    console.log(i);
}

// Para recorrer un arreglo
let lista = [1,4,6,2,3,7,10,12]
for(let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}


// Estructura for...of
for(let valor of lista) {
    console.log(valor);
}

// Estructura forEach
lista.forEach(valor => {
    console.log(valor);
})

// Estructura for...in
let persona = {
    nombre: "Gloria",
    apellido: "Villa",
    edad: 34,
    isDeveloper: true
}

console.log(persona.nombre);

let prop = "edad";
console.log(persona[prop]);

for(let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}