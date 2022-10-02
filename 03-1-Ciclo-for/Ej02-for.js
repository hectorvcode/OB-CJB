// Ejercicio 02 Imprime el numero y la suma de todos los multiplos de 7 entre 1 y 100
let suma1 = 0;
for(let i = 1; i <= 100; i++){
    if(i % 7 === 0){
        suma1 = suma1 + i;
    }
}
console.log(suma1);