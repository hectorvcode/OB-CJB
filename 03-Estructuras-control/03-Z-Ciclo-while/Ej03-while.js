/**+
1. Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 down to -14 in descending order, one number per line.
    d. Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.

2. Initialize two variables to hold the string 'LaunchCode' and the array [1, 5, 'LC101', 'blue', 42], then construct for loops to accomplish the following tasks:
    a. Print each element of the array to a new line.
    b. Print each character of the string---in reverse order---to a new line.

// 3. Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
//     a. Define an empty evens array to hold the even numbers and an odds array for the odd numbers.
//     b. In the loop, determine if each number is even or odd, then put that number into evens or odds, as appropriate.
//     c. Print the arrays to confirm the results. Print evens first. Example: console.log(evens);
 */


// 1. Construct for loops that accomplish the following tasks:
console.log("a. Print the numbers 0 - 20, one number per line")
let i = 0;
while(i <= 20){
    console.log(i);
    i++
}


console.log("b. Print only the ODD values from 3 - 29, one number per line.");
let j= 3;
while(j <= 29){
    if(j % 2 !== 0){
        console.log(j);
    }
    j++;
}


console.log("c. Print the EVEN numbers 12 down to -14 in descending order, one number per line.");
let k = 12;
while(k >= -14){
    if(k % 2 === 0){
        console.log(k);
    }
    k--;
}


console.log("d. Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.");
let m = 50;
while(m >= 20){
    if(m % 3 === 0){
        console.log(m);
    }
    m--;
}


//2. Initialize two variables to hold the string 'LaunchCode' and the array [1, 5, 'LC101', 'blue', 42], 
//then construct for loops to accomplish the following tasks:
let string = "LaunchCode";
let arr = [1, 5, 'LC101', 'blue', 42];


console.log("a. Print each element of the array to a new line.");
let n = 0;
while(n < arr.length){
    console.log(arr[n]);;
    n++;
}


console.log("b. Print each character of the string---in reverse order---to a new line.");
let a = 0;
while(a < string.length){
    console.log(string[a]);
    a++;
}


// 3. Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:

console.log("a. Define an empty evens array to hold the even numbers and an odds array for the odd numbers.");
let arr1 = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let b = 0;
let c = 0;
let arrEven = [];
let arrOdd = [];
console.log(arrEven);
console.log(arrOdd);

console.log("b. In the loop, determine if each number is even or odd, then put that number into evens or odds, as appropriate.");
while(b < arr1.length){
    if(arr1[b] % 2 === 0){
        arrEven.push(arr1[b]);
    }
    b++;
}

while(c < arr1.length){
    if(arr1[c] % 2 !== 0){
        arrOdd.push(arr1[c]);
    }
    c++;
}


console.log("c. Print the arrays to confirm the results. Print evens first. Example: console.log(evens)");

console.log(arrEven);
console.log(arrOdd);