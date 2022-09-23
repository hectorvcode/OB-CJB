// Cómo trabajar con listas (arrays, arreglos, vectores)

let arrayConst = new Array(1,2,3);
console.log(arrayConst);


let array_a = [1, 2, 3, 4, 5, 6];

let var1 = 45;
let array = [1, "hola", false, {id: 5}, null, undefined, var1]
console.log(array);


// Acceder a los valores de un array mediane su posición

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);

// Introducir valores al array

// Poner valores al final - push() -> mutan el valor de nuestro array
array.push("final", 45, 100, false);
console.log(array);

// Poner valores al principio - unshift() -> mutan el valor de nuestro array
array.unshift("inicio", 87, 99);
console.log(array);

// Métodos para eliminar valores en nuestros arrays
const array2 = [1, 3, "hola", false]


// Eliminar valores al final - pop() -> mutan el valor de nuestro array
array2.pop();
console.log(array2);


// Eliminar valores al principio - shift() -> mutan el valor de nuestro array
array2.shift();
console.log(array2);


//Metodo para eliminar, modificar, o añadir valores en nuestro array
const array3 = [1,2,3,4,5,6]


// Eliminar valores .splice(indice, numeroValoresEliminar)
array3.splice(2, 0);
console.log(array3);


// Añadir valores .splice(indice, 0, valores)
array3.splice(5,0,"hora",99,999)
console.log(array3);


// Modificar valores .splice(indice, 1, valores)
array3.splice(4,1,"cinco")
console.log(array3);