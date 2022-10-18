/**
multiply each element by 2 while not changing the original array
 */

console.log("Multiplying by");
let arrOne = [32, 45, 63, 36, 24, 11]

const multTwo = (num) => {
    return num * 2;
}

let arrTwo = arrOne.map(multTwo);
console.log(arrTwo);


/**
Suppose you have an array arrName and that array stores a 
bunch of numbers. Now, you would like to see what numbers 
can be divided by 3 and make a separate array from them.
 */
console.log("Divided by 3");
let arrNum = [15, 39, 20, 32, 30, 45, 22];
function divByThree(num){
    return num % 3 == 0;
}
let arrNewNum = arrNum.filter(divByThree);
console.log(arrNewNum);


/**
Sum of all elements of an array
 */
console.log("Now with reduce");
let arrNum1 = [15, 39, 20, 32, 30, 45, 22];
function sumOfElements(num, ind){
    return num + ind;
}
let arrNum2 = arrNum1.reduce(sumOfElements);
console.log(arrNum2);


/**
With map(), we can take all names in the array and append the "man" suffix to each and every one of them:
 */

let firstNames = ["super", "spider", "ant", "iron"]
let lastName = "man";

let fullNames = firstNames.map(firstName => firstName + lastName);
console.log(fullNames);


/**
We can do this by checking for the index of our hero and making sure we use the "woman" suffix 
for the first item on our array:
 */

let firstNames1 = ["wonder", "spider", "ant", "iron"];
let male = "man";
let female = "woman";

let fullNames1 = firstNames1.map(function(firstName, index){
    return (index === 0) ? firstName + female : firstName + male;
});
console.log(fullNames1);


/**
To find out the index position of each of our items within the array, we can do this:
 */

let fullNames2 = ["wonderwoman", "spiderman", "antman", "ironman"]

fullNames2.map(function(firstName, index) {
    console.log(`${firstName} is at ${index} position`)
});


/**
How to Multiply All Items in the Array by 2
 */
let numbers = [10, 20, 30, 40, 50];
let multiplier = 2;

let products =  numbers.map(number => number * multiplier);
console.log(products);


/**
How to Round to the Nearest Integer
 */
let numbers1 = [3.7, 4.9, 5.2, 3.5];
let rounded = numbers1.map(function(number){
    return Math.round(number);
});
console.log(rounded);


/**
How to Change Strings to Numbers
 */
let strings = ["10", "20", "30"];

let numbers2 = strings.map(function(string){
    return Number(string);
});
console.log(numbers2);


/**
How to Get the Avengers' Real Names
 */
let avengers = [
    {name: "steve rogers", heroName: "captain america"},
    {name: "tony stark", heroName: "iron man"},
    {name: "bruce banner", heroName: "the hulk"},
    {name: "peter parker", heroName: "spiderman"},
    {name: "tchalla", heroName: "black panther"}
]

let realNames = avengers.map(avenger => avenger.name);
console.log(realNames);


/**
How to Separate Out a Function
 */
let avengers2 = [
    {name: "steve rogers", heroName: "captain america"},
    {name: "tony stark", heroName: "iron man"},
    {name: "bruce banner", heroName: "the hulk"},
    {name: "peter parker", heroName: "spiderman"},
    {name: "tchalla", heroName: "black panther"}
]

let getName = avenger => avenger.name;
let realNames2 = avengers.map(getName);
console.log(realNames);