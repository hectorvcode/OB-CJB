//  Exercise 5: Given a string change the every second letter to an uppercase ‘Z’. Assume there are no space.

let str1 = "javascript"; 
let arr1 = [];

for(let i = 0; i < str1.length; i++) {
    if(i % 2 === 0){
        let respuesta = str1[i] + "Z";
        console.log(respuesta);
        arr1.push(respuesta);
    }
    console.log(arr1);
}