/**
 * Exercise 9)
 * Write a program that will check if two strings are palindromes. A palindrome is a word that spells the same forward and backward.
 * Palindrome: a word, phrase, or sequence that reads the same backward as
 * forward, e.g., madam or nurses run.
 */

let str3 = "racecar";
let str4 = "Java";
let arrDer = [];
let arrRev = [];

function stringToArr(str1){
    arrDer = [...str1]
    return arrDer;
}
stringToArr(str3);
console.log(arrDer);

function arrayReverse(arr1){
    
}

for(let i = str3.length - 1; i >= 0; i--){
    arrRev.push(str3[i]);
}

function compare(arr1, arr2){
    if(arr1.length != arr2.length){
        return false;
    } else {
        let result = false;
        for(let i = 0; i < arr1.length; i++){
            if(arr1[i] !== arr2[i]){
                return false;
            } else {
                return true;
            }
        }
        return result;
    }
}

const result = compare(arrDer, arrRev);
if(result){
    console.log("Iguales!");
} else {
    console.log("Diferentes");
}
