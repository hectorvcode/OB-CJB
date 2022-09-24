// Iterar los valores de una lista
const array = ["hola", 2, 5, 90, false, undefined];

// Forma antigua
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

// Forma ES6 (más eficiente)
let suma = 0;
const arrayNums = [3, 6, 2, 77, 2, 3, 93, 19];
array.forEach(valor => {
    console.log(valor);
});

arrayNums.forEach(valor => {
    suma += valor;
    console.log(valor);
});
console.log(suma);

// Búsqueda de un valor dentro de una lista
// Encontrar el elemento 90 en el array inicial

const variable = array.find(valor => {
    if(valor === 90){
        return true
    }
});

console.log(variable);

const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucia", edad: 3 },
    { nombre: "Amaia", edad: 29 },
]

// Quiero buscar la edad de Miguel

/**
 *  const objeto = listaObjetos.find(o => {
 *       if(o.nombre === "Miguel"){
 *           return true
 *       }
 *  });
 */

const objeto = listaObjetos.find(o => o.nombre === "Miguel");
console.log(objeto.edad);

const { edad } = listaObjetos.find(o => o.nombre === "Amaia");
console.log(edad);