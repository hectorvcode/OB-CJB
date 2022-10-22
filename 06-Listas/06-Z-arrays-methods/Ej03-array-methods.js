//1) Make an array of numbers that are doubles of the first array
function doubleNumbers(arr) {
  return arr.map((num) => num * 2);
}
console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]




//2) Take an array of numbers and make them strings
function stringItUp(arr) {
    return arr.map((num) => num.toString());
}
console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]



//3) Capitalize each of an array of names
console.log("Capitalize names");
function capitalizeNames(arr) {
    return arr.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]



// Write a function capitalize that takes a string and uses .map to return the same string in all caps. 
// ex. capitalize('whoop') // => 'WHOOP'
// ex. capitalize('oh hey gurl') // => "OH HEY GURL"
console.log("Capitalize function");
let capitalize = function(string){
    let answ = string.toUpperCase();
    console.log(answ);
}
capitalize('whoop');
capitalize('oh hey gurl');


// Each number in an array is doubled.
console.log("Each number doubled");
const numbers = [1, 2, 3, 4];
const doubles =  numbers.map(numb => numb * 2);
console.log(doubles);

// Odd numbers are "filtered" out, leaving only even numbers.
console.log("Filter odd numbers");
const numbers1 = [1, 2, 3, 4];
const oddFiltered = numbers1.filter(numb => numb !== 0);
console.log(oddFiltered);

// Get all the students whose grades are greater than or equal to 90
console.log("Filter grades");
const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
];
const gradesFiltered = students.filter(person => person.grade >= 90);
console.log(gradesFiltered);

// adds every number together in an array of numbers
console.log("Adds every number together in an array of numbers");
const numbers3 = [1, 2, 3, 4];
const sum = numbers.reduce(function(result, item){
    return result + item;
}, 0);
console.log(sum);

// Transform an array of strings into a single object that shows how many times each string appears in the array

let pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

let petCounts = pets.reduce(function(obj, pet){
    if(!obj[pet]){
        obj[pet] = 1;
    } else {
        obj[pet]++;
    }
    return obj;
}, {});
console.log(petCounts);

//forEach()
console.log("forEach method");
[1,2,3].forEach(function(item, index){
    console.log(item,index);
});