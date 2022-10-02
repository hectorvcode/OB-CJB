/**
 * Reciba un numero ingresado por el usuario y dtermine si el número es un número primo
 * Un número primo es el que solo puede ser divisible por 1 y por él mismo
 * Un número primo debe ser un número natural mayor que 1
 */

 let numero = 12;
 esPrimo = true;
 
 if(numero <= 0){
     console.log("Digite un número entero positivo");
 } else if(numero === 1) {
     console.log("El 1 no es primo ni es compuesto, digite otro numero");
 }   else {
     for(let i = 2; i < numero; i++){
         if(numero % i === 0){
             esPrimo = false;
         }
     }
     
     if(esPrimo){
         console.log(`${numero} es un numero primo`);
     } else {
         console.log(`${numero}, no es un numero primo`);
     }
 }