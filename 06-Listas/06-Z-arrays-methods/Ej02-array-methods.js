/**
Array squared
Square the value of every element in the array. Presume that you will only get numbers in the input array.

Helpful links
Array.prototype.map()
Math.pow()

Answ: [ 1, 4, 9, 16, 25]
 */
console.log("Exercise 01");
const input1 = [ 1, 2, 3, 4, 5 ];
const result =  input1.map(element => Math.pow(element,2));
console.log(result);


/**
Sum of every positive element
If the given input is an array of numbers, return the sum of all the positives ones. 
If the array is empty or there aren't any positive numbers, return 0.

Helpful links
Array.prototype.filter()
Array.prototype.reduce()

Answ: 42
 */
console.log("Sum of Positive Numbers");
const input2 = [ 1, -4, 12, 0, -3, 29, -150];
const positiveNum = input2.filter(num => num >= 0);
const sumAllNums = positiveNum.reduce((previousVal, currentVal) => previousVal + currentVal, 0);
console.log(sumAllNums);



