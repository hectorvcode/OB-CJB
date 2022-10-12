/**
Exercise 9)
Write a program that will check if two strings are palindromes. 
A palindrome is a word that spells the same forward and backward.
Palindrome: a word, phrase, or sequence that reads the same backward as
forward, e.g., madam or nurses run.

// Example output:
// string1 palindrome?: 
// Yes 
// string2 palindrome?: 
// No 
*/

let str3 = "racecar";
let str4 = "Java";
let arr1 = [];
let arr2 = [];
let resultado1 = [];

function esPalindrome(string1){
    let i = 0;
    while(i < string1.length){
        arr1.push(string1[i]);
        i++;
    }
    
    let j = arr1.length - 1;
    while(j >= 0){
        arr2.push(arr1[j]);
        j--;
    }
    
    let k = 0;
    while(k < arr1.length){
        if(arr1[k] === arr2[k]){
            resultado1.push(arr1[k]);
        }
        k++;
    }
    if(resultado1.length === arr1.length){
        console.log("Es palindrome");
    } else {
        console.log("No es palindrome");
    }
}

esPalindrome(str3);