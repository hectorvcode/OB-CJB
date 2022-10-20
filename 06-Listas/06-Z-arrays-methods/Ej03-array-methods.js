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



//4) Make an array of strings of the names
function namesOnly(arr) {
  // your code here
}
console.log(
namesOnly([
    {
        name: "Angelina Jolie",
        age: 80,
    },
    {
        name: "Eric Jones",
        age: 2,
    },
    {
        name: "Paris Hilton",
        age: 5,
    },
    {
        name: "Kayne West",
        age: 16,
    },
    {
        name: "Bob Ziroll",
        age: 100,
    },
])
);
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
