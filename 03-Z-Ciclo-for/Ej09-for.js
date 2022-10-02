// #6 — Print all the elements of the following array
let thisIsAnArray = ["element1", "element2", "element3", "element4"];

for(let i = 0; i < thisIsAnArray.length; i++){
    console.log(thisIsAnArray[i]);
}

// #7 — Calculate the sum of all the numbers in the following array
let numbersArray = [1,13,22,123,49];
let suma = 0;

for(let i = 0; i < numbersArray.length; i++){
    suma = suma + numbersArray[i];
}
console.log(suma);
