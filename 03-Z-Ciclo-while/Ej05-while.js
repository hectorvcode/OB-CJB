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
Exercise 4)
Given two arrays of integers. Add up each element in the same position and
create a new array containing the sum of each pair. Assume both arrays are of the same length.
 */

console.log("Ordered sum of two arrays");
let arr_3 = [4, 6, 7];
let arr_4 = [8, 1, 9];

let x = 0;
let newArr = [];

while(x < arr_3.length){
    newArr.push(arr_3[x] + arr_4[x])
    x++;
}

console.log(newArr);


/**
Exercise 5)
Given a string change the every second letter to an uppercase ‘Z’. Assume
there are no space.
 */

console.log("Change the second letter");
let str1 = "javascript";

let m = 0;
while(m < str1.length){
    if(m % 2 !== 0){
        console.log("Z");
    } else {
        console.log(str1[m]);
    }
    m++;
}

// Example output: 
// jZvZsZrZpZ OR each letter on a new line
// HINT: You can use  if((i+1) % 2 == 0) to check for even indexes 