/**
 * Cualquier tarea que implique hacer algo repetitivo se puede realizar con un blucle
 * La acción de repetición la verás en programación como iteración
 * 
 * For es una estructura de control de flujo.
 * Es un tipo de estructura para crear bucles con los que se ejecuta un bloque de código 
 * x numero de veces
 */


// Pseudocódigo
/**
 * for(inicializador; condicionSalida; expresionFinal) {
 *      bloque de código a ejecutar
 * }
 */

for(let i = 1; i <= 10; i++){
    console.log(i);
}

// Ejercicio 1: imprima la suma de todos los numeros impares entre 1 y 100
let suma = 0;
for(let i = 1; i <= 100; i++){
    //console.log(i);
    if(i % 2 !== 0){
        //console.log(i);
        suma =  suma + i;
        //console.log(suma);
    }
}
console.log(suma);
