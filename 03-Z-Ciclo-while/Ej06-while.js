/**
Exercise 6)
Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
 */

let str2 = "don’t know wh";
let i = 0;
let respuesta = [];

while(i < str2.length){
    if(str2[i] === "y"){
        respuesta.push(str2[i]);
    } 
    i++;
}

if(respuesta.length !== 0){
    console.log("yes");
} else {
    console.log("no");
}