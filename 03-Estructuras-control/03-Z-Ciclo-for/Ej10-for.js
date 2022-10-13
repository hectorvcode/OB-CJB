// Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.

let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; 
let suma = 0;
let suma2 = 0;

function sumaElementosArray(primerArray, segundoArray) {
    for(let i = 0; i < primerArray.length; i++){
        suma = suma + primerArray[i];
    }
    //console.log(suma);
    for(let i = 0; i < segundoArray.length; i++){
        suma2 = suma2 + segundoArray[i];
    }
    //console.log(suma2);
    return suma + suma2;
}

console.log(sumaElementosArray(arr_1, arr_2));