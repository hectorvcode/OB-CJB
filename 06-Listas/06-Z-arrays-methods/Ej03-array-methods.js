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

