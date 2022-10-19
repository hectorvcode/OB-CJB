/**
Array squared
Square the value of every element in the array. Presume that you will only get numbers in the input array.

Helpful links
Array.prototype.map()
Math.pow()

Answ: [ 1, 4, 9, 16, 25]
 */
console.log("Exercise 01");
const input1 = [1, 2, 3, 4, 5];
const result = input1.map((element) => Math.pow(element, 2));
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
const input2 = [1, -4, 12, 0, -3, 29, -150];
const positiveNum = input2.filter((num) => num >= 0);
const sumAllNums = positiveNum.reduce(
  (previousVal, currentVal) => previousVal + currentVal,
  0
);
console.log(sumAllNums);

/**
Calculate median and mean
Calculate the mean and median values of the number elements from the input array.

Helpful links
Array.prototype.reduce()
Array.prototype.sort()
Math.abs()

ans: { mean: 38.5, median: 32 }
 */
console.log("Median and mean");
const input3 = [12, 46, 32, 64];
let sortedInput = input3.sort((a, b) => a - b);
let median =
  (sortedInput[input3.length / 2] + sortedInput[input3.length / 2 - 1]) / 2;
let mean = input3.reduce((prev3, curr3) => prev3 + curr3, 0) / input3.length;
console.log(`{mean: ${mean}, median: ${median}}`);

/**
Get name initials
The given input is a string of multiple words with a single space between each of them. 
Abbreviate the name and return the name initials.

Helpful links
Array.prototype.map()
String.prototype.split()
String.prototype.join()

ans: 'GRRM'
 */

const input4 = "George Raymond Richard Martin";

const splittedInput = input4.split(" ");
let arr1 = splittedInput.map((element) => element[0]);
let arr2 = arr1.join("");
console.log(arr2);

/**
Age difference from the youngest and oldest
Find the difference in age between the oldest and youngest family members, 
and return their respective ages and the age difference.

Helpful links
Array.prototype.map()
Math.min()
Math.max()

[13, 67, 54]
 */

const input5 = [
    { name: "John", age: 13 },
    { name: "Mark", age: 56 },
    { name: "Rachel", age: 45 },
    { name: "Nate", age: 67 },
    { name: "Jeniffer", age: 65 },
];

const ages = input5.map(person => person.age);
const result5 = [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)];

console.log(result5);