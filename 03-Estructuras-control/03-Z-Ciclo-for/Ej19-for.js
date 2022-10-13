/**
 * Exercise 10)
This is a code wars kata. click here to train on “Grasshopper – Summation” on
code wars. Write a program that finds the summation of every number from 1 to num. 
The number will always be a positive integer greater than 0.
*/


function suma(n){

    if(isNaN(n)){
        let mensaje = "Your input should be positive integer greater than 0"
        return mensaje
    }else if(n <= 0){
        let mensaje = "The number should be positive integer greater than 0"
        return mensaje
    } else if(!Number.isInteger(n)){
        let mensaje = "The number should be greater than 0"
        return mensaje
    } else {
        let total = 0;
        for(let i = 1; i <= n; i++){
            console.log(i);
            total += i;
        }
        return total;
    }
}

console.log(suma(2));
