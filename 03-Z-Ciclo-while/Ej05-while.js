/**
Exercise 1)
Get the sum of two arrays…actually the sum of all their elements.
P.S. Each array includes only integer numbers. Output is a number too
 */

console.log("The sum of all elements of two arrays");
let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];

let i = 0;
let sum = 0;
while(i < arr_1.length){
    sum = sum + arr_1[i];
    i++;
}
//console.log(sum);

let j = 0;
let sum1 = 0;
while(j < arr_2.length){
    sum1 = sum1 + arr_2[j];
    j++;
}
//console.log(sum1);

let resultado = sum + sum1;
console.log(resultado);


/**
Exercise 2)
Using a for loop print all even numbers up to and including n. Don’t include 0.
 */
console.log("Even numbers up to and including n");
let n = 22;
let a = 1;
while(a <= n){
    if(a % 2 === 0){
        console.log(a);
    }
    a++;
}


/**
 * 
 */