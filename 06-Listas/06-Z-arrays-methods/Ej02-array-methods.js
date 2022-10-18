/**
Square the value of every element in the array. Presume that you will only get numbers in the input array.
Respuesta: [ 1, 4, 9, 16, 25]
 */

const input = [ 1, 2, 3, 4, 5 ];
const result =  input.map(element => Math.pow(element,2));
console.log(result);

