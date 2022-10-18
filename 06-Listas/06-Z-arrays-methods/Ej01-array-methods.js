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