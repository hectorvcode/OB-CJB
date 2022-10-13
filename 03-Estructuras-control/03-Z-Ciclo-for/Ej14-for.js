//  Exercise 5: Given a string change the every second letter to an uppercase ‘Z’. Assume there are no space.

let str1 = "javascript"; 
let arr1 = [];

for(let i = 0; i < str1.length; i++) {
    if(i % 2 === 0){
        arr1.push(str1[i] + "Z");
    }
}
arr1.toString();
let resultado = arr1.join('');


console.log(resultado);