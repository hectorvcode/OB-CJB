// Funciones tipo flecha

const array =  [1,5,6,2,7,12,8,92]

/* const array2 = array.map(function(valor){
    return valor * 2;
}); */

const array2 = array.map((valor) => valor * 2);
console.log(array2);

// Definir funciones y variables al comienzo de JavaScript
const dobleDelValor = valor => valor * 2
console.log(dobleDelValor(6));

const array3 = array.map(dobleDelValor);
console.log(array3);